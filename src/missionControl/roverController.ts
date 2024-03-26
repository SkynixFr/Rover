import  Rover  from "../domain/rover";
import interpretCommands from "../utils/roverInterpreter";
import Map from "../domain/map";
import RoverCommand from "../types/roverCommand";

class RoverController {
    private readonly map: Map;
    private rover: Rover;

    public constructor(map: Map,
                       rover: Rover) {
        this.map = map;
        this.rover = rover;
    }

    public executeCommand(roverCommand: RoverCommand): Rover {
        this.rover = interpretCommands(roverCommand, this.rover);
        return this.rover;
    }
}

export default RoverController;