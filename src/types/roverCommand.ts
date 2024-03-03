class RoverCommand {
	readonly value: string;

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

	popLeft(): { char: RoverCommand; remaining: RoverCommand } {
		const leftChar = new RoverCommand(this.value[0]);
		const remaining = new RoverCommand(this.value.slice(1));
		return { char: leftChar, remaining: remaining };
	}
}

export default RoverCommand;
