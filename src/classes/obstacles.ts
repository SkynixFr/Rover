import Coordinate from './coordinate';

class Obstacles {
	obstacles: Coordinate[];

	constructor(obstacles: Coordinate[]) {
		this.obstacles = obstacles;
	}

	isObstacleThere(coordinate: Coordinate) {
		return this.obstacles.some(
			obstacle =>
				obstacle.point.x === coordinate.point.x &&
				obstacle.point.y === coordinate.point.y &&
				obstacle.map === coordinate.map
		);
	}
}

export default Obstacles;
