var express = require('express');
var app = express();
var request = require("request");

//解决跨域的问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/api/scrollAD',function(req,res){
	request('https://api.maimengjun.com/index.php?customPosition=1&page=1&r=adImage%2Flist&size=10',function(error,response,body){
		res.send(response);
	})
})

var server = app.listen(3000,function(){
	console.log("监听端口号3000");
})
