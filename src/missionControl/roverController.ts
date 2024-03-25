import  Rover  from "../domain/rover";
import interpretCommands from "../utils/roverInterpreter";
import Map from "../domain/map";
import RoverCommand from "../types/roverCommand";

export class RoverController {
    private readonly map: Map;
    private roverCommand: RoverCommand;
    private rover: Rover;

    public constructor(map: Map,
                       roverCommand: RoverCommand,
                       rover: Rover) {
        this.map = map;
        this.roverCommand = roverCommand;
        this.rover = rover;
    }

    public executeCommand() {
        this.rover = interpretCommands(this.roverCommand, this.rover);
        return this.rover;
    }
}