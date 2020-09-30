//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)


for(let i = 0; i < 10; i++){
    console.log(`${i} * 9 = ${i * 9}`);
}



//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let num = 5;

while(num <= 50){
    console.log(num);
    num+=5;
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

function duplicates (arr){
    let sortedArr = arr.sort((a, b) => a - b);
    for(let i = 0; i < sortedArr.length-1; i++){
        if(sortedArr[i] === sortedArr[i+1]){
            return sortedArr[i];
        }
    }

    return "No Duplicates."
}

console.log(duplicates([2,2,7,5,9,8,7]));

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..

function assignGrade(score) {
    if (score > 90) {
        return `A`;
    } else if (score > 80) {
        return `B`;
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}
for (let score = 60; score < 100; score++){
    console.log(`For ${score} you got ${assignGrade(score)}`);
}