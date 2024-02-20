"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const map_1 = __importDefault(require("../src/classes/map"));
const rover_1 = __importDefault(require("../src/classes/rover"));
const coordinate_1 = __importDefault(require("../src/classes/coordinate"));
const orientation_1 = __importDefault(require("../src/classes/orientation"));
(0, globals_1.describe)('Rover', () => {
    let rover;
    let map;
    let initialCoordinate;
    let initialOrientation;
    beforeEach(() => {
        map = new map_1.default(10, 10);
        initialCoordinate = new coordinate_1.default(0, 0, map);
        initialOrientation = new orientation_1.default(0);
        rover = new rover_1.default(initialCoordinate, initialOrientation);
    });
    (0, globals_1.test)('should move forward in the Y axis', () => {
        rover.move('f');
        console.log(typeof rover.getPositionElement());
        (0, globals_1.expect)(rover.getPositionElement()).toBe(new coordinate_1.default(0, 1, map));
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
