const express = require("express");
const ejs=require("ejs");
const path = require("path");
const publicDirectory = path.join(__dirname,'./public');
const app = express();
app.use(express.static(publicDirectory));


app.set('view engine', 'ejs');
app.get("/",function(req,res){
    res.render("index");
});


app.listen(3000, function(){
    console.log("listening on 3000");
  });
