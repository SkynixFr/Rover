import Point from './point';

class Orientation {
	vector: Point;

	constructor(vector: Point) {
		this.vector = vector;
	}

	turnLeft() {
		return new Orientation(new Point(-this.vector.y, this.vector.x));
	}

	turnRight() {
		return new Orientation(new Point(this.vector.y, -this.vector.x));
	}
}

export default Orientation;
