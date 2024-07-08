const crypto = require("node:crypto");
const start = Date.now();

crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
console.log("Hash: ",Date.now()-start);
/*const fs = require("node:fs");


console.log("First");
const fileContents = fs.readFileSync("./file.txt","utf-8")
console.log(fileContents);

console.log("Second");
//eror first callback pattern 
fs.readFile("file.txt","utf-8",(error,data) => {
if (error) {
    console.log(error);
}
else {
    console.log(data);
}
})

console.log("Third");

fs.writeFileSync("./greet.txt", "hello world");

fs.writeFile("./greet.txt","\nhello vishwas",{flag:'a'},(error)=>{
    if (error) {
        console.log(error);
    }
    else{
        console.log("data writen to the file");
    }
    
}
)*/