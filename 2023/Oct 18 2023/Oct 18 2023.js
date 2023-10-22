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
console.log('You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party')
function poke(num) {
    for(let i = 1; i <= num; i++) {
        console.log(`pikachu number ${i}, I choose you!`)
    }
}
poke(3)
console.log('')

//2.
console.log('Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.Write a function where you are given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.')
function hydrate(hours) {
    console.log(`while cycling for ${hours} hours, you will need to hydrate with ${Math.round(hours * 0.5)} liters of water`)
}

hydrate(11)
console.log('')

//3.
console.log('filter the number.  Oh, no! The number has been mixed up with the text. You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.  Your goal is to retrieve the number from the text, can you return the number back to its original state?')
function retrieveNum(str) {
    let total = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[0-9]/g)) {
            total.push(str[i])
        }
    }
    console.log(total)
}
retrieveNum('h3ll0')
console.log('')

//4.
console.log('Return Negtive.  You are given a number and have to make it negative. Include edge case if the number is 0')
function returnNegative(num) {
    if(num === 0) {
        console.log(0)
    }
    else if(num < 0) {
        console.log(num)
    }
    else {
        console.log(num * -1)
    }

}
returnNegative(7)
console.log('')

//5.
console.log('There was a test in your class and you passed it. Congratulations! But you\'re an ambitious person. You want to know if you\'re better than the average student in your class. You receive an array with your peers\' test scores. Now calculate the average of the class points and compare your score to the average. Return True if you\'re better, else False!')
function whosBetter(myScore, arr) {
    let classAverage = Math.round((arr.reduce((a, b) => a + b, 0)), 0) / arr.length
    if(myScore > classAverage) {
        console.log('my score: ' + myScore)
        console.log('class avrage: ' + classAverage)
        console.log(true)
    }
    else {
        console.log('my score: ' + myScore)
        console.log('class avrage: ' + classAverage)
        console.log(false)
    }
}
whosBetter([98], [75, 69, 82, 75, 75, 91])
whosBetter([75], [75, 69, 82, 75, 75, 91])

console.log('')
