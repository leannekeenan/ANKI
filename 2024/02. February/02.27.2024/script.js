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
reviewQuestion1.textContent = '1. Prefix match attribute selector'
console.log('1. Prefix match attribute selector')
console.log('A CSS selector that targets elements that have a value that starts with a specified string using the caret (^)symbol')

reviewAnswer1.textContent = `- A CSS selector that targets elements that have a value that starts with a specified string using the caret (^)symbol. span[class^="date"] {
    background: grey;
}`
console.log('')




//2.
reviewQuestion2.textContent = '2. "resolution" media feature'
console.log('2. "resolution" media feature')
console.log('used to specify the resolution of a device as a breakpoint for style application')

reviewAnswer2.textContent = `- used to specify the resolution of a device as a breakpoint for style application`
console.log('')


//3.
reviewQuestion3.textContent = '3. Relative Length Units'
console.log('3. Relative Length Units')
console.log('Percentage, rem, em, vh, vw')

reviewAnswer3.textContent = `- Percentage, rem, em, vh, vw`
console.log('')




//4.
reviewQuestion4.textContent = '4. clearfix'
console.log('4. clearfix')
console.log('a CSS Selector that allows objects that share space with an object that uses a float property to be removed from its flow and overriding the float property')

reviewAnswer4.textContent = `- a CSS Selector that allows objects that share space with an object that uses a float property to be removed from its flow and overriding the float property`
console.log('')




//5.
reviewQuestion5.textContent = '5. Form input types'
console.log('5. Form input types')
console.log('text, tel, number, password, select, option, button, date, time, color, range, url')


reviewAnswer5.textContent = `- text, tel, number, password, select, option, button, date, time, color, range, url`
console.log('')




//6.
reviewQuestion6.textContent = '6. What technique can you use to contain floats overflow content'
console.log('6. What technique can you use to contain floats overflow content')
console.log('1. Set the container to flex and add the flex wrap property with the wrap value, 2. use overflow: hidden to hide the overflow, 3. use "clearfix" to a parent class of the overflow element, 4. use the "float" property, 5. use the "grid" property to organize the content in two dimentions')

reviewAnswer6.textContent = `- 1. Set the container to flex and add the flex wrap property with the wrap value, 2. use overflow: hidden to hide the overflow, 3. use "clearfix" to a parent class of the overflow element, 4. use the "float" property, 5. use the "grid" property to organize the content in two dimentions`
console.log('')




//7.
reviewQuestion7.textContent = '7. prefix match attribute selector'
console.log('7. prefix match attribute selector')
console.log('"^".  Used to select objects that have the matching attribute selector. {class^="value"}')

reviewAnswer7.textContent = `- "^".  Used to select objects that have the matching attribute selector. obj[class^="value"]`
console.log('')




//8.
reviewQuestion8.textContent = '8. Table Structure'
console.log('8. Table Structure')
console.log('The <table> tag holds table content. the <thead> tag holds the table header, <tbody> holds the body of the content of a table, <tr> is table row, <th> gives the table a header, <td> holds table data')

reviewAnswer8.textContent = `- The <table> tag holds table content. the <thead> tag holds the table header, <tr> is table row, <th> gives the table a header, <td> holds table data `
console.log('')




//9.
reviewQuestion9.textContent = '9. Grid'
console.log('9. Grid')
console.log('CSS property thast allows content to be organized in two dimensions')

reviewAnswer9.textContent = `- CSS property thast allows content to be organized in two dimensions`
console.log('')




//10.
reviewQuestion10.textContent = '10. <aside>'
console.log('10. <aside>')
console.log('HTML tag used to include content in a webpage that does not necessarially have any relation to the content - such as ads and external links outside of the main content.  Used to replace the banner tag')

reviewAnswer10.textContent = `- HTML tag used to include content in a webpage that does not necessarially have any relation to the content - such as ads and external links outside of the main content.  Used to replace the banner tag`
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
codewarsQuestion1.textContent = '1. Does the string contain a character - write a function that accepts a string ans a letter.  Check the string to see if it contains the character and return te number of instances it appears'
console.log('1. Does the string contain a character - write a function that accepts a string ans a letter.  Check the string to see if it contains the character and return te number of instances it appears')

let doesItContain = (string, letter) => { 
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i].match(letter)) {
            count += 1
        }
        else {
            count += 0
        }
    }
    console.log(count)
}
doesItContain('hello', ' ')

codewarsAnswer1.textContent = `- let doesItContain = ${doesItContain}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. How good are you really? - Write a function that accepts an array of scores and a single score.  Check to see if the single score if greater or less than the average of teh array of scores.  Return true or false accordingly.'
console.log('2. How good are you really? - Write a function that accepts an array of scores and a single score.  Check to see if the single score if greater or less than the average of teh array of scores.  Return true or false accordingly.')


let areYouBetter = (array, score) => {
    let average = (array.reduce((a, b) => a + b, 0)) / array.length - 1;
    console.log(average)
    if(average > score) {
        console.log(false)
    }
    else if(average < score) {
        console.log(true)
    }
    else if(average === score) {
        console.log('tie')
    }
}
areYouBetter([67, 78, 89], 90);
areYouBetter([67, 78, 89], 75);
areYouBetter([67, 78, 89], 77);


codewarsAnswer2.textContent = `- let areYouBetter = ${areYouBetter}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Keep Hydrated - write a function that calculates how much water you should drink.  Assume you need 0.5 liters per hour, but you want to return whole numbers only rounded to the smaallest value'
console.log('3. Keep Hydrated - write a function that calculates how much water you should drink.  Assume you need 0.5 liters per hour, but you want to return whole numbers only rounded to the smaallest value')

let hydration = (hour) => {
    let total = Math.floor(hour * 0.5);

    if(hour === 0) {
        console.log(0)
    }

    else if(hour < 2) {
        console.log(1)
    } 
    else {
        console.log(total)
    }
    
}
hydration(6)

codewarsAnswer3.textContent = `- let hydration = ${hydration}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Convert Number to Reversed Array of Digits - Write a function that accepts a ramdom non-negative number and returns the digits of the bumber in a reversed array sequence'
console.log('4. Convert Number to Reversed Array of Digits - Write a function that accepts a ramdom non-negative number and returns the digits of the bumber in a reversed array sequence')

let reverseSequence = (n) => {
    let number = n.split('').reverse();
    console.log(n)
    console.log(number)
}
reverseSequence('12345')

codewarsAnswer4.textContent = `- let reverseSequence = ${reverseSequence}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Sum of Array - Write a function that accepts a array of numbers and returns the sum of teh elements values'
console.log('5. Sum of Array - Write a function that accepts a array of numbers and returns the sum of teh elements values')

let sumOfArray = (array) => {
    let sum = array.reduce((a, b) => a + b);
    console.log(sum)
}
sumOfArray([1, 2, 3, 4, -5])

codewarsAnswer5.textContent = `- let sumOfArray = ${sumOfArray}`
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










