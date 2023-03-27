const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  res.send('<h1>강아지</h1>')
})

app.get('/cat', function (req, res) {
  res.send('고양이')
})

app.get('/user/:id', function (req, res) {
  //params방식
  // const q = req.params
  // console.log(q.id)
  //res.send('고양이')


  //query방식으로
  const q = req.query;
  console.log(q)

  res.json({'userid': q.id})
})

app.listen(port, () => {
    console.log(`이보기 앱은 포트 ${port}`)
})