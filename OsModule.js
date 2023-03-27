const os = require("os");
console.log("Free memeory in GB", os.freemem() / 1024 / 1024 / 1024); // show the free memory


console.log("Total memeory in GB", os.totalmem() / 1024 / 1024 / 1024); // show the total memory

console.log("Version :", os.version());


console.log("Cpu :", os.cpus());