//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

function myLoop(){
    let num = [0,1,2,3,4,5,6,7,8,9,10]
    for(let i = 0; i < num.length; i++){
      console.log(num[i] * 9)
    }
  }
myLoop()

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let i = 5;
while (i < 51){
  console.log(i);
    i = i + 5;
}


//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
function duplicate(arr) {
    let elementSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (elementSet.has(arr[i])){
          return arr[i];
        }
        elementSet.add(arr[i]);
    }
  
    return "There are no duplicates here!";
  }
  
console.log(duplicate([2,7,5,9,8,7]))


// Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
// your log should show "For 88, you got a B" "For 90 you got an A"etc..

function assignGrade(num){
  if(num >= 90 && num < 100){
    return "For a " + num + ", you got A"
  }
  else if(num >= 80 && num < 90){
    return "For a " + num + ", you got B"
  }
  else if(num >= 70 && num < 80 ){
    return "For a " + num + ", you got C"
  }
  else if(num >= 60 && num < 70){
    return "For a " + num + ", you got D"
  }
  else{
    return "For a " + num + ", you got F"
  }
}

console.log(assignGrade(50))
console.log(assignGrade(70))
console.log(assignGrade(90))

  

