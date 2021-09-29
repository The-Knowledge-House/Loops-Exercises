//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
let num = 9;
for (let i = 0; i <= 10; i++) {
	let multiple = i * num;
	console.log(multiple);
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let i = 0;
while (i < 50) {
	i += 5;
	console.log(i);
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

function duplicateArr(num) {
	let arrNum = [];

	for (i = 0; i <= num.length; i++) {
		for (x = i; x < num.length; x++) {
			if (arrNum === num[x]) {
				return num[x];
			} else {
				arrNum = num[i];
			}
		}
	}
}

console.log(duplicateArr([2, 7, 5, 9, 8, 7]));

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..

function assignGrade(num) {
	if (num >= 90) {
		return "A";
	} else if (num <= 89 && num >= 80) {
		return "b";
	} else if (num <= 79 && num >= 70) {
		return "C";
	} else if (num <= 69 && num >= 60) {
		return "D";
	} else {
		return "F";
	}
}

for (let i = 60; i <= 100; i++)
	console.log(`Your grade is ${i} you got a ` + assignGrade(i));
