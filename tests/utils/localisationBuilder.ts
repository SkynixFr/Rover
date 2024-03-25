import Coordinate from '../../src/domain/coordinate';
import Localisation from '../../src/domain/localisation';
import Orientation from '../../src/domain/orientation';
import Point from '../../src/domain/point';
import Integer from '../../src/types/integer';
import CoordinateBuilder from './coordinateBuilder';

class LocalisationBuilder {
	private coordinate: Coordinate = new CoordinateBuilder().default();
	private orientation: Orientation = new Orientation(
		new Point(new Integer(0), new Integer(1))
	);

	default(): Localisation {
		return new LocalisationBuilder().build();
	}

	build(): Localisation {
		return new Localisation(this.coordinate, this.orientation);
	}

	withCoordinate(coordinate: Coordinate): LocalisationBuilder {
		this.coordinate = coordinate;
		return this;
	}

	withOrientation(orientation: Orientation): LocalisationBuilder {
		this.orientation = orientation;
		return this;
	}
}

export default LocalisationBuilder;
