import Coordinate from './coordinate';
import Orientation from './orientation';

class Rover {
	position: Coordinate;
	orientation: Orientation;

	constructor(position: Coordinate, orientation: Orientation) {
		this.position = position;
		this.orientation = orientation;
	}

	move(direction: 'f' | 'b') {
		switch (this.orientation.degree) {
			case 0:
				this.position.y += direction === 'f' ? 1 : -1;
				break;
			case 90:
				this.position.x += direction === 'f' ? 1 : -1;
				break;
			case 180:
				this.position.y += direction === 'f' ? -1 : 1;
				break;
			case 270:
				this.position.x += direction === 'f' ? -1 : 1;
				break;
		}

		this.position.setPosition(this.position.x, this.position.y);
	}

	turn(direction: 'l' | 'r') {
		this.orientation.degree += direction === 'l' ? 270 : 90;
		this.orientation.degree %= 360;
	}

	getPositionElement() {
		return this.position;
	}

	getOrientationElement() {
		return this.orientation;
	}
}

export default Rover;
