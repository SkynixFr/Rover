import readline from "readline";
import WebSocketManager from "../webSocket/webSocketManager";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class missionControl {
    private webSocketManager = new WebSocketManager();
    private socket = this.webSocketManager.createSocket();
    
    private displayHelp(): void {
        console.log("List of commands:");
        console.log("   - f: move forward");
        console.log("   - b: move backward");
        console.log("   - c: turn clockwise");
        console.log("   - a: turn anti-clockwise");
        console.log("   - exit: disconnect from the server\n")
    }
    
    private managePrompt(): void {
        rl.setPrompt('Enter a sequence of commands containing (f, b, a, c) or "exit": ');
        rl.prompt();
    
        rl.on("line", (line) => {
            if (line === "exit") {
                this.socket.close();
                rl.close();
            } else {
                this.socket.emit("roverCommand", line);
                rl.prompt();
            }
        });
    }
    
    connectToServer(): void {
        this.socket.on("connect", () => {
            this.displayHelp();
            this.managePrompt();
        });
        
        this.socket.on("connect_error", (error: Error) => {
            console.error("Connection failed:", error);
            rl.close();
        });
        
        this.socket.on("disconnect", () => {
            console.log("Disconnected from the server.");
            rl.close();
        });
    }
}

export default missionControl;