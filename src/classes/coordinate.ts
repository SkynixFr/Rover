import Map from './map';
import Point from './point';

// Objet de valeur
class Coordinate {
	readonly point: Point;
	readonly map: Map;

	constructor(point: Point, map: Map) {
		this.map = map;
		this.point = map.normalizePoint(point);
	}

	increase(vector: Point) {
		return new Coordinate(this.point.add(vector), this.map);
	}
	

	decrease(vector: Point) {
		return new Coordinate(this.point.subtract(vector), this.map);
	}
}

export default Coordinate;
