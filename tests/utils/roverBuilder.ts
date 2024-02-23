import Rover from '../../src/classes/rover';
import CoordinateBuilder from './coordinateBuilder';
import Coordinate from '../../src/classes/coordinate';
import Orientation from '../../src/classes/orientation';
import Integer from '../../src/types/integer';
import Point from '../../src/classes/point';

class RoverBuilder {
	private coordinate: Coordinate = new CoordinateBuilder().default();
	private orientation: Orientation = new Orientation(
		new Point(new Integer(0), new Integer(1))
	);

	default(): Rover {
		return new RoverBuilder().build();
	}

	build(): Rover {
		return new Rover(this.coordinate, this.orientation);
	}

	withCoordinate(coordinate: Coordinate): RoverBuilder {
		this.coordinate = coordinate;
		return this;
	}

	withOrientation(orientation: Orientation): RoverBuilder {
		this.orientation = orientation;
		return this;
	}
}

export default RoverBuilder;
