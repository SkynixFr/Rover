import Rover from "../domain/rover";
import RoverCommand from "../domain/roverCommand";
import RoverInterpreter from "../domain/roverInterpreter";
import WebSocketManager from "../webSocket/webSocketManager";

class roverListener {
    private rover: Rover;
    private roverController: RoverInterpreter;
    private webSocketManager = new WebSocketManager();

    constructor(rover: Rover, roverController: RoverInterpreter) {
        this.rover = rover;
        this.roverController = roverController;
    }
    
    listening(): void {
        this.webSocketManager.startServer('roverCommand', (commandString) => {
        
            const roverCommand = new RoverCommand(commandString)
            console.log(`Received command for rover: ${roverCommand.display()}`);
    
            this.rover = this.roverController.interpretCommands(roverCommand, this.rover);
            console.log(`The new position of the rover is:`, this.rover.localisation.display(), `\n`);
        })
    };
}

export default roverListener;