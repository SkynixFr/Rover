import interpreter from '../src/utils/roverInterpreter';
import Rover from '../src/classes/rover';
import Coordinate from '../src/classes/coordinate';
import Orientation from '../src/classes/orientation';
import Point from '../src/classes/point';
import Map from '../src/classes/map';
import PointList from '../src/classes/types/pointList';
import Integer from '../src/classes/types/integer';
import RoverCommand from '../src/classes/types/roverCommand';

describe('Commands', () => {
	let commands1: RoverCommand;
	let commands2: RoverCommand;
	let commands3: RoverCommand;
	let rover: Rover;
	let initialCoordinate: Coordinate;
	let initialOrientation: Orientation;
	let initialPoint: Point;
	let map: Map;
	let initialObstacles: PointList;

	beforeEach(() => {
		initialPoint = new Point(new Integer(10), new Integer(10));
		initialObstacles = new PointList([
			new Point(new Integer(1), new Integer(5)),
			new Point(new Integer(12), new Integer(15))
		]);
		map = new Map(initialPoint, initialObstacles);
		initialCoordinate = new Coordinate(initialPoint, map);
		initialOrientation = new Orientation(
			new Point(new Integer(0), new Integer(1))
		);
		rover = new Rover(initialCoordinate, initialOrientation);
		commands1 = new RoverCommand('frbfl');
		commands2 = new RoverCommand('rflffffffff');
		commands3 = new RoverCommand('iu');
	});

	test('should execute the commands', () => {
		rover = interpreter(commands1, rover);
		expect(rover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(new Integer(0), new Integer(1)), map),
				new Orientation(new Point(new Integer(0), new Integer(1)))
			)
		);
	});

	test('should execute the commands and stop when it finds an obstacle', () => {
		rover = interpreter(commands2, rover);
		expect(rover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(new Integer(1), new Integer(4)), map),
				new Orientation(new Point(new Integer(0), new Integer(1)))
			)
		);
	});

	test("shouldn't execute the commands", () => {
		rover = interpreter(commands3, rover);
		expect(rover).toStrictEqual(
			new Rover(
				new Coordinate(new Point(new Integer(10), new Integer(10)), map),
				new Orientation(new Point(new Integer(0), new Integer(1)))
			)
		);
	});
});
