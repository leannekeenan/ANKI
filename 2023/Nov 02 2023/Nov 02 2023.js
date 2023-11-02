/*ANKI Review: JavaScript*/
console.log('ANKI Review: JavaScript')
//1.
console.log('keyword extend')
console.log('used in OOP to allow polymorphic objects inherit properties from teir root object while')
console.log('')

//2.
console.log('spread operator used in an array literal')
let arrA = [1, 2, 3];
let arrB = [...arrA, 4, 5, 6];
console.log(arrB)
console.log('')

//3.
console.log('fetch syntax')
let button = document.querySelector('span').addEventListener('click', getFetch);

function getFetch() {
    let url = 'https://google.com'
    let input = /*user input */

    fetch(url)
    .then(result = result.json())
    .then(data => {
        //execute data pulls from url to page
    })
    .catch(err => {
        console.log('err')
    })
}
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

function winner(player) {
    let bot = rockPaperScissors()
    console.log(bot)
    console.log(player)
    if(player === bot) {
        return 'tie'
    }
    else if(bot === 'rock' && player === 'paper' ||
    bot === 'paper' && player === 'scissors' ||
    bot === 'scissors' && player === 'rock') {
        return 'player wins'
    }
    else {
        return 'bot wins'
    }
}
winner('rock')
console.log('')

//4.
console.log('Abstraction')
console.log('The hiding / showing of an objects content based on relevance to the user')
console.log('')

//5.
console.log('OOP')
console.log('Object Oriented PRogramming.  A practice of organizing content into reuseable objects that can be altered as needed throughout a program')
console.log('')

//6.
console.log('Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question')
let sentence = 'is this a string'
if(sentence.endsWith('?')) {
    alert('question')
}
console.log('')

//7.
console.log('polymorphism')
console.log('a branch of OOP that allows a single object to be used as a basis for multiple other objects using the extends keyword')
console.log('')

//8.
console.log('create RPS function to randomize')
function RPS() {
    let number = Math.random()
    if(number <= .33) {
        return 'rock'
    }
    else if(number <= .66) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
    
}
console.log('')

//9.
console.log('underscore convention')
console.log('identifies elements that shoud not me nodified outside of their object else errors may occur in other places in the code')
console.log('')

//10.
console.log('')
console.log('')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('rock paper scissors')
function bot() {
    let number = Math.random();
    if(number < .33) {
        return 'rock'
    }
    else if(number < .66) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}
function draw(player) {
    console.log(bot())
    console.log(player)
    if(player === bot) {
        console.log('draw')
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
draw('rock')
console.log('')

//2.
console.log('return false without ever actually using the word false')
function chuck() {
    console.log(!true)
}
chuck()
console.log('')

//3.
console.log('consonant count') 
function countConsonants(str) {
    let total = 0;
    let vowels = /[aeiou]/ig;
    let matches = str.match(!vowels)
    
    console.log(total)
}
countConsonants('hello')
console.log('')

//4.
console.log('vowel count')
function vowelCount(str) {
    let count = 0;
    let vowels = str.match(/[aeiou]/ig)
    for(let i = 0; i < str.length; i++) {
        let letter = str[i];
        if(vowels.includes(letter)) {
            count++
        }
    }
    console.log(count)
}
vowelCount('hello')
console.log('')

//5.
console.log('friend or foe')
function friend(friends){
    let result = []
    for(let i = 0; i < friends.length; i++) {
    let name = friends[i].trim();
    
    if(name.length === 4) {
    result.push(name)
    }
    }
    console.log(result)
    }
    
    friend(['elijah', 'john', 'bob', 'tim', 'adam', 'marcus'])
console.log('')
