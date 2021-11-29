const perf = require('execution-time')();

//Adds to Zero
    //Variables
let numArr = [0,2,-2,6,-3]
let value = false
let x = 1


    //Functions
const sumZero = (arr) => {
    for(i = 0; i < arr.length; i++){
           if(numArr[i] + numArr[x] === 0){
               value = true
           } else {
               x++
           }
        } return value
    }
    

perf.start();
sumZero(numArr)
let finshed = perf.stop()


console.log('Runtime is', finshed.preciseWords)

    //Runtime = O(n)



//Unique Characters

const hasUniqueChars = (str) => {
    let val = true
    let k = str.charCodeAt(x)
    let j = str.charCodeAt(i)

    for(i=0; i < str.length; i++) {
        let x = 1
            if (j === k && x !== i) {
                str = str.substr(x-1)
                 return val = false
            }else {
                return val
            }  x++
           
        }
    } 

    perf.start();
    console.log(hasUniqueChars('Hel World'))
    let finshed2 = perf.stop()

    console.log('Runtime is', finshed2.preciseWords)

    //Runtime = O(n)



//Pangram Sentence 
    //Not Working
const isPan = (str) => {
    let alph = /^[A-za-z]*$/
    if(str.match(alph) === true){
        return 'String is a Pangram'
    } else {
        return 'String is not a Pangram'
    }
}


let str1 = "The quick brown fox jumps over the lazy dog"
let str2 = "The cat fell"

perf.start();
console.log(isPan(str1))
console.log(isPan(str2))
let finshed3 = perf.stop()

console.log('Runtime is', finshed3.preciseWords)

    //Runtime = O(1)


//Longest Word
    //Working
const longestWord = (word1, word2) => {
    wordi = word1.split('')
    wordii = word2.split('')
    if (wordi.length > wordii.length){
        return `${word1} is longer`
    } else {
        return `${word2} is longer`
    }
}

perf.start();
console.log(longestWord('Bread', 'Toaster'))
let finshed4 = perf.stop()

console.log('Runtime is', finshed4.preciseWords)

//Runtime = O