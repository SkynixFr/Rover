import Point from './point';
import PointList from '../types/pointList';

// Objet de valeur
class Map {
	readonly limit: Point;
	readonly obstacles: PointList;

	constructor(limit: Point, obstacles?: PointList) {
		this.limit = limit;
		this.obstacles = obstacles?.normalize(limit) || new PointList([]);
	}

	normalizePoint(point: Point) {
		return point.modulo(this.limit);
	}

	isObstacleThere(point: Point): boolean {
		return this.obstacles.contains(this.normalizePoint(point));
	}
}

export default Map;
