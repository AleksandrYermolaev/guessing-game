class GuessingGame {
    constructor() {}

    setRange(min, max) {
		this.range = Array.from({length: max - min + 1}, (a, b) => b + min);
		this.low = this.range[0];
		this.high = this.range[this.range.length - 1];
    }

    guess() {
		this.midIndex = Math.floor(this.range.length / 2);
		this.mid = this.range[this.midIndex];
		return this.mid;
    }

    lower() {
		this.high = this.range[this.midIndex];
		this.range = this.range.slice(this.range.indexOf(this.low), this.range.indexOf(this.high) + 1);
    }

    greater() {
		this.low = this.range[this.midIndex];
		this.range = this.range.slice(this.range.indexOf(this.low), this.range.indexOf(this.high) + 1);
    }
}

module.exports = GuessingGame;
