import Coordinate from './coordinate';
import Orientation from './orientation';

class Localisation {
	readonly position: Coordinate;
	readonly orientation: Orientation;

	constructor(position: Coordinate, orientation: Orientation) {
		this.position = position;
		this.orientation = orientation;
	}

	moveForward() {
		return this.position.increase(this.orientation.vector);
	}

	moveBackward() {
		return this.position.decrease(this.orientation.vector);
	}

	turnLeft() {
		return this.position, this.orientation.turnLeft();
	}

	turnRight() {
		return this.position, this.orientation.turnRight();
	}

	display() {
		return `(position: ${this.position.display()}, orientation: ${this.orientation.display()})`;
	}
}

export default Localisation;
