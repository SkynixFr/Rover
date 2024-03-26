import Coordinate from "./domain/coordinate";
import Localisation from "./domain/localisation";
import Map from "./domain/map";
import Orientation from "./domain/orientation";
import Point from "./domain/point";
import Rover from "./domain/rover";
import Integer from "./types/integer";
import PointList from "./types/pointList";


const initialObstacles = new PointList([
    new Point(new Integer(1), new Integer(5)),
    new Point(new Integer(12), new Integer(15))
]);

export const mapWithObstacles = new Map(new Point(new Integer(10), new Integer(10)), initialObstacles);

const initialRoverCoordinate = new Coordinate(new Point(new Integer(0), new Integer(0)), mapWithObstacles);
const initialRoverOrientation = new Orientation(new Point(new Integer(0), new Integer(1)));
const initialRoverLocalisation = new Localisation(initialRoverCoordinate, initialRoverOrientation);
export const rover = new Rover(initialRoverLocalisation, mapWithObstacles);
    