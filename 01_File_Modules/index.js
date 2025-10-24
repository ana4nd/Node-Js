import fs from "fs";

// Sync...
// fs.writeFileSync("./text.txt", "Hey There");

//Async...
// fs.writeFile('./abc.txt', "Hello Async", (err)=> {})


// Sync .. Ye kuch na kuch return krega
// const result = fs.readFileSync("./text.txt", "utf-8");
// console.log(result);

// Async... call back accept krega
// fs.readFile("./text.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// });

fs.appendFileSync("./text.txt", `${Date.now()}Hey There\n`);