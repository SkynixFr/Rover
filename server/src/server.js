const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3001;

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('roverCommand', (command) => {
        console.log(`Received command for rover: ${command}`);
    });

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
