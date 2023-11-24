/*ANKI Review: Syntactical Expressions*/
console.log('ANKI Review: Syntactical Expressions')
//1.
console.log('1. for ... of loop')
console.log('for elements of an iterable object [array, string, list, etc.]')
let arr = [1, 2, 3];
let result = []
for(let numbers of arr) {
    result.push(numbers * 10);
}
console.log(result)
console.log('')

//2.
console.log('2. arrow function for a object literal')
console.log('a complete arrow function that holds a object liter and can return specific propertirs of the object')
let objLitFunction = () => {
    let objLit = {
        nameProperty: "Leanne",
        positionProperty: "Software Engineer"
    }
    console.log(`Hi, I'm ${objLit.nameProperty} and I'm a ${objLit.positionProperty}`)
}
objLitFunction()
console.log('')

//3.
console.log('3. Fetch Syntax')
//document.querySelector('button').addEventListener('click', getFetch)
function getFetch() {
    let userInput = document.querySelector('input').value
    let url = 'https://google.com'

    fetch(url)
    .then(result => {
        if(!result.ok) {
            throw new Error('fetch error') //checks formatting for errors
        }
        return result.json() //turns url data to json format
    })
    .then(data => {
        //this will be where data pulled from the url will be used within the DOM page
    })
    .catch(error => {
        console.error('Fetch error:', error);
        //returns a message, alert, or notiication to the user that an error has occired
    })

}
console.log('')

//4.
console.log('4. switch statement')
function switchDays(month) {
    switch(month) {
        case 2: console.log(28 + ' days');
        break;
        case 4:
        case 6:
        case 9:
        case 11: console.log(30)
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 12: console.log(31)
        default: console.log('enter a valid month value')
    }
}
switchDays(13)
console.log('')

//5.
console.log('5. CSS Syntax')
console.log('typeselector { property: value;},  .classSelector { property: value;}, #typeselector { property: value;}')
console.log('')
console.log('')

//6.
console.log('6. for .... in loop')
console.log('for elements in an object')
let forInObj = {
    nameProperty: "Leanne",
    positionProperty: "a Software Engineer"
}
for(let properties in forInObj) {
    console.log(`I'm ${forInObj[properties]}`)
}
console.log('')

//7.
console.log('7. do ... while loop')
let doWhileIterator = 1
let doWhileResult = 0

do {
    doWhileResult += doWhileIterator
}
while (doWhileResult < 10)
console.log(doWhileResult)
console.log('')

//8.
console.log('8. forEach arrow fucntion')
let forEachArr = [1, 2, 3];
forEachArr.forEach((num, iterator, array) => array[iterator] = num * 10)
console.log(forEachArr)
console.log('')

//9.
console.log('9. forEach loop')
let forEachLoopArr = [1, 2, 3];
forEachLoopArr.forEach(function(n, i, arr) {
    (arr[i] = n * 100)
})
console.log(forEachLoopArr)
console.log('')

//10.
console.log('10. implied return arrow function')
console.log('let function = () => //return is implied, no brackets required')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. ROT13')
console.log('Create a cypher that takes in a string and returns a new string with the letters of the string shifted forward 13 letters')
let rot13 = (string) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm';
    return string.replace(/[a-z]/gi, c => alphabet[alphabet.indexOf(c) + 13])
    
}
console.log(rot13('hello'))
 console.log('')

//2.
console.log('2. feast of many beast')
console.log('write a function that takes a name of an animal and a name of a dish they want to being to a potluck. The dish they bring mush meet the  condition of having the first letter and last letter of the animals name match the first lettter and last letter of the dish they are trying to bring.  Return a boolean response ')

let feast = (animal, dish) => {
    if(animal[0] === dish[0] 
        && 
        animal[animal.length - 1] === dish[dish.length - 1]) {
        console.log(true)
    }
    else {
        console.log(false)
    }   
}

feast('cat', 'carrot')
console.log('')

//3.
console.log('3. ATM')
console.log('write a function that determines the minimal number of banknotes needed make a cash withdrawl of no less than 1 dollar and no more than 1500.  Return -1 if the withdrawl cant be made')
let ATM = (withdrawl) => {
    let banknotes = [1, 5, 10, 20, 50, 100];
    let result = {};
    console.log(withdrawl)
    for(let i = banknotes.length - 1; i >= 0; i--) {
        
        while(withdrawl >= banknotes[i]) {
            
            if(result[banknotes[i]]) {
                result[banknotes[i]]++
            }
            else {
                result[banknotes[i]] = 1
            }

            withdrawl -= banknotes[i]
        }
    }
    console.log(result)
}
ATM(101)
console.log('')

//4.
console.log('4. clock')
console.log('write a function that returns how much time has passed since midnight in miliseconds')
let clock = (h, m , s) => {
    let second = s * 1000;
    let minute = m * 60000;
    let hour = h * 3600000;

    console.log(hour + minute + second)
}

clock(1, 1, 1);
console.log('')

//5.
console.log('5. sum of multiples')
console.log('sum all multiples of n below m.  Return invalid if less than 0')
let sumOfMultiples = (n, m) => {  //n = divisor, m = bound
let total = 0
let numbers = []
for(let i = 1; i * n <= m; i++) {
    total += i * n
    numbers.push(i)
}
if(total > 0) {
    console.log(numbers)
    console.log(total)
}
else {
    console.log(numbers)
    console.log('invalid')
}
}
sumOfMultiples(1, 5)
console.log('')
