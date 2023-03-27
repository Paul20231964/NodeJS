"use strict";


//모듈
const express = require("express");
const app = express();



//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", home); //use -> 미들웨어를 등록해주는 메서드


module.exports = app;


// //http로 서버 가동하는 방법
// const http = require("http");
// const app = http.createServer((req,res) => {
//   //한글을 사용할때 서버에게 알려줘야한다.
// res.writeHead(200, {"content-Type":"text/html; charset=utf-8"});

//   // console.log(req.url);
//   if(req.url === "/") {
//     res.end("여기는 루트입니다.");
//   } else if (req.url === "/login"){
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// });

