/*ANKI Review: */
console.log('ANKI Review: JS String Methods')
console.log('')
let string = 'The quick sly fox jumped over the lazy brown dog';
console.log('String for the following exercises = ' + string)

//1.
console.log('1. .slice()')
console.log('Extracts a section of a string and returns it to a new string without altering the original string')
console.log('console.log(string) = ' + string)
console.log('console.log(string.slice(4)) = ' + string.slice(4)) //'quick sly fox jumped over the lazy brown dog
console.log('console.log(string.slice(-3)) = ' + string.slice(-3)) //'dog'
console.log('console.log(string.slice(-9, -4)) = ' + string.slice(-9, -4)); // 'brown'
console.log('console.log(string) = ' + string)

console.log('')

//2.
console.log('2. .raw()')
console.log('Prints raw content of template literals to the console without assigning it to a variable')
console.log(String.raw`Hi ${2 + 3}!`);

console.log(String.raw`${10 + (45 * 35) / (7/8)}`)
console.log('')

//3.
console.log('3. .padEnd()')
console.log('adds padding of a specified character for a specified number of times at the end of a string, but it must account for the length of the current string and add to it to provide the additional characters')
let padEnd = string.padEnd(51, '!'); 
// string = 48 characters, therefore 51 = string!!!
console.log(padEnd)
console.log('')

//4.
console.log('4. .codePointAt()')
console.log('Returns a non-negative integer value of the character starting at the given index')
let codePointAt = string.charCodeAt(0);
console.log('T = position ' + codePointAt)
console.log('')

//5.
console.log('5. .trim()')
console.log('removes whitespace at beginning and end of a string')
let trim = `                 ${string}                  `
console.log(trim);
console.log(trim.trim())
console.log('')

//6.
console.log('6. .toString()')
console.log('Converts content to a string without altering the orignal obects')
let arr = [12, true, 'fact'];
console.log(arr.toString())
console.log(arr)

console.log('')

//7.
console.log('7. .at()')
console.log('Accepts an index value and returns the string value of that position')
console.log(string.at(4)) //'q' in quick
console.log('')

//8.
console.log('8. .toWellFormed()')
console.log('A utility function that ensures special characters like emojis are in a format that a computer can understand by replacing lone surogates(special characters) with the replacement character (UniCode value)')
const username = "user\uD800";
console.log('"user\uD800" = ' + encodeURI(username.toWellFormed()));
console.log('')

//9.
console.log('9. .valueOf()')
console.log('returns the value of a new String object')
let valueOf = new String('string');
console.log(valueOf);
console.log(valueOf.valueOf())
console.log('')

//10.
console.log('10. .toLowerCase()')
console.log('sets all charactes in a string to lower case')
let toLowerCase = 'HELLO WORLD'
console.log(toLowerCase)
console.log(toLowerCase.toLowerCase())
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. Abbreviate a Two Word Name')
function abbreviate(name){
    let split = name.split(" ");
    let result = split[0][0] + "." + split[1][0];
    console.log(result);
}

abbreviate('Leanne Keenan');

console.log('')

//2.
console.log('2. is it a PALENDROME?')
function palendrome(str) {
    if(str === str.split('').reverse().join('').toLowerCase()) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
palendrome('racecar')
palendrome('Leanne')
console.log('')

//3.
console.log('3. Summation.  Write a program that sums every number from 1 to 10')
function summation(num) {
    let total = 0
    for(let i = 0; i <= num; i++) {
        total += i
    }
    console.log(total)
}

summation(3)
console.log('')

//4.
console.log('4. going to the cinema')
function cinema(card, ticket, percentage) {
    let A = 0;
    let B = card;
    let visits = 0;

    while(Math.ceil(A) <= Math.ceil(B)) {
        A += ticket * percentage
        B += ticket * Math.pow(percentage, visits)
        visits++
    }
    console.log('without the card you paid ' + A + ' dollars for ' + visits + ' visits')
    console.log('with the card you paid ' + B + ' dollars for ' + visits + ' visits')
    console.log(visits)
}
cinema(100, 10, .9)
console.log('')

//5.
console.log('5. you are a square')
function square(num) {
    let square = Math.sqrt(num)
    if(square % 1 === 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

square(9);
square(8)
console.log('')
