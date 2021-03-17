// const tutorial= require('./tutorial');
// console.log(tutorial);
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

////////////////////////////////////////////////////////
// const EventEmitter=require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial',(num1,num2)=>{
//     console.log(num1+num2);
// })

// //emit triggers the method
// //eventEmitter.emit('tutorial');
// eventEmitter.emit('tutorial',1,2);


// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name=name;
//     }

//     get name(){
//         return this._name;
//     }
// }

// let pedro = new Person('Pedro');
// let christina= new Person('Christina');

// christina.on('name', ()=>{
//     console.log('my name is' + christina.name)
// })
// pedro.on('name',()=>{
//     console.log('my name is ' + pedro.name);
// })

// pedro.emit('name');
// christina.emit('name');
////////////////////////////////////////////////////////////////////////////////////////

// //ReadLine

// const readline=require('readline');
// const rl=readline.createInterface({input:process.stdin,
//                                 output:process.stdout});

// //Random number between 1 and 10
// let num1=Math.floor((Math.random()*10)+1);
// let num2=Math.floor((Math.random()*10)+1);
// let answer=num1+num2;

// //It is extremely important to use trim to cut the empty space at the beginning and at the end of the word.
// rl.question(`What is ${num1} + ${num2}?\n`,(userInput)=>{
//     if (userInput.trim()==answer) {
//         rl.close();
//     }
//     else{
//         //I am going to set with an string
//         rl.setPrompt('Incorrect response please try again\n');
//         //First Method is set and the second method is gonna call the prompt.
//         rl.prompt();
//         rl.on('line',(userInput)=>{
//             if (userInput.trim()== answer) {
//                 rl.close();
//             } else {
//                 rl.setPrompt(`Your answer of ${userInput} is incorrect. Try again\n`);
//                 rl.prompt();
//             }
//         })
//     }
// });

// //How redline is an instance of event emitter class. It is executed automatically since it is listening for a close event (Method rl.close) this callback function gets executed
// rl.on('close',()=>{
//     console.log('Correct!!!');
// });

/////////////////////////////////////////////////////////////////
//Working with Files Systems
const fs=require('fs');
// //create a file 1arg) Name of the file, 2nd) What I am gonna write in it, 3er) if there is an error
// fs.writeFile('example.txt', "this is an example", (err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File successfully created');
//         //Read a file In order to avoid that the answer of the data comes in binary. I need to use the encodinf
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if (err) {
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         })
//     }
// })

//Rename file
// fs.rename('example.txt','example2.txt',(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else 
//     console.log('successfully renamed the file');
// })

// fs.appendFile('example2.txt','Some data being appended',(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully apppended data to file');
//     }
// })

fs.unlink('example2.txt',(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('successfully deleted the file');
    }
})