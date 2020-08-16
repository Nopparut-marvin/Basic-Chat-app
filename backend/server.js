const app = require("express")();
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const router = require("./router");
app.use(router);
const PORT = 5000;
const io = socketio(server);

server.listen(PORT, () => {
  console.log(`listen to PORT ${PORT}`);
});
