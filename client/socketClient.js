const io = require("socket.io-client");
const readline = require("readline");

const socket = io("http://localhost:3001");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on("connect", () => {
    console.log("Connected to the server.");

    rl.setPrompt('Enter command (f, b, l, r) or "exit" to quit: ');
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

socket.on("connect_error", (error) => {
    console.error("Connection failed:", error);
    rl.close();
});

socket.on("disconnect", () => {
    console.log("Disconnected from the server.");
    rl.close();
});
