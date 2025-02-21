const express = require("express");
const cors=require("cors");


const app=express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("bckend is runing ")
})



app.listen(5000,()=>{
    console.log("server is runing on 5000 port")
})