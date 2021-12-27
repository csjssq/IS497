"use strict"

// 引入模块
var https = require("https");
var fs = require("fs");

// 设置自己的证书路径
var options = {
  key : fs.readFileSync("./cert.key"),
  cert: fs.readFileSync("./cert.crt"),
  ca:fs.readFileSync("./spoofed_ca.crt")
};

// 创建app
var app = https.createServer(options, function(req, res){
  res.writeHead(200, {"content-Type": "text/plain"});
  res.end("Hello World!\n");
  
}).listen(9988);
