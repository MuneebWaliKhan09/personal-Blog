import ConnectDB from "@/db/db";
import Blog from "@/model/Model";
import { NextResponse } from "next/server";



export async function POST() {
    const { title, category, tagLine, images, desc } = await req.json();

    try {
        await ConnectDB()
        const blog = await Blog.create({
            title,
            category,
            tagLine,
            images,
            desc: {
                start,
                mid,
                end
            }
        })
        if(blog){
            return NextResponse.json({
                success:true,
                blog,
                msg: "blog created successfully !"
            })
        }

    } catch (error) {
        NextResponse.json({
            err:  error,
        })
    }
}