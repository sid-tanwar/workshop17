const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 3,
        max: 12
    },

    email: {
        type: String,
        required: true,
        min: 11,
        max: 100

    }
})

module.exports = mongoose.model("User", userSchema);