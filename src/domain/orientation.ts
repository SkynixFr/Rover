import Point from './point';
import Integer from '../types/integer';
// Objet de valeur
class Orientation {
	readonly vector: Point;

	constructor(vector: Point) {
		this.vector = vector;
	}

	turnClockwise() {
		const newPoint = this.vector.scalarMultiply(
			new Point(new Integer(1), new Integer(-1))
		);
		return new Orientation(newPoint.turnAround());
	}

	turnAntiClockwise() {
		const newPoint = this.vector.scalarMultiply(
			new Point(new Integer(-1), new Integer(1))
		);
		return new Orientation(newPoint.turnAround());
	}

	display() {
		return `(${this.vector.x.display()}, ${this.vector.y.display()})`;
	}
}

export default Orientation;
