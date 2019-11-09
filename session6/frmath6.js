function checkAnswer(dice, answer, score){
    if(dice < 0.5) {
        if(answer=="T"){
            return score + 1
        }else{
            return score - 1
        }
    }else{
        return score + 1
    }
           
}
function generateQuiz() {
    let a = Math.floor(Math.random()*10)
    let b = Math.floor(Math.random()*10)
    let c = Math.floor((Math.random()+1)*2)
    let res = a + b
    let dice = Math.random()
    if(dice<0.5){
        console.log(`${a} + ${b} = ${res}`);//string format
    }else{
    console.log(`${a} + ${b} = ${res + c}`)
    }
}

let score = 0
let playing = true
for(let i = 0; playing; i+=1){
    let dice = Math.random()
    generateQuiz(dice)
    let answer = prompt('T/F?')
    if(answer=="exit"){
        playing = false
    }else {    score = checkAnswer(dice, answer, score)
        console.log(score);
    }
}
//-----------------------------------------------------
//IDEA AB FUNCTION
// function filterOdd(array) {
//     let newArray = []
//     for(let i=0; i<array.length; i+=1){
//         console.log(array[i]);
//         if (array[i] % 2 == 0){
//             newarray.push(array[i])
//         }
//     }
//     return newArray
// }
// let res = filterOdd([1,3,5,7,9])
// console.log(res);
// console.log(filterOdd[2,4,5,7,9])
//--------------------------------------------------------

//EXERCISE: https://gist.github.com/minhduc9699/33a3253fce411be6cd866666198cb713?fbclid=IwAR2_GfhUhXSEa4C8BlyrErIV5oLjmyWm_vy2sbxiOHuOkoB1WEEZvo6zDLY
// Part 1:
let listNumbers = [];
let number = "";

let inputNumbers = prompt("Enter your list number, separated by space:");

for (let index = 0; index < inputNumbers.length; index++) {
    
    if (inputNumbers[index] !== " ") {
        number += inputNumbers[index];
    } else {
        number = "";
    }

    if (number !== "") {
        listNumbers.push(parseInt(number));
    }        
}

// Phần code tìm giá trị lớn nhất
let maxNumber = -999999;
for (let index = 0; index < listNumbers.length; index++) {
    if (listNumbers[index] > maxNumber) {
        maxNumber = listNumbers[index];
    }
}

console.log(maxNumber);


// Part 2
let sentence = prompt("Enter your sentence, separated by space:");
let sentenceNoSpace = "";
for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
        sentenceNoSpace += sentence[index];
    }
}

console.log(sentenceNoSpace);


