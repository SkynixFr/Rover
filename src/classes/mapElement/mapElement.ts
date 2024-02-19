class MapElement {
	x: number;
	y: number;
	orientation: number;

	constructor(x: number, y: number, orientation: number) {
		this.x = x;
		this.y = y;
		this.orientation = orientation;
	}
	moveForwardElement() {
		if (this.orientation === 0) {
			this.y++;
		} else if (this.orientation === 90) {
			this.x++;
		} else if (this.orientation === 180) {
			this.y--;
		} else if (this.orientation === 270) {
			this.x--;
		}
	}
	moveBackwardElement() {
		if (this.orientation === 0) {
			this.y--;
		} else if (this.orientation === 90) {
			this.x--;
		} else if (this.orientation === 180) {
			this.y++;
		} else if (this.orientation === 270) {
			this.x++;
		}
	}
	turnLeftElement() {
		this.orientation = (this.orientation + 270) % 360;
	}
	turnRightElement() {
		this.orientation = (this.orientation + 90) % 360;
	}
	getPositionElement() {
		return `${this.x} ${this.y} ${this.orientation}`;
	}
}

export default MapElement;
