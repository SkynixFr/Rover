import Rover from './rover';
import RoverCommand from './roverCommand';

export default function interpreteCommands(
	commands: RoverCommand,
	rover: Rover
) {
	let newRover: Rover = rover;

	if (commands.lengthof() === 0) {
		return rover;
	}

	const { char, remaining } = commands.popLeft();

	newRover = interpreteCommand(char, rover);
	commands = remaining;

	return interpreteCommands(commands, newRover);
}

function interpreteCommand(command: RoverCommand, rover: Rover): Rover {
	switch (command.value) {
		case 'f':
			return rover.moveForward();
		case 'b':
			return rover.moveBackward();
		case 'l':
			return rover.turnLeft();
		case 'r':
			return rover.turnRight();
		default:
			return rover;
	}
}
