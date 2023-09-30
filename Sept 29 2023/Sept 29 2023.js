/*JavaScript Review*/
//1. Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let variable = 'hello, I am a Jr. Dev';
console.log(variable.replaceAll('Jr. Dev', 'Software Engineer'));


//2. Create a constructor class with 5 attributes and 3 methods
function Dog(name, age, breed, shots, trained) {
    this.name = name,
    this.age = age,
    this.breed = breed,
    this.shots = shots,
    this.trained = trained,

    this.bark = () => {
        console.log('bark')
    }

    this.eat = () => {
        console.log('eat')
    }

    this.protect = () => {
        console.log('protect')    
    }
}

let Zeus = new Dog('Zeus', 4, 'Black Labrador', true, true)

console.log('')
//3. Define Abstraction
// One of the four pillars of OOP, pretaining to the hiding and showing of relative content to the user
function Example (who, what, when, where, why) {
    this.who = who
    this.what = what
    this.when = when
    this.where = where
    let reason = why
}
let result = new Example('You', 'That', 'Then', 'There', 'Thoughts') 
console.log(result.who)
console.log(result.why)

console.log('')
//4. Underscore Convention
console.log('The underscore convention is a guideline used by engineers to identify variables and functions as private and should not be modified as they may cause unexpected errors in the overall code')

console.log('')
//5. What is a variable
console.log('a variable is essentially a bucket for content to go into and be used as a reference in memory to retrieve that data when called')
console.log('')

//6. Create a function that returns rock, paper, or scissors as randomly as possible
function RPS() {
    let iterator = Math.random()
    if(iterator < .33) {
        console.log('rock')
    }
    else if(iterator < .66) {
        console.log('paper')
    }
    else {
        console.log('scissors')
    }
}
RPS()

console.log('')
//7. Syntax for spread operator in object literals
let A = {
    name: 'Sam'
}

let B = {
    ...A,
    age: 36
}

console.log(B)
console.log('')
//8. Define Polymprohism
console.log('The act of using a single template to create multiple variations of an object')
console.log('The concept of different classes being treated in a uniform way due to a shared base class')
console.log('')
//9. Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the following: See problem 6

function rockPaperScissor() {
    const random = Math.random();
    if (random < 0.33) {
        console.log('rock');
    } else if (random < 0.66) {
        console.log('paper')
    } else {
        console.log('scissor')
    }
}

function checkWin(player) {
    const bot = RPS();
    console.log(`Player: ${player}`)
    console.log(`Bot: ${bot}`)
    if (player === bot) {
        console.log('Tie');
    }
 
    else if (
        (player === 'rock' && bot === 'scissor') ||
        (player === 'scissor' && bot === 'paper') ||
        (player === 'paper' && bot === 'rock')
    ) {
        console.log('Player Wins');
    }
 
     else {
        console.log('Bot Wins');
    }
}
checkWin('paper');
console.log('')


//10. fetch syntax
/*document.querySelector('h1').addEventListener('click', runFetch)
function runFetch() {
    let url = 'www.google.com'
    fetch(url).then(res => res.json())
    .then(data =>{
        
    }) 
    .catch(err => {
        console.log(`error ${err}`)
    })
}
*/

/*Codewars Challenges*/
//1. Friend or Foe?
console.log('Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he\'s not...')
function friendOrFoe(arr) {
    if(arr.length >= 4) {
        console.log(arr[0] + ' , ' + arr[1] + ' , ' + arr[2] + ' and others like this')    
    }
    else if(arr.length === 3) {
        console.log(arr[0] + ' , ' + arr[1] + ' and ' + arr[2] + ' likes this')        
    }
    else if(arr.length === 2) {
        console.log(arr[0] + ' and ' + arr[1] + ' likes this')        
    }
    else {
        console.log(arr[0] + ' likes this')        
    }
}
friendOrFoe([1])
friendOrFoe([1, 2])
friendOrFoe([1, 2, 3])
friendOrFoe([1, 2, 3, 4])
console.log('')


//2. Does the string contain the character
console.log('Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.')
function contain(str, char) {
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) {
           count++
        }
    }
    console.log(count)
}
contain('hello', 'l')
console.log('')


//3. 
console.log('Add the values of an array.  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.')
function add(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr.reduce((a, b) => a + b, 0))
    }
}
add([1, 2, 3, 4])
console.log('')
//4. Array Plus Array
console.log('sum of two arrays elements into a single value')
function twoArray(arr1, arr2) {
    let joinedArrays = arr1.concat(arr2);
    console.log(joinedArrays.reduce((a, b) => a + b, 0))
}
twoArray([1, 2, 3, 4], [5, 15])
console.log('')

//5. Remove First and Last Character
function remove(str) {
    console.log(str.slice(1, -1))
}
remove('hello Everyone!  I Love Coding!')