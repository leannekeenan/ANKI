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
reviewQuestion1.textContent = '1. for loop'
console.log('1. for loop')
//i = iterator
//n = number
let forLoop = (n)=> {
    for(let i = 0; i < n; i++) {

    }
}
console.log('')

reviewAnswer1.textContent = `let forLoop = ${forLoop}`
console.log('')




//2.
reviewQuestion2.textContent = '2. For ... In Loop'
console.log('2. For ... In Loop')

let forInLoop = (array) => {
    let result = []
    for(let objects in array) {
        result.push(objects + '!')
    }
    console.log(result)
}
forInLoop([1, 2, 3]) // 0! 1! 2!

console.log('')

reviewAnswer2.textContent = `let forInLoop = ${forInLoop}`
console.log('')





//3.
reviewQuestion3.textContent = '3. forEach Loop'
console.log('3. forEach Loop')

let forEachLoop = (array) => {
    array.forEach((n, i, array) => array[i] = n * 10);
    console.log(array)
}
forEachLoop([1, 2, 3])
reviewAnswer3.textContent = `let forEachLoop = ${forEachLoop}`

console.log('')




//4.
reviewQuestion4.textContent = '4. do...while loop'
console.log('4. do...while loop')
let doWhile = () => {
    let result = 0;
    let iterator = 1;
    do {
        result += iterator
    }
    while(result < 10)
    console.log(result)
}
doWhile()

reviewAnswer4.textContent = `let doWhile = ${doWhile}`
console.log('')




//5.
reviewQuestion5.textContent = '5. forEach Loop'
console.log('5. For Each Loop')

let forEach = (array) => {
    array.forEach((n, i, arr) => arr[i] = n * 100);
    console.log(array)
}
forEach([1, 2, 3])

reviewAnswer5.textContent = `let forEach = ${forEach}`
console.log('')




//6.
reviewQuestion6.textContent = '6. while loop'
console.log('6. while loop')
let i = 1;
let result = 0;
let whileLoop = () => {
    while(result < 10) {
        result += i
        console.log(result)
    }
}
whileLoop()

reviewAnswer6.textContent = `let whileLoop = ${whileLoop}`
console.log('')




//7.
reviewQuestion7.textContent = '7. arrow function (object literal)'
console.log('7. arrow function (object literal)')

let objectLiteralArrowFunction = () => {
    let object = {
        name: "Leanne",
        job: "Engineer",
        loves: "Adam"
    }
    console.log(`Hello, I'm ${object.name} and I am an ${object.job}.  My husband is ${object.loves}`)
}
objectLiteralArrowFunction()

reviewAnswer7.textContent = `let objectLiteralArrowFunction${objectLiteralArrowFunction}`
console.log('')




//8.
reviewQuestion8.textContent = '8. Arrow Function'
console.log('8. Arrow Function')
let arrowFunction = (parameter) => {
    //condition
}
reviewAnswer8.textContent = `let function Arrow = ${arrowFunction}`
console.log('')




//9.
reviewQuestion9.textContent = '9. fetch syntax'
console.log('9. fetch syntax')
document.querySelector('span').addEventListener('click', getFetch);
function getFetch() {
    let url = 'https:www.google.com';
    fetch(url).then(result => {
        if(!result.ok) {
            throw new Error('error!!')
        }
        result.json()
    }).then(data => {

    }).catch(error => {
        console.log('fetch error', error)
    })
}
console.log('')

reviewAnswer9.textContent = getFetch
console.log('')




//10.
reviewQuestion10.textContent = '10. For... Of Loop'
console.log('10. For... Of Loop')

let forOfLoop = (arr) => {
    let result = []
    for(let obj of arr) {
        result.push(obj + '!!')
    }
    console.log(result)
}
forOfLoop([1, 2, 3])

reviewAnswer10.textContent = `let forOfLoop = ${forOfLoop}`
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
codewarsQuestion1.textContent = '1. '
console.log('1. ')
console.log('')

codewarsAnswer1.textContent = ' - '
console.log('')




//2.
codewarsQuestion2.textContent = '2.'
console.log('2. ')
console.log('')

codewarsAnswer2.textContent = ' - '
console.log('')




//3.
codewarsQuestion3.textContent = '3.'
console.log('3. ')
console.log('')

codewarsAnswer3.textContent = ' - '
console.log('')





//4.
codewarsQuestion4.textContent = '4.'
console.log('4. ')
console.log('')

codewarsAnswer4.textContent = ' - '
console.log('')





//5.
codewarsQuestion5.textContent = '5.'
console.log('5. ')
console.log('')

codewarsAnswer5.textContent = ' - '
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










