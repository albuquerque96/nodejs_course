const fs = require("node:fs/promises")

async function readFile() {
    try {
        const data = await fs.readFile("file.txt", "utf8")
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

readFile()

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