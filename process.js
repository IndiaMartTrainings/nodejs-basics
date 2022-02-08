console.log(process.pid)
console.log(process.execPath)
console.log(process.cwd())
//const PORT = process.env.PORT || 3001
console.log(process.env.USERDOMAIN)
console.log(process.env.USERNAME)

process.env.PORT = 5000

console.log(process.env.PORT)