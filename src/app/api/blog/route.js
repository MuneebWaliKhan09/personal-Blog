import ConnectDB from "@/db/db";
import Blog from "@/model/Model";
import { NextResponse } from "next/server";



export async function GET() {
    await ConnectDB()
    const data = await Blog.find();

    if (data) {
        return NextResponse.json({
            success: true,
            data
        }, { status: 202 })

    } else {
        return NextResponse.json({
            success: false,
            err: "blogs not found"
        }, { status: 404 })
    }
}




