const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, "please add username"],
    },

    password: {
        type: String,
        required: [true, "please add password"]
    },

    role: {
        type: String,
        default: "user"
    },

    createdAt:{
        type: Date,
        default: Date.now()
    }
})




const User = mongoose.models.userblog || mongoose.model("userblog", UserSchema)


export default User