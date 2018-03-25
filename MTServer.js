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

var homeApi = "https://mrobot.pconline.com.cn/s-300/best/cms/listHomepagev2.xsp";
// https://mrobot.pconline.com.cn/s-300/best/cms/listHomepagev2.xsp?pageNo=1&pageSize=20&sectionId=99
//http://localhost:3000/api/home
app.get("/api/home",function(req,res){
    var pageNo = req.query.pageNo;
    var pageSize = req.query.pageSize;
    var sectionId = req.query.sectionId;
    // console.log(req.query.name+"   "+req.query.age);
    var requestURL = homeApi+"?pageNo="+pageNo+"&pageSize="+pageSize+"&sectionId="+sectionId;
    console.log(requestURL);
    request(requestURL,function(error,response,body){
        console.log(response);
        // res.send(JSON.parse(response.body));
    });

})
var server = app.listen(3000,function(){
	console.log("监听端口号3000");
})