/*ANKI Review: */
console.log('ANKI Review: JavaScript')
//1.
console.log('1. spread operator in object literal')
let obj1 = [1, 2, 3];
let obj2 = [...obj1, 4, 5, 6]
console.log(obj1)
console.log(obj2)
console.log('')

//2.
console.log('2. Declaration reassignment syntax')
let reassignment = 0
console.log(reassignment)
reassignment += 1;
console.log(reassignment)
console.log('')

//3.
console.log('3. variable++')
console.log('returns current value before incrementing')
console.log('')

//4.
console.log('4. Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question')
let string = 'is this a question?'
if(string.endsWith('?')) {
    console.log(true)
}
console.log('')

//5.
console.log('5. Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the following:')
function RPS() {
    let play = Math.random();
    if(play <= .33) {
        return 'rock'
    }
    else if(play <= .66) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function winner(user) {
    let bot = RPS()
    if(bot === user) {
        console.log('user: ' + user)
            console.log('bot: ' + bot)
        console.log('tie')
    }
    else if(bot === 'rock' && user === 'paper' || bot === 'paper' && user === 'scissors' || bot === 'scissors' && user === 'rock') {
            console.log('user: ' + user)
            console.log('bot: ' + bot)
            console.log('User Wins')
    }
    else {
            console.log('user: ' + user)
            console.log('bot: ' + bot)
            console.log('Bot Wins')    
    }
}
winner('paper')
console.log('')

//6.
console.log('6. create a fucntion that returns 5 values as randomly as possible')
function random() {
    let value = Math.random();
    if(value <= .20) {
        console.log('rogue')
    }
    else if(value <= .40) {
        console.log('paladin')
    }
    else if(value <= .60) {
        console.log('sorcerer')
    }
    else if(value <= .80) {
        console.log('barbarian')
    }
    else {
        console.log('druid')
    }
}
random()
console.log('')

//7.
console.log('7. Keyword "extend"')
console.log('Used to polymorphize new objects from a common object.  For example the class animals can have general proeprties like name and size, but can be extended to specific animals like birds, cats, and dogs, allowing for more specific and unique properties to be added/modified without altering the bas class, and allowing the extended class to mutate inherited properties')
console.log('')

//8.
console.log('8. OOP')
console.log('Object Oriented Programming.  A organizational concept used by programmers worldwide to provide a organized, modual program that, if necessary, can meke modifications, remove or replace individual functions within a larger project without creating errors elsewhere in the program')
console.log('')

//9.
console.log('9. Underscore convention')
console.log('A indicator used by programmers, although not a hard coded rule in JavaScript.  Used to specify variables that should not be edited outside of the scope of their function, else errors may occur in other areas of a program')
console.log('')

//10.
console.log('10. fetch syntax')
let element = document.querySelector('span').addEventListener('click', getFetch)

function getFetch() {
    let url = //website your getign data from
    fetch(url)
    .then(res => res.json())
    .then(data => {

    })
    .catch(err => {
        console.log(err)
    })
}
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. MULTIPLES OF 3 AND 5')
function multiples(num) {
    let total = 0
    for(let i = 0; i < num; i++) {
        if(i % 5 === 0 || i % 3 === 0) {
            total += i
        }
    }
    console.log(total)
}
multiples(10)
console.log('')

//2.
console.log('2. vowel count')
function vowelCount(str) {
    let vowels = /[aeiou]/ig;
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(vowels)) {
            count++
        }
    }
    console.log(count)
}
vowelCount('hello all')
console.log('')

//3.
console.log('3. do... while loop')
function doWhile(str, num) {
    do {
        if(num % 2 === 0) {
            str = `${str}*`
        }
        else {
            str = `*${str}`
        }
        num--
    }
    while(num > 0)
    console.log(str)
}
doWhile('hello', 5)
console.log('')

//4.
console.log('4. Did they say hello')
let greetings = {
    english: 'hello',
    spanish: 'hola',
    french: 'bonjour'
}

function hello(str) {
    for(let options in greetings) {
        if(greetings[options].toLowerCase().includes(str.toLowerCase())) {
            console.log(true)
            return
        }
        else {
            console.log(false)
            return
        }
    }
}

hello('hello')
console.log('')

//5.
console.log('5. index of an array. create a function that accepts two paraneters (array and element) and returns the index of the element if found and "not found" otherwise')
function indexOfElement(arr, e) {
    if(arr.includes(e)) {
        console.log(arr.indexOf(e))
        return arr.indexOf(e)
    }
    else {
        console.log('not found')
        return 'not found'
    }
}
indexOfElement('hello', 'o') //4
indexOfElement(['h', 'e', 'l', 'l', 'o'], 'o')
console.log('')
