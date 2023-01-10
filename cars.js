let carNumbers = [];
const input = Number(process.argv[2]);

class CarNumber {
	number = '';
	static get allowedSymbols() {
		return 'АВЕКМНОРСТХУ';
	}
	constructor() {
		do {
			this.number = `${randomSymbol()}${randomNum()}${randomSymbol()}${randomSymbol()}`;
		}
		while (carNumbers.includes(this.number))
	}

	static compareNumbers(num1, num2) {
		for (let i = 0; i < num1.number.length; i++) {
			if (num1.number.charCodeAt(i) > num2.number.charCodeAt(i)) {
				return false;
			}
			if (num2.number.charCodeAt(i) > num1.number.charCodeAt(i)) {
				return true;
			}
		}
	}

	static sort(carNumbers) {

		for (let i = 0; i < carNumbers.length - 1; i++) {
			for (let j = i + 1; j < carNumbers.length; j++) {
				if (this.compareNumbers(carNumbers[j], carNumbers[i])) {
					const temp = carNumbers[j];
					carNumbers[j] = carNumbers[i];
					carNumbers[i] = temp;
				}
			}
		}

		return carNumbers;
	}
}

for (let i = 0; i < input; i++) {
	carNumbers.push(new CarNumber());
}
carNumbers = CarNumber.sort(carNumbers);
console.log(carNumbers);

function randomInt(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}
function randomNum() {
	return `${randomInt(0, 9)}${randomInt(0, 9)}${randomInt(0, 9)}`;
}

function randomSymbol() {
	return CarNumber.allowedSymbols[Math.floor(Math.random() * CarNumber.allowedSymbols.length)];
}