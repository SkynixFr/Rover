import { io } from "socket.io-client";
import readline from "readline";


//TODO: mettre un intermediaire pour gérer les sockets
const socket = io("http://localhost:3001");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on("connect", () => {
    console.log("Connected to the server.");
    console.log("List of commands:");
    console.log("   - f: move forward");
    console.log("   - b: move backward");
    console.log("   - c: turn clockwise");
    console.log("   - a: turn anti-clockwise");
    console.log("   - exit: disconnect from the server\n")

    rl.setPrompt('Enter a sequence of commands containing (f, b, a, c) or "exit": ');
    rl.prompt();

    rl.on("line", (line) => {
        if (line === "exit") {
            socket.disconnect();
            rl.close();
        } else {
            socket.emit("roverCommand", line);
            rl.prompt();
        }
    });
});

socket.on("connect_error", (error: Error) => {
    console.error("Connection failed:", error);
    rl.close();
});

socket.on("disconnect", () => {
    console.log("Disconnected from the server.");
    rl.close();
});