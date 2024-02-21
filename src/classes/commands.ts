import Obstacles from './obstacles';
import Rover from './rover';

class Commands {
	commands: string;
	constructor(commands: string) {
		this.commands = commands.toLowerCase();
	}

	sequenceOfCommands(obstacles: Obstacles, rover: Rover) {
		let newRover: Rover = rover;
		for (const command of this.commands) {
			if (command === 'f') {
				newRover = rover.moveForward(obstacles);
			} else if (command === 'b') {
				newRover = rover.moveBackward(obstacles);
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
}

export default Commands;
