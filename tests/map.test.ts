import Coordinate from '../src/classes/coordinate';
import Map from '../src/classes/map';
import Point from '../src/classes/point';
import Integer from '../src/classes/types/integer';
import PointList from '../src/classes/types/pointList';

describe('Map', () => {
	let map: Map;
	let initialPoint: Point;
	let otherPoint: Point;
	let obstacles: PointList;

	beforeEach(() => {
		initialPoint = new Point(new Integer(10), new Integer(10));
		obstacles = new PointList([
			new Point(new Integer(1), new Integer(5)),
			new Point(new Integer(12), new Integer(15))
		]);
		map = new Map(initialPoint, obstacles);
		otherPoint = new Point(new Integer(5), new Integer(2));
	});

	test('should normalize a point', () => {
		const result = map.normalizePoint(otherPoint);
		expect(result).toStrictEqual(new Point(new Integer(5), new Integer(2)));
	});

	test('should check if a point is an obstacle', () => {
		console.log(obstacles);

		const result = map.isObstacleThere(
			new Point(new Integer(1), new Integer(5))
		);
		expect(result).toStrictEqual(true);
	});

	test('should check if a point is not an obstacle', () => {
		const result = map.isObstacleThere(
			new Point(new Integer(10), new Integer(10))
		);
		expect(result).toStrictEqual(false);
	});
});
