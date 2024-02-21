import Point from './point';
class Map {
	limit: Point;

	constructor(limit: Point) {
		this.limit = limit;
	}

	normalizePoint(point: Point) {
		return point.moduloPoint(this.limit);
	}
}

export default Map;
