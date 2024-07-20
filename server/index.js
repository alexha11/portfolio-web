const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

let onlineUsers = 0;

io.on('connection', (socket) => {
  console.log('Connection attempt by:', socket.id);
  onlineUsers++;
  io.emit('onlineUsers', onlineUsers);
  console.log('New client connected');
  console.log('Online users:', onlineUsers);

  socket.on('message', (data) => {
    console.log('Message received:', data);
    io.emit('message', data); // Broadcast the message to all clients
  });

  socket.on('disconnect', () => {
    onlineUsers--;
    io.emit('onlineUsers', onlineUsers);
    console.log('Client disconnected');
    console.log('Online users:', onlineUsers);
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
