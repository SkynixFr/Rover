import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import Localisation from './src/domain/localisation';
import Coordinate from './src/domain/coordinate';
import Point from './src/domain/point';
import Integer from './src/types/integer';
import Orientation from './src/domain/orientation';
import MapBuilder from './tests/utils/mapBuilder';
import PointList from './src/types/pointList';
import RoverBuilder from './tests/utils/roverBuilder';
import RoverController from './src/missionControl/roverController';
import RoverCommand from './src/types/roverCommand';
// import Rover from './domain/rover';
// import interpreteCommands from './utils/roverInterpreter';
// import RoverCommand from './types/roverCommand';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3001;

const initialObstacles = new PointList([
    new Point(new Integer(1), new Integer(5)),
    new Point(new Integer(12), new Integer(15))
]);
const mapWithObstacles = new MapBuilder()
    .withObstacles(initialObstacles)
    .build();
const rover = new RoverBuilder().default();

const roverController = new RoverController(mapWithObstacles, rover);

// const map = new Map();
// const roverInitialLocalisation = new Localisation(new Coordinate(new Point(new Integer(0), new Integer(0)), map), new Orientation(new Point(new Integer(0), new Integer(1)));
// let rover = new Rover();

function classOf(instance: any): string {
    return instance.constructor.name;
}

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('roverCommand', (commandString) => {
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