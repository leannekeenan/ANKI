/*ANKi Review: JavaScript Array Methods*/
console.log('ANKi Review: JavaScript Array Methods')
//1.
console.log('.keys()')
console.log('returns the key value of an array element - MUST BE USED IN CONJUNCTION WITH A FOR/OF LOOP!!!!');

let keysArr = [1, 2, 3];
let keysIterator = keysArr.keys();
let result = []

for(let key of keysIterator) {
    result.push(key)
}
console.log(result)

console.log('')

//2.
console.log('.values()')
console.log('creates a new iterable object composed of the values of the array elements of the orignal array')
let valuesArr = [1, 2, 7];
let valueIterator = valuesArr.values();
let valueResult = [];

for(let value of valueIterator) {
    valueResult.push(value)
}
console.log(valueResult)

console.log('')

//3.
console.log('.toSorted')
console.log('An array method used to create a new instance of an object with sorted elements in accending order by default - this will not affect the orignal array')
let toSortedArray = [2, 5, 4, 6, 7, 3, 8, 9, 0, 1];
console.log(toSortedArray.toSorted())
console.log(toSortedArray)

console.log('')

//4.
console.log('.unshift()')
console.log('adds an element to the beginning of the array');
let unshiftArr = [1, 2, 3];
console.log(unshiftArr)
let addition = unshiftArr.unshift(0);
console.log(addition)
console.log(unshiftArr)
console.log('')

//5.
console.log('.isArray')
console.log('Used in conjunction with the \'Array\' object to check if past values are or are not arrays by returning a boolean')


console.log(Array.isArray([1, 3, 5])) // true

console.log(Array.isArray('[ ]')) // false

console.log('')

//6.
console.log('.reduceRight()')
console.log('Will reduce the values of an array into a single value but reduces the values from right to left');
let reduceRightArr = [3, -10];
console.log(reduceRightArr.reduceRight((a, b) => b + a))
console.log('')

//7.
console.log('.toSplice()')
console.log('Used to splice values into, out of, or replace an existing arrays values without modifiying the original array')
let toSplicedArr = [1, 2, 3, 4];
console.log(toSplicedArr);
console.log(toSplicedArr.toSpliced(0, 0, 0))
console.log(toSplicedArr.toSpliced(4, 3, 5))
console.log('')

//8.
console.log('.of()')
console.log('Makes an array out of any passed value')
console.log(Array.of(1, 'string', true))
console.log('')

//9.
console.log('.sort()')
console.log('Sorts the values of an array in accending / alphabetical order')
let letters = ['q', 'z', 'h', 'a', 'k', 'v', 'g', 'a'];
let numbers = [1, 6, 2, 9, 3, 4, 8, 0, 7];
console.log(letters)
console.log(letters.sort())

console.log(numbers)
console.log(numbers.sort())

console.log('')

//10.
console.log('.fill()')
console.log('Used to fill a portion of an existing array with new specified values');
let fillArray = [1, 2, 3, 4];
console.log(fillArray.fill(0, 2, 3))
console.log(fillArray.fill(0, 0, 4))
console.log(fillArray.fill(0, 0, 4))
console.log('')



/*Codewars Challenge*/
//1.
console.log('Remove String Spaces')
function removeSpaces(str) {
    console.log(str.replaceAll(' ', ''));
}

removeSpaces('hello to all')
console.log('')

//2.
console.log('ROT 13')
function rot13(str) {
  let abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  console.log(str.replace(/[a-z]/ig, c=> abc[abc.indexOf(c) + 13]))
}
rot13('hello')
console.log('')

//3.
console.log('If you cant sleep, Count sheep')
function countSheep(num) {
    let result = [];
    for(let i = 1; i <= num; i++) {
        result.push(`${i} sheep...`)
    }
    console.log(result)
}
countSheep(4)
console.log('')

//4.
console.log('Jaden Casting Strings')
function stringMod(str) {
    let translation = str.split(' ').map(i => i.replace(i[0], i[0].toUpperCase())).join(' ')    
    console.log(translation)
}
stringMod('hello to all')
console.log('')

//5.
console.log('filter the Number')
function filter(str) {
    let result = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[0-9]/g)) {
            result.push(str[i])
        }
    }
    console.log(result)
}
filter('hello 2 all')
console.log('')
