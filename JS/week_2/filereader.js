const fs = require('fs');

fs.readFile('readme.txt','utf-8',(err,data)=>{
    console.log(data);
})