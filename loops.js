//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

function loop (){
let count = 0; 
let result;
for(let i = 0; i <= 10 ; i++){
   
   result = i * 9 
   console.log(result);
}
}

loop ()

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let i = 5;

while(i <= 50){
  
  console.log(i);
  i+=5
}


//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

function duplicate(arr){
 let result = [arr[0]];
 let crumb = {}
 for(let i = 0; i <= arr.length; i++){
     if(!crumb[arr[i]]){
        result.push([arr[i]])
        crumb[arr[i]] = true
     }
 }
   return result
}

duplicate([2,7,5,9,8,7]);

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
