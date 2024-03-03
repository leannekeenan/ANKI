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
reviewQuestion1.textContent = '1. .splice()'
console.log('1. .splice()')
console.log('used to add, remove, or replace elements in an array')

let spliceMethod = () => {
    let array = [1, 2, 3];
    let splice = array.splice(2, 1, 'hello');
    console.log(array)
}
spliceMethod()

reviewAnswer1.textContent = `- used to add, remove, or replace elements in an array`
console.log('')




//2.
reviewQuestion2.textContent = '2. .entries()'
console.log('2. .entries()')
console.log('Array method that retutns the index value of an array element and its value')

let entriesMethod = (array) => {
    
    let entries = array.entries()

    for(let entry of entries) {
        console.log(entry)
    }

}
entriesMethod(['hello', 2, 3])

reviewAnswer2.textContent = `- Array method that retutns the index value of an array element and its value`
console.log('')





//3.
reviewQuestion3.textContent = '3. flatMap()'
console.log('3. flatMap()')
console.log('used to map base elements and their new values into one array')

let flatMapMethod = () => {
    let array = [1, 2, 3];
    let flatMap = array.flatMap(n => [n, n + (n * 2)])
    console.log(flatMap)
}
flatMapMethod()

reviewAnswer3.textContent = `- used to map base elements and their new values into one array`
console.log('')




//4.
reviewQuestion4.textContent = '4. .find()'
console.log('4. .find()')
console.log('Array method used to locate the first element in an array that meets a specified condition')

let findMethod = () => {
    let array = [1, 2, 3, 4];
    let find = array.find(n => n % 2 === 0);
    console.log(find)
}
findMethod()


reviewAnswer4.textContent = `- Array method used to locate the first element in an array that meets a specified condition`
console.log('')




//5.
reviewQuestion5.textContent = '5. .every()'
console.log('5. .every()')
console.log('Array method used to check every element in an array and return a boolean response as a check to see if all elements meet the specified condition')

let everyMethod = () => {
    let array = [1, 2, 3];
    let every = array.every(n => n % 2 === 0);
    console.log(every)
}
everyMethod()

reviewAnswer5.textContent = `- Array method used to check every element in an array and return a boolean response as a check to see if all elements meet the specified condition`
console.log('')




//6.
reviewQuestion6.textContent = '6. .isArray()'
console.log('6. .isArray()')
console.log('Using the keyword Array, this method is used to check if the arguement passed is or is not an array returning a boolean response')

let isArrayMethod = () => {
    let isArray = Array.isArray([10, true, 'hello'])
    console.log(isArray)
}
isArrayMethod()

reviewAnswer6.textContent = `- Using the keyword Array, this method is used to check if the arguement passed is or is not an array returning a boolean response`
console.log('')




//7.
reviewQuestion7.textContent = '7. .keys()'
console.log('7. .keys()')
console.log('Returns the index value of each array element')
let keysMethod = () => {
    let array = [1, 2, 3];
    let keys = array.keys();

    for(let key of keys) 
    console.log(key)
}
keysMethod()

reviewAnswer7.textContent = `- Returns the index value of each array element`
console.log('')




//8.
reviewQuestion8.textContent = '8. .flat()'
console.log('8. .flat()')
console.log('used to flatten multyiple nested arrays into a single array')

let flatMethod = () => {
    let array = [1, [2, [3]]];
    let flat = array.flat().flat()
    console.log(flat)
}
flatMethod()


reviewAnswer8.textContent = `- used to flatten multyiple nested arrays into a single array`
console.log('')




//9.
reviewQuestion9.textContent = '9. .from()'
console.log('9. .from()')
console.log('usd to create an array from the provided values reguardless of type')

let fromMethod = () => {
    let array = Array.from(['hello', true, 100]);
    console.log(array)
}
fromMethod()

reviewAnswer9.textContent = `- usd to create an array from the provided values reguardless of type`
console.log('')




//10.
reviewQuestion10.textContent = '10. .unshift()'
console.log('10. .unshift()')
console.log('removes an element from the start of an array')

let unshift = () => {
    let array = [1, 2, 3];
    let unshift = array.unshift(0)

    console.log(array) //adds 0 to start
    console.log(unshift)//returns length of array
}
unshift()
reviewAnswer10.textContent = `- removes an element from the start of an array`
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










