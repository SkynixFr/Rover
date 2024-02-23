import Map from '../src/classes/map';
import Point from '../src/classes/point';
import Coordinate from '../src/classes/coordinate';
import Integer from '../src/classes/types/integer';

describe('Coordinate', () => {
	let map: Map;
	let initialPoint: Point;
	let vector: Point;
	let coordinate: Coordinate;
	beforeEach(() => {
		initialPoint = new Point(new Integer(10), new Integer(10));
		map = new Map(initialPoint);
		coordinate = new Coordinate(initialPoint, map);
		vector = new Point(new Integer(1), new Integer(2));
	});

	test('should increment the coordinate', () => {
		const newCoordinate = coordinate.increase(vector);
		expect(newCoordinate).toStrictEqual(
			new Coordinate(new Point(new Integer(1), new Integer(2)), map)
		);
	});

	test('should decrement the coordinate', () => {
		const newCoordinate = coordinate.decrease(vector);
		expect(newCoordinate).toStrictEqual(
			new Coordinate(new Point(new Integer(9), new Integer(8)), map)
		);
	});
});
