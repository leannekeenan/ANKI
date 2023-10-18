/*ANKi Review: JavaScript*/
//1.
console.log('do... while loop example')
let arr = [];
let i = 0;

do {
    console.log(arr.push(i += 1))
}
while(i < 10)
console.log('defined as a loop function that will complete a specified task while a stated condition is met and end once the condition has been reached')

console.log('')

//2.
console.log('Fetch Syntax')
document.querySelector('span').addEventListener('click', fetch)
function fetch() {
    let url = //any website you want that has postman dtails
fetch(url)
.then(data => data.json())
.then(data => {
    //
})
.catch(err => {
    console.log('error')
}) 
}

console.log('')

//3.
console.log('The underscore convention')
console.log('A common practice among developers to identify scoped variables that should not be modified outside of its object - else unknown errors may occur')
console.log('')

//4.
console.log('Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the following:')
function rockPaperScissors() {
    let random = Math.random()
    if(random < .33) {
     return 'rock';
    }
    else if(random < .66) {
       return 'paper';
     }
    else {
      return 'scissor';
    }
}

function whoWon(player) {
    let bot = rockPaperScissors();
    console.log(`${player}`)
    console.log(`${bot}`)
    if(bot === player) {
        console.log('tie')
    }
    else if(bot === 'rock' && player === 'paper' ||
    bot === 'paper' && player === 'scissors' ||
    bot === 'scissors' && player === 'rock') {

        console.log('player wins')
    }
    else {
        console.log('bot wins')
    }
}
whoWon('paper')
console.log('')

//5.
console.log('Abstraction')
console.log('A concept within Object Oriented Programming that allows for teh showing and hiding of certain information to the user to promote more organized, clean code that provides additional safety to private data - like using a .this method on an object within na function to make it specific to that object and hedden elsewhere')
console.log('')

//6.
console.log('Create a function that returns rock, paper, or scissors as randomly as possible')
function random() {
    let num = 1;
    if(Math.random(num) <= .33) {
        console.log('rock')
    }
    else if(Math.random(num) <= .66) {
        console.log('paper')
    }
    else {
        console.log('scissors')
    }
}
random()
console.log('')

//7.
console.log('Polymprphism')
console.log('A concept of Object Oriented Programming that allows for a single object to be extended into similar objects that in turn have their own properties and methods - as an example an animal object can have a class of dog, cat and bird all extended from it, but each animal can have its own unique features like how they communicate, eat, or move')
console.log('')

//8.
console.log('Spread operator in object literal')
let obj1 = {
    name: 'Leanne',
    postiion: 'software engineer'
}
let obj2 = {
    ...obj1,
    years_of_experience: 1
}
console.log(obj2)
console.log('')

//9.
console.log('Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question')
function question(str) {
    if(str.endsWith('?')) {
        alert('question')
    }
}
question('hello')
console.log('')

//10.
console.log('spread operator in array literal')
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]
console.log(arr2)
console.log('')



/*Codewars Challenge*/
//1.
console.log('')
console.log('')
console.log('')

//2.
console.log('')
console.log('')
console.log('')

//3.
console.log('')
console.log('')
console.log('')

//4.
console.log('')
console.log('')
console.log('')

//5.
console.log('')
console.log('')
console.log('')
