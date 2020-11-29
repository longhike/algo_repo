const chalk = require('chalk')
const { rev_str_ex, rev_arr_ex, is_pal_ex, three_lgst_ex, prime_range } = require('./_inputs')
const { reverseString, reverseArray, isStrPalendrome, doFib, getThreeLargest, doPrimes } = require('./functions')

// Outputs
let str_rev = reverseString(rev_str_ex)
let arr_rev = reverseArray(rev_arr_ex)
let is_pal = isStrPalendrome(is_pal_ex)
let fib_check = doFib(20)
let three_lgst = getThreeLargest(three_lgst_ex)
let get_primes = doPrimes(prime_range)

// ************Console Outputs***********
// String Reverse
console.log(chalk.blue.bold(`Reverse a String`))
console.log(chalk.blue.underline(`Input:`))
console.log(chalk.blue(rev_str_ex))
console.log(chalk.blue.underline(`Output:`))
console.log(chalk.blue(str_rev))
console.log("\n");
// Array Reverse
console.log(chalk.blue.bold(`Reverse an Array`))
console.log(chalk.blue.underline(`Input:`))
console.log(chalk.blue(rev_arr_ex))
console.log(chalk.blue.underline(`Output:`))
console.log(chalk.blue(arr_rev))
console.log("\n");
// Palendrome spot check
console.log(chalk.blue.bold(`Palendrome Check`))
console.log(chalk.blue.underline(`Input:`))
console.log(chalk.blue(is_pal_ex))
console.log(chalk.blue.underline(`Output:`))
console.log(chalk.blue(is_pal))
console.log("\n");
// Fibonnacci output
console.log(chalk.blue.bold(`Fibonacci Number`))
console.log(chalk.blue(`Given input n where n is the number of`));
console.log(chalk.blue(`iterations through F(n) = F(n-1) + F(n-2)`));
console.log(chalk.blue(`with F(1) = 0 and F(2) = 1`));
console.log(chalk.blue.underline(`Input:`))
console.log(chalk.blue(`n = 20`))
console.log(chalk.blue.underline(`Output:`))
console.log(chalk.blue(fib_check))
console.log("\n");
// Get Three Largest output
console.log(chalk.blue.bold(`Return Three Largest Values`))
console.log(chalk.blue(`Given a non-sorted array of integers input, return the largest integers, sorted least to greatest`));
console.log(chalk.blue.underline(`Input:`))
console.log(chalk.blue(three_lgst_ex))
console.log(chalk.blue.underline(`Output:`))
console.log(chalk.blue(three_lgst))
console.log("\n");
// Get Primes in a range output
console.log(chalk.blue.bold(`Return Primes Given Range`))
console.log(chalk.blue(`Given a range input, return integer primes between 1 and the input`));
console.log(chalk.blue.underline(`Input:`))
console.log(chalk.blue(prime_range))
console.log(chalk.blue.underline(`Output:`))
console.log(chalk.blue(get_primes))
console.log("\n");

