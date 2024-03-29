import { Server, Socket } from "socket.io";
import express, { response } from "express";
import http from "http";
import { io } from "socket.io-client";
import {PassiveCommunicationLayer, RoverCommandCallback} from "../passiveRover/passiveCommunicationLayer";
import { ActiveCommunicationLayer } from "../missionControl/activeCommunicationLayer";

class WebSocketManager implements PassiveCommunicationLayer, ActiveCommunicationLayer {
    public registerCallback(callback: RoverCommandCallback): void {
        this.callback = callback;
    }

    private port = 3001;
    private app = express();
    private server = http.createServer(this.app);
    private io = new Server(this.server);
    private callback: RoverCommandCallback = () => {};
    private eventName: string = 'roverCommand'
    private connectedSocket: any | null = null;

    public manageServer(): void {
        this.io.on('connection', (socket: Socket) => {
            console.log(`Client connected: ${socket.id}`);
            this.connectedSocket = socket;

            socket.on(this.eventName, this.callback);
                                    
            socket.on('disconnect', () => {
                console.log(`Client disconnected: ${socket.id}`);
                this.connectedSocket = null;
            });
        });

        this.listen();
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }

    public manageConnectionToServer(connectionCallback: () => void, disconnectionCallback: () => void): void {
        this.create();
        this.onConnected(() => {
            console.log("Connected from the server.");
            connectionCallback();
        });

        this.onDisconnected(() => {
            console.log("Disconnected from the server.");
            disconnectionCallback();
        });
    }

    private create(): void {
        this.connectedSocket = io(`http://localhost:${this.port}`);
    }

    private onConnected(callback: () => void): void {
        if (!this.connectedSocket) {
            throw new Error("Socket not initialized. Please call connect() before using this method.");
        }

        this.connectedSocket.on("connect", () => {
            callback();
        });

        this.connectedSocket.on(this.eventName, (message: string) => {
            console.log(`Received message: ${message}`);
        })
    }

    private onDisconnected(callback: () => void): void {
        if (!this.connectedSocket) {
            throw new Error("Socket not initialized. Please call connect() before using this method.");
        }

        this.connectedSocket.on("disconnect", () => {
            callback();
        });
    }

    public sendMessageAndAwaitResponse(event: string, message: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if (!this.connectedSocket) {
                reject(new Error("Socket not initialized. Please call connect() before using this method."));
            }
            else {
                this.connectedSocket.emit(event, message, (response: string) => {
                    resolve(response);
                });
            }
    
            // Gérer les erreurs éventuelles
            this.connectedSocket.on("error", (error: any) => {
                reject(error);
            });
        });
    }

    public dispose(): void {
        this.connectedSocket.close();
    }

}

export default WebSocketManager;
