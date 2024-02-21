import Map from '../src/classes/map';
import Point from '../src/classes/point';
import Orientation from '../src/classes/orientation';
import Coordinate from '../src/classes/coordinate';
import Rover from '../src/classes/rover';

describe('Rover', () => {
	let initialPoint: Point;
	let map: Map;
	let initialCoordinate: Coordinate;
	let initialOrientation: Orientation;
	let rover: Rover;

	beforeEach(() => {
		initialPoint = new Point(10, 10);
		map = new Map(initialPoint);
		initialCoordinate = new Coordinate(new Point(0, 0), map);
		initialOrientation = new Orientation(new Point(0, 1));
		rover = new Rover(initialCoordinate, initialOrientation);
	});

	test('should move forward in the Y axis', () => {
		rover.moveForward();
		expect(rover.position).toStrictEqual(
			new Coordinate(new Point(0, 1), map)
		);
	});

	test('should move backward in the Y axis', () => {
		rover.moveBackward();
		expect(rover.position).toStrictEqual(
			new Coordinate(new Point(0, 9), map)
		);
	});

	test('should turn left', () => {
		rover.turnLeft();
		expect(rover.orientation).toStrictEqual(
			new Orientation(new Point(-1, 0))
		);
	});

	test('should turn right', () => {
		rover.turnRight();
		expect(rover.orientation).toStrictEqual(new Orientation(new Point(1, 0)));
	});
});
