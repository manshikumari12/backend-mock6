const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    "creator":String,
    "title":String,
    "description":String,
    "questions":[{
        "title":String,
        "answer":Array,
        "correct":String,
    }]
    
})

const quizmodel = mongoose.model("quiz",quizSchema)

module.exports = {quizmodel};
