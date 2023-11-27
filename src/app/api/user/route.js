import User from "@/model/UserModal";
import ConnectDB from "@/db/db";
import { NextResponse } from "next/server";


// getall users

export const GET = async (req, res) => {
    await ConnectDB()

    const users = await User.find();
    if(users){
        return NextResponse.json({
            status: true,
            users
        })
    }
    else{
        return NextResponse.json({
            status: false,
            message: "No users found"
        })
    }
}

