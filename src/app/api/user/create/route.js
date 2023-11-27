import User from "@/model/UserModal";
import ConnectDB from "@/db/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import cloudinary from "cloudinary"
import { Readable } from 'stream';

export const POST = async (req) => {

    await ConnectDB();

    const data = await req.formData();
    const file = data.get("avatar")
    const username = data.get("username")
    const email = data.get("email")
    const password = data.get("password")


    if (!file) {
        return NextResponse.json({ message: "Please select a file", success: false })
    }

    const user = await User.findOne({ email: email });
    if (user) {
        return NextResponse.json({ message: "User already exists" });
    }

    cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
    });

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // Use the uploads function from Cloudinary
    const myCloud = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream({ folder: "avatars", width: 150, crop: "scale" }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });

        const bufferStream = new Readable();
        bufferStream.push(buffer);
        bufferStream.push(null);

        bufferStream.pipe(uploadStream);
    });


    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        username,
        email,
        password: hash,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.url
        }
    });

    if (newUser) {
        return NextResponse.json({ message: "User created successfully" });
    } else {
        return NextResponse.json({ message: "User creation failed" });
    }
}
