const mongoose=require("mongoose");
const bookSchema=mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    price: Number,
  },{
    versionKey:false
  })

  const Book=mongoose.model("book",bookSchema);

  module.exports={Book};