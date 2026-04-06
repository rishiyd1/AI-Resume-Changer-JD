const mongoose = require("mongoose")



async function connectToDB() {

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ai_resume_changer`)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB