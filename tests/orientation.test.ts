import Point from '../src/domain/point';
import Orientation from '../src/domain/orientation';
import Integer from '../src/types/integer';

describe('Orientation', () => {
	let orientation: Orientation;
	let initialVector: Point;
	beforeEach(() => {
		initialVector = new Point(new Integer(0), new Integer(1));
		orientation = new Orientation(initialVector);
	});

	test('should turn clockwise', () => {
		const result = orientation.turnClockwise();
		expect(result).toStrictEqual(
			new Orientation(new Point(new Integer(1), new Integer(0)))
		);
	});

	test('should turn anti clockwise', () => {
		const result = orientation.turnAntiClockwise();
		expect(result).toStrictEqual(
			new Orientation(new Point(new Integer(-1), new Integer(0)))
		);
	});
	test('should display the orientation', () => {
		expect(orientation.display()).toStrictEqual(
			`(0, 1)`
		);
	});	
});
