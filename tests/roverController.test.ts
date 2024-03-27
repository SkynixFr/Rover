import RoverController from '../src/missionControl/roverController';
import Rover from '../src/domain/rover';
import Coordinate from '../src/domain/coordinate';
import Point from '../src/domain/point';
import Map from '../src/domain/map';
import PointList from '../src/types/pointList';
import Integer from '../src/types/integer';
import RoverCommand from '../src/domain/roverCommand';
import RoverBuilder from './utils/roverBuilder';
import MapBuilder from './utils/mapBuilder';
import CoordinateBuilder from './utils/coordinateBuilder';
import LocalisationBuilder from './utils/localisationBuilder';

describe('Commands', () => {
	let roverController: RoverController;
	let rover: Rover;
	let testRover: Rover;
	let initialCoordinate: Coordinate;
	let mapWithObstacles: Map;
	let initialObstacles: PointList;

	beforeEach(() => {
		initialObstacles = new PointList([
			new Point(new Integer(1), new Integer(5)),
			new Point(new Integer(12), new Integer(15))
		]);
		mapWithObstacles = new MapBuilder()
			.withObstacles(initialObstacles)
			.build();
		initialCoordinate = new CoordinateBuilder()
			.withMap(mapWithObstacles)
			.build();
		rover = new RoverBuilder()
			.withMap(mapWithObstacles)
			.withLocalisation(
				new LocalisationBuilder().withCoordinate(initialCoordinate).build()
			)
			.build();
		testRover = rover;
		roverController = new RoverController(mapWithObstacles);
	});

	test('should move forward', () => {
		let commands = new RoverCommand('f');
		const newRover = roverController.interpretCommands(commands, rover);
		const newTestRover = testRover.moveForward();

		expect(newRover).toStrictEqual(
			newTestRover
		);
	});

	test('should move backward', () => {
		let commands = new RoverCommand('b');
		const newRover = roverController.interpretCommands(commands, rover);
		const newTestRover = testRover.moveBackward();

		expect(newRover).toStrictEqual(
			newTestRover
		);
	});

	test('should turn clockwise', () => {
		let commands = new RoverCommand('c');
		const newRover = roverController.interpretCommands(commands, rover);
		const newTestRover = testRover.turnClockwise();

		expect(newRover).toStrictEqual(
			newTestRover
		);
	});

	test('should turn anti clockwise', () => {
		let commands = new RoverCommand('a');
		const newRover = roverController.interpretCommands(commands, rover);
		const newTestRover = testRover.turnAntiClockwise();

		expect(newRover).toStrictEqual(
			newTestRover
		);
	});

	test('should execute the commands', () => {
		let commands1 = new RoverCommand('fcbfa');
		const newRover = roverController.interpretCommands(commands1, rover);
		const newTestRover = testRover.moveForward()
			.turnClockwise()
			.moveBackward()
			.moveForward()
			.turnAntiClockwise();

		expect(newRover).toStrictEqual(
			newTestRover
		);
	});

	test('should execute the commands and stop when it finds an obstacle', () => {
		let commands2 = new RoverCommand('cfaffffff');
		const newRover = roverController.interpretCommands(commands2, rover);
		const newTestRover = testRover.turnClockwise()
			.moveForward()
			.turnAntiClockwise()
			.moveForward()
			.moveForward()
			.moveForward()
			.moveForward()
			.moveForward();

		expect(newRover).toStrictEqual(
			newTestRover
		);
	});

	test("shouldn't execute the commands", () => {
		let commands3 = new RoverCommand('i');
		const newRover = roverController.interpretCommands(commands3, rover);
		expect(newRover).toStrictEqual(rover);
	});
});
