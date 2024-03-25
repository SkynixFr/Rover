import InterpreteCommands from '../utils/roverInterpreter';
import Rover from '../classes/rover';
import Coordinate from '../classes/coordinate';
import Point from '../classes/point';
import Map from '../classes/map';
import PointList from '../types/pointList';
import Integer from '../types/integer';
import RoverCommand from '../types/roverCommand';
import RoverBuilder from './utils/roverBuilder';
import MapBuilder from './utils/mapBuilder';
import CoordinateBuilder from './utils/coordinateBuilder';
import LocalisationBuilder from './utils/localisationBuilder';

describe('Commands', () => {
	let rover: Rover;
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
	});

	test('should execute the commands', () => {
		let commands1 = new RoverCommand('frbfl');
		const newRover = InterpreteCommands(commands1, rover);

		expect(newRover).toStrictEqual(
			new RoverBuilder()
				.withMap(mapWithObstacles)
				.withLocalisation(
					new LocalisationBuilder()
						.withCoordinate(
							new CoordinateBuilder()
								.withPoint(new Point(new Integer(0), new Integer(1)))
								.withMap(mapWithObstacles)
								.build()
						)
						.build()
				)
				.build()
		);
	});

	test('should execute the commands and stop when it finds an obstacle', () => {
		let commands2 = new RoverCommand('rflffffffff');
		const newRover = InterpreteCommands(commands2, rover);
		expect(newRover).toStrictEqual(
			new RoverBuilder()
				.withMap(mapWithObstacles)
				.withLocalisation(
					new LocalisationBuilder()
						.withCoordinate(
							new CoordinateBuilder()
								.withPoint(new Point(new Integer(1), new Integer(4)))
								.withMap(mapWithObstacles)
								.build()
						)
						.build()
				)
				.build()
		);
	});

	test("shouldn't execute the commands", () => {
		let commands3 = new RoverCommand('i');
		const newRover = InterpreteCommands(commands3, rover);
		expect(newRover).toStrictEqual(rover);
	});
});
