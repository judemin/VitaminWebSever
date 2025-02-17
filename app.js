
var express = require('express')
var app = express()

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.sendFile() 내부의 파일이 띄워진다.

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
})

// localhost:3000/index 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/index', function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.use(express.static('public'))