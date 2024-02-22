import Point from './point';

// Objet de valeur
class Map {
	limit: Point;
	obstacles: Point[];

	constructor(limit: Point, obstacles?: Point[]) {
		this.limit = limit;
		this.obstacles =
			obstacles?.map(obstacle => {
				return this.normalizePoint(obstacle);
			}) || [];
	}

	normalizePoint(point: Point) {
		return point.modulo(this.limit);
	}

	isObstacleThere(point: Point) {
		return this.obstacles.some(
			obstacle => obstacle.x === point.x && obstacle.y === point.y
		);
	}
}

export default Map;
