/*ANKI Review: */
console.log('ANKI Review: JavaScript String Method Definitions & Syntax')
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
reviewQuestion1.textContent = '1. .matchAll()'
console.log('1. .matchAll()')
console.log('String method used to check a string for the presence of a specified character and returns the number of times it appears in the string.')
reviewAnswer1.textContent = `- String method used to check a string for the presence of a specified character and returns the number of times it appears in the string.`

let matchAllMethod = (string) => {
    let alphabet = /[0-9]+/g;
    let matched = [...string.matchAll(alphabet)]
    console.log(matched[0])
}
matchAllMethod('H3llo')

console.log('')




//2.
reviewQuestion2.textContent = '2. .raw()'
console.log('2. .raw()')
console.log('String method used to return the value of template literal content')
reviewAnswer2.textContent = `- String method used to return the value of template literal content`
console.log('')


const my_name = 'John';
const age = 30;

// A tagged template literal function
function myTag(strings, ...values) {
  console.log(strings.join('')); // Array of string literals
  console.log(values); // Array of substitution values
  
  // Using .raw property to get raw string values
  console.log(strings.raw.join(''));
  
  // Returning a modified string
  return 'Modified string';
}

// Using the tagged template literal
const result = myTag`Hello ${my_name}, you are ${age} years old.`;
console.log(result); // Output: Modified string


let templateLiteral = 10 * 10;
console.log(templateLiteral)
console.log(String.raw`${templateLiteral}`)


//3.
reviewQuestion3.textContent = '3. .toWellFormed'
console.log('3. .toWellFormed')
console.log('String method that translates emojis to expressions that can be parsed by a computer. Checks for lone surrogates in a string ')
reviewAnswer3.textContent = `- String method that translates emojis to expressions that can be parsed by a computer. Checks for lone surrogates in a string `
console.log('')




//4.
reviewQuestion4.textContent = '4. .split()'
console.log('4. .split()')
console.log('String method used split a string and include a delimiter like a space, or additional character to seperate a strings characters.  Turns string into array')
reviewAnswer4.textContent = `- String method used split a string and include a delimiter like a space, or additional character to seperate a strings characters.  Turns string into array`

let split = (string) => {
    let splitMethod = string.split(' ');
    console.log(splitMethod)
}
split('hello world')

console.log('')




//5.
reviewQuestion5.textContent = '5. .valueOf()'
console.log('5. .valueOf()')
console.log('')
reviewAnswer5.textContent = `- `
let valueOfMethod = () => {
    let string = 'hello';
    let valueOf = string.valueOf(string);
    console.log(valueOf)
}
valueOfMethod()
console.log('')




//6.
reviewQuestion6.textContent = '6. .toLocaleLowerCase()'
console.log('6. .toLocaleLowerCase()')
console.log('string method used to change the characters of a string to the specified local languages lower case characters')
reviewAnswer6.textContent = `- string method used to change the characters of a string to the specified local languages lower case characters`
console.log('')




//7.
reviewQuestion7.textContent = '7. .search()'
console.log('7. .search()')
console.log('String method used to search a string for a specified value')
reviewAnswer7.textContent = `- String method used to search a string for a specified value`

let search = () => {
    let string = 'hello to all of you out there.';
    let regex = /o/i;

    console.log(string.search(regex)); //4
    console.log(string[string.search(regex)]); //o
}
search()

console.log('')




//8.
reviewQuestion8.textContent = '8. .fromCodePoint()'
console.log('8. .fromCodePoint()')
console.log('Accepts UTF-q6 numerical values and return the associated alphabetical character')
reviewAnswer8.textContent = `- Accepts UTF-q6 numerical values and return the associated alphabetical character`
console.log('')




//9.
reviewQuestion9.textContent = '9. .padStart()'
console.log('9. .padStart()')
console.log('Adds whitespece to the start of a string.  Requires you account the length of the current string and add the value to the number of shitespace spaces you want to pad the start')
reviewAnswer9.textContent = `- Adds whitespece to the start of a string.  Requires you account the length of the current string and add the value to the number of shitespace spaces you want to pad the start`
console.log('')




//10.
reviewQuestion10.textContent = '10. String.prototype[@@iterator]'
console.log('10. String.prototype[@@iterator]')
console.log('String method that allows strings to be iteratee through with a loop or a spread operator')
reviewAnswer10.textContent = `- String method that allows strings to be iteratee through with a loop or a spread operator`
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
codewarsQuestion1.textContent = '1. Mind Min and Max of a list'
console.log('1. Mind Min and Max of a list')

let findMinMax =(list) => {
    let max = Math.max(...list);
    let min = Math.min(...list);

    console.log(`min = ${min} | max = ${max}`)
}

findMinMax([1, 2, 1, 3, 1, 4, 1, 4, 0])
console.log('')

codewarsAnswer1.textContent = `- let findMinMax = ${findMinMax}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Is the element divisible bu its index - write a function that accepts an array and returns a new array of the elements that can evenly be divisible by the elements index position'
console.log('2. Is the element divisible bu its index - write a function that accepts an array and returns a new array of the elements that can evenly be divisible by the elements index position')

let isDivisible =(array) => {
    let divisible = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % array.indexOf(array[i]) === 0) {
            divisible.push(array[i])
        }
    }
    console.log(divisible)
}

isDivisible([0, 2, 5, 6, 18, 20])

console.log('')

codewarsAnswer2.textContent = `- `
console.log('')




//3.
codewarsQuestion3.textContent = '3. Discount - write a function that gives a 3 for 2 deal'
console.log('3. Discount - write a function that gives a 3 for 2 deal')

let shop = (quantity, price) => {
    let discount = Math.floor(quantity / 3);
    let total = (quantity - discount) * price
    console.log(total)
}
shop(3, 2)

console.log('')

codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. Do ... While - write a function that accepts two parameters, string and number. Use a do ... while to add astrisks to the right side of the string if the number is even, and to the left if the number is odd (meaning that the string has a total number of astrisks appended to it. When the number is odd, there will always be one more on the left than on the right)'
console.log('4. Do ... While - write a function that accepts two parameters, string and number. Use a do ... while to add astrisks to the right side of the string if the number is even, and to the left if the number is odd (meaning that the string has a total number of astrisks appended to it. When the number is odd, there will always be one more on the left than on the right)')

let doWhile = (string, number) => {

    do {
        if(number % 2 === 0) {
            string = `${string} *`
        }
        else {
            string = `* ${string}`
        }
        number--
    }
    while(number > 0)
    console.log(string)
    
}
doWhile('string', 5)

console.log('')

codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = `5. Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

`


console.log(`5. Given a Divisor and a Bound , Find the largest integer N , Such That ,

    Conditions :
    N is divisible by divisor
    
    N is less than or equal to bound
    
    N is greater than 0.
`)


let maxMultiples = (divisor, bound) => {
    let num = Math.floor((bound / divisor)) * divisor;
    console.log(num)
}
maxMultiples(9, 100)

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










