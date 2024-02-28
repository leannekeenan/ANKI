/*ANKI Review: */
console.log('ANKI Review: JavaScript Review')
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
reviewQuestion1.textContent = '1. define a loop'
console.log('1. define a loop')
console.log('A function in JavaScriipt that cycles through iterable objects like arrays and strings to preform a specified condition on each or specified element until the specified contition is no longer true')

reviewAnswer1.textContent = `- A function in JavaScriipt that cycles through iterable objects like arrays and strings to preform a specified condition on each or specified element until the specified contition is no longer true`
console.log('')




//2.
reviewQuestion2.textContent = '2. Polymorphism'
console.log('2. Polymorphism')
console.log('A part of the OOP development style that allows for object of different classes to be treated as objects of a superclass')

reviewAnswer2.textContent = `- A part of the OOP development style that allows for object of different classes to be treated as objects of a superclass`
console.log('')





//3.
reviewQuestion3.textContent = '3. fetch syntax'
console.log('3. fetch syntax')
console.log('')
// function fetch() {
//    return fetch(url).then(res => {
//         if(!res.ok) {
//             throw new Error('error')
//         }
//         return res.json()
//     }).then(data => {
//         //execute data return
//     }).catch(err => {
//         console.log(err);
//         throw new Error('error')
//     })
// }
reviewAnswer3.textContent = `- `
console.log('')




//4.
reviewQuestion4.textContent = '4. variable++'
console.log('4. variable++')
console.log('post iteration.  Increases by one after value is iterated')

reviewAnswer4.textContent = `- post iteration.  Increases by one after value is iterated`
console.log('')




//5.
reviewQuestion5.textContent = '5. Template Literals'
console.log('5. Template Literals')
console.log('a way of writing content using the bang($), curly brackets({}) and the name of a object.  Used to write objects into a string without concatenation')


reviewAnswer5.textContent = `- a way of writing content using the bang($), curly brackets({}) and the name of a object.  Used to write objects into a string without concatenation`
console.log('')




//6.
reviewQuestion6.textContent = '6. DOM'
console.log('6. DOM')
console.log('Document Object Model. The representation of a webpage')

reviewAnswer6.textContent = `- Document Object Model. The representation of a webpage`
console.log('')




//7.
reviewQuestion7.textContent = '7. parameter'
console.log('7. parameter')
console.log('the object passed through a function to preform the function.  The value is refered to as the arguement and is passed when the function os called')

reviewAnswer7.textContent = `- the object passed through a function to preform the function.  The value is refered to as the arguement and is passed when the function os called`
console.log('')




//8.
reviewQuestion8.textContent = '8. spread operator in a function call'
console.log('8. spread operator in a function call')

let functionCall = () => {
    let add = (a, b, c) => {
        return a + b + c
    }
    let num = [1, 2, 3];
    console.log(add(...num))
}
functionCall()
reviewAnswer8.textContent = `- let functionCall = ${functionCall}`
console.log('')




//9.
reviewQuestion9.textContent = '9. extends'
console.log('9. extends')
console.log(' a keyword used in JavaScript to allow for objects to extend their attributes and tehir values to child node elements.  This is the basis of inheritance in OOP development')

reviewAnswer9.textContent = `-  a keyword used in JavaScript to allow for objects to extend their attributes and tehir values to child node elements.  This is the basis of inheritance in OOP development`
console.log('')




//10.
reviewQuestion10.textContent = '10. document.body'
console.log('10. document.body')
console.log('')

reviewAnswer10.textContent = `- JavaScript method used to access the body element of the HTML content`
console.log('JavaScript method used to access the body element of the HTML content')


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
codewarsQuestion1.textContent = '1. Cypher - write a function that accepts a string and returns it with its letters shiftted by 5 - as in A becomes F and so on'
console.log('1. Cypher - write a function that accepts a string and returns it with its letters shiftted by 5 - as in A becomes F and so on')

let cypher = (string) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
    let result = string.replace(/[a-z]/gi,(c => alpha[alpha.indexOf(c) + 5]));
    console.log(result)
}
cypher('a hello')

codewarsAnswer1.textContent = ` let cypher = ${cypher}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Sale Price - write a function that accepts two parameters: price and count.  Have the function return a two for one value for each purchase'
console.log('2. Sale Price - write a function that accepts two parameters: price and count.  Have the function return a two for one value for each purchase')

let purchase = (count, price) => {
    let discount = count - Math.floor(count / 3);
    let purchasePrice = discount * price;
    console.log(purchasePrice)
}
purchase(3, 2)

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










