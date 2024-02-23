import Rover from '../classes/rover';
import Integer from '../types/integer';
import RoverCommand from '../types/roverCommand';

export default function interpreteCommands(
	commands: RoverCommand,
	rover: Rover
) {
	let newRover: Rover = rover;

	if (commands.length() === 0) {
		return rover;
	}

	const command = commands.popLeft();

	if (command.equals(new RoverCommand('f'))) {
		newRover = rover.moveForward();
	} else if (command.equals(new RoverCommand('b'))) {
		newRover = rover.moveBackward();
	} else if (command.equals(new RoverCommand('l'))) {
		newRover = rover.turnLeft();
	} else if (command.equals(new RoverCommand('r'))) {
		newRover = rover.turnRight();
	}

	if (rover === newRover) {
		return rover;
	}

	return interpreteCommands(commands, newRover);
}
