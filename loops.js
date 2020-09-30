//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

let result;
let userinput = prompt("Enter the number for which you want the table");
for (let i = 0; i < 11; i++) {
  result = userinput * i;
  console.log(`${userinput} * ${i} = ${result}`);
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let i = 5;
while (i <= 50);
console.log([i]);

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

let arr = [2, 7, 5, 9, 8, 7];

const dupli = arr.filter((x, index) => {
  return arr.indexOf(x) !== index;
})
console.log(dupli)

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..

function assignGrade(numScore) {
  if (numScore < 60) {
    console.log(`The grade for ${numScore} is F`);
  } else if (numScore >= 61 && numScore <= 70) {
    console.log(`The grade for ${numScore} is D`);
  } else if (numScore >= 71 && numScore <= 80) {
    console.log(`The grade for ${numScore} is C`);
  } else if (numScore >= 81 && numScore <= 90) {
    console.log(`The grade for ${numScore} is B`);
  } else if (numScore >= 91) {
    console.log(`The grade for ${numScore} is A`);
  }
} for (let i = 60; i < 101; i++) {
  assignGrade(i);
}