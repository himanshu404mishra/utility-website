const http = require("http");
const app = require("./app")
const dotenv = require("dotenv")

dotenv.config();

const port = process.env.PORT || 5500

const server = http.createServer(app)

server.listen(port, (err) => {
    if(err) console.log("Error on running server: ", err);
    else console.log(`Serve is running at port: ${port}`);
})