const mongoose = require("mongoose")
console.log(process.env.MONGO_URI);
const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if (conn) {
            console.log(`database connected successfully !`);
        }
    } catch (error) {
        console.log(error);
        exit(1)
    }
}


module.exports = ConnectDB