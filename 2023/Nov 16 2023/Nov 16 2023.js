/*ANKI Review: */
console.log('ANKI Review: JS String Methods')
let string = '"The Quick Sly Fox jumped over the lazy brown dog".'
console.log('string to be used for these exercises: ' + string)
//1.
console.log('1. .codePointAt()')
console.log('returns the ASCII unicode value of the index of a character within a string')
let codePointAt = string.codePointAt(19)
console.log(string)
console.log('string.codePointAt(19) = ' + codePointAt)
console.log('')

//2.
console.log('2. .toLowerCase()')
console.log('returns a string with all of the characters lower case')
console.log(string)
console.log(string.toLowerCase())
console.log('')

//3.
console.log('3. .endsWith()')
console.log('chesks string to see if it ends with a specidied charactr and returns a boolean response')
console.log(string);
console.log("console.log(string.endsWith('?')) = " + string.endsWith('?'))//false
console.log("console.log(string.endsWith('.')) = " + string.endsWith('.'))//true
console.log('')

//4.
console.log('4. .at')
console.log('returns the character within a string at the specified index position')
console.log('console.log(string.at(5)) = ' + string.at(5))

console.log('')

//5.
console.log('5. .trim()')
console.log('Used to remove exce3ss whitespace from the start and end of a string')
let trimString = '     Leanne     ';
console.log(trimString)
console.log(trimString.trim())
console.log('')

//6.
console.log('6. .slice()')
console.log('Used to crop out a specified section of a string')
console.log(string)
console.log('console.log(string.slice(19, 30)) = ' + string.slice(19, 30)) //'jumped over'
console.log('')

//7.
console.log('7. padEnd()')
console.log('Adds whitespace to the end of a string.  The value passed must account for the length of the string itself plus the additional space it desires at the end of the string')
console.log(string)
console.log("console.log(string.padEnd(54, '.')) = " + string.padEnd(54, '.'))
console.log('')

//8.
console.log('8. replaceAll()')
console.log('replaces all instances of a declared character throughout a string')
console.log(string);
console.log(string.replaceAll('o', 0));
console.log('')

//9.
console.log('9. .concat()')
console.log('Joins two string together')
let concat = ' This has been concatenated'
console.log(string);
console.log('console.log(string.concat(concat)) = ' + string.concat(concat))
console.log('')

//10.
console.log('10. .toString()')
console.log('converts passed values into a string without altering the orignal content');
let example = [10, true, 'hello'];
console.log(example.toString().replaceAll(',', ' '))
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. filter out the geese')
console.log('write a function that takes a list of strings as an arguement and rreturns a filtered list with the geese removed.')
function filterGeese(list) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    let filteredList = list.filter(birds => {
       return !geese.includes(birds) //'anything not in 'geese' but will be in the list of birds
    })
    console.log(filteredList)
}

filterGeese(["Magpie","Toulouse", "Pilgrim", "Bluebird"])

console.log('')

//2.
console.log('2. The price of mangoes')
console.log('write a function that for any given quantity and price of an object, the function will return a "3 for 2" or a "2 for 1" deal')
function deal(quantity, price) {
    let total = quantity * price;
    while(quantity > 0) {
        if(quantity % 5 === 0) {
            total -= price * 2;
            quantity -= 5;
        }
        else if(quantity % 2 === 0 || quantity % 3 === 0) {
            total -= price * 2
            quantity -= 1
        }
        else {
            break;
        }
    }
    
    console.log(total)
}

deal(10, 5)
deal(5, 5)
console.log('')

//3.
console.log('3. List filtering')
console.log('create a function that takes a list of non-negative integers and strings and returns a new list with strings filtered out')
function filterString(list) {
    let integers = []
   for(let i = 0; i < list.length; i++) {
        if(typeof list[i] === 'number') {
            integers.push(list[i])
        }
    }
    console.log(integers)
}
filterString(['h', 3, 1, 1, 0])
console.log('')

//4.
console.log('4. Reverse sequence')
console.log('create a function that accepts a number(n) and returns an array or integers from n to 0')
function reverseSequence(n) {
    // let the iterator equal the number passed into the function.  If 'n' is larger than zero, iterate down by one
    for(let i = n; i >= 0; i--) { 
        console.log(i)
    }
}
reverseSequence(10)
console.log('')

//5.
console.log('5. Max Multiples')
console.log('Given a divisor and a bound, find the largest integer, N, such that: 1. N is divisible by the divisor, 2. N is less than or equal to the bound, and 3. N is greater than 0')
function max(divisor, bound) {
    console.log(Math.floor(bound / divisor) * divisor)
}
max(9, 100)
console.log('')
