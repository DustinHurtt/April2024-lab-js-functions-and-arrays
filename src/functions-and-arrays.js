// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arraryOfWords) {

    if (arraryOfWords.length === 0) {
        return null
    }

    let longestWord = ''

    arraryOfWords.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })

    return longestWord

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    
    let sum = 0
    
    arrayOfNumbers.forEach((number) => {
        sum += number
    })

    return sum

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {

    if (arrayOfNumbers.length === 0) {
        return 0
    }

    return sumNumbers(arrayOfNumbers)/arrayOfNumbers.length

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arraryOfWords, word) {

    if (arraryOfWords.length === 0) {
        return null
    }

    return arraryOfWords.includes(word)   

}
