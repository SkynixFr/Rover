import Map from '../domain/map';
import Point from '../domain/point';
import Coordinate from '../domain/coordinate';
import Integer from '../types/integer';
import MapBuilder from './utils/mapBuilder';
import CoordinateBuilder from './utils/coordinateBuilder';

describe('Coordinate', () => {
	let vector: Point;
	let coordinate: Coordinate;
	let map: Map;
	beforeEach(() => {
		map = new MapBuilder().default();
		coordinate = new CoordinateBuilder().default();
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