/*ANKI Review: JavaScript Array Methods*/
console.log('Anki Review: JavaScript Array Methods')
//1. 3/4
console.log('.lastIndexOf()')
console.log('used to find the last stated value in an array. If absent, -1 is returned')
let findLastIndexOf = [10, 23, 35, 46, 75, 83]
let result = findLastIndexOf.lastIndexOf(75)
console.log(result)
console.log('')


 
//2. 4/4
console.log('.flat()')
console.log('Used in nested arrays to consolidate each section of an array into a single newarray')
let flatten = [1, 2, 3,[4, 5, [6, 7, [8, 9, 0]]]]
console.log(flatten.flat())
console.log((flatten.flat().flat()))
console.log(((flatten.flat().flat())).flat())
console.log(flatten)

console.log('')

//3. 1/4
console.log('.of()')
console.log('Creates a new array instance of the provided arguements, reguardless of type')
console.log(1 + ' ' + '2' + ' ' + ''  + ' ' + true + ' ' + 'hello')
console.log(Array.of(1, '2', '' , true, 'hello'))
console.log('')

//4. 2/4
console.log('.keys()')
console.log('used in conjunction with a for loop, it returns the key of an iterated element within the array')
let keys = [1, 2, 3, 4];
for(let key of keys) {
    console.log(key)
}
console.log('')

//5. 4/4
console.log('.reverse()')
console.log('returns a new array with the element sin reverse order')
let reverseOrder = [1, 2, 3, 4, 5];
console.log(reverseOrder.reverse())
console.log('')

//6. 4/4
console.log('.reduce()')
console.log('Used to take the values of an array and reduce them to a single value by running an operational function on the accumulator element and teh current value')

let reduced = [1, 2, 3, 4, 5];
console.log(reduced.reduce((a, b) => a + b, 0))
console.log('')

//7. 1/4
console.log('.entries()')
console.log('Returns the key value pairs of the elements in an array.  Must be used in conjunction with the .next method and that is used to append the value')
let entriesMethod = [1, 2, 3, 4, 5]
/*let*/result = entriesMethod.entries()
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log('')

//8. 4/4
console.log('.flat()')
console.log('consolidates nested arrays into a new array based on the depth of the nesting')
let flattenedAgain = [1, 2, 3, [4, 5, 6, [7, 8, [9, 0]]]];
console.log(flattenedAgain.flat())
console.log((flattenedAgain.flat()).flat())
console.log(((flattenedAgain.flat()).flat()))
console.log((((flattenedAgain.flat()).flat()).flat()))
console.log('')

//9. 1/4
console.log('.flatMap()')
console.log('A combination of the .map() method (which applies a function to each array element) and .flat(), (allowing any inner arrays to be consolidated into a single array) returning a new array of values')

let flatMapMethod = [2, 3, 4, [5, 6]];
result = flatMapMethod.flatMap((n) =>{
    if(Array.isArray(n)) {
        console.log(n.map((i) => i * 2))
    }
    else {
        console.log(n * 2)
    }
})
console.log(result)


//10. 1/4
console.log('.isArray')
console.log('Checks if object is or is not an array and returns a boolean response')


console.log(Array.isArray([1, 2, 3]))
console.log(Array.isArray(true))

/*Codewars Challenges*/
console.log('Codewars Challenges')

//1.
console.log('')
console.log('')

//2.
console.log('')
console.log('')

//3.
console.log('')
console.log('')

//4.
console.log('')
console.log('')

//5.
console.log('')
