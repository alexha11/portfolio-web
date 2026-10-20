const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const MAX_MESSAGE_LENGTH = 500;
const MIN_MESSAGE_INTERVAL_MS = 1000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    // Comma-separated list of site origins allowed to connect, e.g.
    // CLIENT_ORIGIN=https://your-site.onrender.com,http://localhost:5173 (all origins if unset)
    origin: process.env.CLIENT_ORIGIN ? process.env.CLIENT_ORIGIN.split(',') : '*',
  },
  maxHttpBufferSize: 10_000,
});

let onlineUsers = 0;


io.on('connection', (socket) => {
  onlineUsers++;
  io.emit('onlineUsers', onlineUsers);
  console.log('Client connected. Online users:', onlineUsers);

  let lastMessageAt = 0;
  socket.on('message', (data) => {
    // Only broadcast short, non-empty text, at most one message per second per client
    if (typeof data !== 'string') return;
    const text = data.trim().slice(0, MAX_MESSAGE_LENGTH);
    const now = Date.now();
    if (!text || now - lastMessageAt < MIN_MESSAGE_INTERVAL_MS) return;
    lastMessageAt = now;
    io.emit('message', text); // Broadcast the message to all clients
  });

  socket.on('disconnect', () => {
    onlineUsers--;
    io.emit('onlineUsers', onlineUsers);
    console.log('Client disconnected. Online users:', onlineUsers);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
