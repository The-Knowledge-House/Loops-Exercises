//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

let num = 2;
for (let i = 0; i <= 10; i++) {
        console.log(i * num);
}

for (let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++){
        console.log(i * j);
    }
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let number = 5;

while(number < 51){
    console.log(number);
    number += 5;
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

function duplicateNums(arr){
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        } else {
            return arr[i]
        }
       
    }
    // for (let i = 0; i < arr.length; i++) {
    //    for (let j = i + 1 ; j < arr.length; j++){
    //        if(arr[i] === arr[j]){
    //            console.log(arr[i],"=", arr[j])
    //         //    return arr[j];
    //        } else {
    //            console.log(arr[i], "!=", arr[j])
    //        }
    //    }
    // }
}

console.log(duplicateNums([2,7,5,9,8,7]))

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..

function assignGrade(){
    for (let score = 60; score < 100; score++) {
        if (score >= 60 && score <= 65){
            console.log(`you got a ${score}`);
        } else if (score >= 66 && score <= 72){
            console.log(`you got a ${score}`);
        } else if (score >= 73 && score <= 85){
            console.log(`you got a ${score}`);
        } else if (score >= 86 && score <= 94){
            console.log(`you got a ${score}`);
        } else if (score >= 95){
            console.log(`you got a ${score}`);
        }
    }
}

console.log(assignGrade())