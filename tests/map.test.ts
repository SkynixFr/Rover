import Map from '../src/classes/map';
import Point from '../src/classes/point';
import Integer from '../src/types/integer';
import PointList from '../src/types/pointList';
import MapBuilder from './utils/mapBuilder';
import Boolean from '../src/types/boolean';

describe('Map', () => {
	let map: Map;
	let otherPoint: Point;
	let initialObstacles: PointList;

	beforeEach(() => {
		initialObstacles = new PointList([
			new Point(new Integer(1), new Integer(5)),
			new Point(new Integer(12), new Integer(15))
		]);
		map = new MapBuilder().withObstacles(initialObstacles).build();
		otherPoint = new Point(new Integer(15), new Integer(12));
	});

	test('should normalize a point', () => {
		const result = map.normalizePoint(otherPoint);
		expect(result).toStrictEqual(new Point(new Integer(5), new Integer(2)));
	});

	test('should check if a point is an obstacle', () => {
		const result = map.isObstacleThere(
			new Point(new Integer(1), new Integer(5))
		);

		expect(result).toStrictEqual(new Boolean(true));
	});

	test('should check if a point is not an obstacle', () => {
		const result = map.isObstacleThere(
			new Point(new Integer(10), new Integer(10))
		);
		expect(result).toStrictEqual(new Boolean(false));
	});
});
