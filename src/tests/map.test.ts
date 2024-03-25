import Map from '../classes/map';
import Point from '../classes/point';
import Integer from '../types/integer';
import PointList from '../types/pointList';
import MapBuilder from './utils/mapBuilder';

describe('Map', () => {
	let map: Map;
	let otherPoint: Point;
	let initialObstacles: PointList;
	const callback = jest.fn();

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

	test('should not call callback when obstacle is present', () => {
		map.isObstacleThere(new Point(new Integer(1), new Integer(5)), callback);

		expect(callback).not.toHaveBeenCalled();
	});

	test('should call callback when no obstacle is present', () => {
		map.isObstacleThere(
			new Point(new Integer(10), new Integer(10)),
			callback
		);

		expect(callback).toHaveBeenCalled();
	});
});
