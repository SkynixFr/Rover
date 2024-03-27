import { Server, Socket } from "socket.io";
import express from "express";
import http from "http";
import { io } from "socket.io-client";

class WebSocketManager {
    private port = 3001;
    private app = express();
    private server = http.createServer(this.app);
    private io = new Server(this.server);
        
    public startServer(event: string, callback: (command: string) => void): void {
        this.io.on('connection', (socket: Socket) => {
            console.log(`Client connected: ${socket.id}`);

            socket.on(event, callback);
            
            socket.on('disconnect', () => {
                console.log(`Client disconnected: ${socket.id}`);
            });
        });

        this.listen();
    }

    public listen(): void {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }

    public createSocket(): any {
        const socket = io(`http://localhost:${this.port}`);
        return socket;
    }

}

export default WebSocketManager;
