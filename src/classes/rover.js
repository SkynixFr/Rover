"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rover {
    constructor(position, orientation) {
        this.position = position;
        this.orientation = orientation;
    }
    move(direction) {
        switch (this.orientation.degree) {
            case 0:
                this.position.y += direction === 'f' ? 1 : -1;
                break;
            case 90:
                this.position.x += direction === 'f' ? 1 : -1;
                break;
            case 180:
                this.position.y += direction === 'f' ? -1 : 1;
                break;
            case 270:
                this.position.x += direction === 'f' ? -1 : 1;
                break;
        }
    }
    turn(direction) {
        this.orientation.degree += direction === 'l' ? 270 : 90;
        this.orientation.degree %= 360;
    }
    getPositionElement() {
        return this.position;
    }
    getOrientationElement() {
        return this.orientation;
    }
}
exports.default = Rover;
