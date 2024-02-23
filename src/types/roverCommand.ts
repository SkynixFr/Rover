import Integer from './integer';

class RoverCommand {
	value: string;

	constructor(value: string) {
		this.value = value
			.split('')
			.filter(char => ['f', 'b', 'l', 'r'].includes(char))
			.join('');
	}

	equals(otherString: RoverCommand) {
		return this.value === otherString.value;
	}

	length() {
		return this.value.length;
	}

	popLeft() {
		const leftChar = new RoverCommand(this.value[0]);
		this.value = this.value.slice(1);
		return leftChar;
	}
}

export default RoverCommand;
