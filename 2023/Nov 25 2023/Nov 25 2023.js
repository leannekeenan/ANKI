/*ANKI Review:  JavaScript Array Methods*/
console.log('ANKI Review: JavaScript Array Methods')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//1.
console.log('1. .splice()')
console.log('prints section of given array to new array')
console.log(arr.splice(0, 0)) //[1, 2] prints objects 0 & 1, stops before 2
console.log('')

//2.
console.log('2. .every()')
console.log('checks every element in an array and returns a boolean response to whether or not the array meets the condition')
console.log(arr.every(num => num % 2 === 0))
console.log('')

//3.
console.log('3. .findLast()')
console.log('finds the last instance of a value in an array that meets set condition.  if not wihin array, undefined is returned')
console.log(arr.findLast(n => n % 3 === 0))
console.log(arr.findLast(n => n % 11 === 0))
console.log('')

//4.
console.log('4. .values()')
console.log('returns a new Array Iterator object that contains the values for each index in the array.')
let iterator = arr.values();
for(let value of iterator) {
    console.log(value * 10)
}
console.log('')

//5.
console.log('5. .find()')
console.log('finds the first object in an array that meets the stated condition')
console.log(arr.find(num => num % 5 === 0))
console.log('')

//6.
console.log('6. .fill()')
console.log('using a value for a replacement object, the index start position and the index position end returns a new array with the stated range filled with the stated replacement value')
console.log(arr.fill('hi', 3, 7))
console.log('')

//7.
console.log('7. flatMap()')
console.log('maps through an array and returns new array values to the same array')
console.log(arr.flatMap(num => [num, num * 100])) //[1, 100, 2, 200, 3, 300, 'hi', NaN, 'hi', NaN, 'hi', NaN, 'hi', NaN, 8, 800, 9, 900]
console.log('')

//8.
console.log('8. isArray()')
console.log('checks if passed value is or is not an array and returns a boolean')
console.log(Array.isArray([]))
console.log('')

//9.
console.log('9. .keys()')
console.log('retuerns the key for every value of each item in an array')
let keys = arr.keys()
for(let keys of arr) {
    console.log(keys)
}
console.log('')

//10.
console.log('10. .of()')
console.log('When used with the keyword Array, creates an array out of any passed value')
console.log(Array.of('hello', true, 10, '100'))
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. ')
console.log('')
console.log('')

//2.
console.log('2. ')
console.log('')
console.log('')

//3.
console.log('3. ')
console.log('')
console.log('')

//4.
console.log('4. ')
console.log('')
console.log('')

//5.
console.log('5. ')
console.log('')
console.log('')
