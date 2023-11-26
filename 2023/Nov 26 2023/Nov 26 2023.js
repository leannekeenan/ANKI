/*ANKI Review: JavaScript String Methods*/
console.log('ANKI Review: JavaScript String Methods')
let str = 'the quick sly fox jumped over the lazy brown dog';
let emoji = '\uD800 \uD83D\uDE04 \uD800' //uicode values
let templateLiteral = 10 * 10
console.log(`The string used for the following exercises will be "${str}".`)
console.log('')
//1.
console.log('1. .toWellFormed()')
console.log('a utility function that takes a string and returns a new string where all special characters, including emojis, are replaced with their Unicode equivalent')
console.log(emoji.toWellFormed()) //emoji values are mutated here 
console.log('')

//2.
console.log('2. .indexOf()')
console.log('returns the first index position of the passes parameter')
console.log(str.indexOf('x')) //16
console.log('')

//3.
console.log('3. .raw()')
console.log('used to get the raw string form of template literals')
console.log(String.raw`${templateLiteral}`)
console.log('')

//4.
console.log('4. .charCodeAt()')
console.log('returns the character unicode value for the parameter string object')
console.log(str.charCodeAt(str.indexOf('t')))
console.log(str.charCodeAt(0))
console.log('')

//5.
console.log('5. padEnd()')
console.log('adds whitespace to the end of a string.  The value passed must account for the length of the current string and how far past the string you want to add padding')
console.log(str.padEnd(50) + '...')
console.log('')

//6.
console.log('6. codePointAt()')
console.log('returns the unicode value of the passed string character')
console.log(str.codePointAt(10)) // 115 which is the value for 's'
console.log('')

//7.
console.log('7. valueOf()')
console.log('returns the value of a string')
console.log(str.valueOf())
console.log('')

//8.
console.log('8. .replace()')
console.log('used to replace content in a string and rturn a new string with said mutation')
console.log(str.replace('brown', 'green'))
console.log('')

//9.
console.log('9. slice')
console.log('chops out segments of an existing string and prints the value as a new string')
console.log(str.slice(4, 9)) //index 4 - 9 = 'quick'
console.log('')

//10.
console.log('10. .at()')
console.log('returns the alphabetical value of the character in a string based on the passed index position.  returns undefined if the position does not exist within the string')
console.log(str.at(25))




/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('fiter out the geese')
console.log('write a function that takes a list of strings as an arguement and returns a filtered list with names of geese removed')
let filterGeese = (list) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let filteredList = list.filter(bird => !geese.includes(bird))  
    console.log(filteredList)  
}
filterGeese(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher", "bluebird", "eagle"])
console.log('')

//2.
console.log('2. sum of multiples')
console.log('given a number and a multiple, return the total sum of the multiple values and invalid if the total is less than one')
let sumOfMultiples = (num, multi) => {
    let total = 0
    for(let i = 1; i * multi <= num; i++) {
        total += i * multi
    }
    console.log(total > 0 ? total: 'invalid')
}
sumOfMultiples(100, 10)
console.log('')

//3.
console.log('3. ATM')
console.log('write a function that determines the minimal number of banknotes that will be needed to honor a withdrawl of n dollars greater than one but less than 1500')
let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let count = 0;

    for(let i = 0; i < banknotes.length; i++) {
        count += Math.floor(withdrawl / banknotes[i])
        withdrawl %= banknotes[i]
    }
    console.log(count)
}
ATM(101)
console.log('')

//4.
console.log('4. clock')
console.log('write a function that returns time since midnight in milleseconds')
let clock = (h, m, s) => {
    let hour = 3600000 * h;
    let minute = 60000 * m;
    let second = 1000 * s;

    console.log(hour + minute + second)
}

clock(1, 1, 1)
console.log('')

//5.
console.log('5. count characters in a string')
console.log('count the occuring characters in a string')
let countCharacters = (string) => {
    let count = {};
    for(let i = 0; i < string.length; i++) {
       let character = string[i];
       if(count[character]) {
        count[character]++
       }
       else {
        count[character] = 1
       }
    }
    for(let character in count) {
        console.log(character + ' : ' + count[character])
    }
}
countCharacters('hello')
console.log('')
