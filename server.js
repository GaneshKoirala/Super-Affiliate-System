const http = require("http")
const httpServer = http.createServer((req, res) => {
  res.end("The server is working properly")
})
httpServer.listen(process.env.PORT || 3000, () => {
  console.log("server is listening on port 3000")
})