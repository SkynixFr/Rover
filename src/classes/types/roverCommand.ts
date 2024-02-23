class RoverCommand {
	value: string;

	constructor(value: string) {
		this.value = value;
	}

	equals(otherString: RoverCommand) {
		return this.value === otherString.value;
	}

	iterator() {
		return new RoverCommand(Array.from(this.value).join(''));
	}

	hasValidCharacters() {
		const regex = /^[fblr]+$/;
		return regex.test(this.value);
	}

	[Symbol.iterator]() {
		let index = 0;
		const characters = this.value.split('');

		return {
			next: () => {
				if (index < characters.length) {
					return {
						value: new RoverCommand(characters[index++].toLowerCase()),
						done: false
					};
				} else {
					return {
						done: true
					};
				}
			}
		};
	}
}

export default RoverCommand;
