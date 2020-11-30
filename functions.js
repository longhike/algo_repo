// ************ BINARY SEARCH ********
    module.exports.binarySearch = (array, target) => {
        let sorted = array.sort(compare)
        let min = 0
        let max = sorted.length - 1
        if (sorted) {
            while (min <= max) {
                let avg_ind = Math.floor((min + max)/2)
                if (array[avg_ind] === target) {
                    return true
                }
                else if (array[avg_ind] < target) {
                    min = avg_ind + 1
                }
                else if (array[avg_ind] > target) {
                    max = avg_ind -1
                }
            }
            return false
        }
        
    } 

// ************* FIBONACCI *************
    module.exports.doFib = (n) => {
        let count = 1
        let result = 1
        let previous = 0
        if (n === 1) {
            return previous
        } else {
            while (count < (n - 1)) {
                result += previous
                previous = result - previous
                count++
            }
            return result
        }
    }

// ************* REVERSERS *************

    module.exports.reverseString = (str_inp) => {
        let result = ""
        let input_to_array = str_inp.split("")
        for (i = input_to_array.length - 1; i >= 0; i--) {
            result += input_to_array[i]
        }
        return result
    }

    module.exports.reverseArray = (arr_inp) => {
        let result = [] 
        for (i = arr_inp.length - 1; i >= 0; i--) {
            result.push(arr_inp[i])
        }
        return result
}


// *********** PALENDROMES *************

    module.exports.isStrPalendrome = (str_inp) => {
        let check_result = ""
        let str_condensed = stringHelper(str_inp)
        for (i = str_condensed.length - 1; i >= 0; i--) {
            check_result += str_condensed[i]
        }
        if (check_result !== str_condensed) {
            return "Not a palendrome."
        }
        else {
            return "Yep, that's a palendrome!"
        }
    }

    function stringHelper (str_inp) {
        let condensed = ""
        for (el of str_inp.toLowerCase()) {
            if (el === " " || el === "!" || el === "." || el === "," || el === "/" || el === ";" || el === ":" || el === "'" || el === '"') {
                continue
            }
            condensed += el
        }
        return condensed
    }

// ************** GET THREE LARGEST **************

    module.exports.getThreeLargest = (array) => {
        var result = [null, null, null]
        for (index = 0; index < array.length; index++) {
            if (result[2] === null) {
                result[2] = array[index]
            }
            else if (result[1] === null && array[index] <= result[2]) {
                result[1] = array[index]
            }
            else if (result[0] === null && array[index] <= result[1]) {
                result[0] = array[index]
            }
            else if (array[index] > result[2]) {
                result[0] = result[1]
                result[1] = result[2]
                result[2] = array[index]
            }
            else if (array[index] > result[1] && array[index] <= result[2]) {
                result[0] = result[1]
                result[1] = array[index]
            }
            else if (result[0] < array[index] && array[index] <= result[1]) {
                result[0] = array[index]
            } 
        }
        return result
    } 

// ************** FIND PRIMES ***************

    module.exports.doPrimes = (range) => {
        let result = []
        for (i = 1; i < range; i++) {
            if (i === 2 || i === 3 || i === 5 || i == 7) {
                result.push(i)
            }
            if (i !== 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
                result.push(i)
            }

        }
        return result;
    }

    // ************* HELPERS ******************
    // sort array of integers from least to greatest
        function compare (a, b) {
            if (a > b) {
                return 1
            }
            else if (a < b) {
                return -1
            }
            return 0
            
        } 
    // return string to no punctuation or spaces, all lower case
        function stringHelper (str_inp) {
            let condensed = ""
            for (el of str_inp.toLowerCase()) {
                if (el === " " || el === "!" || el === "." || el === "," || el === "/" || el === ";" || el === ":" || el === "'" || el === '"') {
                    continue
                }
                condensed += el
            }
            return condensed
        }