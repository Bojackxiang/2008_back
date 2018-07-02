const bunyan = require("bunyan");
const path = require("path");
const level = "info";

const log = bunyan.createLogger({
    name: "myapp",
    streams: [{
        level, 
        stream: process.stdout
    }, 
    {
        level, 
        path: path.resolve(__dirname, "log.txt")

    }],
})

module.exports = log;
