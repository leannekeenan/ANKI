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


let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//1.
reviewQuestion1.textContent = '1. .of()'
console.log('1. .of()')
console.log('the ".of()" method is used to create an array from passed elements, reguardless of type')

let createArray = Array.of(1, true, 'hello')

reviewAnswer1.textContent = `- the ".of()" method is used to create an array from passed elements, reguardless of type. "let createArray = Array.of(1, true, 'hello')" becomes  "${createArray}"` 

console.log(createArray)



//2.
reviewQuestion2.textContent = '2. .find()'
console.log('2. .find()')
let find = array.find(num => num - 2 === 4)
console.log(find)
console.log('.find() is used to iterate through an array and return the first element that meets the set condition')
reviewAnswer2.textContent = ' - .find() is used to iterate through an array and return the first element that meets the set condition'
console.log('')





//3.
reviewQuestion3.textContent = '3. .fill()'
console.log('3. .fill()')
console.log(' .fill() accepts up to three values, a value to use to fill a set number of element places in an array, a value to begin the process and a value to end it')

reviewAnswer3.textContent = ' -  .fill() accepts up to three values, a value to use to fill a set number of element places in an array, a value to begin the process and a value to end it'

let fill = array.fill('hello',1, 3)
console.log(fill)
console.log('')




//4.
reviewQuestion4.textContent = '4. .keys()'
console.log('4. .keys()')
console.log('.keys is a method used on arrays to return the index key value of an element')

reviewAnswer4.textContent = ' - .keys is a method used on arrays to return the index key value of an element'

let keysMethod = array.keys();
let keysMethodArray = []
for(key of keysMethod) {
    keysMethodArray.push(key)
}
console.log( keysMethodArray)
console.log('')




//5.
reviewQuestion5.textContent = '5. .lastIndexOf()'
console.log('5. .lastIndexOf()')
console.log('array method used to return the last index of the passed value')


reviewAnswer5.textContent = ' - array method used to return the last index of the passed value'

let lastIndexArray = [1, 2, 1, 3, 0, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 6, 9, 8, 0]
let lastIndex = lastIndexArray.lastIndexOf(6)
console.log(lastIndex)
console.log('')




//6.
reviewQuestion6.textContent = '6. isArray()'
console.log('6. isArray()')
console.log('Method used to determind if an object is or is not an array and returns thr corresponding boolean')
let isArray = Array.isArray(lastIndexArray)

console.log(isArray)
reviewAnswer6.textContent = ' - Method used to determind if an object is or is not an array and returns thr corresponding boolean'
console.log('')




//7.
reviewQuestion7.textContent = '7. .splice()'
console.log('7. .splice()')
console.log('used to change the content of an array by removing or replacing existing elementss')

reviewAnswer7.textContent = ' - used to change the content of an array by removing or replacing existing elementss'
let splice = array.splice(2, 4);
console.log(splice)
console.log('')




//8.
reviewQuestion8.textContent = '8. .flatMap()'
console.log('8. .flatMap()')
console.log('iterates through an array ane executes a function on each element and returns a new array with the new values')

reviewAnswer8.textContent = ' - iterates through an array ane executes a function on each element and returns a new array with the new values'

let flatMapArray = [1, 2, 3, 4, 5, 6, 7, 8];
let flattenedMap = flatMapArray.flatMap(num => num * 2);
console.log(flattenedMap)
console.log('')




//9.
reviewQuestion9.textContent = '9. .findLast()'
console.log('9. .findLast()')
console.log('.findLast() is used to find the position of the last known element that matched the passed condition')

reviewAnswer9.textContent = ' - .findLast() is used to find the position of the last known element that matched the passed condition'
let findLastMethod = array.findLast(num => num % 3 === 0)
console.log(findLastMethod)
console.log('')




//10.
reviewQuestion10.textContent = '10. .entries()'
console.log('10. .entries()')
console.log('.entries() is an array method used to returns the values of array elements when used with a flr.. in loop')

reviewAnswer10.textContent = ' - .entries() is an array method used to returns the values of array elements when used with a flr.. in loop'
let entries = array.entries()
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
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
codewarsQuestion1.textContent = '1. List Filtering - Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out'
console.log('1. List Filtering - Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out')

let listFiltering = (list) => {
    let filtered = list.filter(element => typeof element !== 'string')
    console.log(filtered)
}

listFiltering([1, '2', 3, 4, '5'])
codewarsAnswer1.textContent = `let listFiltering = ${listFiltering}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Alternating Case'
console.log('2. Alternating Case')
function alternatingCase(string) {
    let arr = [];
    
    for(let i = 0; i < string.length; i++) {
    let characters = string[i];
    
    if(characters == characters.toUpperCase()) {
    characters = characters.toLowerCase();
    }
    else if(characters == characters.toLowerCase()) {
    characters = characters.toUpperCase();
    }
    
    arr.push(characters)
    }
    console.log(arr.join(""))
    }
    
    alternatingCase('Hello')
    

codewarsAnswer2.textContent = `let alternatingCase = ${alternatingCase}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Sum of positives'
console.log('3. Sum of positives')
let sumOfPositives = (array) => {
    result = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            result.push(array[i])
        }
    }
    console.log(result.reduce((a, b) => a + b, 0))
}
sumOfPositives([1, 2, 3, 4, -5])
console.log('')

codewarsAnswer3.textContent = `let somOfPositives = ${sumOfPositives}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Summation'
console.log('4. Summation')


let summation = (num) => {
    let result = 0
    for(let i = 1; i <= num; i++) {
        result += i
    }
    console.log(result)
}
summation(3)

codewarsAnswer4.textContent = `let summation = ${summation}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Sum of Multiples'
console.log('5. Sum of Multiples')

let sumOfMultiples = (n, m) => {
    let multiples = 0
    for(let i = 1; i * m <= n; i++) {
        multiples += i * m
    }
    if(multiples > 0) {
        console.log(multiples)
    }
    else {
        console.log('invalid')
    }
}
sumOfMultiples(10, 2)

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










