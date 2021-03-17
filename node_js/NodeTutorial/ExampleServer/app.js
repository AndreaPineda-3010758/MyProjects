const http=require('http');
const fs=require('fs');

//writeHead is used to know the status of the server
http.createServer((req,res)=>{
    // const readStream=fs.createReadStream('./static/data.json');
    // res.writeHead(200,{'Content-type':'application/json'});

    //Image
    const readStream=fs.createReadStream('./static/picture.png');
    res.writeHead(200,{'Content-type':'image/png'});
    readStream.pipe(res);
}).listen(3000);
