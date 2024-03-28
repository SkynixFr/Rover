import { Server, Socket } from "socket.io";
import express from "express";
import http from "http";
import { io } from "socket.io-client";
import {PassiveCommunicationLayer} from "../passiveRover/passiveCommunicationLayer";
import { ActiveCommunicationLayer } from "../missionControl/activeCommunicationLayer";

class WebSocketManager implements PassiveCommunicationLayer, ActiveCommunicationLayer {
    public registerCallback(callback: (commandString: string) => void): void {
        this.callback = callback;
    }

    private port = 3001;
    private app = express();
    private server = http.createServer(this.app);
    private io = new Server(this.server);
    private callback: (command: string) => void = () => {}
    private eventName: string = 'roverCommand'

    public startServer(): void {
        this.io.on('connection', (socket: Socket) => {
            console.log(`Client connected: ${socket.id}`);

            socket.on(this.eventName, this.callback);
            
            socket.on('disconnect', () => {
                console.log(`Client disconnected: ${socket.id}`);
            });
        });

        this.listen();
    }

    private listen(): void {
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
