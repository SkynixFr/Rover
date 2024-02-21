import Map from '../src/classes/map';
import Point from '../src/classes/point';
import Coordinate from '../src/classes/coordinate';

describe('Coordinate', () => {
	let map: Map;
	let initialPoint: Point;
	let vector: Point;
	let coordinate: Coordinate;
	beforeEach(() => {
		initialPoint = new Point(10, 10);
		map = new Map(initialPoint);
		coordinate = new Coordinate(initialPoint, map);
		vector = new Point(1, 2);
	});

	test('should increment the coordinate', () => {
		const newCoordinate = coordinate.increaseCoordinate(vector);
		expect(newCoordinate).toStrictEqual(new Coordinate(new Point(1, 2), map));
	});

	test('should decrement the coordinate', () => {
		const newCoordinate = coordinate.decreaseCoordinate(vector);
		expect(newCoordinate).toStrictEqual(new Coordinate(new Point(9, 8), map));
	});
});
