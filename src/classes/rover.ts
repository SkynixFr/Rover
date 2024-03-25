import Map from './map';
import Localisation from './localisation';

// Objet de valeur
class Rover {
	readonly localisation: Localisation;
	readonly map: Map;

	constructor(localisation: Localisation, map: Map) {
		this.localisation = localisation;
		this.map = map;
	}

	moveForward() {
		let newRover: Rover = this;
		const newPosition = this.localisation.moveForward();

		this.map.isObstacleThere(newPosition.point, () => {
			newRover = new Rover(
				new Localisation(newPosition, this.localisation.orientation),
				this.map
			);
		});

		return newRover;
	}

	moveBackward() {
		let newRover: Rover = this;
		const newPosition = this.localisation.moveBackward();

		this.map.isObstacleThere(newPosition.point, () => {
			newRover = new Rover(
				new Localisation(newPosition, this.localisation.orientation),
				this.map
			);
		});

		return newRover;
	}

	turnLeft() {
		const newOrientation = this.localisation.turnLeft();
		return new Rover(
			new Localisation(this.localisation.position, newOrientation),
			this.map
		);
	}

	turnRight() {
		const newOrientation = this.localisation.turnRight();
		return new Rover(
			new Localisation(this.localisation.position, newOrientation),
			this.map
		);
	}
}
export default Rover;
