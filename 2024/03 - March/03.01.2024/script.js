/*ANKI Review: */
console.log('ANKI Review: JavaScript String Methods')
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
reviewQuestion1.textContent = '1. .toLocaleLowerCase()'
console.log('1. .toLocaleLowerCase()')
console.log('String method that translates the provided character to the specified language lower casing style')

let toLocaleLowerCaseMethod = () => {
    let string = 'Hello';
    console.log(string.toLocaleLowerCase('en'))
}
toLocaleLowerCaseMethod()

reviewAnswer1.textContent = `- String method that translates the provided character to the specified language lower casing style`
console.log('')




//2.
reviewQuestion2.textContent = '2. string[Symbol.iterator]()'
console.log('2. string[Symbol.iterator]()')
console.log('String method used to traverse the charcters of a string returning them as individual elements rather than a singular string')

let stringIterator = () => {
    let string = 'hello';
    let iterator = string[Symbol.iterator]()
    console.log(string)
    console.log(iterator.next().value)
    console.log(iterator.next().value)
    console.log(iterator.next().value)
    console.log(iterator.next().value)
    console.log(iterator.next().value)
}
stringIterator()
reviewAnswer2.textContent = `- String method used to traverse the charcters of a string returning them as individual elements rather than a singular string`
console.log('')





//3.
reviewQuestion3.textContent = '3. .localeCompare()'
console.log('3. .localeCompare()')
console.log('String function used to compare two strings to each other to deterning the alphabetical order of each.  The function accepts a reference variable and an arguement variable.  if the reference comes before the arguement alphabetically, a positive value is returned.  If the reference variable comes after the arguement alphabetically, a negative value is returned.  If they match, 0 is returned.')

let localeCompareMethod = () => {
    let string = 'hello';
    let hi = 'hey';
    let hello = 'hello'
    let A = string.localeCompare(hello)
    let B = string.localeCompare(hi)
    let C = string.localeCompare(string)
    let D = hi.localeCompare(string)
    console.log(A);
    console.log(B);
    console.log(C);
    console.log(D)
}
localeCompareMethod()

reviewAnswer3.textContent = `- String function used to compare two strings to each other to deterning the alphabetical order of each.  The function accepts a reference variable and an arguement variable.  if the reference comes before the arguement alphabetically, a positive value is returned.  If the reference variable comes after the arguement alphabetically, a negative value is returned.  If they match, 0 is returned.`
console.log('')




//4.
reviewQuestion4.textContent = '4. .toLocaleUpperCase()'
console.log('4. .toLocaleUpperCase()')
console.log('converts a string into the upper case characters of the specified language arguement')

let toLocaleUpperCaseMethod = () => {
    let string = 'hello';
    let localeUpperCase = string.toLocaleUpperCase('en')
    console.log(localeUpperCase)
}
toLocaleUpperCaseMethod()

reviewAnswer4.textContent = `- converts a string into the upper case characters of the specified language arguement`
console.log('')




//5.
reviewQuestion5.textContent = '5. .match()'
console.log('5. .match()')
console.log('String method used to check if the value of one string is the same as another and returns a boolean value')

let matchMethod = () => {
    let string = 'hello';
    let hello = 'hello';
    let regex = /[a-z]/gi;
    
    let total = string.match(regex);

    console.log(hello)
    console.log(total);

    if(string.match(hello)) {
        console.log('match')
    }
    else {
        console.log('not a match')
    }
    
}
matchMethod()


reviewAnswer5.textContent = `- String method used to check if the value of one string is the same as another and returns a boolean value`
console.log('')




//6.
reviewQuestion6.textContent = '6. .trim()'
console.log('6. .trim()')
console.log('Trims excess whitespace from a string')

let trimMethod = () => {
    let string = '      hello';
    let trim = string.trim();
    console.log(string)
    console.log(trim)
    string = 'hello        ';
    trim = string.trim()
    console.log(string);
    console.log(trim)
}
trimMethod()

reviewAnswer6.textContent = `- Trims excess whitespace from a string`
console.log('')




//7.
reviewQuestion7.textContent = '7. .split()'
console.log('7. .split()')

console.log('string method used add, remove, or replace a character in a string')


let splitMethod = () => {
    let string = 'hello';
    let split = string.split('');
    console.log(split)
}
splitMethod()


reviewAnswer7.textContent = `- string method used add, remove, or replace a character in a string`


console.log('')




//8.
reviewQuestion8.textContent = '8. .matchAll()'
console.log('8. .matchAll()')
console.log('string method used to match all the characters of a string to a specified condition returning the number of time')

let matchAllMethod = () => {
    let string = 'hello';
    let regex = /[a-z]/ig;
    let total = string.matchAll(regex)
    
    for(let match of total) {
        console.log(match)
    }
}

matchAllMethod()
reviewAnswer8.textContent = `- string method used to match all the characters of a string to a specified condition returning the number of time`
console.log('')




//9.
reviewQuestion9.textContent = '9. toWellFormed()'
console.log('9. toWellFormed()')
console.log('checks if a string is well-formed, meaning it does not contain any lone surrogates. This is crucial for ensuring that strings are correctly encoded and do not contain sequences that could lead to errors or unexpected behavior when processed.')

reviewAnswer9.textContent = `- checks if a string is well-formed, meaning it does not contain any lone surrogates. This is crucial for ensuring that strings are correctly encoded and do not contain sequences that could lead to errors or unexpected behavior when processed.`
console.log('')




//10.
reviewQuestion10.textContent = '10. .padStart()'
console.log('10. .padStart()')
console.log('Adds whitespace padding to the start of a string but must account for the length of the string when calculationg the character space needs')

let padStartMethod = () => {
    let string = 'hello';
    let padded = string.padStart(10);
    console.log(padded)
}
padStartMethod()

reviewAnswer10.textContent = `- Adds whitespace padding to the start of a string but must account for the length of the string when calculationg the character space needs`
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
codewarsQuestion1.textContent = '1. Friend or Foe - write a function that filters a list for your friends. The parameters are: your friends names have exactly 4 letters, otherwise they are not friends.'

console.log('1. Friend or Foe - write a function that filters a list for your friends. The parameters are: your friends names have exactly 4 letters, otherwise they are not friends.')

let friendOrFoe = (list) => {
    let friends = [];
    total = 0
    for(let i = 0; i < list.length; i++) {
        if(list[i].length === 4) {
            friends.push(list[i])
            total += 1
        }
    }
    console.log(total);
    console.log(friends);
    
}
friendOrFoe(['ted', 'mark', 'thom', 'mary', 'genny'])
console.log('')

codewarsAnswer1.textContent = `- let friendOrFoe = ${friendOrFoe}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Is the index a multiple of the value  - write a function that checks an arrays values to determine of they are divisible by their index.  If so, push thhe values to a new array'
console.log('2. Is the index a multiple of the value  - write a function that checks an arrays values to determine of they are divisible by their index.  If so, push thhe values to a new array')

let divisibleByIndex = (arr) => {
    let newArray = []
    for(let i = 0; i < arr.length; i++) 
    if(arr[i] % arr.indexOf(arr[i]) === 0) {
        newArray.push(arr[i])
    }
    console.log(newArray)
}
divisibleByIndex([0, 1, 3, 5, 7, 9, 12, 14, 15, 27, 100])
codewarsAnswer2.textContent = `- let divisableByIndex = ${divisibleByIndex}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Multiples of 3 $ 5 - write a function that accepts an array and returns the sum of all its elements that are divisible by 3 $ 5'
console.log('3. Multiples of 3 $ 5 - write a function that accepts an array and returns the sum of all its elements that are divisible by 3 $ 5')

let divBy = (arr) => {
    let total = []
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(num % 5 === 0 && num % 3 === 0) {
            total.push(num)
        }
    }
    let sum = total.reduce((a, b) => a + b, 0)
    console.log(total);
    console.log(sum)
}
divBy([15, 45, 30, 20, 10, 6])

codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. Going to the Cinema - write a function for a movie discount card.'
console.log('4. Going to the Cinema - write a function for a movie discount card.')

let cinema = (T, C, P) => {
    let standard = 0;
    let totalvisits = 0;
    let discount = C;

    while(Math.ceil(standard) >= Math.ceil(discount)) {
        totalvisits++
        standard += T * P
        discount += T * Math.pow(P, totalvisits)  
    }

    console.log(standard)
    console.log(discount)
    console.log(totalvisits)
}
cinema(10, 500, .9)

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










