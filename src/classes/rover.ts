import Coordinate from './coordinate';
import Obstacles from './obstacles';
import Orientation from './orientation';

class Rover {
	position: Coordinate;
	orientation: Orientation;

	constructor(position: Coordinate, orientation: Orientation) {
		this.position = position;
		this.orientation = orientation;
	}

	moveForward(obstacles: Obstacles) {
		const newRover = new Rover(
			this.position.increaseCoordinate(this.orientation.vector),
			this.orientation
		);
		if (obstacles.isObstacleThere(newRover.position)) {
			return this;
		}
		return newRover;
	}

	moveBackward(obstacles: Obstacles) {
		const newRover = new Rover(
			this.position.decreaseCoordinate(this.orientation.vector),
			this.orientation
		);
		if (obstacles.isObstacleThere(newRover.position)) {
			return this;
		}
		return newRover;
	}

	turnLeft() {
		return new Rover(this.position, this.orientation.turnLeft());
	}

	turnRight() {
		return new Rover(this.position, this.orientation.turnRight());
	}
}
export default Rover;
