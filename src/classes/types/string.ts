class String {
	value: string;

	constructor(value: string) {
		this.value = value;
	}

	equals(otherString: String) {
		return this.value === otherString.value;
	}

	iterator() {
		return new String(Array.from(this.value).join(''));
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
						value: new String(characters[index++].toLowerCase()),
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

export default String;
