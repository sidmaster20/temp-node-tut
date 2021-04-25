const os = require("os")


//info about current user
const user = os.userInfo()
console.log(user)

// Method returns system uptime in seconds
console.log("The system is uptime is : " + os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()
}

console.log(currentOS)