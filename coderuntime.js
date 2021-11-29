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
