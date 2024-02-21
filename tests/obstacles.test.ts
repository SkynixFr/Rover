import Point from '../src/classes/point';
import Obstacles from '../src/classes/obstacles';
import Coordinate from '../src/classes/coordinate';
import Map from '../src/classes/map';

describe('Obstacles', () => {
	let obstacles: Obstacles;
	let initialPoint: Point;
	let initialCoordinate: Coordinate;
	let otherPoint: Coordinate;
	let map: Map;
	beforeEach(() => {
		initialPoint = new Point(10, 10);
		map = new Map(initialPoint);
		obstacles = new Obstacles([
			new Coordinate(new Point(1, 5), map),
			new Coordinate(new Point(15, 12), map)
		]);
		initialCoordinate = new Coordinate(new Point(10, 10), map);
		otherPoint = new Coordinate(new Point(15, 12), map);
	});

	test('should check if a point is an obstacle', () => {
		const result = obstacles.isObstacleThere(otherPoint);
		expect(result).toStrictEqual(true);
	});

	test('should check if a point is not an obstacle', () => {
		const result = obstacles.isObstacleThere(initialCoordinate);
		expect(result).toStrictEqual(false);
	});
});
