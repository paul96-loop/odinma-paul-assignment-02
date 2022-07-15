// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(array) {
  let sum =0
  for (let index = 0; index < array.length; index++) {
  sum += array[index]  
  }
  

  return sum;
}
const number=[10,20,30,40,60]
sumOfNumbers(number)
console.log(sumOfNumbers(number))





 // assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function addEvenNumbers(array) {
    let sum =0
  
  for (let index = 0; index < array.length; index++) {
    if(array[index] % 2===0)
      sum += array[index]
  }
  return sum
}
const numbers = [1,2,3,4,5,6,7]
console.log(addEvenNumbers(numbers))
// assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(array) {
    let newArr =[]

  for (let index = 0; index < array.length; index++) {
    let newVal= parseInt ((array[index] * 9/5) + 32)
    newArr.push (newVal)
  }
  
  // return arrayOfNumbers;
  console.log (newArr)
  
  
}
const numberss = [120,110,70,30,50,60,78]
  console.log(celsiusToFahrenheit(numberss))
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

