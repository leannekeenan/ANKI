/*ANKi Review: Syntactical Expressions*/

console.log('Syntactical Expressions')
//1.
console.log('for ... of loop')
let arr = [1, 2, 3];
let result = []
for(num of arr) {
    result.push(num * 3)
}
console.log(result)

console.log('REMINDER: The For... Of loop can only be used on iterable objects - like map, set, arrays, and arguements')
console.log('')

//2.
console.log('forEach loop')
let array = [1, 2, 3];
array.forEach((num, i, arr) => arr[i] = num * 10)
console.log(array)


console.log('')

//3.
console.log('ForEach Arrow function')
console.log('arr.forEach((number, iterator, newArray) => newArray[iterator] = /num manipulation/')
console.log('')

//4.
console.log('else statement')
console.log('added as a default response to the end of a loop function and is triggered if no other condition has been met')
let x = 10
if(x > 10) {

}
else if(x < 10) {

}
else {

}
console.log('')

//5.
console.log('switch statement')
function days(months) {
    switch(months) {
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
    if(months > 12 || months < 1) {
        console.log(0)
    }
}
days(4)
console.log('')

//6.
console.log('for ... in loop')
let obj = {
    name: 'leanne'
}

for(let element in obj) {
    console.log(`hello, I am ${obj.name}`)
}
console.log('')

//7.
console.log('arrow function for an object literal')

let arrowFunction = () => {
    let objLiteral = {
        elementOne: 'one',
        elementTwo: 'two'
    }
    console.log(`${objLiteral.elementOne}`)
}
arrowFunction()
console.log('')

//8.
console.log('do ... while loop')

let iterator = 0;
do{
    iterator += 1
}
while(iterator < 10)

console.log(iterator)
console.log('')

//9.
console.log('fetch syntax')

//document.querySelector().addEventListener('click', getFetch);

function getFetch() {
    let url = /*your URL of choice to get data from*/
    fetch(url)
    .then(result => result.json())
    .then(data => {

    })
    .catch(error => {
        console.log(`${error}`)
    })
}
console.log('')

//10.
console.log('Arrow Function Explicit return')
console.log('let arrowFunction = () => //execute condition')
console.log('')



/*Codewars Challenge*/
//1.
console.log('If you can\'t sleep, count sheep! - Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.')
function countSheep(num) {
    let result = []
    for(let i = 1; i <= num; i++) {
        result.push(`${i} sheep..., `)
    }
    console.log(result)
}
countSheep(3)
console.log('')

//2.
console.log('Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.')
function doesTheStringContainTheCharacter(str, char) {
    let result = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i].includes(char)) {
            result += 1
        }
    }
    console.log(result)
}
doesTheStringContainTheCharacter('hello to all out there today','o')
console.log('')

//3.
console.log('You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party')
function pokemon(num) {
    for(let i = 1; i <= num; i++) {
        console.log(`pikachu #${i}, I choose you!`)
    }
}

pokemon(3)
console.log('')

//4.
console.log('Filter the number')
function filterTheNumber(str) {
    let result = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[0-9]/g)) {
            result.push(str[i])
        }
    }
    console.log(result)
}
filterTheNumber('H3110 t0 a11 0ut th3r3 t0day')
console.log('')

//5.
console.log('Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.')
function reversePokeOrder(arr) {
    console.log(arr.reverse())
}
reversePokeOrder(['pika', 'char', 'weedle'])
console.log('')
