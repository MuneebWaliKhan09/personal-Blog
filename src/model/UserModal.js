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

    createdAt:{
        type: Date,
        default: Date.now()
    }
})




const User = mongoose.models.personalblog || mongoose.model("personalblog", UserSchema)


export default User