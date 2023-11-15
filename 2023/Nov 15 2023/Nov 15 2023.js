

/*ANKI Review: */
console.log('ANKI Review: JS Array Methods')
//1.
console.log('1. .values()')
console.log('The .values() method prints array values from one object to a new object using the for...of loop.  Usign the .values method requires three things: an array to iterate through, a iterator value set to the provided arrays values method, and a for ... of loop to iterate through the array with the stated iterator')
let valuesArr = [1, 2, 3];
let valueIterator = valuesArr.values();
for(let value of valueIterator) {
    console.log(value)
}

//2.
console.log('2. .every()')
console.log('The .every() method is used to return a boolean response if the array meets the set condition variable.  It requires an array variable and an condition variable.  Append the condition to the array using the .every method, and a boolean response will return based on if the condition is or is not met')
let everyCondition = value => value < 5;
let everyArr = [1, 2, 3];
console.log(everyArr.every(everyCondition))

console.log('')

//3.
console.log('3. .splice()')
console.log('Array method used to cut sections of an array using the index position and return the values as new arrays')
let spliceArr = [1, 2, 3, 4, 5, 6];
console.log(spliceArr.splice(1, 4)) // cuts off index positions 0 and 5
console.log('')

//4.
console.log('4. isArray')
console.log('Checks object to determine if it is or is not an array and returns a boolean response')
console.log(Array.isArray([]))//true because an empty array is stil an array
console.log(Array.isArray(null))//null is not an array - its null, duh
console.log(Array.isArray({})) //again duh, objects are not arrays
console.log(Array.isArray(new Array()))//now a new array is definitely an array
console.log('')

//5.
console.log('5. .of()')
console.log('Used to create an array from an assortment of values')
console.log(Array.of(true, 13, 'hello'))
console.log('')

//6.
console.log('6. toSpliced')
console.log('adds, removes, or replaces elements within an array without altering the original')
let toSplicedArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(toSplicedArr.toSpliced(0, 0, 0)); //adds a 0 to the array
console.log(toSplicedArr.toSpliced(7, 1)); //removes 8 from the array
console.log(toSplicedArr)
console.log('')

//7.
console.log('7. .keys()')
console.log('Returns the index value of array objects to a new array')
let keysArr = [1, 2, 3];
let keyIterator = keysArr.keys()
for(let key of keyIterator) {
    console.log(key) //0, 1, 2 as a list.  create variable and push to it to create array
}
console.log('')

//8.
console.log('8. .flatMap()')
console.log('returns a new array by applying a given callback function to each element of the array, and flatteninf the result to a singular level')

let flatMapArr = [1, 2, 3];
let flatMapResult = flatMapArr.flatMap((num) => [num, num * 2]);
console.log(flatMapResult)
console.log('')

//9.
console.log('9. .entries()')
console.log('returns key: value pairs of an array using the for ... of loop')
let entriesArr = [1, 2, 3];
let entriesIterator = entriesArr.entries();
for(let entry of entriesIterator) {
    console.log(entry)
}
console.log('')

//10.
console.log('10. lastIndexOf()')
console.log('returns the last printed index position of an array element.  if not present, -1 is returned')
let lastIndexOfArr = [1, 2, 3, 1, 2, 2, 4, 5, 6, 33, 5, 76, 32, 3]
console.log(lastIndexOfArr.lastIndexOf(3))
console.log(lastIndexOfArr.lastIndexOf(22))
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. Reverse Sequence')
console.log('Build a function that return an array of integers from n to 1 where n > 0')
function reverseSequence(n) {
    for(let i = n; i >= 1; i--) {
       console.log(i)
    }
}

reverseSequence(10)
console.log('')

//2.
console.log('2. Count by x')
console.log('create a function with two parmeters: value and multiplier.  have the function create an array with the multiples needed to reach the value.  Example - If the function is given 2 and 10 as arguements, the result should be [2, 4, 6, 8, 10')
function countByX(n, m) {
    let result = []
    for(let i = m; i <= n; i++) {
        if(i % m === 0) {
            result.push(i)
        }
    }
    console.log(result)
}
countByX(10, 2)
console.log('')

//3.
console.log('3. List filtering')
console.log('create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out')
function filterList(list) {
    let result = list.filter((character) => {
        return typeof character === 'number'
    });
    console.log(result)
}

filterList(['hello', 0, 'bonjour', 12])
console.log('')

//4.
console.log('4. did they say hello')
console.log('write a function that checks if a string contains the word hello in a different language')
function hello(str) {
    let greetings = {
        english: 'hello',
        spanish: 'hola',
        french: 'bonjour',
        japanese: 'konichiwa'
    }
    for(let type in greetings) {
        if(str.includes(greetings[type])) {
            console.log(true)
            return
        }        
    }
    console.log(false);
}
hello("Hey, how's it going.  Erin said to tell you bonjour")
console.log('')

//5.
console.log('5. Multilingual hello')
console.log('Write a function that takes "language" as a paramiter and returns a greeting from the list of different ways to say hello in other languages')

let language = {
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

function multilingualHello(language) {
    console.log(language)
}
multilingualHello(language.spanish)
console.log('')
