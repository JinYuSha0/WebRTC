const express = require("express");
const app = express();
const path = require("path");
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

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

io.on("connection", (socket) => {
  const id = getRandomId();
  console.log(`进来了:${id}`);
  users.set(id, socket);
  socket.emit("id", { id });
  socket.on("disconnect", () => {
    users.delete(id);
    console.log(`离开了:${id}`);
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
        });
      } else {
        throw new Error("no such user");
      }
    } catch (error) {
      socket.emit("error", error.message);
    }
  });
  socket.on("exists", (data) => {
    const { id } = data;
    socket.emit("exists", users.has(id));
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
