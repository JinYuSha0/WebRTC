const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const users = new Map();

const getRandomId = () => Math.random().toString().slice(2, 8);

app.use(express.static("../client/dist"));

io.on("connection", (socket) => {
  const id = getRandomId();
  users.set(id, socket);
  socket.emit("id", { id });
  socket.on("disconnect", () => {
    users.delete(id);
  });
  socket.on("offer", (data) => {
    try {
      const { to, offer } = data;
      if (users.has(to)) {
        users.get(to).emit("receiveOffer", {
          from: id,
          offer,
        });
      } else {
        throw new Error("no such user");
      }
    } catch (error) {
      socket.emit("error", error.message);
    }
  });
  socket.on("answer", (data) => {
    try {
      const { to, answer } = data;
      if (users.has(to)) {
        users.get(to).emit("receiveAnswer", {
          from: id,
          answer,
        });
      } else {
        throw new Error("no such user");
      }
    } catch (error) {
      socket.emit("error", error.message);
    }
  });
  socket.on("candidate", (data) => {
    try {
      const { to, candidate, sdpMLineIndex } = data;
      if (users.has(to)) {
        users.get(to).emit("receiveCandidate", {
          from: id,
          candidate,
          sdpMLineIndex,
        });
      } else {
        throw new Error("no such user");
      }
    } catch (error) {
      socket.emit("error", error.message);
    }
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
