/*ANKI Review: */
console.log('ANKI Review: Syntactical Expressions')
let reviewQuestion1 = document.getElementById('rq1')
let reviewQuestion2 = document.getElementById('rq2')
let reviewQuestion3 = document.getElementById('rq3')
let reviewQuestion4 = document.getElementById('rq4')
let reviewQuestion5 = document.getElementById('rq5')
let reviewQuestion6 = document.getElementById('rq6')
let reviewQuestion7 = document.getElementById('rq7')
let reviewQuestion8 = document.getElementById('rq8')
let reviewQuestion9 = document.getElementById('rq9')
let reviewQuestion10 = document.getElementById('rq10')

let reviewAnswer1 = document.getElementById('ra1')
let reviewAnswer2 = document.getElementById('ra2')
let reviewAnswer3 = document.getElementById('ra3')
let reviewAnswer4 = document.getElementById('ra4')
let reviewAnswer5 = document.getElementById('ra5')
let reviewAnswer6 = document.getElementById('ra6')
let reviewAnswer7 = document.getElementById('ra7')
let reviewAnswer8 = document.getElementById('ra8')
let reviewAnswer9 = document.getElementById('ra9')
let reviewAnswer10 = document.getElementById('ra10')





//1.
reviewQuestion1.textContent = '1. Arrow function - explicit return'
console.log('1. Arrow function - explicit return')
console.log('let function = () => { //function executable}.  The explicit arrow function requires curly braces around the executuon function')

reviewAnswer1.textContent = `- let function = () => { //function executable}.  The explicit arrow function requires curly braces around the executuon function`
console.log('')


//2.
reviewQuestion2.textContent = '2. for ... in loop'
console.log('2. for ... in loop')
console.log('Expression used to extract the index value of an array element and use the value in a condition expression. for example: let forInLoop = ${forInLoop}')

let forInLoop = () => {
    let arr = [1, 2, 3];

    for(num in arr) {
        console.log(num * 10)
        console.log(arr[num] * 10)
    }
    //returns 0, 10, 20
}
forInLoop()

reviewAnswer2.textContent = `- Expression used to extract the index value of an array element and use the value in a condition expression. for example: let forInLoop = ${forInLoop}`
console.log('')





//3.
reviewQuestion3.textContent = '3. do ... while loop'
console.log('3. do ... while loop')
console.log('executes a function while a set condition is met')

let doWhile = () => {
    let num = 0;
    let i = 1;
    do {
        num += i
    }
    while(num < 10)
    console.log(num)
}
doWhile()

reviewAnswer3.textContent = `- executes a function while a set condition is met. letDoWhile = ${doWhile}`
console.log('')




//4.
reviewQuestion4.textContent = '4. fetch syntax'
console.log('4. fetch syntax')
console.log('fetch(url).then(res => if(!res.ok) { return new Error("result error")} else { return res.json() }.then(data => {}.catch(err => console.log(err, error))')

reviewAnswer4.textContent = `- fetch(url).then(res => if(!res.ok) { return new Error("result error")} else { return res.json() }.then(data => {}.catch(err => console.log(err, error))`
console.log('')




//5.
reviewQuestion5.textContent = '5. forEach arrow function'
console.log('5. forEach arrow function')
console.log('Executes a providede condition on each element in an array and pushes the value to a new array. le tforEachArrowFunction = ${forEachArrowFunction}')

let forEachArrowFunction = () => {
    let arr = [1, 2, 3];
    arr.forEach((n, i, newArr) => {newArr[i] = n * 10})
    console.log(arr)
}
forEachArrowFunction()

reviewAnswer5.textContent = `- Executes a providede condition on each element in an array and pushes the value to a new array. le tforEachArrowFunction = ${forEachArrowFunction}`
console.log('')




//6.
reviewQuestion6.textContent = '6. for ... of loop'
console.log('6. for ... of loop')
console.log('Used to execute a condition on each element value of an iterable object. let forOfLoop = ${forOfLoop}')

let forOfLoop = () => {
    let array = [1, 2, 3];

    for(num of array) {
        console.log(num * 10)
    }
}
forOfLoop()

reviewAnswer6.textContent = `- Used to execute a condition on each element value of an iterable object. let forOfLoop = ${forOfLoop}`
console.log('')




//7.
reviewQuestion7.textContent = '7. while loop'
console.log('7. while loop')
console.log('executes a function while a specified condition is met')

let whileLoop = () => {
    let num = 0;
    let i = 1;
    while(num < 10) {
        num += i
    }
    console.log(num)
   
}
whileLoop()

reviewAnswer7.textContent = `- executes a function while a specified condition is met`
console.log('')




//8.
reviewQuestion8.textContent = '8. else statement'
console.log('8. else statement')
console.log('used in "of statements" to add a default condition to revert to if the "if " or "else if" loops are not met')

reviewAnswer8.textContent = `- used in "of statements" to add a default condition to revert to if the "if " or "else if" loops are not met`
console.log('')




//9.
reviewQuestion9.textContent = '9. Arrow function (ojbect Literal)'
console.log('9. Arrow function (ojbect Literal)')

let objectLiteralArrowFunction = () => {
    function add (a, b, c) {
        console.log(a + b + c)
    }
    let nums = [1, 2, 3];
    add(...nums)
}
objectLiteralArrowFunction()

console.log('')

reviewAnswer9.textContent = `- `
console.log('')




//10.
reviewQuestion10.textContent = '10. traditional function'
console.log('10. traditional function')
console.log('function traditional () { //function conditions}; traditional()')

reviewAnswer10.textContent = `- function traditional () { //function conditions}; traditional()`
console.log('')


let codewarsQuestion1 = document.getElementById('cwq1')
let codewarsQuestion2 = document.getElementById('cwq2')
let codewarsQuestion3 = document.getElementById('cwq3')
let codewarsQuestion4 = document.getElementById('cwq4')
let codewarsQuestion5 = document.getElementById('cwq5')
let codewarsQuestion6 = document.getElementById('cwq6')
let codewarsQuestion7 = document.getElementById('cwq7')
let codewarsQuestion8 = document.getElementById('cwq8')
let codewarsQuestion9 = document.getElementById('cwq9')
let codewarsQuestion10 = document.getElementById('cwq10')

let codewarsAnswer1 = document.getElementById('cwa1')
let codewarsAnswer2 = document.getElementById('cwa2')
let codewarsAnswer3 = document.getElementById('cwa3')
let codewarsAnswer4 = document.getElementById('cwa4')
let codewarsAnswer5 = document.getElementById('cwa5')
let codewarsAnswer6 = document.getElementById('cwa6')
let codewarsAnswer7 = document.getElementById('cwa7')
let codewarsAnswer8 = document.getElementById('cwa8')
let codewarsAnswer9 = document.getElementById('cwa9')
let codewarsAnswer10 = document.getElementById('cwa10')

/*Codewars Challenges*/
console.log('Codewars Challenges')


//1.
codewarsQuestion1.textContent = '1. Going to the Cinema - A movie theater has a promorion going on. Write a function that determines how many tickets a person needs to buy to make the discount card worth purchasing'

let cinema = (ticketPrice, discountCard, discountPercentage) => {
    let standardPurchase = 0;
    let promotionDiscount = discountCard;
    let visits = 0;

    while(Math.ceil(standardPurchase) <= Math.ceil(promotionDiscount)) {
        visits++;
        standardPurchase += ticketPrice * visits;
        promotionDiscount += Math.pow(ticketPrice, discountPercentage) * visits;
    }
    console.log(standardPurchase)
    console.log(promotionDiscount)
    console.log(visits)
}

cinema(10, 100, .9)

console.log('1. Going to the Cinema - A movie theater has a promorion going on. Write a function that determines how many tickets a person needs to buy to make the discount card worth purchasing')
console.log('')

codewarsAnswer1.textContent = `- `
console.log('')




//2.
codewarsQuestion2.textContent = '2. Casting Strings - convert all words in a string to upper case'
console.log('2. Casting Strings - convert all words in a string to upper case')

let casing = (string) => {
    let newString = string.split(' ').map(i => i.replace(i[0], i[0].toUpperCase())).join(' ');
    console.log(newString)
}
casing('hello world')

console.log('')

codewarsAnswer2.textContent = `- `
console.log('')




//3.
codewarsQuestion3.textContent = '3. Max Multiples - Given a number to divide by and a set bound, find the largest value that is still less than the bound'
console.log('3. Max Multiples - Given a number to divide by and a set bound, find the largest value that is still less than the bound')

let maxMultiple = (multiple, value) => {
    let max = Math.floor(value / multiple) * multiple
        console.log(max)
}
maxMultiple(9, 100)

console.log('')

codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. Multiples of 3 nd 5 - write a function that returns the sum of all multiples of 3 and 5 up to the value parameter'
console.log('4. Multiples of 3 nd 5 - write a function that returns the sum of all multiples of 3 and 5 up to the value parameter')

let multiplesOf = (n) => {
    let values = [];
    for(let i = 0; i < n; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            values.push(i)
        }
    }
    let total = values.reduce((a, b) => a + b, 0)
    console.log(total)
}
multiplesOf(10)
console.log('')

codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = '5. do ... while - write a function with two parameters - string and number.  use a do while loop tp add astrisks to the right hand side if the number is even and left if it is odd.'
console.log('5. do ... while - write a function with two parameters - string and number.  use a do while loop tp add astrisks to the right hand side if the number is even and left if it is odd.')

let doWhileLoop = (str, num) => {
    do {
        if(num % 2 === 0) {
            str = `*${str}`
        }
        else {
            str = `${str}*`
        }
        num--
    }
    while(num > 0)
    console.log(str)
}
doWhileLoop('Hello World', 6)

codewarsAnswer5.textContent = `- `
console.log('')



// codewarsQuestion6.textContent = '6.'
// codewarsAnswer6.textContent = `- `
// codewarsQuestion7.textContent = '7.'
// codewarsAnswer7.textContent = `- `
// codewarsQuestion8.textContent = '8.'
// codewarsAnswer8.textContent = `- `
// codewarsQuestion9.textContent = '9.'
// codewarsAnswer9.textContent = `- `
// codewarsQuestion10.textContent = '10.'
// codewarsAnswer10.textContent = `- `










