import Rover from '../../src/domain/rover';

import Coordinate from '../../src/domain/coordinate';
import Orientation from '../../src/domain/orientation';

import MapBuilder from './mapBuilder';
import Map from '../../src/domain/map';
import Localisation from '../../src/domain/localisation';
import LocalisationBuilder from './localisationBuilder';

class RoverBuilder {
	private localisation: Localisation = new LocalisationBuilder().default();
	private map: Map = new MapBuilder().default();

	default(): Rover {
		return new RoverBuilder().build();
	}

	build(): Rover {
		return new Rover(this.localisation, this.map);
	}

	withLocalisation(localisation: Localisation): RoverBuilder {
		this.localisation = localisation;
		return this;
	}

	withMap(map: Map): RoverBuilder {
		this.map = map;
		return this;
	}
}

export default RoverBuilder;
