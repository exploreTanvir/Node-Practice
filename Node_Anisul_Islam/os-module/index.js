const os=require("os")

console.log(os.userInfo())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.totalmem())
console.log("............................")
const totalMem=os.totalmem()
console.log(` Total memory===${totalMem/1024/1024/1024}`)
console.log("............................")
const freeMem=os.freemem()
console.log(` Free memory===${freeMem/1024/1024/1024}`)
console.log("............................")
console.log(os.freemem())
console.log(os.arch())
console.log(os.platform())
console.log(os.type())