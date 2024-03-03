import Rover from '../../src/classes/rover';

import Coordinate from '../../src/classes/coordinate';
import Orientation from '../../src/classes/orientation';

import MapBuilder from './mapBuilder';
import Map from '../../src/classes/map';
import Localisation from '../../src/classes/localisation';
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
