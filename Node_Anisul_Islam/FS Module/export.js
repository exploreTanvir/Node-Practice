const GetName=()=>{
    return "Tanvir Hosen raju"
}

const GetRoll=()=>{
    return 29
}

const cgpa=3.95

// method one

exports.name=GetName
exports.roll=GetRoll
exports.result=cgpa

// Method two

module.exports={
    GetName,GetRoll,cgpa
}