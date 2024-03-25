import Rover from '../domain/Rover';
import RoverCommand from '../types/roverCommand';

export default function interpretCommands(
	commands: RoverCommand,
	rover: Rover
) {
	let newRover: Rover = rover;

	if (commands.length() === 0) {
		return rover;
	}

	const { char, remaining } = commands.popLeft();

	newRover = interpretCommand(char, rover);
	commands = remaining;

	return interpretCommands(commands, newRover);
}

function interpretCommand(command: RoverCommand, rover: Rover): Rover {
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

