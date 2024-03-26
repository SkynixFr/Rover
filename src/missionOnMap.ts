import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import RoverController from './missionControl/roverController';
import RoverCommand from './types/roverCommand';
import { mapWithObstacles, rover } from './mapForMission';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3001;

const roverController = new RoverController(mapWithObstacles, rover);

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('roverCommand', (commandString) => {
        console.log(mapWithObstacles.obstacles.list)
        const roverCommand = new RoverCommand(commandString)
        console.log(`Received command for rover: ${roverCommand.display()}`);
        const newRover = roverController.executeCommand(roverCommand);
        console.log(`New Rover position: `, newRover.localisation.display());
    });

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});