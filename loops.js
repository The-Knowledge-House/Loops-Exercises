//Write a for loop that will iterate from 0 to 10,

//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
let  multiplier = 9;
for (let i = 1; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let num= 5;
while(num<=50){
  console.log(num)
  num=num+5;

}


//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
let testArr = [2, 7, 5, 9, 8, 7];
function findDuplicate(arr)
{
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return arr[i];
            }
        }
    }
    return -1; // if theres no d
}


//Remembering the results from the conditionals exercise on Monday
 ///use the assignGrade function by logging every value from 60 to 100:
//your log should show "
function assignGrade(grade) {
  if (grade > 90) {
      return 'A';
  } else if (grade > 80) {
      return 'B';
  } else if (grade> 70) {
      return 'C';
  } else if (grade > 65) {
      return 'D';
  } else {
      return 'F';
  }
}

for (let i = 60; i <= 100; i++) {
console.log('For ' + i + ', you got a ' + assignGrade(i));
}