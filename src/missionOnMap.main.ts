import RoverInterpreter from './domain/roverInterpreter';
import { mapWithObstacles } from './mapForMission';
import Coordinate from './domain/coordinate';
import Point from './domain/point';
import Integer from './types/integer';
import Orientation from './domain/orientation';
import Localisation from './domain/localisation';
import Rover from './domain/rover';
import RoverListener from './passiveRover/roverListener';

// Create of a rover in position (0,0) and orientation (0,1)
const initialRoverCoordinate = new Coordinate(new Point(new Integer(0), new Integer(0)), mapWithObstacles);
const initialRoverOrientation = new Orientation(new Point(new Integer(0), new Integer(1)));
const initialRoverLocalisation = new Localisation(initialRoverCoordinate, initialRoverOrientation);
let rover = new Rover(initialRoverLocalisation, mapWithObstacles);

// Create a rover controller
const roverController = new RoverInterpreter(mapWithObstacles);

// Socket connection

const roverListener = new RoverListener(rover, roverController);

roverListener.listening();