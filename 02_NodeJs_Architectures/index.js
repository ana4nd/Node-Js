import fs from "fs";
import crypto from "crypto";

setTimeout(()=> console.log("Hello from Timer 1"), 0);

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 10;

setImmediate(()=>console.log("Hello from Immediate fn 1"));

fs.readFile('sample.txt', 'utf-8', ()=>{
    console.log("Io polling finish")

    setTimeout(()=> console.log("Hello from Timer 2"), 0);

    setTimeout(()=> console.log("Hello from Timer 3"), 5*1000);

    setImmediate(()=>console.log("Hello from Immediate fn 2"));

    // CPU Intensive Work
    
    crypto.pbkdf2("password1", "salt1", 100000, 1024, "sha512", ()=>{
        console.log(`${Date.now() - start}ms Password 1 is done`);
    })
    crypto.pbkdf2("password2", "salt1", 100000, 1024, "sha512", ()=>{
        console.log(`${Date.now() - start}ms Password 2 is done`);
    })
    crypto.pbkdf2("password3", "salt1", 100000, 1024, "sha512", ()=>{
        console.log(`${Date.now() - start}ms Password 3 is done`);
    })
    crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", ()=>{
        console.log(`${Date.now() - start}ms Password 4 is done`);
    })
    crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", ()=>{
        console.log(`${Date.now() - start}ms Password 4 is done`);
    })
    crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", ()=>{
        console.log(`${Date.now() - start}ms Password 4 is done`);
    })
    crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", ()=>{
        console.log(`${Date.now() - start}ms Password 4 is done`);
    })
    crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", ()=>{
        console.log(`${Date.now() - start}ms Password 4 is done`);
    })


})

console.log("Hello from Top Level Code")