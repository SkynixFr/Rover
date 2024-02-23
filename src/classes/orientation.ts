import Point from './point';
import Integer from '../types/integer';
// Objet de valeur
class Orientation {
	readonly vector: Point;

	constructor(vector: Point) {
		this.vector = vector;
	}

	turnLeft() {
		const newPoint = this.vector.scalarMultiply(
			new Point(new Integer(1), new Integer(-1))
		);
		return new Orientation(newPoint.turnAround());
	}

	turnRight() {
		const newPoint = this.vector.scalarMultiply(
			new Point(new Integer(-1), new Integer(1))
		);
		return new Orientation(newPoint.turnAround());
	}
}

export default Orientation;
