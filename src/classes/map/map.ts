import MapElement from '../mapElement/mapElement';

class Map {
	lengthX: number;
	lengthY: number;
	//length: [number, number];
	mapElement: MapElement;

	constructor(lengthX: number, lengthY: number, mapElement: MapElement) {
		this.lengthX = lengthX;
		this.lengthY = lengthY;
		this.mapElement = mapElement;
	}

	mapElementCoordinates(mapElement: MapElement) {
		mapElement.x = mapElement.x % this.lengthX;
		mapElement.y = mapElement.y % this.lengthY;
	}
}

export default Map;
