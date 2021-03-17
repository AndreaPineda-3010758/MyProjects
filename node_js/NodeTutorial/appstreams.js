const fs=require('fs');
const zlib=require('zlib');
//To zip
const gzip=zlib.createGzip();

//To Unzip
const gunzip=zlib.createGunzip();

const readStream=fs.createReadStream('./example2.txt.gz');
const writeStream=fs.createWriteStream('uncompressed.txt');

// readStream.on('data',(chunk)=>{
//     //console.log(chunk);
//     writeStream.write(chunk);
// });

// //Pipe is going to be similar to the above code lines of read after write
// //To compress data before to write to the file
// readStream.pipe(gzip).pipe(writeStream);

//Pipe is going to be similar to the above code lines of read after write
//To UNcompress data before to write to the file
readStream.pipe(gunzip).pipe(writeStream);