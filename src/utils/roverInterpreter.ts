import Rover from '../classes/rover';
import String from '../classes/types/string';

export default function interpreter(commands: String, rover: Rover) {
	let newRover: Rover = rover;

	for (const command of commands) {
		if (command?.equals(new String('f'))) {
			newRover = rover.moveForward();
		} else if (command?.equals(new String('b'))) {
			newRover = rover.moveBackward();
		} else if (command?.equals(new String('l'))) {
			newRover = rover.turnLeft();
		} else if (command?.equals(new String('r'))) {
			newRover = rover.turnRight();
		}

		if (rover === newRover) {
			break;
		}

		rover = newRover;
	}
	return rover;
}
