import Commands from '../src/classes/commands';
import Rover from '../src/classes/rover';
import Coordinate from '../src/classes/coordinate';
import Orientation from '../src/classes/orientation';
import Point from '../src/classes/point';
import Map from '../src/classes/map';
import Obstacles from '../src/classes/obstacles';

describe('Commands', () => {
	let commands: Commands;
	let rover: Rover;
	let initialCoordinate: Coordinate;
	let initialOrientation: Orientation;
	let initialPoint: Point;
	let map: Map;
	let initialObstacles: Obstacles;

	beforeEach(() => {
		initialPoint = new Point(10, 10);
		map = new Map(initialPoint);
		initialCoordinate = new Coordinate(initialPoint, map);
		initialOrientation = new Orientation(new Point(0, 1));
		rover = new Rover(initialCoordinate, initialOrientation);
		initialObstacles = new Obstacles([
			new Coordinate(new Point(1, 5), map),
			new Coordinate(new Point(15, 12), map)
		]);
		commands = new Commands('frbfl');
	});

	test('should execute the commands', () => {
		rover = commands.sequenceOfCommands(initialObstacles, rover);
		expect(rover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(0, 1), map),
				new Orientation(new Point(0, 1))
			)
		);
	});

	test('should execute the commands and stop when it finds an obstacle', () => {
		const newCommands = new Commands('rflffffffff');
		rover = newCommands.sequenceOfCommands(initialObstacles, rover);
		expect(rover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(1, 4), map),
				new Orientation(new Point(0, 1))
			)
		);
	});
});
