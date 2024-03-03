import Point from '../classes/point';

class PointList {
	readonly list: Point[];

	constructor(list: Point[]) {
		this.list = list;
	}

	add(otherPoint: Point): PointList {
		this.list.push(otherPoint);
		return new PointList(this.list);
	}

	contains(otherPoint: Point): boolean {
		return this.list.some(
			point => point.x.equal(otherPoint.x) && point.y.equal(otherPoint.y)
		);
	}

	normalize(limit: Point): PointList {
		return new PointList(
			this.list.map(point => {
				return point.modulo(limit);
			})
		);
	}
}

export default PointList;
