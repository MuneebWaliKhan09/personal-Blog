const mongoose = require("mongoose")
const validator = require('validator');

const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 5,
        maxlength: 50

    },

    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 4,
    },


    role: {
        type: String,
        default: "user"
    },

    avatar: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }


        }
    ],

    role: {
        type: String,
        default: "user"
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})




const User = mongoose.models.userblog || mongoose.model("userblog", UserSchema)


export default User