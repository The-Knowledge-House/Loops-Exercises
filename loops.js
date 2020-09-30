//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

for (let i = 1; i <= 10; i++) {
    let timesNine = i * 9;
    console.log(`${i} * 9 = ${timesNine}`);
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let num = 5;

while (num < 50) {
    console.log(num);
    num += 5;
}


//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

let nums = [2, 7, 5, 9, 8, 7];
const duplicate = nums.filter((num, index) => {
    return nums.indexOf(num) !== index;
})
console.log(duplicate)

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..

