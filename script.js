const chalk = require('chalk')
const { rev_str_ex, rev_arr_ex, is_pal_ex, big_array, prime_range } = require('./_inputs')
const { reverseString, reverseArray, isStrPalendrome, doFib, getThreeLargest, doPrimes, binarySearch } = require('./functions')

// Outputs
let str_rev = reverseString(rev_str_ex)
let arr_rev = reverseArray(rev_arr_ex)
let is_pal = isStrPalendrome(is_pal_ex)
let fib_check = doFib(20)
let three_lgst = getThreeLargest(big_array)
let get_primes = doPrimes(prime_range)
let doBinarySearch = binarySearch(big_array, 3345)

// ************Console Outputs***********
// String Reverse
console.log(chalk.green.bold(`Reverse a String`))
console.log(chalk.green.underline(`Input:`))
console.log(chalk.green(rev_str_ex))
console.log(chalk.green.underline(`Output:`))
console.log(chalk.green(str_rev))
console.log("\n");
// Array Reverse
console.log(chalk.green.bold(`Reverse an Array`))
console.log(chalk.green.underline(`Input:`))
console.log(chalk.green(rev_arr_ex))
console.log(chalk.green.underline(`Output:`))
console.log(chalk.green(arr_rev))
console.log("\n");
// Palendrome spot check
console.log(chalk.green.bold(`Palendrome Check`))
console.log(chalk.green.underline(`Input:`))
console.log(chalk.green(is_pal_ex))
console.log(chalk.green.underline(`Output:`))
console.log(chalk.green(is_pal))
console.log("\n");
// Fibonnacci output
console.log(chalk.green.bold(`Fibonacci Number`))
console.log(chalk.green(`Given input n where n is the number of`));
console.log(chalk.green(`iterations through F(n) = F(n-1) + F(n-2)`));
console.log(chalk.green(`with F(1) = 0 and F(2) = 1`));
console.log(chalk.green.underline(`Input:`))
console.log(chalk.green(`n = 20`))
console.log(chalk.green.underline(`Output:`))
console.log(chalk.green(fib_check))
console.log("\n");
// Get Three Largest output
console.log(chalk.green.bold(`Return Three Largest Values`))
console.log(chalk.green(`Given a non-sorted array of integers input, return the largest integers, sorted least to greatest`));
console.log(chalk.green.underline(`Input:`))
console.log(chalk.green(`Length of array is: ${big_array.length}; consists of integers between -10,000 and 10,000`))
console.log(chalk.green.underline(`Output:`))
console.log(chalk.green(three_lgst))
console.log("\n");
// Get Primes in a range output
console.log(chalk.green.bold(`Return Primes Given Range`))
console.log(chalk.green(`Given a range input, return integer primes between 1 and the input`));
console.log(chalk.green.underline(`Input:`))
console.log(chalk.green(prime_range))
console.log(chalk.green.underline(`Output:`))
console.log(chalk.green(get_primes))
console.log("\n");
// Binary Search 
console.log(chalk.green.bold(`Binary Search`))
console.log(chalk.green(`Perform a binary search of a sorted array of integers to see whether a given input is included`))
console.log(chalk.green.underline(`Input:`))
console.log(chalk.green(`Value to search is: 3,345; the array has a length of ${big_array.length}`))
console.log(chalk.green.underline(`Output:`))
console.log(chalk.green(doBinarySearch))
console.log("\n");

