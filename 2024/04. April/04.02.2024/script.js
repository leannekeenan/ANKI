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
reviewQuestion1.textContent = '1. .flat()'
console.log('1. .flat()')
console.log('Array method used to flatten the elements of embedded arrays in an array into a single array')

reviewAnswer1.textContent = `- Array method used to flatten the elements of embedded arrays in an array into a single array`

let flatten = [
    [1], [2], [3, 4, 5]
]
let merge = flatten.flat();
console.log(flatten);
console.log('let merge = flatten.flat();')
console.log(merge)
console.log('')




//2.
reviewQuestion2.textContent = '2. .concat()'
console.log('2. .concat()')
console.log('Array method used to concatenate, or connect two objects without the use of an object literal')

reviewAnswer2.textContent = `- Array method used to concatenate, or connect two objects without the use of an object literal`

let concatMethod = () => {
    let a = 'hello ';
    let b = 'world!';
    console.log(a.concat(b))
}
console.log('let concatMethod = ' + concatMethod)
concatMethod()

console.log('')





//3.
reviewQuestion3.textContent = '3. .splice()'
console.log('3. .splice()')
console.log('Array method used to add, remove, or replace eisting elements in the array')

reviewAnswer3.textContent = `- Array method used to add, remove, or replace eisting elements in the array`

let spliceMethod = () => {
    let arr = ['a', 'b', 'c'];
    arr.splice(4, 0, 'd');
    console.log(arr)
    
}
spliceMethod()

console.log('')




//4.
reviewQuestion4.textContent = '4. flatMap()'
console.log('4. flatMap()')
console.log('Array method used to flatten the elements of nested arrays into a single array while allowing the elements to have a function applied to them - allowing for either the orignal, new, or both values to be returned')

reviewAnswer4.textContent = `- Array method used to flatten the elements of nested arrays into a single array while allowing the elements to have a function applied to them - allowing for either the orignal, new, or both values to be returned`

let flatMapMethod = () => {
    let array = [1, 2, 3];
    let flatMap = array.flatMap(num => [num * 3]);
    console.log(flatMap)
}
flatMapMethod()

console.log('')




//5.
reviewQuestion5.textContent = '5. .every()'
console.log('5. .every()')
console.log('Array method used to check if all array elements meet a set condition and return the appropriate boolean based on the result')


reviewAnswer5.textContent = `- Array method used to check if all array elements meet a set condition and return the appropriate boolean based on the result`

let everyMethod = () => {
    let array = [1, 2, 3];
    let every = array.every(num => num < 5);
    console.log(every)
}
everyMethod()
console.log('')




//6.
reviewQuestion6.textContent = '6. .entries()'
console.log('6. .entries()')
console.log('Array method used with for ...of loops to return array elements with their corresponding index value')

reviewAnswer6.textContent = `- Array method used with for ...of loops to return array elements with their corresponding index value`

let entriesMethod = () => {
    let arr =[1, 2, 3];
    let entries = arr.entries()
    for(let num of entries) {
        console.log(num)
    }
}
entriesMethod()
console.log('')




//7.
reviewQuestion7.textContent = '7. .find()'
console.log('7. .find()')
console.log('Array method used to search an array for an element and returns the first element that meets the set condition')

reviewAnswer7.textContent = `- Array method used to search an array for an element and returns the first element that meets the set condition`

let findMethod = () => {
    let arr = [1, 2, 3];
    let find = arr.find(num => num < 2);
    console.log(find)
}
findMethod()
console.log('')




//8.
reviewQuestion8.textContent = '8. .findIndex()'
console.log('8. .findIndex()')
console.log('Array method used to search an array for an element and returns the index value of the first element that meets the set condition')

reviewAnswer8.textContent = `- Array method used to search an array for an element and returns the index value of the first element that meets the set condition`

let findIndex = () => {
    let arr = [1, 2, 3];
    let find = arr.findIndex(num => num > 2)
    console.log(find)
}
findIndex()

console.log('')




//9.
reviewQuestion9.textContent = '9. .values()'
console.log('9. .values()')
console.log('Similar to the .entries() method, this searched through for ... of loops to return the values of an array')

reviewAnswer9.textContent = `- Similar to the .entries() method, this searched through for ... of loops to return the values of an array`

let valuesMethod = () => {
    let arr = [1, 2, 3];
    let entries = arr.entries()
    for(let num of entries) {
        console.log(num)
    }
}
valuesMethod()
console.log('')




//10.
reviewQuestion10.textContent = '10. .isArray()'
console.log('10. .isArray()')
console.log('Internal JS method used to determine if the value being passed is or is not an array, returning the appropriate boolean response')

reviewAnswer10.textContent = `- Internal JS method used to determine if the value being passed is or is not an array, returning the appropriate boolean response`

let isArrayMethod = () => {
    console.log(Array.isArray([1, 2, 3]))
    console.log(Array.isArray([]))
    console.log(Array.isArray())
}
isArrayMethod()

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
codewarsQuestion1.textContent = '1. ATM - write a function that simulates an aTM machine that will honor a withdrawl bwtween 0 and 1500 with the least number of bills possible'
console.log('1. ATM - write a function that simulates an aTM machine that will honor a withdrawl bwtween 0 and 1500 with the least number of bills possible')



console.log(`
let ATM = withdrawl => {
    let count = 0;
    let notes = [100, 50, 20, 10, 5, 1];

    for(let i = 0; i < notes.length; i++) {
        count += Math.floor(withdrawl / notes[i])
        withdrawl %= notes[i]     
    }
    console.log(count)
}
ATM(101)
`)

codewarsAnswer1.textContent = `
let ATM = withdrawl => {
    let count = 0;
    let notes = [100, 50, 20, 10, 5, 1];

    for(let i = 0; i < notes.length; i++) {
        count += Math.floor(withdrawl / notes[i])
        withdrawl %= notes[i]     
    }
    console.log(count)
}
ATM(101)
`
let ATM = withdrawl => {
    let count = 0;
    let notes = [100, 50, 20, 10, 5, 1];

    for(let i = 0; i < notes.length; i++) {
        count += Math.floor(withdrawl / notes[i])
        withdrawl %= notes[i]     
    }
    console.log(count)
}
ATM(101)
console.log('')




//2.
codewarsQuestion2.textContent = '2. Trim a String - write a function that will trim a string to the provided arguement lelngth'
console.log('2. Trim a String - write a function that will trim a string to the provided arguement lelngth')
console.log(`
let trimString = (string, trimLength) => {
    console.log(string.trim().slice(0, trimLength) + " ...")
}

trimString('hello world', 5)
`)

codewarsAnswer2.textContent = `
let trimString = (string, trimLength) => {
    console.log(string.trim().slice(0, trimLength) + " ...")
}

trimString('hello world', 5)
`

let trimString = (string, trimLength) => {
    console.log(string.trim().slice(0, trimLength) + " ...")
}

trimString('hello world', 5)

console.log('')




//3.
codewarsQuestion3.textContent = '3. Filter the Number - Write a function that accepts a string.  If there are any numbers within the string, set them in an array and return it'
console.log('3. Filter the Number - Write a function that accepts a string.  If there are any numbers within the string, set them in an array and return it')
console.log(`
let filterForNumbers = string => {
    let numbers = []
    for(let i = 0; i < string.length; i++) {
        if(string[i].match(/[0-9]/g)) {
            numbers.push(string[i])
        }
    }
    console.log(numbers)
}

filterForNumbers('h3110 w0r1d')
`)

codewarsAnswer3.textContent = `
let filterForNumbers = string => {
    let numbers = []
    for(let i = 0; i < string.length; i++) {
        if(string[i].match(/[0-9]/g)) {
            numbers.push(string[i])
        }
    }
    console.log(numbers)
}

filterForNumbers('h3110 w0r1d')
`

let filterForNumbers = string => {
    let numbers = []
    for(let i = 0; i < string.length; i++) {
        if(string[i].match(/[0-9]/g)) {
            numbers.push(string[i])
        }
    }
    console.log(numbers)
}

filterForNumbers('h3110 w0r1d')
console.log('')





//4.
codewarsQuestion4.textContent = '4. Remove Zeros - write a function that removes the 0 from the end of a number'
console.log('4. Remove Zeros - write a function that removes the 0 from the end of a number')
console.log(`
let removeZeros = num => {
    while(num % 10 === 0) {
        num /= 10   
    }
    console.log(num)
}
removeZeros(1000)
`)

codewarsAnswer4.textContent = `
let removeZeros = num => {
    while(num % 10 === 0) {
        num /= 10   
    }
    console.log(num)
}
removeZeros(1000)
`

let removeZeros = num => {
    while(num % 10 === 0) {
        num /= 10   
    }
    console.log(num)
}
removeZeros(1000)

console.log('')





//5.
codewarsQuestion5.textContent = '5. Feast of many beasts - there is a party and ther eis one rulr: bring a dish that begins and ends with the same letters as your name. Write a function to do this and return an acceptance or declination of the gusets dish'
console.log('5. Feast of many beasts - there is a party and ther eis one rulr: bring a dish that begins and ends with the same letters as your name. Write a function to do this and return an acceptance or declination of the gusets dish')
console.log(`
let feast = (guest, dish) => {
    for(let i = 0; i < guest.length && i < dish.length; i++) {
        if(dish[i][0] === guest[i][0] && 
            dish[dish.length - 1].match(guest[guest.length - 1])) {
                console.log('welcome');
                return
        }
        else {
            console.log('bring something else');
            return
        }
    }
}

feast('porpoise', 'pie')
feast('porpoise', 'chips')
`)

codewarsAnswer5.textContent = `
let feast = (guest, dish) => {
    for(let i = 0; i < guest.length && i < dish.length; i++) {
        if(dish[i][0] === guest[i][0] && 
            dish[dish.length - 1].match(guest[guest.length - 1])) {
                console.log('welcome');
                return
        }
        else {
            console.log('bring something else');
            return
        }
    }
}

feast('porpoise', 'pie')
feast('porpoise', 'chips')
`

let feast = (guest, dish) => {
    for(let i = 0; i < guest.length && i < dish.length; i++) {
        if(dish[i][0] === guest[i][0] && 
            dish[dish.length - 1].match(guest[guest.length - 1])) {
                console.log('welcome');
                return
        }
        else {
            console.log('bring something else');
            return
        }
    }
}

feast('porpoise', 'pie')
feast('porpoise', 'chips')

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










