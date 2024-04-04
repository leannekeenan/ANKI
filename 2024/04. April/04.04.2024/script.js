/*ANKI Review: */
console.log('ANKI Review: JavaScript String Syntax and Definition Review')
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
reviewQuestion1.textContent = '1. String.prototype[@@iterator]()'
console.log('1. String.prototype[@@iterator]()')
console.log('String method used to transform strings into iterable objects so they can be processed through a loop function or spread syntax')

reviewAnswer1.textContent = `- String method used to transform strings into iterable objects so they can be processed through a loop function or spread syntax`

let stringIteratorFunction = (string) => {
    let breakdown = string[Symbol.iterator](); //breaks string down

    for(let letters of breakdown) { //for the letters in the breakdown
        console.log(letters) //print them
    }
}
stringIteratorFunction('hello')
console.log('')




//2.
reviewQuestion2.textContent = '2. .raw()'
console.log('2. .raw()')
console.log('String method used to return the raw value of a template literal')

reviewAnswer2.textContent = `- String method used to return the raw value of a template literal`

let rawMethod = String.raw`${5 + 10}`;
console.log(rawMethod)
console.log('')





//3.
reviewQuestion3.textContent = '3. .fromCharCode()'
console.log('3. .fromCharCode()')
console.log('A string method that can translate the UTF-16 value of a character into a alphanumerical element')

reviewAnswer3.textContent = `- A string method that can translate the UTF-16 value of a character into a alphanumerical element`

let fromCharCodeMethod = String.fromCharCode(65, 112, 112, 108, 101);
console.log(fromCharCodeMethod)

console.log('')




//4.
reviewQuestion4.textContent = '4. .fromCodePoint()'
console.log('4. .fromCodePoint()')
console.log('String method used to translate UTF-16 values into alphanumeric or special objects')

reviewAnswer4.textContent = `- String method used to translate UTF-16 values into alphanumeric or special objects`

let fromCodePointMethod = String.fromCodePoint(112);
console.log(fromCodePointMethod)

console.log('')




//5.
reviewQuestion5.textContent = '5. .toWellFormed()'
console.log('5. .toWellFormed()')
console.log('String method used to translate code into emojis')


reviewAnswer5.textContent = `- String method used to translate code into emojis`
console.log('')




//6.
reviewQuestion6.textContent = '6. .matchAll()'
console.log('6. .matchAll()')
console.log('string method used to check for the total number of times a paramerter character is found')

reviewAnswer6.textContent = `- string method used to check for the total number of times a paramerter character is found`
console.log('')




//7.
reviewQuestion7.textContent = '7. .padEnd()'
console.log('7. .padEnd()')
console.log('method used to add white space or assitional charactes or messages to the end of a string.  When used, to gain the additional space, the length of the orignal string must be accounted for and the desired number of additional spaces must be added to the length value as the pad length to work')

reviewAnswer7.textContent = `- method used to add white space or assitional charactes or messages to the end of a string.  When used, to gain the additional space, the length of the orignal string must be accounted for and the desired number of additional spaces must be added to the length value as the pad length to work`
console.log('')




//8.
reviewQuestion8.textContent = '8. .toLocaleUpperCase()'
console.log('8. .toLocaleUpperCase()')
console.log('String method used to translate lower case character to a specified nations upper case character')

reviewAnswer8.textContent = `- String method used to translate lower case character to a specified nations upper case character`

const string = "i";
const englishUpperCase = string.toLocaleUpperCase('en-US');
const turkishUpperCase = string.toLocaleUpperCase('tr-TR');

console.log("English locale:", englishUpperCase); // Output: "I"
console.log("Turkish locale:", turkishUpperCase); // Output: "İ"

console.log('')




//9.
reviewQuestion9.textContent = '9. .search()'
console.log('9. .search()')
console.log('String method used to search for a letter, word or phrase within a string, returning the index start of the object being searched for')

reviewAnswer9.textContent = `- String method used to search for a letter, word or phrase within a string, returning the index start of the object being searched for`

let searchMethod = 'why hello';
let theSearch = searchMethod.search('hello');
console.log(theSearch)
console.log('')




//10.
reviewQuestion10.textContent = '10. .localeCompare()'
console.log('10. .localeCompare()')
console.log('String method used to compare two strings in the same locale and returns a number indicating if the reference object comes before or after or is equal to string it is being compared to')

reviewAnswer10.textContent = `- String method used to compare two strings in the same locale and returns a number indicating if the reference object comes before or after or is equal to string it is being compared to`

let a = 'hello';
let b = 'world';
console.log(a.localeCompare(b))//b comes after a
console.log(b.localeCompare(a))//a comes before b
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










