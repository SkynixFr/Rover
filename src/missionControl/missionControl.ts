import readline from "readline";
import { ActiveCommunicationLayer } from "./activeCommunicationLayer";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class missionControl {
    private communicationManager: ActiveCommunicationLayer
    
    constructor(connectionManager: ActiveCommunicationLayer) {
        this.communicationManager = connectionManager;
    }

    private displayHelp(): void {
        console.log("List of commands:");
        console.log("   - f: move forward");
        console.log("   - b: move backward");
        console.log("   - c: turn clockwise");
        console.log("   - a: turn anti-clockwise");
        console.log("   - exit: disconnect from the server\n")
    }

    private managePrompt(): void {
        this.displayHelp();
        rl.setPrompt('Enter a sequence of commands containing (f, b, a, c) or "exit": ');
        rl.prompt();
    
        rl.on("line", async (line) => {
            if (line === "exit") {
                this.communicationManager.dispose();
                rl.close();
            } 
            try {
                const response = await this.communicationManager.sendMessageAndAwaitResponse("roverCommand", line);
                console.log(`Response from the rover:`);
                console.log(response)
                rl.prompt();
            } catch (error) {
                console.error("Error:", error);
            }
        });   
    }

    public connectToServer(): void {
        this.communicationManager.manageConnectionToServer(this.managePrompt.bind(this), () => rl.close());
    }
}

export default missionControl;
