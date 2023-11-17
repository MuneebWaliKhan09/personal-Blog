const mongoose = require("mongoose")


const blogSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, "please add blog title"],
    },

    category: {
        type: String,
        required: [true, "please add category"]
    },

    tagLine: {
        type: String,
        required: [true, "please add tagline"]
    },

    images: [{

        public_url: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    }],

    desc: [{

        start: {
            type: String,
            required: [true, "please write start of blog"]
        },
        mid: {
            type: String,
            required: [true, "please write mid of blog"]
        },
        end: {
            type: String,
            required: [true, "please write end of blog"]
        },
    }],

    createdAt:{
        type: Date,
        default: Date.now()
    }
})




const Blog = mongoose.models.personalblog || mongoose.model("personalblog", blogSchema)


export default Blog