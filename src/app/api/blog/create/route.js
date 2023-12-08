import ConnectDB from "@/db/db";
import Blog from "@/model/Model";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary"
import { Readable } from 'stream';


export const POST = async (req)=>{


    try {
        await ConnectDB()
            
        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_secret,
        });
    
        const data = await req.formData();
        const file = data.get("images")
        const title = data.get("title") 
        const category = data.get("category")
        const tagLine = data.get("tagLine")
        const start = data.get("start")
        const mid = data.get("mid")
        const end = data.get("end")
    
        if (!file) {
            return NextResponse.json({ message: "Please select a file", success: false })
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
    
        // Use the uploads function from Cloudinary
        const myCloud = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.v2.uploader.upload_stream({ folder: "avatars", width: 400, crop: "scale" }, (error, result) => {
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



        const blog = await Blog.create({
            title,
            category,
            tagLine,
            desc: {
                start,
                mid,
                end
            },
            images: {
                public_id: myCloud.public_id,
                url: myCloud.url
            }
        })
        if(blog){
        console.log(blog);
            return NextResponse.json({
                success:true,
                blog,
                msg: "blog created successfully !"
            })
        }

    } catch (error) {
    console.log(error);
        return NextResponse.json({
            err:  error,
        })
    }

}


