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
reviewQuestion1.textContent = '1. forEach Loop'
console.log('1. forEach Loop')
let forEachFunction = (arr) => {
    let result = []
    arr.forEach(num => {
        result.push(num * 10)
    })
    console.log(result)
}
forEachFunction([1, 2, 3])
reviewAnswer1.textContent = `let forEachFunction = ${forEachFunction}`
console.log('')




//2.
reviewQuestion2.textContent = '2. for ... of loop'
console.log('2. for ... of loop')

let forOfLoop = (arr) => {
    for(let newValue of arr) {
        console.log(newValue * 20)
    }
}
forOfLoop([1, 2, 3])

reviewAnswer2.textContent = `let forOfLoop = ${forOfLoop}`
console.log('')





//3.
reviewQuestion3.textContent = '3. HTML syntax'
console.log('3. HTML syntax')
let syntax = '<h1 class="" id="" value="">Content</h1>'
console.log(syntax)

reviewAnswer3.textContent = `${syntax}`
console.log('')




//4.
reviewQuestion4.textContent = '4. do while loop'
console.log('4. do while loop')
let doWhileLoop = () => {
    let iterator = 1
let total = 0;
do{
    total += iterator
}
while(total < 10)
console.log(total)
}
doWhileLoop()
reviewAnswer4.textContent = `let doWhileLoop = ${doWhileLoop}`
console.log('')




//5.
reviewQuestion5.textContent = '5. while loop'
console.log('5. while loop')

let whileLoop = () => {
    let num = 0
    while(num < 10) {
        num++
    }
    console.log(num)
}
whileLoop()

console.log('')


reviewAnswer5.textContent = `let whileLoop = ${whileLoop}`
console.log('')




//6.
reviewQuestion6.textContent = '6. fetch syntax'
console.log('6. fetch syntax')
function getFetch() {
    fetch(/*website you are fetching data from*/).then(res => {
        if(!res.ok) {
            throw new Error('this is an error message')
        }
        return res.json()
    }).then(data => {
        //this will be where content from the sourced site will be listed
    }).catch(error => {
        console.log('Error', error)
    })
}

reviewAnswer6.textContent = `let getFetch = ${getFetch}`
console.log('')




//7.
reviewQuestion7.textContent = '7. for ... in loop'
console.log('7. for ... in loop')

let forInLoop = () => {
    let obj = [
        myName = "Leanne",
        myCareer = "an Engineer"
    ]
    for(let values in obj) {
        console.log(`I'm ${obj[values]}`)
    }
}
forInLoop()

reviewAnswer7.textContent = `let forInLoop = ${forInLoop}`
console.log('')




//8.
reviewQuestion8.textContent = '8. arrow function(object literal)'
console.log('8. arrow function(object literal)')
let arrowFunction = () => {
    let obj = {
        property1:"name",
        property2: 'career'
}
    console.log(`${obj.property1}, ${obj.property2}`)
}
arrowFunction()
reviewAnswer8.textContent = `let arrowFunction = ${arrowFunction}`
console.log('')




//9.
reviewQuestion9.textContent = '9. forEach arrow Function'
console.log('9. forEach arrow Function')

let forEachArrowFunction = (num) => {
    num.forEach((value, arr, i) => {
        console.log(arr[i] = value * 100)
    })
}
forEachArrowFunction([1, 2, 3])
reviewAnswer9.textContent = `let forEachArrowFunction = ${forEachArrowFunction}`
console.log('')




//10.
reviewQuestion10.textContent = '10. classic function'
console.log('10. classic function')
function classic () {
    //preforms function 
}
classic()

reviewAnswer10.textContent = `let classicFunction = ${classic}`
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
codewarsQuestion1.textContent = '1. discount - There is a 3 for 2 / 2 for 1 sale.  Given the price and quantity purchased, calculate the total cost of the item'
console.log('1. discount - There is a 3 for 2 / 2 for 1 sale.  Given the price and quantity purchased, calculate the total cost of the item')

let discount = (quantity, price) => {
    let threefortwo = Math.floor(quantity / 3) * price;
    let total = (quantity - threefortwo) * price
    console.log(total)   
}

discount(3, 2)

codewarsAnswer1.textContent = `let discount = ${discount}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. BMI calculation'
console.log('2. BMI calculation')

let BMI = (value) => {
    
       if(value <= 18.5){
         console.log('underweight');
         return;
       }
       if(value <= 25){
         console.log('average');
         return;
       }
       if(value <= 30){
         console.log('overweight');
         return;
       }
       if(value > 30){
         console.log('obese');
         return;
       }
        else {
            console.log('Stop Staring at the Scale!')
            return;
        }
    
}

BMI(21)

codewarsAnswer2.textContent = `let BMI = ${BMI}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. reverse Sequence'
console.log('3. reverse Sequence')

let reverseSequenceString = (string) => {
    console.log(string.split('').reverse().join(''))
}
reverseSequenceString('hello')

let reverseSequenceNumber = (num) => {
    console.log(num.reverse())
}
reverseSequenceNumber([1, 2, 3])



codewarsAnswer3.textContent = `let reverseSequence= ${reverseSequenceString}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. does the string contain a character?'
console.log('4. does the string contain a character?')

let doesitcontain = (string, character) => {
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(string[i] === character) {
            count ++
        }
    }
    console.log(count)
}
doesitcontain('hello', 'l')

codewarsAnswer4.textContent = `let doesitcontain = ${doesitcontain}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. count by x'
console.log('5. count by x')
let countByX = (num, multiple) => {
    let multiples = [];
    for(let i = 1; i < num; i++) {
        if(i * multiple <= num) {
            multiples.push(i * multiple)
        }
    }
    console.log(multiples)
}
countByX(10, 2)

codewarsAnswer5.textContent = `let countByX = ${countByX}`
console.log('')



// codewarsQuestion6.textContent = '6.'
// codewarsAnswer6.textContent = ' - '
// codewarsQuestion7.textContent = '7.'
// codewarsAnswer7.textContent = ' - '
// codewarsQuestion8.textContent = '8.'
// codewarsAnswer8.textContent = ' - '
// codewarsQuestion9.textContent = '9.'
// codewarsAnswer9.textContent = ' - '
// codewarsQuestion10.textContent = '10.'
// codewarsAnswer10.textContent = ' - '










