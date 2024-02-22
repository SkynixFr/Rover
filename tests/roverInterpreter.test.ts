import interpreter from '../src/utils/roverInterpreter';
import Rover from '../src/classes/rover';
import Coordinate from '../src/classes/coordinate';
import Orientation from '../src/classes/orientation';
import Point from '../src/classes/point';
import Map from '../src/classes/map';

describe('Commands', () => {
	let commands1: string;
	let commands2: string;
	let rover: Rover;
	let initialCoordinate: Coordinate;
	let initialOrientation: Orientation;
	let initialPoint: Point;
	let map: Map;
	let initialObstacles: Point[];

	beforeEach(() => {
		initialPoint = new Point(10, 10);
		initialObstacles = [new Point(1, 5), new Point(15, 12)];
		map = new Map(initialPoint, initialObstacles);
		initialCoordinate = new Coordinate(initialPoint, map);
		initialOrientation = new Orientation(new Point(0, 1));
		rover = new Rover(initialCoordinate, initialOrientation);
		commands1 = 'frbfl';
		commands2 = 'rflffffffff';
	});

	test('should execute the commands', () => {
		rover = interpreter(commands1, rover);
		expect(rover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(0, 1), map),
				new Orientation(new Point(0, 1))
			)
		);
	});

	test('should execute the commands and stop when it finds an obstacle', () => {
		rover = interpreter(commands2, rover);
		expect(rover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(1, 4), map),
				new Orientation(new Point(0, 1))
			)
		);
	});
});
