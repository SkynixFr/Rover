import Rover from '../classes/rover';
import RoverCommand from '../types/roverCommand';

export default function interpreteCommands(
	commands: RoverCommand,
	rover: Rover
) {
	let newRover: Rover = rover;

	if (commands.length() === 0) {
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
<<<<<<< HEAD:server/src/utils/roverInterpreter.ts
	return rover;
}
=======
}
>>>>>>> 2d0a89d236c78d23924379a332bd18d176a408e7:src/utils/roverInterpreter.ts
