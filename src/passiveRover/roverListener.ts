import Rover from "../domain/rover";
import RoverCommand from "../domain/roverCommand";
import RoverInterpreter from "../domain/roverInterpreter";
import {PassiveCommunicationLayer} from "./passiveCommunicationLayer";

class roverListener {
    private rover: Rover;
    private roverController: RoverInterpreter;
    private communicationManager: PassiveCommunicationLayer;

    constructor(rover: Rover,
                roverController: RoverInterpreter,
                communicationManager: PassiveCommunicationLayer) {
        this.rover = rover;
        this.roverController = roverController;
        this.communicationManager = communicationManager;
    }
    
    listening(): void {
        this.communicationManager.registerCallback((commandString) => {

            const roverCommand = new RoverCommand(commandString)
            console.log(`Received command for rover: ${roverCommand.display()}`);

            this.rover = this.roverController.interpretCommands(roverCommand, this.rover);
            console.log(`The new position of the rover is:`, this.rover.localisation.display(), `\n`);
        });

        this.communicationManager.startServer()
    };
}

export default roverListener;