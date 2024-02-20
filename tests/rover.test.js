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
        (0, globals_1.expect)(rover.getPositionElement()).toStrictEqual(new coordinate_1.default(0, 1, map));
    });
    (0, globals_1.test)('should move foward in the X axis', () => {
        rover.orientation.degree = 90;
        rover.move('f');
        (0, globals_1.expect)(rover.getPositionElement()).toStrictEqual(new coordinate_1.default(1, 0, map));
    });
    (0, globals_1.test)('should move backward in the Y axis', () => {
        rover.move('b');
        (0, globals_1.expect)(rover.getPositionElement()).toStrictEqual(new coordinate_1.default(0, 9, map));
    });
    (0, globals_1.test)('should move backward in the X axis', () => {
        rover.orientation.degree = 90;
        rover.move('b');
        (0, globals_1.expect)(rover.getPositionElement()).toStrictEqual(new coordinate_1.default(9, 0, map));
    });
    (0, globals_1.test)('should rotate right', () => {
        rover.turn('r');
        (0, globals_1.expect)(rover.getOrientationElement()).toStrictEqual(new orientation_1.default(90));
    });
    (0, globals_1.test)('should rotate left', () => {
        rover.turn('l');
        (0, globals_1.expect)(rover.getOrientationElement()).toStrictEqual(new orientation_1.default(270));
    });
    (0, globals_1.test)('should ...', () => {
        rover.turn('l');
        rover.move('f');
        rover.turn('r');
        rover.turn('r');
        rover.move('b');
        (0, globals_1.expect)(rover.getPositionElement()).toStrictEqual(new coordinate_1.default(8, 0, map));
        (0, globals_1.expect)(rover.getOrientationElement()).toStrictEqual(new orientation_1.default(90));
    });
    (0, globals_1.test)('should go to the opposite position when the element go to the edge of the map ', () => {
        rover.position.setPosition(10, 0);
        (0, globals_1.expect)(rover.getPositionElement()).toStrictEqual(new coordinate_1.default(0, 0, map));
    });
});
