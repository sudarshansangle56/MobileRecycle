const express = require("express");
const jwt = require("jsonwebtoken");


const app=express();
app.use(express.json());

const SECRET_KEY = "your_secret_key"; 

const users = [
    { id: 1, username: "admin", password: "password123" },
    { id: 2, username: "user", password: "userpass" }
];

app.post("/login", (req,res)=>{
    const {username, password}=req.body;
    const user =users.find(u => u.username === username && u.password === password);
    if(!user) return res.status(401).json({message: "Invalid credentials"});

    const token =jwt.sign({userId: user.Id, username: user.username}, SECRET_KEY,{expiresIn: "2h"} );

    res.json({message:"Login successful", token});
});

app.listen(5000, () => console.log("Server running on port 5000"));
