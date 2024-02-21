import Map from './map';
import Point from './point';

class Coordinate {
	readonly point: Point;
	readonly map: Map;

	constructor(point: Point, map: Map) {
		this.map = map;
		this.point = map.normalizePoint(point);
	}

	increaseCoordinate(vector: Point) {
		return new Coordinate(this.point.addPoint(vector), this.map);
	}

	decreaseCoordinate(vector: Point) {
		return new Coordinate(this.point.subtractPoint(vector), this.map);
	}
}

export default Coordinate;
