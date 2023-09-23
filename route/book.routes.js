const express=require("express");
const bookRouter=express.Router();
const {Book}=require("../model/book.model");

bookRouter.get("/",async(req,res)=>{
    // let author=req.query.author;
    // let category=req.query.category;
    try {
        const books=await Book.find();
        res.status(200).send(books);
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})



bookRouter.post("/",async(req,res)=>{

    try {
        const book=new Book(req.body);
        await book.save();
        res.status(201).send({"msg":"book has been added"});
        
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})

bookRouter.delete("/:id",async(req,res)=>{
    

    try {
        await Book.findByIdAndDelete({_id:req.params.id});
        res.status(202).send({"msg":"book has been deleted"});
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})


bookRouter.get("/filter",async(req,res)=>{
    const genre=req.query.genre;
    const sort=req.query.sort;
    try {
        const books=await Book.find({genre}).sort({price:sort});
        res.status(200).send(books);
        
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})

module.exports={bookRouter}