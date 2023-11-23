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




// // Function to insert sample data
// export const insertSampleData = async () => {
//     try {

//         await ConnectDB();

//         const sampleData = [
//             {
//                 title: "Dramatic Tales Unveiled",
//                 category: "Drama",
//                 tagLine: "Exploring the nuances of dramatic storytelling.",
//                 images: [
//                   {
//                     public_url: "https://source.unsplash.com/featured/?dramatic-scenes",
//                     url: "https://source.unsplash.com/featured/?dramatic-scenes"
//                   },
//                   {
//                     public_url: "https://source.unsplash.com/featured/?theater-arts",
//                     url: "https://source.unsplash.com/featured/?theater-arts"
//                   }
//                 ],
//                 desc: [
//                   {
//                     start: "Delve into the world of theatrical arts and dramatic storytelling.",
//                     mid: "From stage performances to captivating narratives, this blog unravels the essence of drama.",
//                     end: "Join us in appreciating the art of storytelling and the emotional depth it brings to the stage."
//                   }
//                 ]
//               },
//             // Add more sample data objects as needed
//         ];

//         const data = await Blog.create(sampleData)
//         if (data) {
//             console.log("Sample data inserted successfully.");
//         }
//         else {
//             console.log("error occured");
//         }
//     } catch (error) {
//         console.error("Error inserting sample data:", error);
//     }
// };

// insertSampleData();