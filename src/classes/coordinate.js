"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coordinate {
    constructor(x, y, map) {
        this.x = x % map.lengthX;
        this.y = y % map.lengthY;
    }
}
exports.default = Coordinate;
