import Map from '../src/domain/map';
import Point from '../src/domain/point';
import Coordinate from '../src/domain/coordinate';
import Integer from '../src/types/integer';
import MapBuilder from './utils/mapBuilder';
import CoordinateBuilder from './utils/coordinateBuilder';
import Localisation from '../src/domain/localisation';
import Orientation from '../src/domain/orientation';

describe('Localisation', () => {
	let orientation: Orientation;
	let position: Coordinate;
	let map: Map;
    let localisation: Localisation;
	beforeEach(() => {
		map = new MapBuilder().default();
		position = new CoordinateBuilder().default();
		orientation = new Orientation(new Point(new Integer(0), new Integer(1)));
        localisation = new Localisation(position, orientation);

	});

	test('should move forward', () => {
		const newLocalisation = localisation.moveForward();
        const testLocalisation = new Localisation(
            new Coordinate(new Point(new Integer(0), new Integer(1)), map),
            orientation)
		expect(newLocalisation).toStrictEqual(
			testLocalisation
		);
	});

    test('should move backward', () => {
		const newLocalisation = localisation.moveBackward();
        const testLocalisation = new Localisation(
            new Coordinate(new Point(new Integer(0), new Integer(9)), map),
            orientation)
		expect(newLocalisation).toStrictEqual(
			testLocalisation
		);
	});

	test('should turn left', () => {
		const newLocalisation = localisation.turnLeft();
        const testLocalisation = new Localisation(
            position,
            new Orientation(new Point(new Integer(-1), new Integer(0))))
		expect(newLocalisation).toStrictEqual(
			testLocalisation
		);
	});

    test('should turn right', () => {
		const newLocalisation = localisation.turnRight();
        const testLocalisation = new Localisation(
            position,
            new Orientation(new Point(new Integer(1), new Integer(0))))
		expect(newLocalisation).toStrictEqual(
			testLocalisation
		);
	});

	test('should display the localisation', () => {
		expect(localisation.display()).toStrictEqual(
			`(position: (0, 0), orientation: (0, 1))`
		);
	});	
});
