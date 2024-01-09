/*ANKI Review: */
console.log('ANKI Review: JavaScript Array Methods')
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
reviewQuestion1.textContent = '1. .flatMap'
console.log('1. .flatMap')
console.log('used to flatten the results of an applied function to the values of an array to a new array')

reviewAnswer1.textContent = ' - used to flatten the results of an applied function to the values of an array to a new array'

let flatMapArray = [1, 2, 3]
let flatMapResult = []
flatMapResult.push(flatMapArray.flatMap(element => element * 10))
console.log(flatMapResult)
console.log('')




//2.
reviewQuestion2.textContent = '2. .values()'
console.log('2. .values()')
console.log('Used in "for ..."in" or "for... of" loops, the .values method returns the value of an indexed element in an array')

reviewAnswer2.textContent = ' - Used in "for ..."in" or "for... of" loops, the .values method returns the value of an indexed element in an array'

let valuesArray = [1, 2, 3];
let valuesArrayValues = valuesArray.values();
let valuesResult = []
for(let values of valuesArrayValues) {
    valuesResult.push(values * 100)
} 
console.log(valuesResult)
console.log('')





//3.
reviewQuestion3.textContent = '3. .toSorted()'
console.log('3. .toSorted()')
console.log('Array method that returns a sorted copy of the orignal array without altering the orignal array')

reviewAnswer3.textContent = ' - Array method that returns a sorted copy of the orignal array without altering the orignal array'

let toSortedArray = [6, 8, 2, 9, 1, 0, 3, 7, 4, 5]
console.log(toSortedArray.toSorted())
console.log(toSortedArray)
console.log('')




//4.
reviewQuestion4.textContent = '4. .of()'
console.log('4. .of()')

reviewAnswer4.textContent = ' - An array element that is used to create an array out of the passed elements, reguardless of type, just use a keyword like "Array"'
console.log('An array element that is used to create an array out of the passed elements, reguardless of type, just use a keyword like "Array"')
let ofMethod = Array.of(true, 10, 'hello')
console.log(ofMethod)



//5.
reviewQuestion5.textContent = '5. .fill()'
console.log('5. .fill()')
console.log('array method that accepts a value to replace a current value in an array, an index position start value and an index position end value allowing developers to change the value of an array element without modifying the element directly')


reviewAnswer5.textContent = ' - array method that accepts a value to replace a current value in an array, an index position start value and an index position end value allowing developers to change the value of an array element without modifying the element directly'
let filllArray = [1, 2, 3];
let fillResult = filllArray.fill('hello', 1, 2) //value replacement, index position in array start, index position array end
console.log(fillResult)
console.log('')




//6.
reviewQuestion6.textContent = '6. .map()'
console.log('6. .map()')
console.log('versitile array method used to map out each element of an array and preform a specified function on each element and return a new array')

reviewAnswer6.textContent = ' - versitile array method used to map out each element of an array and preform a specified function on each element and return a new array'

let mapArray = [1, 2, 3, 4, 5];
let mapResult = mapArray.map(arrayElements => arrayElements * 100);
console.log(mapResult)
console.log(mapArray)
console.log('')




//7.
reviewQuestion7.textContent = '7. .find()'
console.log('7. .find()')
console.log('returns the first element in an array that meets the specified testing condition')

reviewAnswer7.textContent = ' - returns the first element in an array that meets the specified testing condition'
let findArray = [1, 2, 3];
let findResult = findArray.find(num => num % 2 === 0);
console.log(findResult)
console.log('')




//8.
reviewQuestion8.textContent = '8. .entries()'
console.log('8. .entries()')
console.log('Array method used to return the array elements value and index position as a pairing')

reviewAnswer8.textContent = ' - Array method used to return the array elements value and index position as a pairing'
let entriesArray = [1, 2, 3];
let entriesResult = entriesArray.entries()
for(let entries of entriesResult) {
    console.log(entries)
}
console.log('')




//9.
reviewQuestion9.textContent = '9. .splice()'
console.log('9. .splice()')
console.log('array method used to add, remove or replace current entries objects in the array')

reviewAnswer9.textContent = ' - array method used to add, remove or replace current entries objects in the array'

let splicedArray = [1, 2, 4, 5];
splicedArray.splice(2, 0, 3);
console.log(splicedArray)

console.log('')




//10.
reviewQuestion10.textContent = '10. .every()'
console.log('10. .every()')
console.log('Array method used to test if every element within an array meets a specified condition and returns a boolean response')

reviewAnswer10.textContent = ' - Array method used to test if every element within an array meets a specified condition and returns a boolean response'

let everyMethodArray = [1, 2, 3];
let everyResultOne = everyMethodArray.every(num => num < 5)//true
console.log(everyResultOne);
let everyResultTwo = everyMethodArray.every(num => num % 2 === 0)//false
console.log(everyResultTwo)
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
codewarsQuestion1.textContent = '1. Sum of Multiples - Find the sum of all multiples of a set number and a provided multiple value of that number.  If the value is less than 0, return "Invalid"'
console.log('1. Sum of Multiples - Find the sum of all multiples of a set number and a provided multiple value of that number.  If the value is less than 0, return "Invalid"')

let findSumOfMultiples = (number, multiple) => {
    let result = 0
    for(let i = multiple; number % i === 0; i++) {
        result += i * number
    }
    if(result < 0) {
        console.log("Invalid")
    }
    console.log(result)
}
findSumOfMultiples(10, 1)

codewarsAnswer1.textContent = `let findSumOfMultiples = ${findSumOfMultiples}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Find Multiples of a Number - write a function that accepts a value and a limit.  return an array of the multiplrs between the number and the limit value'
console.log('2. Find Multiples of a Number - write a function that accepts a value and a limit.  return an array of the multiplrs between the number and the limit value')
let findMultiplesOfANumber = (value, limit) => {
    let result = []
    for(let i = 1; i * value <= limit; i++) {
        result.push(i * value)
    }
    console.log(result)
} 
findMultiplesOfANumber(10, 100)

codewarsAnswer2.textContent = `let findMultiplesOfANumber = ${findMultiplesOfANumber}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Trim a String - Create a function that will trim a string if it is longer than a requested maximum length and add "..." to the end to show it has been cut off at that length.  If the string length is less than or equal to the desired length, return the string without being trimmed or having an elipsis added'
console.log('3. Trim a String - Create a function that will trim a string if it is longer than a requested maximum length and add "..." to the end to show it has been cut off at that length.  If the string length is less than or equal to the desired length, return the string without being trimmed or having an elipsis added')


let trimAString = (string, max) => {
    if(string.length > max) {
        console.log(string.slice(0, max).concat(' ...'))
    }
    else {
        console.log(string)
    }
}
trimAString('hi, My name is Leanne', 14)

codewarsAnswer3.textContent = ' - '
console.log('')





//4.
codewarsQuestion4.textContent = '4. Does a string contain a number - create a function that accepts a string and a single character and returns an integer count of the occurances of the character within the string.  If the character is not present, return 0'
console.log('4. Does a string contain a number - create a function that accepts a string and a single character and returns an integer count of the occurances of the character within the string.  If the character is not present, return 0')

let doseStringContainCharacter = (string, character) => {
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(string[i] === character) {
            count ++
        }
    }
    console.log(count)
}
doseStringContainCharacter('hello', 'l')

codewarsAnswer4.textContent = ' - '
console.log('')





//5.
codewarsQuestion5.textContent = '5. Alternating Case - create a function that returns a string with its character casing reversed - upper case becomes lower case and lower case becomes upper case'
console.log('5. Alternating Case - create a function that returns a string with its character casing reversed - upper case becomes lower case and lower case becomes upper case')

let alternatingCase = (string) => {
    let result = []
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toLowerCase()) {
            result.push(string[i].toUpperCase())
        }
        else if(string[i] === string[i].toUpperCase()) {
            result.push(string[i].toLowerCase())
        }
    }
    console.log(result.join(''))
}
alternatingCase('HeLlO')

codewarsAnswer5.textContent = ' - '
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










