var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());


const corsOptions = {
    origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

app.use(cors(corsOptions)); // config 추가

var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'aa950307',
    database : 'todolist'
});

db.connect();

//list 조회 라우터
app.get('/list', function(req, res){
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query('SELECT * FROM todo', function(error, result){
        if(error){
            console.log(error);
        }
        
        res.send(result)
        // console.log(res)
        // res.send('get')
    })
    
})

//list 추가 라우터
app.post('/list', function(req, res){

})

//리스트 수정 라우터
app.put('/list/:id', function(req, res){

})

//리스트 삭제 라우터
app.delete('/list/:id', function(req, res){
    
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  });
  
  app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  });