import Map from '../src/classes/map';
import Point from '../src/classes/point';
import Obstacles from '../src/classes/obstacles';
import Orientation from '../src/classes/orientation';
import Coordinate from '../src/classes/coordinate';
import Rover from '../src/classes/rover';
import Commands from '../src/classes/commands';

describe('Rover', () => {
	let initialPoint: Point;
	let map: Map;
	let initialCoordinate: Coordinate;
	let initialOrientation: Orientation;
	let rover: Rover;
	let initialCommands: Commands;
	let initialObstacles: Obstacles;

	beforeEach(() => {
		initialPoint = new Point(10, 10);
		map = new Map(initialPoint);
		initialCoordinate = new Coordinate(new Point(0, 0), map);
		initialOrientation = new Orientation(new Point(0, 1));
		rover = new Rover(initialCoordinate, initialOrientation);
		initialCommands = new Commands('frblf');
		initialObstacles = new Obstacles([
			new Coordinate(new Point(1, 5), map),
			new Coordinate(new Point(15, 12), map)
		]);
	});

	test('should move forward in the Y axis', () => {
		const newRover = rover.moveForward(initialObstacles);
		expect(newRover).toStrictEqual(
			new Rover(new Coordinate(new Point(0, 1), map), initialOrientation)
		);
	});

	test('should move backward in the Y axis', () => {
		const newRover = rover.moveBackward(initialObstacles);
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
		rover.position = new Coordinate(new Point(1, 4), map);
		const newRover = rover.moveForward(initialObstacles);
		expect(newRover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(1, 4), map),
				new Orientation(new Point(0, 1))
			)
		);
	});

	test('should stop when it finds an obstacle, backward', () => {
		rover.position = new Coordinate(new Point(1, 6), map);
		const newRover = rover.moveBackward(initialObstacles);
		expect(newRover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(1, 6), map),
				new Orientation(new Point(0, 1))
			)
		);
	});
});
