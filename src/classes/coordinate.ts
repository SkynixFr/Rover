import Map from './map';

class Coordinate {
	x: number;
	y: number;

	constructor(x: number, y: number, map: Map) {
		this.x = x % map.lengthX;
		this.y = y % map.lengthY;
	}
}

export default Coordinate;
