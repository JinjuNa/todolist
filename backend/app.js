var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());

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
    db.query('SELECT * FROM todo', function(error, result){
        if(error){
            console.log(error);
        }
        res.send(result)
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