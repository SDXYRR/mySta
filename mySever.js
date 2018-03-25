var express = require('express');
var app = express();
var request = require("request");
//解决跨域的问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/api/listFocus', function(req, res) {
    //在后台请求的api
    request('https://m.maizuo.com/v4/api/billboard/home?__t=1521796970918', function(error, response, body) {
        var responseJSON = JSON.parse(response.body);
        res.send(responseJSON);
    })
})
app.get('/api/nowplaying', function(req, res) {
    //在后台请求的api
    request('https://m.maizuo.com/v4/api/film/now-playing?__t=1521804673260&page=1&count=5', function(error, response, body) {
        var responseJSON = JSON.parse(response.body);
        res.send(responseJSON);
    })
})

app.get('/api/commingsoon', function(req, res) {
    //在后台请求的api
    request('https://m.maizuo.com/v4/api/film/coming-soon?__t=1521812936255&page=1&count=3', function(error, response, body) {
        var responseJSON = JSON.parse(response.body);
        res.send(responseJSON);
    })
})

app.get('/api/HotNplaying', function(req, res) {
    //在后台请求的api
    request('https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7', function(error, response, body) {
        var responseJSON = JSON.parse(response.body);
        res.send(responseJSON);
    })
})
app.get('/api/HotComing', function(req, res) {
    //在后台请求的api
    request('https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7', function(error, response, body) {
        var responseJSON = JSON.parse(response.body);
        res.send(responseJSON);
    })
})

app.get('/api/Cinema', function(req, res) {
    //在后台请求的api
    request('https://m.maizuo.com/v4/api/cinema?__t=1521954152314', function(error, response, body) {
        var responseJSON = JSON.parse(response.body);
        res.send(responseJSON);
    })
})

app.get('/api/cityList', function(req, res) {
    //在后台请求的api
    request('https://m.maizuo.com/v4/api/city?__t=1521976120441', function(error, response, body) {
        var responseJSON = JSON.parse(response.body);
        res.send(responseJSON);
    })
})


var server = app.listen(3000, function() {
    console.log("监听端口号3000");
    console.log("http://localhost:3000/api/listFocus");
    console.log("http://localhost:3000/api/nowplaying");
    console.log("http://localhost:3000/api/commingsoon");
    console.log("http://localhost:3000/api/HotNplaying");
    console.log("http://localhost:3000/api/HotComing");
    console.log("http://localhost:3000/api/Cinema");
    console.log("http://localhost:3000/api/cityList");
})