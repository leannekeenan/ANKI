/*ANKI Review: */
console.log('ANKI Review: JavaScript String Methods')
let base = document.getElementById('base')
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

let string = 'The quick sly fox jumped over the lazy brown dog.'
base.textContent = `The base string for todays exercises will be: "${string}"`
console.log(string)



//1.
reviewQuestion1.textContent = '1. .fromCharCode()'
console.log('1. .fromCharCode() Creates a string from a list of UTF-16 character values.  Requires the use of the "String" keyword')
console.log('')

reviewAnswer1.textContent = ' - Creates a string from a list of UTF-16 character values.  Requires the use of the "String" keyword'
let fromCharCodeMethod = String.fromCharCode(0, 189, 116, 50, 12);
console.log(fromCharCodeMethod)
console.log('')




//2.
reviewQuestion2.textContent = '2. .valueOf()'
console.log('2. .valueOf()')
console.log('returns the primitive value os a string')
let valueOfMethod = string.valueOf()
console.log(valueOfMethod)
reviewAnswer2.textContent = ' -returns the primitive value os a string'
console.log('')





//3.
reviewQuestion3.textContent = '3. .raw()'
console.log('3. .raw()')
console.log('Used to return the primitive value of template literals')

let rawMethod = String.raw`High ${2 + 3}!`
console.log(rawMethod)

reviewAnswer3.textContent = ' - Used to return the primitive value of template literals'
console.log('')




//4.
reviewQuestion4.textContent = '4. localeCompare()'
console.log('4. .localeCompare')
let localeCompare = string.localeCompare(rawMethod, 'en', {sensitivity: 'base'})
console.log(localeCompare)
console.log('returns a number indicating whether the string comes before or after or at the given sort order')

reviewAnswer4.textContent = ' - returns a number indicating whether the string comes before or after or at the given sort orders'
console.log('')




//5.
reviewQuestion5.textContent = '5. .toString()'
console.log('5. .toString()')
console.log('Translates object/array data into a string')

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums)
let numsAsString = nums.toString()
console.log(numsAsString)
reviewAnswer5.textContent = ' - Translates object/array data into a string'
console.log('')




//6.
reviewQuestion6.textContent = '6. String.prototype[@@iterator]()'
//the iterator is used to create an iterator for the string. This allows us to iterate through each character in the string
let iterator = string[Symbol.iterator]();
// Character gets the first character from the string
let character = iterator.next();

// while loop loops through the string
while(!character.done && character.value !== ' ') {
    //and print the current character
    console.log(character.value)
    //then gets the next character from the string
    character = iterator.next()
}
console.log('6. used to create an iterator for the string. This allows us to iterate through each character in the string')
console.log('')

reviewAnswer6.textContent = ' - used to create an iterator for the string. This allows us to iterate through each character in the string'
console.log('')




//7.
reviewQuestion7.textContent = '7. .includes()'
console.log('7. .includes()')
let includesMethod = string.includes('H')
console.log(includesMethod)
console.log('Returns boolean response to whether or not a string contains a specified character')

reviewAnswer7.textContent = ' - Returns boolean response to whether or not a string contains a specified character'
console.log('')




//8.
reviewQuestion8.textContent = '8. toWellFormed()'
console.log('8. .toWellFormed()')
console.log('.toWellFormed() is a method used to check if a variable is properly formatted to a string object by converting objects like emojis to their  Unicode replacement character U+FFFD')
let toWellFormedMethod = string.toWellFormed()
console.log(toWellFormedMethod)
reviewAnswer8.textContent = ' - .toWellFormed() is a method used to check if a variable is properly formatted to a string object by converting objects like emojis to their  Unicode replacement character U+FFFD'
console.log('')




//9.
reviewQuestion9.textContent = '9. .matchAll()'
console.log('9. .matchAll()')
console.log('Returns an iterator of all results matched against a string and a regular expression')
let regEx = /[A-Z]/g
let regexArr = [...string.matchAll(regEx)]
console.log(regexArr[0]) //['T', index: 0, input: 'The quick sly fox jumped over the lazy brown dog.', groups: undefined]
reviewAnswer9.textContent = ' - Returns an iterator of all results matched against a string and a regular expression'
console.log('')




//10.
reviewQuestion10.textContent = '10. .charCodeAt()'
console.log('10. .charCodeAt()')
console.log('Returns the character code value of a passed index element of a string.  If the element index is non existand, undefined is returned')
let charCodeAtMethod = string.charCodeAt(10)
console.log(charCodeAtMethod)
reviewAnswer10.textContent = ' - Returns the character code value of a passed index element of a string.  If the element index is non existand, undefined is returned'
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
codewarsQuestion1.textContent = '1. Break, continue'
console.log('1. Break, continue')
let grabDoll = (dolls) => {
    let bag = []
    for(let i = 0; i < dolls.length; i++) {
        if(dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie') {
            bag.push(dolls[i]);
        }
        else {
            continue;
        }
        if(bag.length === 3) {
            break;
        }
    }
    console.log(bag)
}
grabDoll(['Hello Kitty', 'Barbie', 'GI Joe', 'Cabbagepatch', 'Barbie', 'Hello Kitty'])
console.log('')

codewarsAnswer1.textContent = grabDoll
console.log('')




//2.
codewarsQuestion2.textContent = '2. Summation. Write a program that finds the summation of every number from 1 to num'
console.log('2. Summation.  Write a program that finds the summation of every number from 1 to num')
console.log('')
let summation = (num) => {
    let total = 0
    for(let i = 0; i <= num; i++) {
        total += i
    }
    console.log(total)
}
summation(3)
codewarsAnswer2.textContent = summation
console.log('')




//3.
codewarsQuestion3.textContent = '3. Index of an Element in an Array. Create a function which accepts two parameters (array & element) and returns the index of the element if found and "not found" otherwise.'
console.log('3. Index of an Element in an Array. Create a function which accepts two parameters (array & element) and returns the index of the element if found and "not found" otherwise.')
console.log('')
let indexOfElement = (array, element) => {
    if(array.includes(element)) {
        console.log(array.indexOf(element))
    }
    else {
        console.log('Not Found')
    }
}

indexOfElement([1, 2, 3], 2)
indexOfElement([1, 2, 3], 4)
codewarsAnswer3.textContent = ' - '
console.log('')





//4.
codewarsQuestion4.textContent = '4. Keep Hydrated. Write a function where you are given the time in hours and you need to return the number of litres needed to stay hydrated, drinking 0.5 liters per hour'
console.log('4. Keep Hydrated. Write a function where you are given the time in hours and you need to return the number of litres needed to stay hydrated, drinking 0.5 liters per hour')
console.log('')
let hydrate = (hour) => {
    console.log(Math.floor(hour * 0.5))
}

hydrate(3.75)

codewarsAnswer4.textContent = ' - '
console.log('')





//5.
codewarsQuestion5.textContent = '5. count characters in a string. count all the occurring characters in a string'
console.log('5. count characters in a string. count all the occurring characters in a string')
let countCharacters = (string) => {
    let count = {}
    for(let characters of string) {
        count[characters] = (count[characters] || 0) + 1
    }
    console.log(count);
}
countCharacters('hello')
console.log('')

codewarsAnswer5.textContent = ' - '
console.log('')



//codewarsQuestion6.textContent = '6.'
//codewarsAnswer6.textContent = ' - '
//codewarsQuestion7.textContent = '7.'
//codewarsAnswer7.textContent = ' - '
//codewarsQuestion8.textContent = '8.'
//codewarsAnswer8.textContent = ' - '
//codewarsQuestion9.textContent = '9.'
//codewarsAnswer9.textContent = ' - '
//codewarsQuestion10.textContent = '10.'
//codewarsAnswer10.textContent = ' - '










