import Rover from '../classes/rover';
import RoverCommand from '../classes/types/roverCommand';

export default function interpreter(commands: RoverCommand, rover: Rover) {
	let newRover: Rover = rover;

	if (!commands.hasValidCharacters()) {
		return rover;
	}

	for (const command of commands) {
		if (command?.equals(new RoverCommand('f'))) {
			newRover = rover.moveForward();
		} else if (command?.equals(new RoverCommand('b'))) {
			newRover = rover.moveBackward();
		} else if (command?.equals(new RoverCommand('l'))) {
			newRover = rover.turnLeft();
		} else if (command?.equals(new RoverCommand('r'))) {
			newRover = rover.turnRight();
		}

		if (rover === newRover) {
			break;
		}

		rover = newRover;
	}
	return rover;
}
