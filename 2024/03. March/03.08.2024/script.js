/*ANKI Review: */
console.log('ANKI Review: CSS Terms and Syntax Review')
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
reviewQuestion1.textContent = '1. What technique can you use to contain floats overflow content?'
console.log('1. What technique can you use to contain floats overflow content?')
console.log('1. clearfix (use clear property), overflow property, use pseudo elements and clearfix together, use flexbox or grid layout')

reviewAnswer1.textContent = `- 1. clearfix (use clear property), overflow property, use pseudo elements and clearfix together, use flexbox or grid layout`
console.log('')




//2.
reviewQuestion2.textContent = '2. Generic Table Structure'
console.log('2. Generic Table Structure')
console.log(`
<table>
    <thead>
        <tr>
            <th>Table Header</th>
        </tr>
   </thead>
   <tbody>
        <legend>Title</legend>
        <tr colspan="5"> 
            <td></td>
        </tr>
   </tbody>
</table>
`)

reviewAnswer2.textContent = `
<table>
    <thead>
        <tr>
            <th>Table Header</th>
        </tr>
   </thead>
   <tbody>
        <legend>Title</legend>
        <tr colspan="5"> 
            <td></td>
        </tr>
   </tbody>
</table>
`
console.log('')





//3.
reviewQuestion3.textContent = '3. border-spacing'
console.log('3. border-spacing')
console.log('CSS property used to add additional space between cells in a table')

reviewAnswer3.textContent = `- CSS property used to add additional space between cells in a table`
console.log('')




//4.
reviewQuestion4.textContent = '4. keyframes'
console.log('4. keyframes')
console.log('CSS rule used to add animations to DOM elements')

reviewAnswer4.textContent = `- CSS rule used to add animations to DOM elements`
console.log('')




//5.
reviewQuestion5.textContent = '5. <thead>'
console.log('5. <thead>')
console.log('HTML tag used to define the header of a table')


reviewAnswer5.textContent = `- HTML tag used to define the header of a table`
console.log('')




//6.
reviewQuestion6.textContent = '6. prefix match attribute selector'
console.log('6. prefix match attribute selector')
console.log('a CSS selector used to target elements based on the beginning of an attributes value, denoted by using teh "^" caret icon. [attribute ^= "value"]')

reviewAnswer6.textContent = `- a CSS selector used to target elements based on the beginning of an attributes value, denoted by using teh "^" caret icon. [attribute ^= "value"]`
console.log('')




//7.
reviewQuestion7.textContent = '7. contents'
console.log('7. contents')
console.log('CSS display property that can replace a page element with a generated value')

reviewAnswer7.textContent = `- CSS display property that can replace a page element with a generated value`
console.log('')




//8.
reviewQuestion8.textContent = '8. <tfoot>'
console.log('8. <tfoot>')
console.log('syntax tag used to add a footer to a table in HTML')

reviewAnswer8.textContent = `- syntax tag used to add a footer to a table in HTML`
console.log('')




//9.
reviewQuestion9.textContent = '9. clearfix technique'
console.log('9. clearfix technique')
console.log('used to prevent the effects of the float property from affecting HTML elements by either allowt=ing the float to not affect the left right or both sides of the object')

reviewAnswer9.textContent = `- used to prevent the effects of the float property from affecting HTML elements by either allowt=ing the float to not affect the left right or both sides of the object`
console.log('')




//10.
reviewQuestion10.textContent = '10. <thead>'
console.log('10. <thead>')
console.log('syntax tag used to apend content to the top of a table')

reviewAnswer10.textContent = `- syntax tag used to apend content to the top of a table`
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
codewarsQuestion1.textContent = '1. Do ...While Loop - Write a function that accepts a string and a number.  When the number is odd, add an asterisk to the left of the string, when its even, add an additional asterisk to the right'
console.log('1. Do ...While Loop - Write a function that accepts a string and a number.  When the number is odd, add an asterisk to the left of the string, when its even, add an additional asterisk to the right')

let asterisk = (string, num) => {
    do {
        if(num % 2 === 0) {
            string = `${string} *`
        }
        else {
            string = `* ${string}`
        }
        num--
    }
    while(num > 0)
    console.log(string)
}
asterisk('hello', 3);
asterisk('hello', 8)

codewarsAnswer1.textContent = `- let asterisk = ${asterisk}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. MAx Multipels - Write a function that if given a bound and a divisor, return a number greater than zero that is divisible by the divisor and is less than the bound'
console.log('2. MAx Multipels - Write a function that if given a bound and a divisor, return a number greater than zero that is divisible by the divisor and is less than the bound')

let maxMulttiples = (divisor, bound) => {
   if (divisor > 0){
    console.log((Math.floor(bound / divisor) * divisor))
   }
}
maxMulttiples(9, 100)
codewarsAnswer2.textContent = `- let  = ${maxMulttiples}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Reverse Sequence - Write a function that accepts a number and returns a count down array from said number to 0'
console.log('3. Reverse Sequence - Write a function that accepts a number and returns a count down array from said number to 0')

let reverseSequence = (num) => {
    let array = [];
    for(let i = 1; i <= num; i++) {
        array.push(i)
    }
    console.log(array.reverse())
}
reverseSequence(10)

codewarsAnswer3.textContent = `- let reverseSequence = ${reverseSequence}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Filter a string for numbers - write a function that accepts a string and filters for numerical values and returns them to a new array'
console.log('4. Filter a string for numbers - write a function that accepts a string and filters for numerical values and returns them to a new array')

let filterForNumbers = (string) => {
  let filter =  string.split('').filter((character) => /[0-9]/.test(character)).join('')

  console.log(filter)
}
filterForNumbers('h3110')

codewarsAnswer4.textContent = `- let filterForNumbers = ${filterForNumbers}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Convert Number to Reversed Array of Digits - write a function that converts a non-negative number into an array containing the numbers in reverse order'
console.log('5. Convert Number to Reversed Array of Digits - write a function that converts a non-negative number into an array containing the numbers in reverse order')

let reverseToArray = (num) => {
    let convertNumToString = String(num).split('').reverse()
    console.log(convertNumToString)
}
reverseToArray(10)

codewarsAnswer5.textContent = `- let reverseToArray = ${reverseToArray}`
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










