import MissionControl from "./missionControl/missionControl";
import WebSocketManager from "./webSocket/webSocketManager";

const communicationLayer = new WebSocketManager();
const missionControl = new MissionControl(communicationLayer);
missionControl.connectToServer();