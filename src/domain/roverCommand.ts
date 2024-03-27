class RoverCommand {
	readonly value: string;

	constructor(value: string) {
		this.value = value
			.split('')
			.filter(char => ['f', 'b', 'c', 'a'].includes(char))
			.join('');
	}

	equals(otherString: RoverCommand) {
		return this.value === otherString.value;
	}

	lengthof() {
		return this.value.length;
	}

	popLeft(): { char: RoverCommand; remaining: RoverCommand } {
		const leftChar = new RoverCommand(this.value[0]);
		const remaining = new RoverCommand(this.value.slice(1));
		return { char: leftChar, remaining: remaining };
	}

	display() {
		return this.value;
	}
}

export default RoverCommand;
