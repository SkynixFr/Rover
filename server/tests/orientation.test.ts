import Point from '../src/classes/point';
import Orientation from '../src/classes/orientation';
import Integer from '../src/types/integer';

describe('Orientation', () => {
	let orientation: Orientation;
	let initialVector: Point;
	beforeEach(() => {
		initialVector = new Point(new Integer(0), new Integer(1));
		orientation = new Orientation(initialVector);
	});

	test('should turn left', () => {
		const result = orientation.turnLeft();
		expect(result).toStrictEqual(
			new Orientation(new Point(new Integer(-1), new Integer(0)))
		);
	});

	test('should turn right', () => {
		const result = orientation.turnRight();
		expect(result).toStrictEqual(
			new Orientation(new Point(new Integer(1), new Integer(0)))
		);
	});
});
