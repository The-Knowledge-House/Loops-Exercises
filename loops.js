//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
for (i = 0; i < 11; i++) {
    let total = i * 9;
    console.log(`${i} * 9 = ${total}`)
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let jum = 5;
while (jum <= 50) {
    console.log(jum);
    jum += 5;
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
function  printDOOP(arr) {
    let min = -1;
    let set = new Set();
    
    for(let i = arr.length - 1; i >= 0; i--) {
        if (set.has(arr[i]))
    	    min = i;
        else  
    	    set.add(arr[i]);
    } // End For Loop
  
    if (min != -1)
  	    console.log("The first repeating element is " + arr[min]);
    else
  	    console.log("There are no repeating elements");
 } // end of function
  
let arr = [ 10, 5, 3, 4, 3, 5, 6 ];
  
printDOOP(arr);

//     OR:
let rayray= [6,7,8,9,0,5];
let dupe = rayray.find((t,k) => rayray.lastIndexOf(t) !== k);
console.log(dupe);


//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
function assignGrade(score) {
	switch(true) {
  	case score <= 100 && score > 90:
    	return ": A";
    case score <= 90 && score > 80:
    	return ": B";
    case score <= 80 && score > 70:
    	return ": C";
    case score <= 70 && score > 60:
    	return ": D";
    case score < 50:
    	return ": F";
    default:
      return "please enter a valid number grade.";
  }
} // EoF
for (let i = 60; i <= 100; i++) {
    console.log('For ' + i + ', you received a' + assignGrade(i));
  }
