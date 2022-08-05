function solution(number) {
	let str = '';
	while (number > 0) {
		if (number >= 1 && number < 5) {
			if (number == 4) {
				number = number - 4;
				str += 'IV';
			} else {
				number = number - 1;
				str += 'I';
			}
		} else if (number >= 5 && number <= 9) {
			if (number === 9) {
				number = number - 9;
				str += 'IX';
			} else {
				number = number - 5;
				str += 'V';
			}
		} else if (number >= 10 && number <= 49) {
			if (number >= 40) {
				number = number - 40;
				str += 'XL';
			} else {
				number = number - 10;
				str += 'X';
			}
		} else if (number >= 50 && number <= 99) {
			if (number >= 90) {
				number = number - 90;
				str += 'XC';
			} else {
				number = number - 50;
				str += 'L';
			}
		} else if (number >= 100 && number <= 499) {
			if (number >= 400) {
				number = number - 400;
				str += 'CD';
			} else {
				number = number - 100;
				str += 'C';
			}
		} else if (number >= 500 && number <= 999) {
			if (number >= 900) {
				number = number - 900;
				str += 'CM';
			} else {
				number = number - 500;
				str += 'D';
			}
		} else if (number >= 1000) {
			number = number - 1000;
			str += 'M';
		}
	}
	return str;
}

solution(1990);
