export type ResponseCallback = (response: string) => void;
export type RoverCommandCallback = (commandString: string, responseCallback: ResponseCallback) => void;


export interface PassiveCommunicationLayer {
    manageServer(): void;
    registerCallback(callback: RoverCommandCallback): void;
}