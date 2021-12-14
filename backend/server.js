const app = require("express")();
const server = require("http").createServer();


const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  }
});

io.on("connection", (socket) => {
  // console.log(socket)
  console.log("Socket is active to be connected")

  socket.on("chat", (payload) => {
    console.log(payload)
    io.emit("chat", payload)
  })
});


server.listen(5000, () => {
  console.log("Server is listening at port 5000...")
});