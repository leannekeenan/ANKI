/*ANKI Review: */
console.log('ANKI Review: JavaScript Array Method Review')
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
reviewQuestion1.textContent = '1. .entries()'
console.log('1. .entries()')
console.log(`String method used to execute a condition on each element in an array when used with a for ... in loop`)

let entriesFunction = () => {
    let array = [1, 2, 3];
    let entries = array.entries()

  for(let entry of entries) {
        console.log(entry[1] * 10)
    }
}
entriesFunction()

reviewAnswer1.textContent = `String method used to execute a condition on each element in an array when used with a for ... in loop`
console.log('')




//2.
reviewQuestion2.textContent = '2. .join()'
console.log('2. .join()')
console.log('Array method used to concatinate arrays together')

let joinMethod = () => {
    let array = [1, 2, 3];
    let join = array.join(' +');
    console.log(join)
}
joinMethod()


reviewAnswer2.textContent = `- Array method used to concatinate arrays together`
console.log('')





//3.
reviewQuestion3.textContent = '3. .every()'
console.log('3. .every()')
console.log('Array method used to check if every element in an array meets a set condition and returns a boolean response')

let everyFunction = () => {
    let arr = [1, 2, 3];
    let every = arr.every(num => num * 100 > 1000);
    console.log(every)
}
everyFunction()

reviewAnswer3.textContent = `Array method used to check if every element in an array meets a set condition and returns a boolean response`
console.log('')




//4.
reviewQuestion4.textContent = '4. .from()'
console.log('4. .from()')
console.log('Array method that used keyword "Array" to create an array from the provied values')
let string = 'hello'
let fromMethod = Array.from(string)
console.log(fromMethod)

reviewAnswer4.textContent = `- Array method that used keyword "Array" to create an array from the provied values`
console.log('')




//5.
reviewQuestion5.textContent = '5. isArray()'
console.log('5. isArray()')
console.log('Checks if an object is an array')

let isArray
console.log(Array.isArray([]))

reviewAnswer5.textContent = `- Checks if an object is an array`
console.log('')




//6.
reviewQuestion6.textContent = '6. .flat()'
console.log('6. .flat()')
console.log('Array method used to merge values of multiple arrays into a single array following the index order of the array values')

let flatFunction = () => {
    let arr1 = [1, 2, 3, [4, 5, 6]];
    console.log(arr1.flat())
}
flatFunction()

reviewAnswer6.textContent = `- Array method used to merge values of multiple arrays into a single array following the index order of the array values`
console.log('')




//7.
reviewQuestion7.textContent = '7. .keys()'
console.log('7. .keys()')
console.log('Method used to return the index value of the elements in an array using the for ... of loop')

let keysFunction = () => {
    let arr = [1, 2, 3];
    let keysMethod = arr.keys()

    for(let key of keysMethod) {
        console.log(key)
    }
}
keysFunction()

reviewAnswer7.textContent = `- Method used to return the index value of the elements in an array using the for ... of loop`
console.log('')




//8.
reviewQuestion8.textContent = '8. .splice()'
console.log('8. .splice()')
console.log('Array method used to add, remove or replace array elements')

let spliceFunction = () => {
    let arr = [1, 2, 3];
    let splice = arr.splice(0, 0, 'hello');
    console.log(arr)
}
spliceFunction()

reviewAnswer8.textContent = `- Array method used to add, remove or replace array elements`
console.log('')




//9.
reviewQuestion9.textContent = '9. .copyWithin()'
console.log('9. .copyWithin()')
console.log(`Array method used to copy a new value into an array`)

let copyWithinFunction = () => {
    let array = [1, 2, 3, 4, 5];
    console.log(array.copyWithin(0, 1, 3))
}
copyWithinFunction()
reviewAnswer9.textContent = `- Array method used to copy a new value into an array`
console.log('')




//10.
reviewQuestion10.textContent = '10. .flatMap()'
console.log('10. .flatMap()')
console.log('Array method used to map the elements of an array, apply a condition to each array element and returns a new array with the pre and post vlaues placed in a single array in indexed order')

let flatMapFunction = () => {
    let array = [1, 2, 3];
    let flatMapped = array.flatMap(x => x * 2);
    console.log(flatMapped)
}
flatMapFunction()

reviewAnswer10.textContent = `- Array method used to map the elements of an array, apply a condition to each array element and returns a new array with the pre and post vlaues placed in a single array in indexed order`
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
codewarsQuestion1.textContent = '1. Will the Hero Survive - A hero is on his way to the castle to complete his mission. However, he\'s been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he\'s gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?'
console.log('1. Will the Hero Survive - A hero is on his way to the castle to complete his mission. However, he\'s been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he\'s gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?')
console.log(`
let hero = (dragons, ammo) => {
    if(ammo / 2 <= dragons) {
        console.log('survives')
    }
    else {
        console.log('fails')
    }
}
`)

codewarsAnswer1.textContent = `
let hero = (dragons, ammo) => {
    if(ammo / 2 <= dragons) {
        console.log('survives')
    }
    else {
        console.log('fails')
    }
}
`

let hero = (dragons, ammo) => {
    if(ammo / 2 >= dragons) {
        console.log('survives')
    }
    else {
        console.log('fails')
    }
}
hero(10, 4)

console.log('')




//2.
codewarsQuestion2.textContent = '2. Count by X - create a function with two arguements that will return an array of the first n multiples of x'
console.log('2. Count by X - create a function with two arguements that will return an array of the first n multiples of x')
console.log(`
let countByX = (number, bound) => {
    for(let i = 1; i * number <= bound; i++) {
        console.log(number * i)
    }
}
countByX(5, 10)
`)

codewarsAnswer2.textContent = `
let countByX = (number, bound) => {
    for(let i = 1; i * number <= bound; i++) {
        console.log(number * i)
    }
}
countByX(5, 10)
`

let countByX = (number, bound) => {
    for(let i = 1; i * number <= bound; i++) {
        console.log(number * i)
    }
}
countByX(5, 10)

console.log('')




//3.
codewarsQuestion3.textContent = '3. Do ... while loop - write a function that accepts two parameters, string and number. Use a do ... while to add astrisks to the right side of the string if the number is even, and to the left if the number is odd (meaning that the string has a total number of astrisks appended to it. When the number is odd, there will always be one more on the left than on the right)'
console.log('3. Do ... while loop - write a function that accepts two parameters, string and number. Use a do ... while to add astrisks to the right side of the string if the number is even, and to the left if the number is odd (meaning that the string has a total number of astrisks appended to it. When the number is odd, there will always be one more on the left than on the right)')
console.log(`
let doWhileLoop = (string, num) => {
    do {
        if(num % 2 === 0) {
            string = string + ' *'
        }
        else {
            string = '* ' + string
        }
        n--
    }
    while(number > 0)
    console.log(string)
}
doWhileLoop('string', 5)
`)

codewarsAnswer3.textContent = `
let doWhileLoop = (string, num) => {
    do {
        if(num % 2 === 0) {
            string = string + ' *'
        }
        else {
            string = '* ' + string
        }
        n--
    }
    while(number > 0)
    console.log(string)
}
doWhileLoop('string', 5)
`
let doWhileLoop = (string, num) => {
    do {
        if(num % 2 === 0) {
            string = string + ' *'
        }
        else {
            string = '* ' + string
        }
        num--
    }
    while(num > 0)
    console.log(string)
}
doWhileLoop('string', 5)

console.log('')





//4.
codewarsQuestion4.textContent = '4. Multiple of index - write a function that returns a new array consisting of elements which are multiples of their own index'
console.log('4. Multiple of index - write a function that returns a new array consisting of elements which are multiples of their own index')
console.log(`
let multipleOfIndex = (array) => {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % array.indexOf(array[i])) {
        
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}
multipleOfIndex([1, 2, 3, 4, 5])
`)

codewarsAnswer4.textContent = `
let multipleOfIndex = (array) => {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % array.indexOf(array[i])) {
        
            newArray.push(array[i])
        } 
    }
    console.log(newArray)
}
multipleOfIndex([1, 2, 3, 4, 5])
`
let multipleOfIndex = (array) => {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % array.indexOf(array[i])) {
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}
multipleOfIndex([1, 2, 3, 4, 5])

console.log('')





//5.
codewarsQuestion5.textContent = '5. Deal at Store - There\'s a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.'
console.log('5. Deal at Store - There\'s a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.')
console.log(`
let discount = (count, price) => {
    let discount = Math.floor(count / 3);
    let sale = count * price - discount
}
`)

codewarsAnswer5.textContent = `
let discount = (count, price) => {
    let discount = Math.floor(count / 3);
    let sale = count * price - discount
}
`
let discount = (count, price) => {
    let discount = Math.floor(count / 3);
    let sale = count - discount;
    let total = sale * price;
    console.log(total)
}
discount(6, 1)

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










