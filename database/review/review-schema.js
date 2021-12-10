const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    recipeId: String,
    textArea: String,
    username: {
        type: mongoose.Schema.Types.String,
        ref: "UserModel"
    },
    userId: String,
    recipeName: String,
    recipeImg: String
}, {collection: "reviews", timestamps: true})

module.exports = reviewSchema
