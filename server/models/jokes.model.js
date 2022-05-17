const mongoose = require("mongoose")


const JokeSchema = new mongoose.Schema({
    setup:{
        type:String, 
        requried: [true, "setup is required"],
        minlength: [10, "Setup must be at least 10 characters"]
    },
    punchline:{
        type: String, 
        required:[true, "punchline is required"],
        minlength:[10, "setup must be 10 characters"]
    }
}, {timestamps: true}) //this is your created at and updated at


const Joke = mongoose.model('Joke', JokeSchema)//creating schema and calling it Joke

module.exports= Joke;