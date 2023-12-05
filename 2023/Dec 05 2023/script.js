
console.log('ANKI Review: JavaScript String Methods')
//1.
console.log('1. String.prototype[@@iterator]()')
console.log('used to make strings iterable, enabling them to be processed in a loop or spread syntax. It returns the Unicode code points of the string as individual strings')
const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A\👉🏿";
for (const v of str) {
 console.log(v);
}
console.log('')

//2.
console.log('2. .startsWith()')
console.log('Checks a string if it begins with a certain character and returns a boolean response of true or false accordingly')
let startsWith = 'This sentence starts with "T" and ends with a ".".'
console.log(startsWith.startsWith("T"))
console.log('')

//3.
console.log('3. .charAt()')
console.log('returns the charcter at the given index position')
console.log(startsWith.charAt(10))

console.log('')

//4.
console.log('4. .includes()')
console.log('Checks a string to verify if it does or does not contain a specified case-sensitive character.  Can return a boolean or use the boolean response within a fucntion to execute an action')
console.log(startsWith.includes("T"))
console.log('')

//5.
console.log('5. .toUpperCase()')
console.log('Translates a current string character to its uppercase version')
console.log(startsWith.toUpperCase())
console.log('')

//6.
console.log('6. .lastIndexOf()')
console.log('Returns the index of teh last character that meets the set condition.  Return -1 if the value is not within the array')
console.log(startsWith.lastIndexOf('a'))
console.log('')

//7.
console.log('7. .trimEnd()')
console.log('Removes whitespace from teh end of a string')
let trimString = '         trim here           ';
console.log(trimString + '.')
console.log(trimString.trimEnd() + ".")
console.log('')

//8.
console.log('8. .localeCompare()')
console.log('Compares two strings and determines which one comes before or after the other, or is the same as the other in sort order')
let a = 'réservé';
let b = 'RESERVE';
let c = 'reserved';

console.log(a.localeCompare(b)) //returns 1 since a is one string before b
console.log(b.localeCompare(a)) //-1
console.log(c.localeCompare(a))
console.log('')

//9.
console.log('9. .search()')
console.log('Searches for a match between a regular expression and a string and will return the first index of the word that is a match')
let text = 'bear in teh big blue house';
let position = text.search(/blue/ig)
console.log(position) //16
console.log('')

//10.
console.log('10. .match()')
console.log('USed to see if characters in a string match parameters of a regex or other condition')
let regex = 'h3ll0 th3r3';
let find = regex.match(/[0-9]/ig);
console.log(find)
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. filter geese')
let filterGeese = (arr) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    console.log(arr.filter(bird => !geese.includes(bird)))
}
filterGeese(["Toulouse", "Pilgrim", "Cockatoose"])
console.log('')
console.log('')

//2.
console.log('2. Convert Number to Reversed Array of Digits')
let convert = (num) => {
    console.log(num.toString().split('').reverse().join('').split('').map(Number))
}
convert(12345)
console.log('')

//3.
console.log('3. ATM')
let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let count = 0
    do {
        for(let i = 0; i < banknotes.length; i++) {
            count += Math.floor(withdrawl / banknotes[i]);
            withdrawl %= banknotes[i]
        }
        console.log(count)
    }
    while(withdrawl > 0 && withdrawl <= 1500) 
}
ATM(101)
console.log('')

//4.
console.log('4. Going to the Cinema')
let cinema = (card, ticket, percentage) => {
    let A = 0;
    let B = card;
    let visits = 0;

    while(Math.ceil(B) >= Math.ceil(A)) {
        A += ticket * percentage
        B += ticket * Math.pow(ticket, percentage)
        visits++
    }
}
console.log('')

//5.
console.log('5. Basic Data Type: Boolean & Conditional Statements')
let parameter = 2+2
let trueOrFalse = (parameter) => {
    if(parameter = 4) {
        console.log(true)
    }
    else if(parameter !== 4 || parameter === null) {
        console.log(false)
    }
}
trueOrFalse()
console.log('')

let string = 'string';
console.log(string.slice(1, -1))


let count = (number, multiples) => {
    let arr = []
    for(let i = multiples; i <= number; i++) {
        if(i % multiples === 0) {
            arr.push(i)
        }
    }
    console.log(arr)
}
count(100, 10)