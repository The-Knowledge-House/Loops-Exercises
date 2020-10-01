//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
  var result = multiplier * i;
  console.log(multiplier + " * " + i + " = " + result);
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let num = 5;
while (num <= 50) {
  console.log(num);
  num = num + 5;
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
function duplicateNum(arrNum) {
  for (let k = 0; arrNum.length; k++) {
    if (arrNum.indexOf(arrNum[k]) !== k) {
      return arrNum[k];
    }
  }
}
console.log(duplicateNum([3, 4, 5, 6, 7, 5, 7]));

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "F";
  }
}
for (let i = 80; i <= 100; i++) {
  console.log("For " + i + ", you got a " + assignGrade(i));
}

let multiplier = 9;
for (let i = 0; i <= 10; i++) {
  let result = multiplier * i;
  console.log(multiplier + " * " + i + " = " + result);
}
for (let multiplier = 0; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
  }
}
