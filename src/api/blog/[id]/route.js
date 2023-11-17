import ConnectDB from "@/db/db";
import Blog from "@/model/Model";
import { NextResponse } from "next/server";



export const GET = async (req, params) => {
    try {
        await ConnectDB()
        const { id } = params.params
        const blog = await Blog.findById(id)

        if (!blog) return NextResponse.json({ err: "blog Not Found" }, { status: 404 });

        return NextResponse.json(blog, { status: 200 })

    } catch (error) {
        return NextResponse.json({ err: 'Internal Server Error' }, { status: 500 })
    }
}






export const PUT = async (req, params) => {
    try {
        await ConnectDB()
        const { id } = params.params
        const blog = await Blog.findById(id)
        if (!blog) return NextResponse.json({ err: "blog Not Found" }, { status: 404 });

        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, category, tagLine, images, desc }, { new: true });

        if (blog) {
            return NextResponse.json({
                success: true,
                updatedBlog,
                msg: "blog created successfully !"
            }, { status: 200 })
        }

    } catch (error) {
        return NextResponse.json({ err: 'error while updating the blog' }, { status: 500 })
    }
}






export const DELETE = async (req, params) => {
    try {
        await ConnectDB()
        const { id } = params.params
        const blog = await Blog.findById(id)
        if (!blog) return NextResponse.json({ err: "blog Not Found" }, { status: 404 });

        const deletedBlog = await Blog.findByIdAndDelete({ _id: id });

        if (deletedBlog) {
            return NextResponse.json({
                success: true,
                msg: "blog Deleted successfully !"
            }, { status: 200 })
        }

    } catch (error) {
        return NextResponse.json({ err: 'error while deleting the blog' }, { status: 500 })
    }
}

