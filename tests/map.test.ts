import Coordinate from '../src/classes/coordinate';
import Map from '../src/classes/map';
import Point from '../src/classes/point';

describe('Map', () => {
	let map: Map;
	let initialPoint: Point;
	let otherPoint: Point;
	let obstacles: Point[];

	beforeEach(() => {
		initialPoint = new Point(10, 10);
		obstacles = [new Point(1, 5), new Point(12, 15)];
		map = new Map(initialPoint, obstacles);
		otherPoint = new Point(5, 2);
	});

	test('should normalize a point', () => {
		const result = map.normalizePoint(otherPoint);
		expect(result).toStrictEqual(new Point(5, 2));
	});

	test('should check if a point is an obstacle', () => {
		const result = map.isObstacleThere(new Point(1, 5));
		expect(result).toStrictEqual(true);
	});

	test('should check if a point is not an obstacle', () => {
		const result = map.isObstacleThere(new Point(10, 10));
		expect(result).toStrictEqual(false);
	});
});
