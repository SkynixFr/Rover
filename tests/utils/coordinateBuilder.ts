import Coordinate from '../../src/classes/coordinate';
import Map from '../../src/classes/map';
import Point from '../../src/classes/point';
import Integer from '../../src/types/integer';
import MapBuilder from './mapBuilder';

class CoordinateBuilder {
	private point: Point = new Point(new Integer(0), new Integer(0));
	private map: Map = new MapBuilder().default();

	default(): Coordinate {
		return new CoordinateBuilder().build();
	}

	build(): Coordinate {
		return new Coordinate(this.point, this.map);
	}

	withPoint(point: Point): CoordinateBuilder {
		this.point = point;
		return this;
	}

	withMap(map: Map): CoordinateBuilder {
		this.map = map;
		return this;
	}
}

export default CoordinateBuilder;
