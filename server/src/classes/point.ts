import Integer from '../types/integer';

// Objet de valeur
class Point {
	readonly x: Integer;
	readonly y: Integer;

	constructor(x: Integer, y: Integer) {
		this.x = x.normalize();
		this.y = y.normalize();
	}

	add(otherPoint: Point) {
		return new Point(this.x.add(otherPoint.x), this.y.add(otherPoint.y));
	}

	subtract(otherPoint: Point) {
		return new Point(
			this.x.subtract(otherPoint.x),
			this.y.subtract(otherPoint.y)
		);
	}

	modulo(otherPoint: Point) {
		return new Point(
			this.x.modulo(otherPoint.x),
			this.y.modulo(otherPoint.y)
		);
	}

	scalarMultiply(otherPoint: Point) {
		return new Point(
			this.x.multiply(otherPoint.x),
			this.y.multiply(otherPoint.y)
		);
	}

	turnAround() {
		return new Point(this.y, this.x);
	}
}

export default Point;
