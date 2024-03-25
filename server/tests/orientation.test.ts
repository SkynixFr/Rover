import Point from '../src/classes/point';
import Orientation from '../src/classes/orientation';

describe('Orientation', () => {
	let orientation: Orientation;
	let initialVector: Point;
	beforeEach(() => {
		initialVector = new Point(1, 0);
		orientation = new Orientation(initialVector);
	});

	test('should turn left', () => {
		const result = orientation.turnLeft();
		expect(result).toStrictEqual(new Orientation(new Point(0, 1)));
	});

	test('should turn right', () => {
		const result = orientation.turnRight();
		expect(result).toStrictEqual(new Orientation(new Point(0, -1)));
	});
});
