import Point from './point';

// Objet de valeur
class Orientation {
	readonly vector: Point;

	constructor(vector: Point) {
		this.vector = vector;
	}

	turnLeft() {
		return new Orientation(
			new Point(this.vector.y.toOpposite(), this.vector.x)
		);
	}

	turnRight() {
		return new Orientation(
			new Point(this.vector.y, this.vector.x.toOpposite())
		);
	}
}

export default Orientation;
