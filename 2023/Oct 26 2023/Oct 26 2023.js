/*ANKI Review: JavaScript*/

console.log('ANKI Review: JavaScript')
//1.
console.log('Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question')
let declareAVariable = 'is this a question?'
if(declareAVariable.endsWith('?')) {
    console.log('question')
}
console.log('')

//2.
console.log('Define  abstraction')
console.log('abstraction is a part of the Object Oriented Programming Process where data that is required for the function but not crucial for the user to have access to is hidden from the user')
function abstractionExample(param1, param2, param3) {
    this.param1 = param1
    this.param2 = param2
    let abstractedElement = param3
    let newFunction = function() {
        console.log(`${param1}, ${param2}`)
    }
} 

let abstraction = new abstractionExample('hello', 'hi', 'howdy')
console.log(abstraction)
console.log('there is a param3 (howdy) but is will not show as it is an encapsulated element that can not be abstracted from outside the function')
console.log('param1 = ' + abstraction.param1);
console.log('param3 = ' + abstraction.param3);
console.log('')

//3.
console.log('Do ... while loop definition')
console.log('a function that executes a function until the set condition is met at which point the loop ends')
let total = 0;
let iterator = 1;
do {
    total += iterator
    console.log(total)
}
while(total < 10)
console.log('')

//4.
console.log('Keyword Extend')
console.log('Used in polymorphism to create a class that extends from a superclass, inheriting its proerties and having the ability to override them and add unique proerties without altering the orignal object')
console.log('')

//5.
console.log('Fetch Syntax')
/*document.querySelector('span').addEventListener('click', getFetch);

function getFetch(url) {
    let url = ''

    fetch(url)
    .then(result => result.json())
    .then(data => {

    })
    .catch(err => {
        console.log(err)
    })
}*/
console.log('')

//6.
console.log('Create a function that returns rock, paper, or scissors as randomly as possible')
function RPS() {
    let value = Math.random();
    if(value < .33) {
        return 'rock'
    }
    else if(value < .66) {
        return 'paper'   
    }

    else {
        return 'scissors'
    }
}
RPS()
console.log('')

//7.
console.log('Underscore convention')
console.log('A way for developers to communicate to other developers not to modify aprivate or internal object from outside of its function else errors may occur in other areas of a program')
console.log('')

//8.
console.log('Polymorphism')
console.log('An OOP inheritance option where objects extended from constructors can keep or modify inherited properties while adding unique properties of their own without altering the orignal object or others.  It uses the super keyword to identify content being directly used from the orignal superclass within the new object')
console.log('')

//9.
console.log('spread in object literals and array literal')
let obj1 = {
    myname: "Leanne", 
    myoccupation: 'developer'
}
let obj2 = {
    ...obj1,
    mylocation: 'CA'
}
console.log(obj2)


let arr1 = [2, 3, 4];
let arr2 = [...arr1, 5, 6, 7];
console.log(arr2)
console.log('')

//10.
console.log('Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the function from question 6:')
function whoWon(player) {
    let bot = RPS();
    console.log(player);
    console.log(bot);
    if(player === bot) {
        console.log('tie');
    }
    else if(bot === 'rock' && player === 'paper' ||
    bot === 'paper' && player === 'scissors' ||
    bot === 'scissors' && player === 'rock') {
        console.log('player Wins')
    }
    else {
        console.log('bot wins')
    }
}
whoWon('rock')
console.log('')



/*Codewars Challenge*/
console.log('Codewars Challenges')
//1.
console.log('Sum of Multiples - Find the sum of all multiples of n below m. Return INVALID if the total is less than 0')
function sumOfMultiples(n, m) {
    let result = []
    for(let i = n; i < m; i++) {
        if(n === 0 || m === 0) {
            console.log('invalid')
        }
        else {
            result.push(i)
        }
    }
    console.log(result.reduce((a, b) => a + b, 0))
}
sumOfMultiples(1, 10)

function sum(n, m) {
    let total = 0;
    
    for(let i = 1; i * n < m; i++) {
    total += i * n;
    }
    
    if(total <= 0) {
    console.log('INVALID')
    }
    else {
    console.log(total)
    }
    }
sum(1, 10)    
console.log('')

//2.
console.log('Sum of diff in array - Your task is to sum the differences between consecutive pairs in the array in descending order')
function sumOfDiff(arr) {
   if(arr.length <= 1) {
    return 0
   }
   else {
    console.log(Math.max(...arr) - Math.min(...arr))
   }
}
sumOfDiff([2, 5], [2, 3], [2, 4])

function sod (arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let pair = arr[i];
        result.push(pair)
    }
    console.log(result.reduce((a, b) => b - a, 0))
}
sod([2, 5], [2, 3], [2, 4])
console.log('')
console.log('')

//3.
console.log('Change Case - Change the casing of all the words in a string to capital letters')
function changeCase(str) {
    let speech = str.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
    console.log(speech)
}
changeCase('hello world')
console.log('')

//4.
console.log('Calculate Average - Write a function which calculates the average of the numbers in a given list.')
function calculateAverage(arr) {
    console.log((arr.reduce((a, b) => a + b, 0)/ arr.length))
}
calculateAverage([1, 2, 3, 4, 5])
console.log('')

//5.
console.log('Create a function that reverses your list and prints it to the console.')
function reverse(arr) {
    console.log(arr.reverse())
}
reverse(['reverse', 'in', 'is', 'this'])
console.log('')
