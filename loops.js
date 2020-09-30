//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

for (let i = 0; i < 11; i++) {
  result = i * 9;
  console.log(i + " * 9 =" + result);
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let j = 5;
while (j <= 50) {
  for (let j = 5; j <= 50; j += 5) {
    console.log(j)
  }
  break;
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

function duplicateNum(arrNum) {
  for (let k = 0; arrNum.length; k++) {
    if (arrNum.indexOf(arrNum[k]) !== k) {
      return arrNum[k]
    }
  }
}
console.log(duplicateNum([3, 4, 5, 6, 7, 7]))

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
