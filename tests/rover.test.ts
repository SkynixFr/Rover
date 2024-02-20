import { describe, expect, test } from '@jest/globals';
import Map from '../src/classes/map';
import Rover from '../src/classes/rover';
import Coordinate from '../src/classes/coordinate';
import Orientation from '../src/classes/orientation';

describe('Rover', () => {
	let rover: Rover;
	let map: Map;
	let initialCoordinate: Coordinate;
	let initialOrientation: Orientation;

	beforeEach(() => {
		map = new Map(10, 10);
		initialCoordinate = new Coordinate(0, 0, map);
		initialOrientation = new Orientation(0);
		rover = new Rover(initialCoordinate, initialOrientation);
	});

	test('should move forward in the Y axis', () => {
		rover.move('f');
		expect(rover.getPositionElement()).toStrictEqual(
			new Coordinate(0, 1, map)
		);
	});

	test('should move foward in the X axis', () => {
		rover.orientation.degree = 90;
		rover.move('f');
		expect(rover.getPositionElement()).toStrictEqual(
			new Coordinate(1, 0, map)
		);
	});

	test('should move backward in the Y axis', () => {
		rover.move('b');
		expect(rover.getPositionElement()).toStrictEqual(
			new Coordinate(0, 9, map)
		);
	});

	test('should move backward in the X axis', () => {
		rover.orientation.degree = 90;
		rover.move('b');
		expect(rover.getPositionElement()).toStrictEqual(
			new Coordinate(9, 0, map)
		);
	});

	test('should rotate right', () => {
		rover.turn('r');
		expect(rover.getOrientationElement()).toStrictEqual(new Orientation(90));
	});

	test('should rotate left', () => {
		rover.turn('l');
		expect(rover.getOrientationElement()).toStrictEqual(new Orientation(270));
	});

	test('should ...', () => {
		rover.turn('l');
		rover.move('f');
		rover.turn('r');
		rover.turn('r');
		rover.move('b');
		expect(rover.getPositionElement()).toStrictEqual(
			new Coordinate(8, 0, map)
		);
		expect(rover.getOrientationElement()).toStrictEqual(new Orientation(90));
	});

	test('should go to the opposite position when the element go to the edge of the map ', () => {
		rover.position.setPosition(10, 0);
		expect(rover.getPositionElement()).toStrictEqual(
			new Coordinate(0, 0, map)
		);
	});
});
