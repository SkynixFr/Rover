import { describe, expect, test } from '@jest/globals';
import Map from '../src/classes/map/map';
import MapElement from '../src/classes/mapElement/mapElement';

describe('Rover', () => {
	let rover: MapElement;
	let map: Map;

	beforeEach(() => {
		rover = new MapElement(0, 0, 0);
		map = new Map(10, 10, rover);
		map.mapElementCoordinates(rover);
	});

	test('should move forward in the Y axis', () => {
		rover.moveForwardElement();
		map.mapElementCoordinates(rover);
		expect(rover.getPositionElement()).toBe('0 1 0');
	});

	test('should move foward in the X axis', () => {
		rover.orientation = 90;
		rover.moveForwardElement();
		map.mapElementCoordinates(rover);
		expect(rover.getPositionElement()).toBe('1 0 90');
	});

	test('should move backward', () => {
		rover.moveBackwardElement();
		map.mapElementCoordinates(rover);
		expect(rover.getPositionElement()).toBe('0 -1 0');
	});

	test('should turn left', () => {
		rover.turnLeftElement();
		map.mapElementCoordinates(rover);
		expect(rover.getPositionElement()).toBe('0 0 270');
	});

	test('should turn right', () => {
		rover.turnRightElement();
		map.mapElementCoordinates(rover);
		expect(rover.getPositionElement()).toBe('0 0 90');
	});

	test('should go to the opposite position when the element go to the edge of the map ', () => {
		rover.x = 10;
		map.mapElementCoordinates(rover);
		expect(rover.getPositionElement()).toBe('0 0 0');
	});
});
