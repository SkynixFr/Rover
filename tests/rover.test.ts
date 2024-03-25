import Map from '../src/domain/map';
import Point from '../src/domain/point';
import Orientation from '../src/domain/orientation';
import Rover from '../src/domain/rover';
import PointList from '../src/types/pointList';
import Integer from '../src/types/integer';
import MapBuilder from './utils/mapBuilder';
import RoverBuilder from './utils/roverBuilder';
import CoordinateBuilder from './utils/coordinateBuilder';
import Localisation from '../src/domain/localisation';
import LocalisationBuilder from './utils/localisationBuilder';

describe('Rover', () => {
	let map: Map;
	let mapWithObstacles: Map;
	let initialObstacles: PointList;
	let rover: Rover;

	beforeEach(() => {
		initialObstacles = new PointList([
			new Point(new Integer(1), new Integer(5)),
			new Point(new Integer(12), new Integer(15))
		]);
		map = new MapBuilder().default();
		mapWithObstacles = new MapBuilder()
			.withObstacles(initialObstacles)
			.build();
		rover = new RoverBuilder().default();
	});

	test('should move forward', () => {
		const newRover = rover.moveForward();
		expect(newRover).toStrictEqual(
			new RoverBuilder()
				.withLocalisation(
					new LocalisationBuilder()
						.withCoordinate(
							new CoordinateBuilder()
								.withPoint(new Point(new Integer(0), new Integer(1)))
								.withMap(map)
								.build()
						)
						.build()
				)
				.build()
		);
	});

	test('should move backward', () => {
		const newRover = rover.moveBackward();
		expect(newRover).toStrictEqual(
			new RoverBuilder()
				.withLocalisation(
					new LocalisationBuilder()
						.withCoordinate(
							new CoordinateBuilder()
								.withPoint(new Point(new Integer(0), new Integer(-1)))
								.withMap(map)
								.build()
						)
						.build()
				)
				.build()
		);
	});

	test('should turn left', () => {
		const newRover = rover.turnLeft();
		expect(newRover).toStrictEqual(
			new RoverBuilder()
				.withLocalisation(
					new LocalisationBuilder()
						.withOrientation(
							new Orientation(new Point(new Integer(-1), new Integer(0)))
						)
						.build()
				)
				.build()
		);
	});

	test('should turn right', () => {
		const newRover = rover.turnRight();
		expect(newRover).toStrictEqual(
			new RoverBuilder()
				.withLocalisation(
					new LocalisationBuilder()
						.withOrientation(
							new Orientation(new Point(new Integer(1), new Integer(0)))
						)
						.build()
				)
				.build()
		);
	});

	test('should stop when it finds an obstacle, forward', () => {
		const rover2 = new RoverBuilder()
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
			.build();
		const newRover = rover2.moveForward();
		expect(newRover).toStrictEqual(rover2);
	});

	test('should stop when it finds an obstacle, backward', () => {
		const rover3 = new RoverBuilder()
			.withMap(mapWithObstacles)
			.withLocalisation(
				new LocalisationBuilder()
					.withCoordinate(
						new CoordinateBuilder()
							.withPoint(new Point(new Integer(1), new Integer(6)))
							.withMap(mapWithObstacles)
							.build()
					)
					.build()
			)
			.build();
		const newRover = rover3.moveBackward();
		expect(newRover).toStrictEqual(rover3);
	});
});
