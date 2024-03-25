import Map from '../../src/classes/map';
import Point from '../../src/classes/point';
import Integer from '../../src/types/integer';
import PointList from '../../src/types/pointList';

class MapBuilder {
	private limit: Point = new Point(new Integer(10), new Integer(10));
	private obstacles: PointList = new PointList([]);

	default(): Map {
		return new MapBuilder().build();
	}

	build(): Map {
		return new Map(this.limit, this.obstacles);
	}

	withLimit(limit: Point): MapBuilder {
		this.limit = limit;
		return this;
	}

	withObstacles(obstacles: PointList): MapBuilder {
		this.obstacles = obstacles;
		return this;
	}
}

export default MapBuilder;
