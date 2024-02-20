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
		console.log(typeof rover.getPositionElement());
		expect(rover.getPositionElement()).toBe(new Coordinate(0, 1, map));
	});

	// test('should move foward in the X axis', () => {
	// 	rover.orientation = 90;
	// 	rover.moveForwardElement();
	// 	map.computeMapElementCoordinates(rover);
	// 	expect(rover.getPositionElement()).toBe('1 0 90');
	// });

	// test('should move backward', () => {
	// 	rover.moveBackwardElement();
	// 	map.computeMapElementCoordinates(rover);
	// 	expect(rover.getPositionElement()).toBe('0 -1 0');
	// });

	// test('should turn left', () => {
	// 	rover.turnLeftElement();
	// 	map.computeMapElementCoordinates(rover);
	// 	expect(rover.getPositionElement()).toBe('0 0 270');
	// });

	// test('should turn right', () => {
	// 	rover.turnRightElement();
	// 	map.computeMapElementCoordinates(rover);
	// 	expect(rover.getPositionElement()).toBe('0 0 90');
	// });

	// test('should go to the opposite position when the element go to the edge of the map ', () => {
	// 	rover.x = 10;
	// 	map.computeMapElementCoordinates(rover);
	// 	expect(rover.getPositionElement()).toBe('0 0 0');
	// });
});
