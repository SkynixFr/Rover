class Boolean {
	readonly type: boolean;

	constructor(type: boolean) {
		this.type = type;
	}

	inverse() {
		return new Boolean(!this.type);
	}

	equals(otherBoolean: Boolean) {
		return this.type === otherBoolean.type;
	}
}

export default Boolean;
