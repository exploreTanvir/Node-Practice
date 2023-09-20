const path=require("path")

const extensionName=path.extname("index.html")
console.log(extensionName);

const joinName=path.join(__dirname+"/views")
console.log(joinName);