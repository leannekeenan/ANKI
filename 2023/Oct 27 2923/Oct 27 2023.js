/*ANKI Review: Syntactical Expressions*/
console.log('ANKI Review: Syntactical Expressions')
//1.
console.log('obj literal arrow function')
let arrowFunction = () => {
    let objLit = {
        param1: 'name',
        param2: 'number'
    }
}
console.log('')

//2.
console.log('If / else if /else statement syntax')
if(condition = true) {
    console.log('execute this condition')
}
else if (condition = true) {
    console.log('execute this alternate condition')
}
else {
    console.log('this condition as a default')
}
console.log('')

//3.
console.log('Fetch syntax')
document.querySelector('span').addEventListener('click', getFetch);
let userInput = 'This will hold the users action from the DOM, text, button, whatever';

function getFetch() {
    let userInput = 'This will hold the users action from the DOM, text, button, whatever';
    url = 'the url of choice to retrieve data from';
    fetch(url)
    .then(result => result.json())
    .then(data => {
        /*Execute data retrievals from url*/
    })
    .catch(err => {
        console.log(err)
    })
}
console.log('')

//4.
console.log('.forEach loop')
function forEach(arr) {
    let newArr = []
    arr.forEach((element) => {
        newArr.push(element * 3)
    })
    console.log(newArr)
}
forEach([1, 2, 3])

console.log('')

//5.
console.log('for...of')
let forOfObj = [1, 2, 3]

for(num of forOfObj) {
    console.log(num * 10)
}


console.log('')

//6.
console.log('do...while')
let i = 1;
let total = 0;
do {
    total += i
}
while(total <10)
console.log(total)
console.log('')

//7.
console.log('For each arrow function ')
let arr = [1, 2, 3]
arr.forEach((num, i, newArr) => {
    newArr[i] = num * 10
})
console.log(arr)
console.log('')

//8.
console.log('for ... in loop')
let obj = {
    name: "Leanne",
    job: 'Engineer',
    goal: 'stress less'
}

for(elements in obj) {
    console.log(`${obj.name} is an ${obj.job} who wants to ${obj.goal}`)
}
console.log('')
console.log('')

//9.
console.log('switch statement')
function daysInA(month) {
    switch(month) {
        case 2: console.log(28);
        break;
        case 4:
        case 6:
        case 9:
        case 11: console.log(30);
        break;
        default: console.log(31);
        break;
    }
    if(month > 12) {
        console.log('Not a Month')
    }
}
daysInA(6)
console.log('')

//10.
console.log('If statement')
if(condition = true) {
    console.log('execute action')
}
console.log('')



/*Codewars Challenge*/
console.log('Codewars Challenge')
//1.
console.log('Going to the Cinema - Create a function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that ceil(price of System B) < price of System A.')
function movie(card, ticket, perc) {
    let A = 0
    let B = card
    let visits = 0
    do {
        A += ticket * perc
        B += ticket * Math.pow(perc, visits)
        visits++
    }
    while(Math.ceil(B) >= Math.ceil(A))
    console.log(visits);
}

movie(500, 50, .75)
console.log('')

//2.
console.log('Alternating Case')
function alternatingCase(str) {
    let result = []
    for(let i = 0; i < str.length; i++) {
        
        if(str[i] === str[i].toLowerCase()) {
            result.push(str[i].replace(str[i], str[i].toUpperCase()))
        }
        else if(str[i] === str[i].toUpperCase()) {
            result.push(str[i].replace(str[i], str[i].toLowerCase()))
        }
    }
    console.log(result.join(''))
}
alternatingCase('HELLO every BoDy')
console.log('')

//3.
console.log('Disemvowel Trolls')
function disemvowel(str) {
    let vowels = /[AEIOUaeiou]/g;
    console.log(str.replaceAll(vowels, ''))
}
disemvowel('hello')
console.log('')

//4.
console.log('Sum of differences in an Array - sum the differences between consecutive pairs in the array in descending order')
function SOD(arr) {
    console.log(Math.max(...arr) - Math.min(...arr));
    if(arr <= 1) {
        console.log(0)
    }
}
SOD([2, 3, 4, 5, 10, 6, 7])
console.log('')

//5.
console.log('Count Characters in a String')
function countCharacters(str) {
    let count = {};
    for(let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        if(count[letter]) {
            count[letter]++
        }
        else {
            count[letter] = 1
        }

    }
    console.log(count)
}
countCharacters('hello')
console.log('')
