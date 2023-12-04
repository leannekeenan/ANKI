/*ANKI Review: JavaScript Array Methods*/
console.log('ANKI Review: JavaScript Array Methods')
console.log('')
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//1.
console.log('1. .fill()')
console.log('accepts a value to include in the array, an optional start position where the value will be included and an optional end value to add or replace values in an array')
let fill  = array.fill(100, 9, 10);
console.log(fill)


fill = array.fill(0, 9, 10)
console.log(fill)

fill = array.fill(0, 5)
console.log(fill)


console.log('')

//2.
console.log('2. .every()')
console.log('iterates through an array and sets a condition thet returns a boolean value illustrating if the condition is true about the array or not')
console.log(array.every(num => num < 20))

console.log('')

//3.
console.log('3. .values()')
console.log('used with a for...of / for ...in loop to return ')

let values = array.values()
for(let obj of values) (
    console.log(obj)
)
console.log('')

//4.
console.log('4. .find()')
console.log('finds first element that meets condition within an array')
let find = array.find(num => num % 4 === 0)
console.log(find)
console.log('')

//5.
console.log('5. .of()')
console.log('Used in conjunction with the Array keyword to translate varying object types into a singl e array')
let arrayOf = Array.of(true, 'string', 100);
console.log(arrayOf)
console.log('')

//6.
console.log('6. .toSorted')
console.log('Creates a new sorted array without altering the original array')
let sort = [2, 5, 7, 9, 4, 6, 8, 3]
console.log(sort.toSorted())
console.log(sort)
console.log('')

//7.
console.log('7. .unshift()')
console.log('removes element from beginning of an array')
let unshift = array.unshift(0)
console.log(unshift)
console.log(array)
console.log('')

//8.
console.log('8. .flatMap')
console.log('Flattens embedded arrays into a single array using either the .next peoperty')
array = [1, 2, [3, [4, 5, 6,[7]]]]
console.log(array.flatMap(num => [num, num * 2]))

console.log('')

//9.
console.log('9. .findLAst()')
console.log('finds last elelment in array that meets set condition')
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.findLast(num => num % 4 === 0))
console.log('')

//10.
console.log('10. .map()')
console.log('iterates through an array applying the set condition to each array element and returning a new array with the new values')
array.map(num => {
    console.log(num * 10)
})
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
console.log('')
//1.
console.log('1. clock')
console.log('create a function that returns the time passed since midnight in milliseconds')
let clock = (h, m, s) => {
    let hour = h * 3600000;
    let minute = m * 60000
    let second = s * 1000;

    console.log(hour + minute + second)
}
clock(1, 1, 1)
console.log('')

//2.
console.log('2. count characters in a string')
let charCount = (str) => {
    let count = [];
    for(let characters of str) {
        count[characters] = (count[characters] || 0) + 1
    }
   console.log(count)
}

charCount('hello')
console.log('')


//3.
console.log('3. Did they say hello')
console.log('Write a function to check if a string contains the word "hello" in a different language')
let sayHello = (str) => {
    let greetings = {
        english: 'hello',
        french: 'bonjour',
        spanish: 'hola'
    }
    for(let language in greetings) {
        if(str.includes(greetings[language])) {
            console.log(true)
            return
        }
        else {
            console.log(false)
            return
        }
    }
}
sayHello('bonjour')
console.log('')

//4.
console.log('4. going to the cinema')
console.log('write a function with 3 parameters: discount card, ticket price, and percentage discount.  Determine how many tickets you need to by to have the discount card be a value over buying individual tickets')
let cinema = (card, ticket, perc) => {
    let visits = 0;
    let costA = 0;
    let costB = card;
while (Math.ceil(costB) >= costA) {
    costA += Math.floor(ticket * perc);
    costB += ticket * Math.pow(perc, visits);
    visits++
}
    console.log(visits);
}
   
cinema(100, 10, .5)
   
console.log('')

//5.
console.log('5. find multiples of a number')
console.log('build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well')
let multiples = (value, limit) => {
    let list = [];
    for(let i = value; i <= limit; i += value) {
        list.push(i)
    }
    console.log(list)
}
multiples(10, 105)
console.log('')

//6. Filter out the geese
console.log('Filter out the geese')
console.log('given an array of geese, check a list array of birds  to ensure no elements in the given geese array are present in the list when it is returned')
let filter = (string) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    console.log(string.filter((bird) => !geese.includes(bird)))
}
filter(["Pilgrim", "Steinbacher", 'Pidegon'])
console.log('')

//7
console.log('Jaden Casting string')
console.log('return a sentence with all of the words capitalized')
function jaden(string) {
    let capitalized = string.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
    console.log(capitalized)
}

jaden('hello again')
console.log('')

//8
console.log('Basic Data Type: Numbers')
console.log('Create 5 functions to represent all five mathamatical operations in JavaScript')
let dataTypes = (a, b) => {
    let add = a + b;
    console.log(add)
    let sub = a - b;
    console.log(sub)
    let mul = a * b;
    console.log(mul)
    let div = a / b;
    console.log(div)
    let mod = a % b;
    console.log(mod)
   
}
dataTypes(10, 5)
console.log('')

/9
console.log('Remove First and Last Character')
let removeFirstAndLast = (str) => {
    console.log(str.slice(1, -1))
}
removeFirstAndLast('hello')
console.log('')

//10
console.log('list filtering')
console.log('')

let listFilter = (arr) => {
    let newList = []
    for(let i = 0; i < arr.length; i++) {
        if(Number(arr[i])) {
            newList.push(arr[i])
        }
    }
    console.log(newList)
}
listFilter([1, 2, 'hello', 3, ])
console.log('')
