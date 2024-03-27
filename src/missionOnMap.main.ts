import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import RoverController from './missionControl/roverController';
import RoverCommand from './domain/roverCommand';
import { mapWithObstacles } from './mapForMission';
import Coordinate from './domain/coordinate';
import Point from './domain/point';
import Integer from './types/integer';
import Orientation from './domain/orientation';
import Localisation from './domain/localisation';
import Rover from './domain/rover';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3001;

// Create of a rover in position (0,0) and orientation (0,1)
const initialRoverCoordinate = new Coordinate(new Point(new Integer(0), new Integer(0)), mapWithObstacles);
const initialRoverOrientation = new Orientation(new Point(new Integer(0), new Integer(1)));
const initialRoverLocalisation = new Localisation(initialRoverCoordinate, initialRoverOrientation);
let rover = new Rover(initialRoverLocalisation, mapWithObstacles);

// Create a rover controller
const roverController = new RoverController(mapWithObstacles);

// Socket connection
io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('roverCommand', (commandString) => {

        const roverCommand = new RoverCommand(commandString)
        console.log(`Received command for rover: ${roverCommand.display()}`);

        rover = roverController.interpretCommands(roverCommand, rover);
        console.log(`The new position of the rover is:`, rover.localisation.display(), `\n`);
    });

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});