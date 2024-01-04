/*ANKI Review: */
console.log('ANKI Review: HTML Review')
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
reviewQuestion1.textContent = '1. Table stripping'
console.log('1. Table stripping')
console.log('Table striping is a styling processs that highlights every other row to provide an easier reading experienec for the reader')

reviewAnswer1.textContent = ' - Table striping is a styling processs that highlights every other row to provide an easier reading experienec for the reader'
console.log('')




//2.
reviewQuestion2.textContent = '2. user-scaleable property'
console.log('2. user-scaleable property')
console.log('A property accepted in the meta viewport tagin the head of an HTML document.  It accepts a  value "yes" or "no" to determine if users will or will not be allowed to scale the size of the document ')

reviewAnswer2.textContent = ' - A property accepted in the meta viewport tagin the head of an HTML document.  It accepts a  value "yes" or "no" to determine if users will or will not be allowed to scale the size of the document '
console.log('')





//3.
reviewQuestion3.textContent = '3. keyword "inherit"'
console.log('3. keyword "inherit"')
console.log('Used to allow objects to gain properties from their "parent" objects.  For example if you have an object animal with properties of eat speak and sleep, you can have other objects like cat, horse, and bird all inherit these properties')

reviewAnswer3.textContent = ' - Used to allow objects to gain properties from their "parent" objects.  For example if you have an object animal with properties of eat speak and sleep, you can have other objects like cat, horse, and bird all inherit these properties'
console.log('')




//4.
reviewQuestion4.textContent = '4. What is syntax?'
console.log('4. What is syntax?')
console.log('In terms of HTML, CSS, and JavaScript, syntax is the spelling and gramatical rules of a language.  Syntax dictates how you structure your code to allow it to be read by users and computers in the most comprehensive manner')

reviewAnswer4.textContent = ' - In terms of HTML, CSS, and JavaScript, syntax is the spelling and gramatical rules of a language.  Syntax dictates how you structure your code to allow it to be read by users and computers in the most comprehensive manner'
console.log('')




//5.
reviewQuestion5.textContent = '5. SVC'
console.log('5. SVC')
console.log('Scaleable Video Coding.  Allows for videos to resize to fit within any viewport and retain the aspect ratio of the video')


reviewAnswer5.textContent = ' - Scaleable Video Coding.  Allows for videos to resize to fit within any viewport and retain the aspect ratio of the video'
console.log('')




//6.
reviewQuestion6.textContent = '6. <header> tag'
console.log('6. <header> tag')
console.log('HTML tag intended to be a semantic tag for content that is intended to be presented at the top of an object.')

reviewAnswer6.textContent = ' - HTML tag intended to be a semantic tag for content that is intended to be presented at the top of an object.'
console.log('')




//7.
reviewQuestion7.textContent = '7. submit'
console.log('7. submit')
console.log('An HTML for attribute for input types specifying the destination for submitted data')

reviewAnswer7.textContent = ' - An HTML for attribute for input types specifying the destination for submitted data'
console.log('')




//8.
reviewQuestion8.textContent = '8. What is the <cite>tag for?'
console.log('8. What is the <cite>tag for?')
console.log('Semantic tag used to cite content or provide content reference to creator, title, date, etc.')

reviewAnswer8.textContent = ' - Semantic tag used to cite content or provide content reference to creator, title, date, etc.'
console.log('')




//9.
reviewQuestion9.textContent = '9. How can you target an HTML element by its attribute?'
console.log('9. How can you target an HTML element by its attribute?')
console.log('USe bracket notation and place the attribute tag type and the value of the tag. example : "[tag="value"]"')

reviewAnswer9.textContent = ' - USe bracket notation and place the attribute tag type and the value of the tag. example : "[tag="value"]"'
console.log('')




//10.
reviewQuestion10.textContent = '10. <pre> tag'
console.log('10. <pre> tag')
console.log('This is a depreciated tag that allows developers to style the text content within the p, span, or other text tag within HTML instead of adding spaces and syling in CSS')

reviewAnswer10.textContent = ' - This is a depreciated tag that allows developers to style the text content within the p, span, or other text tag within HTML instead of adding spaces and syling in CSS'
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
codewarsQuestion1.textContent = '1. Sum of multiples - Find the sum of al multiples of a number below its multiplier'
console.log('1. Sum of multiples - Find the sum of al multiples of a number below its multiplier')

let sumOfMultiples = (n, m) => {
    let total = 0
    for(let i = 0; i * m <= n; i++) {
        total += i * m
    }
    if(total > 0) {
        console.log(total)
    }
    else {
        console.log('invalid')
    }
}
sumOfMultiples(10, 5)

codewarsAnswer1.textContent = `let sumOfMultiples = ${sumOfMultiples}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Return Negative'
console.log('2. Return Negative')

let returnNegative = (n) => {
    let negative = n * -1;
    if(n > 0) {
        console.log(negative)
    }
    else {
        console.log(n)
    }
}
returnNegative(-5)
returnNegative(10)


codewarsAnswer2.textContent = `let returnNegative = ${returnNegative}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Trim a String - Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."'
console.log('3. Trim a String - Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."')

let trimString = (string, max) => {
    if(string.length <= max) {
        console.log(string)
    }
    else {
        console.log(string.slice(0, max).concat('...'))
    }
}
trimString('hello', 3)

codewarsAnswer3.textContent = `let trimString = ${trimString}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Does the string contain a character'
console.log('4. Does the string contain a character')

let doesItContain = (string, character) => {
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(string.includes(character)) {
            console.log(true)
            if(string[i] === character) {
                count++
            }
        }
        
        else {
            console.log(false)
        }
    }
    console.log(count)
}
doesItContain("Does the string contain a question mark?", "")

codewarsAnswer4.textContent = `let doesItContain = ${doesItContain}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Find Multiples of a number - build a program that takes a value, integer , and returns a list of its multiples up to another value, limit '
console.log('5.  Find Multiples of a number - build a program that takes a value, integer , and returns a list of its multiples up to another value, limit')


let multiples = (value, limit) =>{
    let listOfMultiples = [];
    for(let i = 1; i < limit; i++) {
    if(value * i <= limit) {
    listOfMultiples.push(i * value);
    }
    }
    console.log(listOfMultiples)
    }
multiples(2, 10)
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










