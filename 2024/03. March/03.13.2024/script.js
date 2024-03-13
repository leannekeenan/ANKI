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
reviewQuestion1.textContent = '1. do ... while loop'
console.log('1. do ... while loop')
console.log(`
do {
    execute function
}
while (condition is true)
`)

reviewAnswer1.textContent = `
do {
    execute function
}
while (condition is true)
`
console.log('')




//2.
reviewQuestion2.textContent = '2. else statement'
console.log('2. else statement')
console.log(`
if(condition) {
    execute condition
}
else {
    execution condition
}
`)

reviewAnswer2.textContent = `
if(condition) {
    execute condition
}
else {
    execution condition
}
`
console.log('')





//3.
reviewQuestion3.textContent = '3. if statement'
console.log('3. if statement')
console.log(`
if(condition is true) {
    execute function
}
`)

reviewAnswer3.textContent = `
if(condition is true) {
    execute function
}
`
console.log('')




//4.
reviewQuestion4.textContent = '4. for ... in loop'
console.log('4. for ... in loop')
console.log(`
used to preform a condition on the index of an array element:
let obj =  [1, 2, 3];
for(let num in obj) {
    console.log(obj[num] * 10)
}
`)

reviewAnswer4.textContent = `
used to preform a condition on the index of an array element: 
let obj =  [1, 2, 3];
for(let num in obj) {
    console.log(obj[num] * 10)
}
`
let obj =  [1, 2, 3];
for(let num in obj) {
    console.log(obj[num] * 10)
}
console.log('')




//5.
reviewQuestion5.textContent = '5. fetch syntax'
console.log('5. fetch syntax')
console.log(`
function getFetch() {
    fetch(url).then(res => {
        if(!res.ok) {
            throw new Error('error message')
        }
        else {
            return res.json()
        }
    }).then(data => {
        return parsed data from API
    }).catch(error => {
        return (Error, 'error')
    })
}
`)


reviewAnswer5.textContent = `
function getFetch() {
    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('error message')
        }
        else {
            return res.json()
        }
    }).then(data => {
        return parsed data from API
    }).catch(error => {
        return (Error, 'error')
    })
}
`
console.log('')




//6.
reviewQuestion6.textContent = '6. forEach'
console.log('6. forEach')
console.log(`
let arr = [1, 2, 3];
arr.forEach((num, i, arr) => arr[i] = num * 10);
console.log(arr)
`)

reviewAnswer6.textContent = `
let arr = [1, 2, 3];
arr.forEach((num, i, arr) => arr[i] = num * 10);
console.log(arr)
`

let thisarr = [1, 2, 3];
thisarr.forEach((num, i, arr) => arr[i] = num * 10);
console.log(thisarr)

console.log('')




//7.
reviewQuestion7.textContent = '7. forEach arrow function'
console.log('7. forEach arrow function')
console.log(`
forEachArrowFunction.forEach((num, i, arr) => arr[i] )
`)

reviewAnswer7.textContent = `
forEachArrowFunction.forEach((num, i, arr) => arr[i] )
`
console.log('')




//8.
reviewQuestion8.textContent = '8. Arrow function (Explicit Return'
console.log('8. Arrow function (Explicit Return')
console.log(`
let arrowFunction = () => {//explicit return}
`)

reviewAnswer8.textContent = `
let arrowFunction = () => {//explicit return}
`
console.log('')




//9.
reviewQuestion9.textContent = '9. for ... of loop'
console.log('9. for ... of loop')
console.log(`
let arr = [1, 2, 3];
for(let num of arr) {
    console.log(num + 5)
}
`)

reviewAnswer9.textContent = `
let arr = [1, 2, 3];
for(let num of arr) {
    console.log(num + 5)
}
`
let arr = [1, 2, 3];
for(let num of arr) {
    console.log(num + 5)
}

console.log('')




//10.
reviewQuestion10.textContent = '10. arrow function ( object literal)'
console.log('10. arrow function ( object literal)')
console.log(`
let function = () => {
    let literalObj = {
        proeprty1: value;
        property2: value;
    }
    console.log('literalObj.property1)
}
`)

reviewAnswer10.textContent = `
let function = () => {
    let literalObj = {
        proeprty1: value;
        property2: value;
    }
    console.log('literalObj.property1)
}
`
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

codewarsAnswer1.textContent = `- `
console.log('')




//2.
codewarsQuestion2.textContent = '2. '
console.log('2. ')
console.log('')

codewarsAnswer2.textContent = `- `
console.log('')




//3.
codewarsQuestion3.textContent = '3. '
console.log('3. ')
console.log('')

codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. '
console.log('4. ')
console.log('')

codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = '5. '
console.log('5. ')
console.log('')

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










