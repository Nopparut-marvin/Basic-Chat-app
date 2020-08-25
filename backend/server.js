const app = require("express")();
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const router = require("./router");
app.use(router);
const PORT = 5000;
const io = socketio(server);

const { addUser, removeUser, getUser } = require("./user.js");
io.on("connection", (socket) => {
  console.log("connection");
  socket.on("disconnect", (force) => {
    if(force === true){
      console.log("disconnect");
    }else{
    const user = removeUser(socket.id);
    io.emit("message", { user: "แอดมิน", text: `${user.name} ออกจากห้องแชท` });
    console.log("disconnect");
    }
  });
  socket.on("join", ({ name }, callback) => {
    const { error, user } = addUser({ id: socket.id, name });
    if (error) return callback( error );
    socket.emit("message", {
      user: "แอดมิน",
      text: `สวัสดี ${name} ยินดีต้อนรับสู่ MarvinChat แอพพลิเคชัน`,
    });
    socket.broadcast.emit('message',{user:"แอดมิน",text:` ${name} เข้าห้องแชท`})

  });
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.emit("message", { user: user.name, text: message });
    callback();
  });
});
server.listen(PORT, () => {
  console.log(`listen to PORT ${PORT}`);
});
