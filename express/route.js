const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req,res)=>{
    res.send("Home");
});

app.get("/about",(req,res)=>{
    res.send("About");
});

app.get("/contact",(req,res)=>{
    res.send("Contact");
});

app.listen(port, () => {
    console.log("Server Running");
});