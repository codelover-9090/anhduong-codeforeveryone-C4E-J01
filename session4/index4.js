// let person = {
//     Name: 'Tho', 
//     Age: 20 , 
//     Hometown: 'Nha Trang' 

// }
// console.log(person);

//READ
// let movie = {
//     Title: 'The Peanut Butter Falcon', 
//     Director: 'Tyler Nilson' , 
//     Runtime:  '‎93 minutes' ,
//     Genre: 'Action & Adventure, Drama'
// }
// console.log(movie.Genre);//*Read1: obj.key ->value 
// console.log(movie['Director']);// R2: obj['key'] ->value


// for(let k in movie){ //*Read all
//     console.log(k,movie[k]); }

// //CREATE
// movie.actor = 'Dakota Johnson'
// movie['actor1']= 'Zack Gottsagen'
// console.log(movie.actor)
// console.log(movie['actor1'])

//
// let newKey = prompt("enter a new key")
// let newValue = prompt("enter a new value ")
// // console.log(movie.newKey = newValue);

// movie.Title = 'Skyfall' // Update

// delete movie.Director // Delete
// movie['Genre'] = 'Action Thriller' 
// console.log(movie);
// ;

//--------------------------------------------------------------
// let quizzes = [
//     { 
//         question: 'What is iphone latest model?',
//         choices: [
//             'X', 'XE', '11', 'XR2'
//         ], 
//         answer: 3

//     },

// let userChoice = prompt("enter your answer")
// if(userChoice == quizzes.answer){
//     console.log("Bravo!"); }
// else{console.log("Ugh ugg! The answer is 3 ")}

//     {
//         question: 'How many legs does rooster have?',
//         choices: [
//             '10 legs', '2 legs', '4 legs', ' 8 legs'
//         ],
//         answer: 2
//     },
// ]
//     for(let i=0; i<quizzes.length; i+=1 ){
//         console.log(quizzes[i].question);
//         let choices = quizzes[i].question
//         for(let j=0; j<choices.length; j=1){
//             console.log(j + 1, choices[j]);}
//         let userChoice = prompt("enter your answer")
//         if(userChoice - 1==quizzes[i].answer){
//             console.log("Bravo!");}
//         else{"Try again next time T.T"}
//         }
