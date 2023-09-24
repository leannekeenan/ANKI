/*JS Array Methods*/

console.log('***09.24.2023***')
console.log('')
console.log('ANKI REVIEW: JS Array Methods')
console.log('.keys()')
//.keys() - returns the index of each element in an array
let a = [1, 2, 3];

let iterator = a.keys(); 


for(let key of iterator) {
    console.log((key)) 
}

console.log('.flat()')
//.flat() - in a situation with nested arrays, the .flat() method can concatenate content of the nested arrays into each other. 

let b = [1, 2, 3, [4, 5], [6, 7, 8], [9, 0]];
console.log(b.flat())
b = [1, 2, 3, [4, 5, [6, 7, 8, [9, 0]]]]; //) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(b.flat()) //) [1, 2, 3, 4, 5, [6, 7, 8, [9, 0]]]

console.log('.find()')
//.find() - returns first element in an array that meets provided condition

let c = [10, 25, 41, 30];
console.log(c.find(n => n % 2 === 0))


console.log('.toSpliced()')
// .toSpliced() - similar to the .splice() method, this allows arrays to add, remove, or replace elements in an array without altering the orignal array

let d = [1, 2, 3];
console.log(d.toSpliced(1, 0, 4)) //not removing anything but adds '4' in position 1
console.log(d.toSpliced(1, 1, 5)) //starts in position 1 (2), removes 1 element and replaces it with '5'
console.log(d.toSpliced(2, 1, 4)) //starts in position 2 (3), removes 1 element and replaces it with '4'
console.log(d.toSpliced(0, 3, 4)) //starts in position 0 (1), removes 3 items(1, 2, 3) and replaces them with '4'

console.log(d) //orignal array
console.log('.at()')
// .at() - returns the element in the parameter position.  If the position is non-existant and no value exists, undefined is returned

let e = [1, 2, 3];
console.log(e.at(2))

console.log('.indexOf()')
// .indexOf() - returns the first index position of an array element that matches the condition

let f = [1, 2, 3, 2];
console.log(f.indexOf(2))

console.log('.findLast()')
//.findLast() - iterates through arrays in reverse to return the first element to meet the provided condition

let g = [1, 20, 3];
console.log(g.findLast((n) => n % 2 === 0))


console.log('.toReversed()')
// .toReversed() - will reverse elements of an array without altering the orignal order

let h = [1, 2, 3] ;
console.log(h.toReversed())

// .fill() - silimar tosplice, the fill method accepts thre values: the fill element, the start position, and the end position.  The fill method fills the selected position range with the provided fill element
console.log('.fill()')
let i = [1, 2, 3];
console.log(i.fill(10, 0, 0)) //[1, 2, 3]
console.log(i.fill(10, 0, 1)) //[10, 2, 3]
console.log(i.fill(10, 1, 2)) //[10, 10, 3]
console.log(i.fill(10, 0, 3)) //[10, 10, 10]

console.log('.some()')
//.some() - examines array elements and returnd boolean value to correspond with passed condition

let j = [1, 2, 3] ;
console.log(j.some(n => n % 5 === 0))






console.log('CODEWARS CHALLENGES')



console.log('1. Filter Out the Geese')
function filterOutTheGeese(arr) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    let result = arr.filter(bird => {
        return !geese.includes(bird)
    })
    console.log(result)
}

filterOutTheGeese(["African", "blue", 'eagle'])





console.log('2. Is it a Boy or a Girl?')
function gender(chromosomeA, chromosomeB) {
    if(chromosomeA.includes('Y') || chromosomeB.includes('Y')) {
        console.log('BOY')
    }
    if (chromosomeA.includes('X') || chromosomeB.includes('X')) {
        console.log('GIRL')
    }

    if(chromosomeA.includes('Y') && chromosomeB.includes('X') ||chromosomeA.includes('X') && chromosomeB.includes('Y')) {
        console.log('androgenous')
    }
}
gender('Y', 'Y')



console.log('3. Count Lower Case Letters')
function countLowerCaseLetters(string) {
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toLowerCase()) {
            count++
        }
        if(string[i] === ' ') {
            count--
        }
    }
    console.log(count)
}
countLowerCaseLetters('Leanne Keenan')

console.log('4. The Coupon Code')

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if(currentDate >= expirationDate && enteredCode === correctCode) {
        console.log('Coupon acceped')
    }
    else {
        console.log('Coupon rejected')
    }
}

checkCoupon('code10', 'code10', '9/21/2023', '9/21/2023')
checkCoupon('code10', 'code10', '9/21/2023', '9/01/2023')
checkCoupon('code10', 'code15', '9/21/2023', '9/21/2023')
checkCoupon('code10', 'code10', '9/21/2023', '9/23/2023')

console.log('5. Disemvowel Trolls')
function disemvowel(str) {
    console.log(str.replace(/[aeiou]/ig, ''))
}

disemvowel("Hello, my name is Leanne and I love to code")


















