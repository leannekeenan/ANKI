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
reviewQuestion1.textContent = '1. attribute-value pair'
console.log('1. attribute-value pair')
console.log('in CSS, the attribute value pair are connected via a colon (":") within a selector.  for example: body { background-color: blue:}.  The body is the selector, the background-color is the attribute and the value is blue')

reviewAnswer1.textContent = ' - in CSS, the attribute value pair are connected via a colon (":") within a selector.  for example: body { background-color: blue;}.  The body is the selector, the background-color is the attribute and the value is blue'
console.log('')




//2.
reviewQuestion2.textContent = '2. border collapse'
console.log('2. border collapse')
console.log('"border-collapse" is an attribute in CSS that can allow the borders of a table be collapses onto themselves to make a single border or maintain singluar borders around individual table elements')

reviewAnswer2.textContent = ' - "border-collapse" is an attribute in CSS that can allow the borders of a table be collapses onto themselves to make a single border or maintain singluar borders around individual table elements'
console.log('')





//3.
reviewQuestion3.textContent = '3. vertival align'
console.log('3. vertival align')
console.log('"vertical align" is a CSS attribute that is used to align obects align the Y-axis of a document, setting the obejct to the top, center, bottom or an assigned percentage/VH value')

reviewAnswer3.textContent = ' - "vertical align" is a CSS attribute that is used to align obects align the Y-axis of a document, setting the obejct to the top, center, bottom or an assigned percentage/VH value'
console.log('')




//4.
reviewQuestion4.textContent = '4. How do you link CSS to an HTML document?'
console.log('4. How do you link CSS to an HTML document?')
console.log('To link CSS to HTML in an HTML doc, use a link in the head of the doc with the other meta tags.  Set its ')

reviewAnswer4.textContent = ' - To link CSS to HTML in an HTML doc, use a link in the head of the doc with the other meta tags.  Set its relationship (rel) type to stylesheet and its hyperlink reference (href) to the path of the css document or open a <style> tag within your HTML doc and import external CSS files using th e"@import" attribute'
console.log('')




//5.
reviewQuestion5.textContent = '5. The "start" attribute'
console.log('5. The "start" attribute')
console.log('In the context of CSS, the start attribute is an attribute selector, illustrated by using the "^= operator and is used to select elements that have values that begin with a specified value')


reviewAnswer5.textContent = ' - In the context of CSS, the start attribute is an attribute selector, illustrated by using the "^= operator and is used to select elements that have values that begin with a specified value'
console.log('')




//6.
reviewQuestion6.textContent = '6. What is a class selector'
console.log('6. What is a class selector')
console.log('The class selector is a representation of an HTML object that has a set class name,  This is generally indicated with a "." preceeding the class name.')

reviewAnswer6.textContent = ' - The class selector is a representation of an HTML object that has a set class name,  This is generally indicated with a "." preceeding the class name.'
console.log('')




//7.
reviewQuestion7.textContent = '7. <q>'
console.log('7. <q>')
console.log('the <q> tag is semantic for quotations')

reviewAnswer7.textContent = ' - the <q> tag is semantic for quotations'
console.log('')




//8.
reviewQuestion8.textContent = '8. Relative Length Units'
console.log('8. Relative Length Units')
console.log('Percentage, rem, vh, ')

reviewAnswer8.textContent = ' - Percentage, rem, vh, vw, em'
console.log('')




//9.
reviewQuestion9.textContent = '9. inline element'
console.log('9. inline element')
console.log('HTML elements that remain within the  flow of a document and only take up as much space as necessary to hold their content, otherwise they share line space with other inline objects')

reviewAnswer9.textContent = ' - HTML elements that remain within the  flow of a document and only take up as much space as necessary to hold their content, otherwise they share line space with other inline objects'
console.log('')




//10.
reviewQuestion10.textContent = '10. keyword "cover"'
console.log('10. keyword "cover"')
console.log('The keyword value cover is used when defining the size of media objects and images allowing them to responsively resize to the hight and width of their container object')

reviewAnswer10.textContent = ' - The keyword value cover is used when defining the size of media objects and images allowing them to responsively resize to the hight and width of their container object'
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
codewarsQuestion1.textContent = '1. Find multiples of a number, Build a program that will take a value and an integer and return a list of the multiples between it and a set limit.'
console.log('1. Find multiples of a number, Build a program that will take a value and an integer and return a list of the multiples between it and a set limit.')

let findMultiples = (number, limit) => {
    let result = []
    for(let i = 1; i * number <= limit; i++) {
        result.push(i * number)
    }
    console.log(result)
}
findMultiples(10, 100)

codewarsAnswer1.textContent = `let findMultiples = ${findMultiples}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Summation.  Write a program that finds the dum of every number from 1 to a limit number'
console.log('2. Summation.  Write a program that finds the dum of every number from 1 to a limit number')


let summation = (num) => {
    let result = 0
    for(let i = 0; i <= num; i++) {
        result += i
    }
    console.log(result)
}
summation(10)

codewarsAnswer2.textContent = `let summation = ${summation}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Does the string contain a character.  Create a function that accepts a string and a single character and returns an integer of the count of occurances the second arguement is found in the first one'
console.log('3. Does the string contain a character.  Create a function that accepts a string and a single character and returns an integer of the count of occurances the second arguement is found in the first one')

let stringContains = (string, character) => {
    let result = 0
    for(let i = 0; i < string.length; i++) {
        if(string[i].match(character)) {
            result += 1
        }
    }
    console.log(result)
}
stringContains('hello', 'l')

codewarsAnswer3.textContent = `let stringContains = ${stringContains}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Return Negative'
console.log('4. Return Negative')

let returnNegative = (num) => {
    let result = -Math.abs(num)
    console.log(result)
}
returnNegative(10)
returnNegative(-5)

codewarsAnswer4.textContent = `let returnNegative = ${returnNegative}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Trim a string.  Create a function that will trim a string if it is longer than a requested maximum length and attach "..." to the end'
console.log('5. Trim a string.  Create a function that will trim a string if it is longer than a requested maximum length and attach "..." to the end')

let trimString = (string, max) => {
    let result = ''
    if(string.length > max) {
        console.log(string.slice(0, max).concat('...'))
    }
    else {
        console.log(string)
    }
    console.log(result)
}
trimString('Happy New Year', 10)


codewarsAnswer5.textContent = `let trimString = ${trimString}`
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










