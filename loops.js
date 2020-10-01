//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nine = num.map(function (num) {
  return num * 9;
});
console.log(nine);

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < num2.length; i++) {
  return num2[i] * 9;
}
console.log(num2);

let multiplier = 9;
 for (let i = 0; i <= 10; i++) {
     let result = multiplier * i;
     console.log(multiplier + ' * ' + i + ' = ' + result);
 }
 for (let multiplier = 0; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
   let result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
  }
 }


//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let i = 1;
while (i <= 50) {
  if (i % 5 == 0) {
    console.log(i);
    i++;
  }
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
let testArr = [2, 7, 5, 9, 8, 7];
function findDuplicate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return arr[i];
      }
    }
  }
  return -1; // if theres no d
}
console.log(findDuplicate(testArr));

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
function assignGrade(score) {
  switch (true) {
    case score >= 95:
      return "A";
      break;
    case score > 85 && score <= 90:
      return "B";
      break;
    case score > 70 && score <= 75:
      return "C";
      break;
    case score > 64 && score <= 67:
      return "D";
      break;
    default:
      return "F";
      break;
  }
  for (let i = 80; <= 100; i++){
    console.log(`For a score of ${ i } your grade is  + ${assignGrade(i)}`);
  }
}

