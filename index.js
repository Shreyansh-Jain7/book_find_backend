const express=require("express");
const app=express();
const {connection}=require("./db");
const {bookRouter}=require("./route/book.routes");
const cors=require("cors");
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Book Find");
})
app.use("/books",bookRouter);



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log(`Connected to mongoDB Atlas`);
        console.log(`Running the server at port ${process.env.port}`);
    } catch (err) {
        console.log(err);
    }
})