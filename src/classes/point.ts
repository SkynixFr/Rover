import mod from '../utils/computeModulo';

class Point {
	readonly x: number;
	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x === -0 ? 0 : x;
		this.y = y === -0 ? 0 : y;
	}

	addPoint(otherPoint: Point) {
		return new Point(this.x + otherPoint.x, this.y + otherPoint.y);
	}

	subtractPoint(otherPoint: Point) {
		return new Point(this.x - otherPoint.x, this.y - otherPoint.y);
	}

	moduloPoint(otherPoint: Point) {
		return new Point(mod(this.x, otherPoint.x), mod(this.y, otherPoint.y));
	}
}

export default Point;
