"use strict";


const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//루트디렉토니 접근하가 get방식으로
router.get("/", ctrl.hello);
  //res.send("여기는 루트입니다.");


//login 디렉토리로 접근
router.get("/login", ctrl.login); 
  //res.send("여기는 login 화면입니다.");


module.exports = router;