export interface PassiveCommunicationLayer {
    startServer(): void;
    registerCallback(callback: (commandString: string) => void): void;
}