import Point from '../point';

class PointList {
	readonly list: Point[];

	constructor(list: Point[]) {
		this.list = list;
	}

	add(item: Point) {
		this.list.push(item);
		return new PointList(this.list);
	}
}

export default PointList;
