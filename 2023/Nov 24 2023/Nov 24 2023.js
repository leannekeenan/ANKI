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
console.log('1. ')
console.log('')
console.log('')

//2.
console.log('2. ')
console.log('')
console.log('')

//3.
console.log('3. ')
console.log('')
console.log('')

//4.
console.log('4. ')
console.log('')
console.log('')

//5.
console.log('5. ')
console.log('')
console.log('')
