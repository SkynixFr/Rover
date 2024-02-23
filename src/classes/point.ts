import Integer from './types/integer';

// Objet de valeur
class Point {
	readonly x: Integer;
	readonly y: Integer;

	constructor(x: Integer, y: Integer) {
		this.x = x;
		this.y = y;
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

	// toOpposite() {
	// 	return new Point(this.x.toOpposite(), this.y.toOpposite());
	// }
}

export default Point;
