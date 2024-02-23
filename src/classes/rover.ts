import Coordinate from './coordinate';
import Boolean from '../types/boolean';
import Orientation from './orientation';

// Objet de valeur
class Rover {
	readonly position: Coordinate;
	readonly orientation: Orientation;

	constructor(position: Coordinate, orientation: Orientation) {
		this.position = position;
		this.orientation = orientation;
	}

	moveForward() {
		const newPosition = this.position.increase(this.orientation.vector);

		if (this.position.map.isObstacleThere(newPosition.point).type) {
			return this;
		}

		return new Rover(newPosition, this.orientation);
	}

	moveBackward() {
		const newPosition = this.position.decrease(this.orientation.vector);

		if (this.position.map.isObstacleThere(newPosition.point).type) {
			return this;
		}

		return new Rover(newPosition, this.orientation);
	}

	turnLeft() {
		return new Rover(this.position, this.orientation.turnLeft());
	}

	turnRight() {
		return new Rover(this.position, this.orientation.turnRight());
	}
}
export default Rover;
