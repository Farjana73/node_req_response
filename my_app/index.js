// server create

const http = require('http');

const server = http.createServer(function(req, res){

    if( req.url=="/"){
        res.end("Home page")
    }
    if( req.url=="/profile"){
        res.end("Profile page")
    }
    if( req.url=="/Login"){
        res.end("Login page")
    }

})
// 7070 server port
// default port 8080
// req =request
// res = response

server.listen(7070, function(){
    console.log("Server running")
})