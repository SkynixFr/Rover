import Map from "./domain/map";
import Point from "./domain/point";
import Integer from "./types/integer";
import PointList from "./types/pointList";

// Create a map with obstacles
const initialObstacles = new PointList([
    new Point(new Integer(1), new Integer(5)),
    new Point(new Integer(12), new Integer(15))
]);

export const mapWithObstacles = new Map(new Point(new Integer(10), new Integer(10)), initialObstacles);
    