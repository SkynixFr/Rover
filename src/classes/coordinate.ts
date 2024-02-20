import Map from './map';
import mod from '../utils/computeModulo';

class Coordinate {
	x: number;
	y: number;
	map: Map;

	constructor(x: number, y: number, map: Map) {
		this.map = map;
		this.x = mod(x, this.map.lengthX);
		this.y = mod(y, this.map.lengthY);
	}

	setPosition(x: number, y: number) {
		return new Coordinate(x, y, this.map);
		// this.x = mod(x, this.map.lengthX);
		// this.y = mod(y, this.map.lengthY);
	}
}

export default Coordinate;
