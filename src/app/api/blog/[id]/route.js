import ConnectDB from "@/db/db";
import Blog from "@/model/Model";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { Readable } from "stream";
import winston from "winston";

// Create a winston logger instance
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    // Add other transports if needed (e.g., file transport)
  ],
});

export const GET = async (req, params) => {
  try {
    await ConnectDB();
    const { id } = params.params;
    const blog = await Blog.findById(id);

    if (!blog)
      return NextResponse.json({ err: "blog Not Found" }, { status: 404 });

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ err: "Internal Server Error" }, { status: 500 });
  }
};

export const PUT = async (req, params) => {
  try {
    await ConnectDB();
    const data = await req.formData();
    const file = data.get("images");
    const title = data.get("title");
    const category = data.get("category");
    const tagLine = data.get("tagLine");
    const start = data.get("start");
    const mid = data.get("mid");
    const end = data.get("end");
    const { id } = params.params;

    cloudinary.config({
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.api_secret,
    });

    if (!file) {
      const blog = await Blog.findById(id);

      req.images = {
        public_id: blog.images[0].public_id,
        url: blog.images[0].url,
      };

      const blogs = await Blog.findByIdAndUpdate(
        { _id: id },
        {
          title,
          category,
          tagLine,
          desc: {
            start,
            mid,
            end,
          }
        },
        {
          new: true,
        }
      );

      if (blogs) {
        return NextResponse.json({
          success: true,
          msg: "blog Updated Successfully 🤩",
        });
      } else {
        return NextResponse.json({
          success: false,
          err: "blog Updation Failed !",
        });
      }
    } else {
      const blogs = await Blog.findById(id);
      const imageId = blogs.images[0].public_id;

      if (imageId) {
        await cloudinary.v2.uploader.destroy(imageId);
      }

      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Use the uploads function from Cloudinary
      const myCloud = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: "avatars", width: 400, crop: "scale" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        const bufferStream = new Readable();
        bufferStream.push(buffer);
        bufferStream.push(null);

        bufferStream.pipe(uploadStream);
      });

      const blog = await Blog.findByIdAndUpdate(
        { _id: id },
        {
          title,
          category,
          tagLine,
          desc: {
            start,
            mid,
            end,
          },
          images: {
            public_id: myCloud.public_id,
            url: myCloud.url,
          },
        },
        { new: true }
      );
      if (blog) {
        console.log(blog);
        return NextResponse.json({
          success: true,
          blog,
          msg: "blog created successfully !",
        });
      }
    }
  } catch (error) {
    logger.error(`Error in DELETE function: ${error}`);
    logger.error(error.stack);
    return NextResponse.json({
      err: error,
    });
  }
};

export const DELETE = async (req, params) => {
  try {
    await ConnectDB();
    const { id } = params.params;
    const blog = await Blog.findById(id);

    cloudinary.config({
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.api_secret,
    });

    if (!blog)
      return NextResponse.json({ err: "blog Not Found" }, { status: 404 });

    const blogs = await Blog.findById(id);
    const imageId = blogs.images[0].public_id;

    if (imageId) {
      await cloudinary.v2.uploader.destroy(imageId);
    }

    const deletedBlog = await Blog.findByIdAndDelete({ _id: id });

    if (deletedBlog) {
      return NextResponse.json(
        {
          success: true,
          msg: "blog Deleted successfully !",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    logger.error(`Error in DELETE function: ${error}`);
    logger.error(error.stack);

    return NextResponse.json(
      { err: "error while deleting the blog" },
      { status: 500 }
    );
  }
};
