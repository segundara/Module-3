// 1)
// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function sum(int1, int2) {
    if (int1 === int2) {
        return (3 * (int1+int2))
    }
    else return int1 + int2
}

// 2)
// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function check(num1, num2) {
    if ((num1 + num2)===50) {
        return true
    }else if (num1 === 50 || num2 === 50){
        return true
    }
    else return false
}

// 3)
// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function remChar(str, pos) {
    let before = str.substring(0,pos)
    let after = str.substring(pos+1,str.length)
    return (before + after)
}

// 4)
//  Write a JavaScript program to find the largest of three given integers.
function largest(int1, int2, int3) {
    let d_largest
    if (int1 > int2)
    {
      d_largest = int1;
    } else
    {
      d_largest = int2;
    }

    if (int3 > d_largest) 
    {
      d_largest = int3;
    }
    return d_largest;
  }

//   5)
// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function range(num1, num2) {
    if ((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100))
     {
    return true;
     } 
    else 
     {
    return false;
  }
}

// 6) 

// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
function copy(str,count) {
    return str.repeat(count);
}

// 7)
// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function cityName(str) {
    if (str.startsWith('Los') || str.startsWith('New')) {
        return str
    } else {
        return ''
    }
}

// 8)
// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
function sum_of_three(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum+=array[index]
    }
    return sum
}

// 9)
// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
function contain(arr) {
    if (arr.indexOf(1) != -1 || arr.indexOf(3) != -1){
        return true
    }
    else{
        return false
    } 
}

// 10)
// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
function notContain(arr) {
    if (arr.indexOf(1) == -1 || arr.indexOf(3) == -1){
        return true
    }
    else{
        return false
    }
}

// 11)
// Write a JavaScript to find the longest string from a given array of strings.
function longest(strArr){
    let dLongest = ""
    for (let index = 0; index < strArr.length; index++) {
        if(strArr[index].length > dLongest.length){
            dLongest = strArr[index]
        }else dLongest = dLongest
        //const element = array[index];
    }
    return dLongest
}

//let strings = ["long", "longer", "longest"]
//console.log(longest(strings))

// 12)
// Write a JavaScript program to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
function type(angle) {
    if(angle < 90) {
        return "Acute angle";
    }
    if(angle === 90) {
    return "Right angle";
    }
    if(angle < 180) {
    return "Obtuse angle";
    }
    return "Straight angle";
}

// 13)
// Write a JavaScript program to find the index of the greatest element of a given array of integers
function index(array) {
    let greatest = 0
    let i
    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if (array[index] > greatest){
            greatest = array[index]
            i = index
        }
        else {
            greatest = greatest
        }
        
    }
    return i
}

// 14)
// Write a JavaScript program to get the largest even number from an array of integers.
function largestEven(array) {
    let largest = 0
    let i
    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if (array[index] % 2 === 0){
            if (array[index] > largest) {
                largest = array[index]
            }
            else largest = largest
        }
        else continue
    }
    return largest
}

// 15)
// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function check(num1,num2) {
    if ((num1 + num2)===50) {
        return true
    }else if (num1 === 50 || num2 === 50){
        return true
    }
    else return false
}

// 16)
// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
function checkPosNeg(int1, int2) {
    if (((int1 > 0) && (int2 < 0)) || ((int1 < 0) && (int2 > 0))){
        return true
    }
    else if ((int1 > 0) && (int2 > 0)){
        return 'both are positive'
    }
    else return 'both are negative'
}

// 17)
// Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
function createStr(str) {
    if (str.length < 3){
        return str.toUpperCase()
    }
    else{
        first_3 = (str.substring(0, 3)).toLowerCase();
        others = str.substring(3, str.length);  
        return first_3 + others;
    }
    
}

// 18)
// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
function mySum(int1,int2) {
    if (((int1 + int2) >= 50) && ((int1 + int2) <= 80)) {
        return 65
    }
    else return 80
}

// 19)

// Convert a number to a string, the contents of which depend on the number's factors.

// If the number has 3 as a factor, output 'Pling'.
// If the number has 5 as a factor, output 'Plang'.
// If the number has 7 as a factor, output 'Plong'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// In raindrop-speak, this would be a simple "Plong".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has four factors: 1, 2, 17, and 34.
// In raindrop-speak, this would be "34".
function convert(num) {
    
}

// 20)
// Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).
function convertPhrase(str) {
    let acronym = ''
    let mystr = str.split(" ")
    for (let index = 0; index < mystr.length; index++) {
        const element = mystr[index];
        acronym += element.charAt(0)
        
    }
    return acronym.toUpperCase()
}
console.log(convertPhrase('Portable Network Graphics'))

