let express = require('express');
let router = express.Router();
let request = require('request');
//跨域解决
router.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var url = 'http://v.juhe.cn/toutiao/index?type=%E5%A4%B4%E6%9D%A1&key=bfea1fdd6263ea2a6ffa1c011b5ad121';
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.send(data);
        }else{
            res.send('{error:404}');
        }
    });
});
module.exports = router