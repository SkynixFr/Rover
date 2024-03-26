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
		const newLocalisation = this.localisation.moveForward();

		this.map.isObstacleThere(newLocalisation.position.point, () => {
			newRover = new Rover(
				newLocalisation,
				this.map
			);
		});

		return newRover;
	}

	moveBackward() {
		let newRover: Rover = this;
		const newLocalisation = this.localisation.moveBackward();

		this.map.isObstacleThere(newLocalisation.position.point, () => {
			newRover = new Rover(
				newLocalisation,
				this.map
			);
		});

		return newRover;
	}

	turnLeft() {
		const newLocalisation = this.localisation.turnLeft();
		return new Rover(
			newLocalisation,
			this.map
		);
	}

	turnRight() {
		const newLocalisation = this.localisation.turnRight();
		return new Rover(
			newLocalisation,
			this.map
		);
	}
}
export default Rover;
