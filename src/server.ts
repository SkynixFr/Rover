import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import Rover from './domain/rover';
import interpreteCommands from './utils/roverInterpreter';
import RoverCommand from './types/roverCommand';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3001;

let rover = new Rover();

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('roverCommand', (commandString: string) => {
        console.log(`Received command for rover: ${commandString}`);
        const commands: RoverCommand[] = commandString.split('').map(char => ({ value: char }));
        rover = interpreteCommands(commands, rover);
        console.log(`New Rover position: `, rover);
    });

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
