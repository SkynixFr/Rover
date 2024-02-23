class Integer {
	readonly value: number;

	constructor(value: number) {
		this.value = value;
	}

	normalize() {
		if (this.value === -0) {
			return new Integer(0);
		}
		return new Integer(this.value);
	}

	add(otherInteger: Integer) {
		return new Integer(this.value + otherInteger.value);
	}

	subtract(otherInteger: Integer) {
		return new Integer(this.value - otherInteger.value);
	}

	multiply(otherInteger: Integer) {
		return new Integer(this.value * otherInteger.value);
	}

	divide(otherInteger: Integer) {
		return new Integer(this.value / otherInteger.value);
	}

	modulo(otherInteger: Integer) {
		return new Integer(
			((this.value % otherInteger.value) + otherInteger.value) %
				otherInteger.value
		);
	}

	toOpposite() {
		return new Integer(-this.value).normalize();
	}

	equal(otherInteger: Integer) {
		return this.value === otherInteger.value;
	}
}

export default Integer;
