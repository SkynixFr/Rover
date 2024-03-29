export interface ActiveCommunicationLayer {
    manageConnectionToServer(connectionCallback: () => void, disconnectionCallback: () => void): void
    sendMessageAndAwaitResponse(event: string, message: string): Promise<string>;
    dispose(): void;
}