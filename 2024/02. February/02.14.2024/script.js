/*ANKI Review: */
console.log('ANKI Review: Javascript Array Methods')
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
reviewQuestion1.textContent = '1. .splice()'
console.log('1. .splice()')
console.log('Array method used to add, remove, or replace elements in an existing array')

let spliceFunction = () => {
    let arr = [1, 2, 3, 4, 5];
    arr.splice(2, 1, 'hello');
    console.log(arr)
}
spliceFunction()

reviewAnswer1.textContent = `- Array method used to add, remove, or replace elements in an existing array.`


console.log('')




//2.
reviewQuestion2.textContent = '2. isArray()'
console.log('2. isArray()')
console.log('Array method used to determine if the passed values are an array and returns a boolean response')

reviewAnswer2.textContent = `- Array method used to determine if the passed values are an array and returns a boolean response`

let isArrayFunction = () => {
   console.log(Array.isArray([false, 10, 'hello']))
}
isArrayFunction()
console.log('')





//3.
reviewQuestion3.textContent = '3. .keys()'
console.log('3. .keys()')
console.log('Array method used to return the index value of array elements')


let keysArray = [1, 2, 3];
let key = keysArray.keys()

for(let key in keysArray) {
    console.log(key)
}








reviewAnswer3.textContent = `- Array method used to return the index value of array elements`
console.log('')




//4.
reviewQuestion4.textContent = '4. .every()'
console.log('4. .every()')
console.log('Used to return the element value of each array element through a for loop')

let everyFunction = () => {
    let arr = [1, 2, 3];
    let condition = value => value > 5;
    console.log(arr.every(condition))
}
everyFunction()

reviewAnswer4.textContent = `- Used to return the element value of each array element through a for loop`
console.log('')




//5.
reviewQuestion5.textContent = '5. flatMap'
console.log('5. flatMap')
console.log('Array method used to flatten the result of a new array into the orignal array in order of the index')

let flatMapMethod = () => {
    let arr = [1, 2, 3];
    let newArr = arr.flatMap((n) => n * 10)
    console.log(newArr)
}
flatMapMethod()
reviewAnswer5.textContent = `- Array method used to flatten the result of a new array into the orignal array in order of the index`
console.log('')




//6.
reviewQuestion6.textContent = '6. .of()'
console.log('6. .of()')
console.log('Creates an array from passed value reuardless of type')
let ofMethod = () => {
   return  Array.of('hello', true, 10)
}
console.log(ofMethod())
reviewAnswer6.textContent = `- Creates an array from passed value reuardless of type`
console.log('')




//7.
reviewQuestion7.textContent = '7. .splice'
console.log('7. .splice')
console.log('')
let s = () => {
    let arr = [1, 2, 3];
    arr.splice(1, 1, 'hello')
    console.log(arr)
}
s()
reviewAnswer7.textContent = `- `
console.log('')




//8.
reviewQuestion8.textContent = '8. .find()'
console.log('8. .find()')
console.log('array method used to find a value in the array that matches the passed condition')

let findMethod = () => {
    let arr = [1, 2, 3];
    let found = arr.find(num => num > 2);
    console.log(found)
}
findMethod()

reviewAnswer8.textContent = `- array method used to find a value in the array that matches the passed condition`
console.log('')




//9.
reviewQuestion9.textContent = '9. '
console.log('9. ')
console.log('')

reviewAnswer9.textContent = `- `
console.log('')




//10.
reviewQuestion10.textContent = '10. '
console.log('10. ')
console.log('')

reviewAnswer10.textContent = `- `
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










