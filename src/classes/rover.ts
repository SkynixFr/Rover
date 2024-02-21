import Coordinate from './coordinate';
import Orientation from './orientation';

class Rover {
	position: Coordinate;
	orientation: Orientation;

	constructor(position: Coordinate, orientation: Orientation) {
		this.position = position;
		this.orientation = orientation;
	}

	moveForward() {
		this.position = this.position.increaseCoordinate(this.orientation.vector);
	}

	moveBackward() {
		this.position = this.position.decreaseCoordinate(this.orientation.vector);
	}

	turnLeft() {
		this.orientation = this.orientation.turnLeft();
	}

	turnRight() {
		this.orientation = this.orientation.turnRight();
	}
}
export default Rover;
