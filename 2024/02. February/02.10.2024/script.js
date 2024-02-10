/*ANKI Review: */
console.log('ANKI Review: CSS Review')
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
reviewQuestion1.textContent = '1. <fieldset>'
console.log('1. <fieldset>')
console.log('HTML tag used to saperate sections of a form')
reviewAnswer1.textContent = `- HTML tag used to separate sections of a form`
console.log('')




//2.
reviewQuestion2.textContent = '2. float'
console.log('2. float')
console.log('CSS property that removes object from the normal flow and positions it to the furthest left or right of an objeocts container')
reviewAnswer2.textContent = `- CSS property that removes object from the normal flow and positions it to the furthest left or right of an objeocts container`
console.log('')





//3.
reviewQuestion3.textContent = '3. Relative Length Units'
console.log('3. Relative Length Units')
console.log('For HTML its initial, user-scaleable, and initial.  For CSS, the units are REM, EM, percntage, vh, vw, and inherit')
reviewAnswer3.textContent = `- For HTML its initial, user-scaleable, and initial.  For CSS, the units are REM, EM, percntage, vh, vw, and inherit`
console.log('')




//4.
reviewQuestion4.textContent = '4. Flexible Layout'
console.log('4. Flexible Layout')
console.log('Using the CSS property flex, you can position in a 1-dimention organizational structure.  This style of layout can adjust its content positioning based on the width of its viewport in terms of rows and columns')
reviewAnswer4.textContent = `- Using the CSS property flex, you can position in a 1-dimention organizational structure.  This style of layout can adjust its content positioning based on the width of its viewport in terms of rows and columns`
console.log('')




//5.
reviewQuestion5.textContent = '5. Prefix Match Attribute Selector'
console.log('5. Prefix Match Attribute Selector')
console.log('USing the selector symbol "^=" elements where attributes values begin with a specified string are targeted')
reviewAnswer5.textContent = `- USing the selector symbol "^=" elements where attributes values begin with a specified string are targeted`
console.log('')




//6.
reviewQuestion6.textContent = '6. Box-sizing: border-box'
console.log('6. Box-sizing: border-box')
console.log('A box sizing value that instructs the computer to include the length and height of an objects border in its total dimension measurements')
reviewAnswer6.textContent = `- A box sizing value that instructs the computer to include the length and height of an objects border in its total dimension measurements`
console.log('')




//7.
reviewQuestion7.textContent = '7. vertical-align'
console.log('7. vertical-align')
console.log('a property in CSS that allows inline element content on the page the be aligned on the Y-axis of a page using attributes like top, bottom, and center, or using vertical height or percentage values')
reviewAnswer7.textContent = `- a property in CSS that allows inline element content on the page the be aligned on the Y-axis of a page using attributes like top, bottom, and center, or using vertical height or percentage values`
console.log('')




//8.
reviewQuestion8.textContent = '8. child selectors'
console.log('8. child selectors')
console.log('CSS property used to select sub elements of an object that share tag type or class one at a time using the ">" symbol, and to get more granular, using the pseudo cladd ":nth-child()" ')
reviewAnswer8.textContent = `- CSS property used to select sub elements of an object that share tag type or class one at a time using the ">" symbol, and to get more granular, using the pseudo cladd ":nth-child()" `
console.log('')




//9.
reviewQuestion9.textContent = '9. visability'
console.log('9. visability')
console.log('a property in CSS that can allow for an object to alter its capacity to be seen within the DOM, but maintain its position and size in the DOM')
reviewAnswer9.textContent = `- a property in CSS that can allow for an object to alter its capacity to be seen within the DOM, but maintain its position and size in the DOM`
console.log('')




//10.
reviewQuestion10.textContent = '10. [attribute="value"] selector type'
console.log('10. [attribute="value"] selector type')
console.log('a style of selecting DOM elements based on the value property within HTML.  These values can be used to represent an object rather that displaying the object itself')
reviewAnswer10.textContent = `- a style of selecting DOM elements based on the value property within HTML.  These values can be used to represent an object rather that displaying the object itself`
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
codewarsQuestion1.textContent = '1. multiples of index - create a function that accepts an array and returns a new array of values from the orignal array if their index is a multiple of the value'
console.log('1. multiples of index - create a function that accepts an array and returns a new array of values from the orignal array if their index is a multiple of the value')

let indexmultiple = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % arr.indexOf(arr[i]) === 0) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}
indexmultiple([2, 3, -4, 8, 12, 13, 18])

console.log('')

codewarsAnswer1.textContent = `let indexmultiple = ${indexmultiple}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. find the min and max of a list - create a function that accepts a list of numbers and returns the max and minimum values of the list'
console.log('2. find the min and max of a list - create a function that accepts a list of numbers and returns the max and minimum values of the list')

let minmax = (list) => {
    console.log(`Min = ${Math.min(...list)} : Max = ${Math.max(...list)}`)
}
minmax([1, 2, 3, 4])

codewarsAnswer2.textContent = `let minmax = ${minmax}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. multilingual hello - write a function that returns the way to say hello when the language type is passed as an arguement'
console.log('3. multilingual hello - write a function that returns the way to say hello when the language type is passed as an arguement')

let multilingual = (language) => {
    let languages = {
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
    if(languages.hasOwnProperty(language)) {
        console.log(languages[language])
    }
}
multilingual('english')

codewarsAnswer3.textContent = `let multilingual = ${multilingual}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Remove duplicates from a list - create a function that accepts a list and returns the list with no duplicates and the values remain in the same order'
console.log('4. Remove duplicates from a list - create a function that accepts a list and returns the list with no duplicates and the values remain in the same order')

let removeDuplicates = (list) => {
    let newList = new Set([...list])
    console.log(newList)
}
removeDuplicates([1, 2, 1, 3, 1, 4])

codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = '5. cypher - create a function that accepts a string and returns the string with the letters of the word changed to the letter that comes 5th after the current letter in the alphabet'
console.log('5. cypher - create a function that accepts a string and returns the string with the letters of the word changed to the letter that comes 5th after the current letter in the alphabet')

let cypherFunction = (string) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGH'
    let cypher = string.replace(/[a-z]/ig, c=> alpha[alpha.indexOf(c) + 5])
    console.log(cypher)
}
cypherFunction('hello')

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










