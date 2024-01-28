const fs=require("fs")
const bioData={
    name:"Tanvir",
    age:20,
    address:"Jhenaidah"
}

const jsonBioData=JSON.stringify(bioData)
const objBioData=JSON.parse(jsonBioData)
console.log(jsonBioData)
console.log(objBioData.age)



fs.writeFile("jsonFile.json",jsonBioData,(err)=>{
    console.log("done")
})

fs.readFile("./jsonFile.json","utf-8",(err,data)=>{
    console.log("read file done")
    console.log(data)
})