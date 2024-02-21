import Point from '../src/classes/point';

import { describe, expect, test } from '@jest/globals';

describe('Point', () => {
	let point1: Point;
	let point2: Point;
	beforeEach(() => {
		point1 = new Point(1, 2);
		point2 = new Point(3, 4);
	});

	test('should add two points', () => {
		const result = point1.addPoint(point2);
		expect(result).toStrictEqual(new Point(4, 6));
	});

	test('should subtract two points', () => {
		const result = point2.subtractPoint(point1);
		expect(result).toStrictEqual(new Point(2, 2));
	});

	test('should modulo two points', () => {
		const result = point2.moduloPoint(point1);
		expect(result).toStrictEqual(new Point(0, 0));
	});
});
