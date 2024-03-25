import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
// import Rover from './classes/Rover';
// import Coordinate from './classes/Coordinate';
// import Orientation from './classes/Orientation';
// import RoverInterpreter from './utils/RoverInterpreter';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3001;

// let initialPosition = new Coordinate(0, 0); 
// let initialOrientation = new Orientation('N');

// let rover = new Rover(initialPosition, initialOrientation);

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('roverInterpreter', (command: string) => {
        console.log(`Received command for rover: ${command}`);
        // const roverInterpreter = new RoverInterpreter(command);
        // rover = rover.interpreteCommand(roverInterpreter);
    });

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
