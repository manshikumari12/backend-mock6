const mongoose =require("mongoose")
const connection=mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.bcqczq8.mongodb.net/quiz?retryWrites=true&w=majority");
// quiz
module.exports={connection};