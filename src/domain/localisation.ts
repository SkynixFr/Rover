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
		const newLocalisation = new Localisation(this.position.increase(this.orientation.vector), this.orientation)
		return newLocalisation;
	}

	moveBackward() {
		const newLocalisation = new Localisation(this.position.decrease(this.orientation.vector), this.orientation)
		return newLocalisation;
	}

	turnLeft() {
		const newLocalisation = new Localisation(this.position, this.orientation.turnLeft())
		return newLocalisation;
	}

	turnRight() {
		const newLocalisation = new Localisation(this.position, this.orientation.turnRight())
		return newLocalisation;
	}

	display() {
		return `(position: ${this.position.display()}, orientation: ${this.orientation.display()})`;
	}
}

export default Localisation;
