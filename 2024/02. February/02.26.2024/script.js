/*ANKI Review: */
console.log('ANKI Review: HTML Terms')
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
reviewQuestion1.textContent = '1. type attribute'
console.log('1. type attribute')
console.log('in HTML, the type atttribute is assigned to form elements to inform the user what information is being asked in that input such as email, phone numbers, text, numerical values and more')

reviewAnswer1.textContent = `- in HTML, the type atttribute is assigned to form elements to inform the user what information is being asked in that input such as email, phone numbers, text, numerical values and more`
console.log('')




//2.
reviewQuestion2.textContent = '2. Fundamental differences between <section>, <article>, and <div>'
console.log('2. Fundamental differences between <section>, <article>, and <div>')
console.log('Semantics.  The div container is a block element with no specific designation - it is universal, and due to its lack of individuality, can make reading HTML harder to find specific page elements.  The article tag is a block level tag that specifies that the content may or may not be related to the main content of the page and can generally be seen used as a replacement for the truncated <aside> tag for things like ads and ')

reviewAnswer2.textContent = `- Semantics.  The div container is a block element with no specific designation - it is universal, and due to its lack of individuality, can make reading HTML harder to find specific page elements.  The article tag is a block level tag that specifies that the content may or may not be related to the main content of the page and can generally be seen used as a replacement for the truncated <aside> and <sidebar> tag for things like ads.  The <section> tag is a similar tyo the <div> tag but is used to seperate content on a page by relative content, grouping like or related content into the same section.`
console.log('')





//3.
reviewQuestion3.textContent = '3. SVC'
console.log('3. SVC')
console.log('Scaleable Video Content - A format that allow video aspect ratio to remain in tact reguardless of screen size')

reviewAnswer3.textContent = `- Scaleable Video Content - A format that allow video aspect ratio to remain in tact reguardless of screen size`
console.log('')




//4.
reviewQuestion4.textContent = '4. <caption>'
console.log('4. <caption>')
console.log('A tag used to provide detail information about an element within a table')

reviewAnswer4.textContent = `- A tag used to provide detail information about an element within a table`
console.log('')




//5.
reviewQuestion5.textContent = '5. What is the footer tag for?'
console.log('5. What is the footer tag for?')
console.log('The footer tag is meant to identify content that is nmeant to be positioned at the end of a webpage')


reviewAnswer5.textContent = `- The footer tag is meant to identify content that is nmeant to be positioned at the end of a webpage`
console.log('')




//6.
reviewQuestion6.textContent = '6. viewport property scale options'
console.log('6. viewport property scale options')
console.log('initial-scale specifies initial zoom level when the page first loads, user-scaleable specifies if the user can or can not zoom into the page, maximum-scale specifies the max scale for zooming in on a webpage')

reviewAnswer6.textContent = `- initial-scale specifies initial zoom level when the page first loads, user-scaleable specifies if the user can or can not zoom into the page, maximum-scale specifies the max scale for zooming in on a webpage`
console.log('')




//7.
reviewQuestion7.textContent = '7. viewport meta tag'
console.log('7. viewport meta tag')
console.log('<meta name="viewport" content="width=device-width,initial-scale=1.0>"')

reviewAnswer7.textContent = `- <meta name="viewport" content="width=device-width initial-scale=1.0>`
console.log('')




//8.
reviewQuestion8.textContent = '8. <legend>'
console.log('8. <legend>')
console.log(' HTML tag used in fieldsets to provide a key for what colors and symbols mean')

reviewAnswer8.textContent = `-  HTML tag used in fieldsets to provide a key for what colors and symbols mean`
console.log('')




//9.
reviewQuestion9.textContent = '9. data-* attribute'
console.log('9. data-* attribute')
console.log('This is the syntax to create a unique attribute data class for an HTMl element which can in turn be used to represent the element in JS functions and CSS manipulation')

reviewAnswer9.textContent = `- This is the syntax to create a unique attribute data class for an HTMl element which can in turn be used to represent the element in JS functions and CSS manipulation`
console.log('')




//10.
reviewQuestion10.textContent = '10. Validator'
console.log('10. Validator')
console.log(' and check compliance')

reviewAnswer10.textContent = `- Internal Dev Tool used to return errors in code and check compliance`
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
codewarsQuestion1.textContent = '1. How good are you really - write a function that accepts an array of tests scores and an individual score.  Determine if the singular score is greater or less than the average of the group'
console.log('1. How good are you really - write a function that accepts an array of tests scores and an individual score.  Determine if the singular score is greater or less than the average of the group')


let testScores = (group, individual) => {
    console.log('individual: ' + individual)
    console.log('group: ' + group)
    let average = (group.reduce((a, b) => a + b, 0) / group.length - 1);
    console.log('average : ' + average)
    if(individual > average) {
        console.log(true)
    }
    else {
        console.log(false)
    }
    console.log(average)
}
testScores([79, 95, 80], 85)

codewarsAnswer1.textContent = `- let testScores = ${testScores}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Chuck Norrris -  Wrtie a function thet returns false whthout using the word "false"'
console.log('2. Chuck Norrris -  Wrtie a function thet returns false whthout using the word "false"')

let chuckNorris = (string) => {
    console.log(!true)
}
chuckNorris('Can kick my butt')


codewarsAnswer2.textContent = `- let chuckNorris = ${chuckNorris}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Does the string contain a character - write a function that accepts a string and a character.  Check the string if it contains he character and return the number of times it appears in the string. If it is not in the string, return 0.'
console.log('3. Does the string contain a character - write a function that accepts a string and a character.  Check the string if it contains he character and return the number of times it appears in the string. If it is not in the string, return 0.')

let doYouHave = (string, character) => {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i].match(character)) {
            count += 1
        }
        else {
            count += 0
        }
    }
    console.log(count)
}
doYouHave('hello there my dear, welcome ', 'z')
codewarsAnswer3.textContent = `- let doYouHave = ${doYouHave}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Consonant Count - write a function that counts the consonants in a string'
console.log('4. Consonant Count - write a function that counts the consonants in a string')

let consonants = (string) => {
    let vowels = /[aeiou]/ig;
    let alpha = /[a-zA-Z]/ig;
    let count = 0

    for(let i = 0; i < string.length; i++) {
        if(!string[i].match(vowels) && string[i].match(alpha)) {
            count += 1
        }
    
    }
    console.log(count)
}
consonants('hello good')

codewarsAnswer4.textContent = `- let consonants = ${consonants}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Youre a square - write a function that tests if a number is or is not a perfect square'
console.log('5. Youre a square - write a function that tests if a number is or is not a perfect square')

let square = (n) => {
    let perfectSquare = Math.sqrt(n);
    console.log(perfectSquare)
    if(perfectSquare % 1 === 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
square(25);
square(15)

codewarsAnswer5.textContent = `- let square = ${square}`
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










