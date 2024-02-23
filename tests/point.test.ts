import Point from '../src/classes/point';

import { describe, expect, test } from '@jest/globals';
import Integer from '../src/types/integer';

describe('Point', () => {
	let point1: Point;
	let point2: Point;
	beforeEach(() => {
		point1 = new Point(new Integer(1), new Integer(2));
		point2 = new Point(new Integer(3), new Integer(4));
	});

	test('should add two points', () => {
		const result = point1.add(point2);
		expect(result).toStrictEqual(new Point(new Integer(4), new Integer(6)));
	});

	test('should subtract two points', () => {
		const result = point2.subtract(point1);
		expect(result).toStrictEqual(new Point(new Integer(2), new Integer(2)));
	});

	test('should modulo two points', () => {
		const result = point2.modulo(point1);
		expect(result).toStrictEqual(new Point(new Integer(0), new Integer(0)));
	});
});
