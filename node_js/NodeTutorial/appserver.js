const http= require('http');

//res.end() to send the response
const server=http.createServer((req,res)=>{
    if (req.url==='/') {
        res.write('Hello from Nodejs');
        res.end();
    }
    else{
        res.write('Using some other domain');
        res.end();
    }
});

server.listen('3000');