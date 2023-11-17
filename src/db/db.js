const mongoose = require("mongoose")

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if (conn) {
            console.log(`database connected successfully !`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


module.exports = ConnectDB