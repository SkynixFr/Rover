import Rover from '../classes/rover';

export default function interpreter(commands: string, rover: Rover) {
	let newRover: Rover = rover;
	for (const command of commands) {
		if (command === 'f') {
			newRover = rover.moveForward();
		} else if (command === 'b') {
			newRover = rover.moveBackward();
		} else if (command === 'l') {
			newRover = rover.turnLeft();
		} else if (command === 'r') {
			newRover = rover.turnRight();
		}

		if (rover != newRover) {
			rover = newRover;
		} else {
			break;
		}
	}
	return rover;
}
