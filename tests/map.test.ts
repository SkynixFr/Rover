import Map from '../src/classes/map';
import Point from '../src/classes/point';

describe('Map', () => {
	let map: Map;
	let initialPoint: Point;
	let otherPoint: Point;

	beforeEach(() => {
		initialPoint = new Point(10, 10);
		map = new Map(initialPoint);
		otherPoint = new Point(5, 2);
	});

	test('should normalize a point', () => {
		const result = map.normalizePoint(otherPoint);
		expect(result).toStrictEqual(new Point(5, 2));
	});
});
