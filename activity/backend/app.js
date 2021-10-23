const express = require("express");
const app = express();
const mysql=require("mysql");
const {HOST, USER, PASSWORD, DB_NAME} = require('./config/secrets.js');
const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
const requestRouter = require("./router/requestRouter");

app.use(express.json()); 
app.use(express.static("public"));
//for all the user related functions, navigate to userRouter
//localhost:4000/api/user  post method
app.use("/api/user" , userRouter);
app.use("/api/post" , postRouter);
app.use("/api/request" , requestRouter);

 

//post work gel all post 



//on id basis
//get all follower//all following


//pending req



app.listen(3000, function(){
    console.log('App is listening at 3000!!!');
}); 