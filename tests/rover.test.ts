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
	let rover2: Rover;
	let rover3: Rover;
	let initialObstacles: Point[];

	beforeEach(() => {
		initialPoint = new Point(10, 10);
		initialObstacles = [new Point(1, 5), new Point(15, 12)];
		map = new Map(initialPoint, initialObstacles);
		initialCoordinate = new Coordinate(new Point(0, 0), map);
		initialOrientation = new Orientation(new Point(0, 1));
		rover = new Rover(initialCoordinate, initialOrientation);
		rover2 = new Rover(
			new Coordinate(new Point(1, 4), map),
			initialOrientation
		);
		rover3 = new Rover(
			new Coordinate(new Point(1, 6), map),
			initialOrientation
		);
	});

	test('should move forward in the Y axis', () => {
		const newRover = rover.moveForward();
		expect(newRover).toStrictEqual(
			new Rover(new Coordinate(new Point(0, 1), map), initialOrientation)
		);
	});

	test('should move backward in the Y axis', () => {
		const newRover = rover.moveBackward();
		expect(newRover).toStrictEqual(
			new Rover(new Coordinate(new Point(0, 9), map), initialOrientation)
		);
	});

	test('should turn left', () => {
		const newRover = rover.turnLeft();
		expect(newRover).toStrictEqual(
			new Rover(initialCoordinate, new Orientation(new Point(-1, 0)))
		);
	});

	test('should turn right', () => {
		const newRover = rover.turnRight();
		expect(newRover).toStrictEqual(
			new Rover(initialCoordinate, new Orientation(new Point(1, 0)))
		);
	});

	test('should stop when it finds an obstacle, forward', () => {
		const newRover = rover2.moveForward();
		expect(newRover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(1, 4), map),
				new Orientation(new Point(0, 1))
			)
		);
	});

	test('should stop when it finds an obstacle, backward', () => {
		const newRover = rover3.moveBackward();
		expect(newRover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(1, 6), map),
				new Orientation(new Point(0, 1))
			)
		);
	});
});
