
let year = 2020;
let isLeapYear = false;

if ((year % 4 == 0 && year % 100 == 0) || year % 4 == 0) {
	isLeapYear = true;
} else {
	isLeapYear = false;
}

console.log(year + " is a leap year ? " + isLeapYear);