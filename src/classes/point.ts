import mod from '../utils/computeModulo';

// Objet de valeur
class Point {
	readonly x: number;
	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x === -0 ? 0 : x;
		this.y = y === -0 ? 0 : y;
	}

	add(otherPoint: Point) {
		return new Point(this.x + otherPoint.x, this.y + otherPoint.y);
	}

	subtract(otherPoint: Point) {
		return new Point(this.x - otherPoint.x, this.y - otherPoint.y);
	}

	modulo(otherPoint: Point) {
		return new Point(mod(this.x, otherPoint.x), mod(this.y, otherPoint.y));
	}
}

export default Point;
