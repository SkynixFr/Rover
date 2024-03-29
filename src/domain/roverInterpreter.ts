import  Rover  from "./rover";
import Map from "./map";
import RoverCommand from "./roverCommand";


class RoverInterpreter {
    private readonly map: Map;

    public constructor(map: Map) {
        this.map = map;
    }

    public interpretCommands(
        commands: RoverCommand,
        rover: Rover
    ): Rover {
        let newRover: Rover = rover;
    
        if (commands.lengthof() === 0) {
            return rover;
        }
    
        const { char, remaining } = commands.popLeft();
    
        newRover = this.interpretCommand(char, rover);
        commands = remaining;
    
        return this.interpretCommands(commands, newRover);
    }
    
    private interpretCommand(command: RoverCommand, rover: Rover): Rover {
        switch (command.value) {
            case 'f':
                return rover.moveForward();
            case 'b':
                return rover.moveBackward();
            case 'c':
                return rover.turnClockwise();
            case 'a':
                return rover.turnAntiClockwise();
            default:
                return rover;
        }
    }
}

export default RoverInterpreter;