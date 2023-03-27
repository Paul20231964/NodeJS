"use strict";

const app = require("../app");
const port = 3000;//port번호 설정
//서버 가동
app.listen(port, () => {
  console.log("서버 가동");
});