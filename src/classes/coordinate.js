"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computeModulo_1 = __importDefault(require("../utils/computeModulo"));
class Coordinate {
    constructor(x, y, map) {
        this.map = map;
        this.x = (0, computeModulo_1.default)(x, this.map.lengthX);
        this.y = (0, computeModulo_1.default)(y, this.map.lengthY);
    }
    setPosition(x, y) {
        return new Coordinate(x, y, this.map);
        // this.x = mod(x, this.map.lengthX);
        // this.y = mod(y, this.map.lengthY);
    }
}
exports.default = Coordinate;
