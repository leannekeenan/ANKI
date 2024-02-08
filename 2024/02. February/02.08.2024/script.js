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
reviewQuestion1.textContent = '1. viewport porperty scale options'
console.log('1. viewport porperty scale options')
console.log('initial-scale, minimum-scale, user-scaleable.  minimum prevents zooming out, initial scales relative to the width of a viewport, and user allows zooming in and out based on a boolean value')

reviewAnswer1.textContent = `- initial-scale, minimum-scale, user-scaleable.  minimum prevents zooming out, initial scales relative to the width of a viewport, and user allows zooming in and out based on a boolean value`
console.log('')




//2.
reviewQuestion2.textContent = '2. hidden inputs'
console.log('2. hidden inputs')
console.log('')

reviewAnswer2.textContent = `- An attribute added to DOM elements that are intended to not render onto the DOM page, but provide data to developers and take up space on the DOM`
console.log('An attribute added to DOM elements that are intended to not render onto the DOM page, but provide data to developers and take up space on the DOM')





//3.
reviewQuestion3.textContent = '3. class and id naming differences?'
console.log('3. class and id naming differences?')
console.log('')

reviewAnswer3.textContent = `- Specificity and reuseability. Class provides 10 points of specificity and can be reused among other objects that share similar characteristics and will be used as a primary reference to the object in CSS.  ID is a unique identifier providing 100 points of spscificity and will generally be the object reference in JS`
console.log('Specificity and reuseability. Class provides 10 points of specificity and can be reused among other objects that share similar characteristics and will be used as a primary reference to the object in CSS.  ID is a unique identifier providing 100 points of spscificity and will generally be the object reference in JS')




//4.
reviewQuestion4.textContent = '4. URL'
console.log('4. URL')
console.log('Uniform Resource Locator.  A plain language reference to a websites IP')

reviewAnswer4.textContent = `- Uniform Resource Locator.  A plain language reference to a websites IP`
console.log('')




//5.
reviewQuestion5.textContent = '5. <button onClick="multiple">'
console.log('5. <button onClick="multiple">')
console.log('Attribute that allows users to select more than one butoon option at a time')


reviewAnswer5.textContent = `- Attribute that allows users to select more than one butoon option at a time`
console.log('')




//6.
reviewQuestion6.textContent = '6. viewport meta tag'
console.log('6. viewport meta tag')
console.log('<meta name="viewport" content="width", initial-scale=1.0>')
reviewAnswer6.textContent = `- <meta name="viewport" content="width", initial-scale=1.0>`
console.log('')




//7.
reviewQuestion7.textContent = '7. Validator'
console.log('7. Validator')
console.log('The internal program within developer tools that helps evaluate code and check for errors, returning messages to help fix bugs')

reviewAnswer7.textContent = `- The internal program within developer tools that helps evaluate code and check for errors, returning messages to help fix bugs`
console.log('')




//8.
reviewQuestion8.textContent = '8. Who is Sir Tim Berners-Lee'
console.log('8. Who is Sir Tim Berners-Lee')
console.log('The creator of the standatds we use today in web development and the founder of the W3C')

reviewAnswer8.textContent = `- The creator of the standatds we use today in web development and the founder of the W3C`
console.log('')




//9.
reviewQuestion9.textContent = '9. data-* attribute'
console.log('9. data-* attribute')
console.log('syntax to create a unique attribute for an object')

reviewAnswer9.textContent = `- syntax to create a unique attribute for an object`
console.log('')




//10.
reviewQuestion10.textContent = '10. target= _top'
console.log('10. target= _top')
console.log('opens web content in a new page that open on top of the current page')

reviewAnswer10.textContent = `- opens web content in a new page that open on top of the current page`
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
codewarsQuestion1.textContent = '1. ROT13 - create a cypher that replaces a letter with one 13 places after its opsition in the alphabet'
console.log('1. ROT13 - create a cypher that replaces a letter with one 13 places after its opsition in the alphabet')

let rot13 = (string) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
    let cypher = string.replace(/[a-z]/gi, c => alpha[alpha.indexOf(c) + 13])
    console.log(cypher)
}
rot13('hello')

codewarsAnswer1.textContent = `let rot13 = ${rot13}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Will the Hero Survive - write a funciton to determine if a given number of items will be enough to meet or beat a given value.'
console.log('2. Will the Hero Survive - write a funciton to determine if a given number of items will be enough to meet or beat a given value.')

let hero = (item, limit) => {
    if(item / 2 >= limit) {
        console.log('survives')
    }
    else {
        console('hero has fallen')
    }
}
hero(10, 3)

codewarsAnswer2.textContent = `let hero = ${hero}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Remove Duplicates from a List'
console.log('3. Remove Duplicates from a List')

let removeDuplicates = (arr) => {
    console.log(new Set(...arr))
}
removeDuplicates(['a', 'a', 'b'])

codewarsAnswer3.textContent = `let removeDuplicates = ${removeDuplicates}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Multilingual hello'
console.log('4. Multilingual hello')

let multilingualHello = (greetings) => {
    let waysToSayHello = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    if(waysToSayHello.hasOwnProperty(greetings)) {
        console.log(waysToSayHello[greetings])
    }
}
multilingualHello('english')
codewarsAnswer4.textContent = `let multilingualHello = ${multilingualHello}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. You are a Square - write a fucntion that evaluates if a value is or is not a square and returns the appripriate response'
console.log('5. You are a Square - write a fucntion that evaluates if a value is or is not a square and returns the appripriate response')

let square = (num) => {
    let square = Math.sqrt(num)
    if(num % square === 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
square(121)

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










