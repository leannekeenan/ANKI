/*ANKI Review: */
console.log('ANKI Review: JavaScript String Method Review')
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
reviewQuestion1.textContent = '1. .toWellFormed()'
console.log('1. .toWellFormed()')
console.log('string method used to translate objects like values a computer can understand into image characters like arrows and emojis.  Adding a backslash to the letter "f" =  ${toWellFormedString}')

let toWellFormedString = '\f'
console.log(toWellFormedString)

reviewAnswer1.textContent = ` - string method used to translate objects like values a computer can understand into image characters like arrows and emojis.  Adding a backslash to the letter "f" =  ${toWellFormedString}` 

console.log('')




//2.
reviewQuestion2.textContent = '2. .padStart()'
console.log('2. .padStart()')
console.log('A string method used to add padding to the beginning of a string.  It accepts two values, a length and a value to fill the padded space. The value for the length has to be greater than the length of the string you are adding padding to. Teh value of teh padding space can be any value from an empty slace to a complete statement')

reviewAnswer2.textContent = ' - A string method used to add padding to the beginning of a string.  It accepts two values, a length and a value to fill the padded space. The value for the length has to be greater than the length of the string you are adding padding to. Teh value of teh padding space can be any value from an empty slace to a complete statement'
let padStartString = "add padding"
let paddingStartMethod = padStartString.padStart(14, '.');
console.log(paddingStartMethod)
console.log('')





//3.
reviewQuestion3.textContent = '3. .repeat()'
console.log('3. .repeat()')
console.log('used to repeat a string a specified number of times')

reviewAnswer3.textContent = ' - used to repeat a string a specified number of times'
let repeatString = 'hurray! '
let repeatMethod = repeatString.repeat(3);
console.log(repeatMethod)
console.log('')




//4.
reviewQuestion4.textContent = '4. .match()'
console.log('4. .match()')
console.log('used to check a strings characters to see if they match a specified value and returns the index of said character.  If not found, null is returned')

reviewAnswer4.textContent = ' - used to check a strings characters to see if they match a specified value and returns the index of said character.  If not found, null is returned'

let matchString = 'match';
let matchMethod = matchString.match('h')
console.log(matchMethod)
console.log('')




//5.
reviewQuestion5.textContent = '5. .trimStart()'
console.log('5. .trimStart()')
console.log('String method used to remove excess space from the start of a string')


reviewAnswer5.textContent = ' - String method used to remove excess space from the start of a string'

let trimStartString = '     trimStart';
console.log(trimStartString)
let trimStartMethod = trimStartString.trimStart(5)
console.log(trimStartMethod)

console.log('')




//6.
reviewQuestion6.textContent = '6. .normalize()'
console.log('6. .normalize()')
console.log('String method used to return the unicode character image value for the computer translated value')

reviewAnswer6.textContent = ' - String method used to return the unicode character image value for the computer translated value'

let normalizeString = '\u00C4n';
let normalizeMethod = normalizeString.normalize('NFD');
console.log(normalizeMethod)
console.log('')




//7.
reviewQuestion7.textContent = '7. .fromCodePoint()'
console.log('7. .fromCodePoint()')
console.log('string method used to make a string from a sequence of UTF code points ')

reviewAnswer7.textContent = ' - string method used to make a string from a sequence of UTF code points '

let fromCodePointMethod = String.fromCodePoint(104, 101, 108, 108, 111)
console.log(fromCodePointMethod)

console.log('')




//8.
reviewQuestion8.textContent = '8. .toLocaleUpperCase()'
console.log('8. .toLocaleUpperCase()')
console.log('a strig method used to return the characters in a string in the uppercase characters of the defined locale language')

reviewAnswer8.textContent = ' - a strig method used to return the characters in a string in the uppercase characters of the defined locale language'

let toLocaleUpperCaseString = 'to locale upper case string'
let toLocaleUpperCaseMethod = toLocaleUpperCaseString.toLocaleUpperCase('en-US')
console.log(toLocaleUpperCaseMethod)

console.log('')




//9.
reviewQuestion9.textContent = '9. .raw()'
console.log('9. .raw()')
console.log('string method used to return the value of a template literal')

reviewAnswer9.textContent = ' - string method used to return the value of a template literal'

let rawString = 10 * 5
console.log(String.raw`${rawString}`)
console.log('')




//10.
reviewQuestion10.textContent = '10. .valueOf()'
console.log('10. .valueOf()')
console.log('string method used to retur the vlaue of a string')

reviewAnswer10.textContent = ' - string method used to retur the vlaue of a string'

let valueOfString = new String('hello');

console.log(valueOfString)
console.log(valueOfString.valueOf())

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
codewarsQuestion1.textContent = '1. REturn Negative - given a number, make it negative.  If it is alreadty negative return it as is.  If it is 0, return 0'
console.log('1. Return Negative - given a number, make it negative.  If it is alreadty negative return it as is.  If it is 0, return 0')

let returnNegative = (num) => {
    let negative = -Math.abs(num);
    if(num === 0) {
        console.log(0);
    }
    else if(num < 0) {
        console.log(num)
    }
    else {
        console.log(negative)
    }
}

returnNegative(10)
returnNegative(-50)
returnNegative(0)

codewarsAnswer1.textContent = `let returnNegative = ${returnNegative}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. abbreviate a two word name - write a function to convert a name into initials with a "." seperating the letters'
console.log('2. abbreviate a two word name - write a function to convert a name into initials with a "." seperating the letters')

let abbreviate = (name) => {
    let initials = []
    let names = name.split(' ')
    for(let i = 0; i < names.length; i++) {
        initials.push(names[i][0])
    }
   console.log(initials.join('.'))
}
abbreviate("Leanne Michelle Keenan")

codewarsAnswer2.textContent =`let abbreviate = ${abbreviate}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Trim a string.  Create a function that will trim a string if it is longer than a given arguement and append "..." to the end of the string.  If the string is shorter than the arguement length, return the complete statement'
console.log('3. Trim a string.  Create a function that will trim a string if it is longer than a given arguement and append "..." to the end of the string.  If the string is shorter than the arguement length, return the complete statement')

let trimString = (string, length) => {
    if(string.length > length) {
        console.log(string.slice(0, length).concat('...'))
    }
    else {
        console.log(string)
    }
}
trimString('trim the string', 5)

codewarsAnswer3.textContent = `let trimString = ${trimString}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. alternating Case - provided a string, return it with its case reversed (upper to lower and so on)'
console.log('4. alternating Case - provided a string, return it with its case reversed (upper to lower and so on)')

let changeCase = (string) => {
    let result = ''
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase()) {
            result += string[i].toLowerCase() 
        }
        else if(string[i] === string[i].toLowerCase()) {
            result += string[i].toUpperCase()
        }
    }
    console.log(result)
}
changeCase('hello WORLD')

codewarsAnswer4.textContent = `let changeCase = ${changeCase}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Did they say hello? - write a function that checks a string if it contains the word "hello" in a variety of languages'
console.log('5. Did they say hello? - write a function that checks a string if it contains the word "hello" in a variety of languages')

let sayHello = (string) => {
    let waysToSayHello = [
        english = 'hello',
        spanish = 'hola',
        french = "bonjour"

    ]

    for(let i = 0; i < waysToSayHello.length; i++) {
        if(string.includes(waysToSayHello[i])) {
            console.log('Yes! They said hello!')
            return
        }
        else {
            console.log('they said something else...')
            return
        }
    }
}
sayHello('hello')

codewarsAnswer5.textContent = ' - '
console.log('')



// codewarsQuestion6.textContent = '6.'
// codewarsAnswer6.textContent = ' - '
// codewarsQuestion7.textContent = '7.'
// codewarsAnswer7.textContent = ' - '
// codewarsQuestion8.textContent = '8.'
// codewarsAnswer8.textContent = ' - '
// codewarsQuestion9.textContent = '9.'
// codewarsAnswer9.textContent = ' - '
// codewarsQuestion10.textContent = '10.'
// codewarsAnswer10.textContent = ' - '










