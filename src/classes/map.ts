import Point from './point';
import PointList from './types/pointList';

// Objet de valeur
class Map {
	readonly limit: Point;
	readonly obstacles: PointList;

	constructor(limit: Point, obstacles?: PointList) {
		this.limit = limit;

		this.obstacles = new PointList(
			obstacles?.list.map(obstacle => {
				return this.normalizePoint(obstacle);
			}) || []
		);
	}

	normalizePoint(point: Point) {
		return point.modulo(this.limit);
	}

	isObstacleThere(point: Point) {
		return this.obstacles.list.some(
			obstacle => obstacle.x.equal(point.x) && obstacle.y.equal(point.y)
		);
	}
}

export default Map;
