import Coordinate from './coordinate';
import Orientation from './orientation';
import Map from './map';

// Objet de valeur
class Rover {
	readonly position: Coordinate;
	readonly orientation: Orientation;
	readonly map: Map;

	constructor(position: Coordinate, orientation: Orientation, map: Map) {
		this.position = position;
		this.orientation = orientation;
		this.map = map;
	}

	moveForward() {
		const newPosition = this.position.increase(this.orientation.vector);

		if (this.map.isObstacleThere(newPosition.point)) {
			return this;
		}

		return new Rover(newPosition, this.orientation, this.map);
	}

	moveBackward() {
		const newPosition = this.position.decrease(this.orientation.vector);

		if (this.map.isObstacleThere(newPosition.point)) {
			return this;
		}

		return new Rover(newPosition, this.orientation, this.map);
	}

	turnLeft() {
		return new Rover(this.position, this.orientation.turnLeft(), this.map);
	}

	turnRight() {
		return new Rover(this.position, this.orientation.turnRight(), this.map);
	}
}
export default Rover;
