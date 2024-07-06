const buffer = new Buffer.from("Vishwas");//UTF-8 encoding by default


buffer.write("code")//buffer still contains info related to previous data 
//buffer.write("Code Evolution")//bigger than buffer capacity extra carachters discarded
console.log(buffer.toString());
console.log(buffer);//hexadecimal representation of binary data 
console.log(buffer.toJSON());//decimal representation of binary data 