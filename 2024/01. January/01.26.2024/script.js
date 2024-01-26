/*ANKI Review: */
console.log('ANKI Review: JavaScript String Methods')
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
reviewQuestion1.textContent = '1. .repeat()'
console.log('1. .repeat()')
console.log('String method used to print the content of a string multiple times ')
let repeatString = 'repeat string, '
let repeatStringMethod = repeatString.repeat(3)
console.log(repeatStringMethod)
reviewAnswer1.textContent = `- String method used to print the content of a string multiple times `


console.log('')




//2.
reviewQuestion2.textContent = '2. .valueOf()'
console.log('2. .valueOf()')
console.log('String method used to retirn the value of a passed string object')
let valueOfString = new String ("value of");
let valueOfStringMethod = valueOfString.valueOf();
console.log(valueOfString)
console.log(valueOfStringMethod)
reviewAnswer2.textContent = `- String method used to retirn the value of a passed string object`
console.log('')





//3.
reviewQuestion3.textContent = '3. .trim()'
console.log('3. .trim()')
console.log('String method used to remove white space from the beginning and end os a string')
let trimString = '     trim    '
let trimStringMethod = trimString.trim();
console.log(trimStringMethod)
console.log(trimString.length)
console.log(trimStringMethod.length)
reviewAnswer3.textContent = `- String method used to remove white space from the beginning and end os a string`
console.log('')




//4.
reviewQuestion4.textContent = '4. .toLocaleUpperCase()'
console.log('4. .toLocaleUpperCase()')
console.log('string method used to provide upper casing to string elements based on the provided languages parameter')
let toLocaleUpperCaseString = 'to upper case';
let toLocaleUpperCaseStringMethod = toLocaleUpperCaseString.toLocaleUpperCase('en-US')
console.log(toLocaleUpperCaseStringMethod)

reviewAnswer4.textContent = `- string method used to provide upper casing to string elements based on the provided languages parameter`
console.log('')




//5.
reviewQuestion5.textContent = '5. .padStart()'
console.log('5. .padStart()')
console.log('Adds white space padding to the beginning of a string.  the value provided must extend the length of the string you wish to add padding to and a vale must be added to enter into the place of the padding position')
let padStartString = 'pad start';
let padStartMethod = padStartString.padStart(13, '.');
console.log(padStartMethod)

reviewAnswer5.textContent = `- Adds white space padding to the beginning of a string.  the value provided must extend the length of the string you wish to add padding to and a vale must be added to enter into the place of the padding position`
console.log('')




//6.
reviewQuestion6.textContent = '6. String.prototype[@@iterator]()'
console.log('6. String.prototype[@@iterator]()')
console.log('Translates strings into iterable objects that can then be used in loop and spread syntax')
let iterableString = 'iterable string';
let iterableStringMethod = iterableString[Symbol.iterator]();
let character = iterableStringMethod.next()

while(!character.done && character.value !== "") {
    console.log(character.value)
    character = iterableStringMethod.next()
}


reviewAnswer6.textContent = `- Translates strings into iterable objects that can then be used in loop and spread syntax`
console.log('')




//7.
reviewQuestion7.textContent = '7. .localeCompare()'
console.log('7. .localeCompare()')
console.log('Compares the contents of strings against one another to verify similarities')
let stringA = 'string A'
let stringB = 'string B'
let compare = stringA.localeCompare(stringB)
console.log(compare)
reviewAnswer7.textContent = `- Compares the contents of strings against one another to verify similarities`
console.log('')




//8.
reviewQuestion8.textContent = '8. .fromCharCode()'
console.log('8. .fromCharCode()')
console.log('Accepts UTF-16 value snd returns the character value')
let UTF_character = 111;
let fromCharCodeMethod = String.fromCharCode(UTF_character)
console.log(fromCharCodeMethod)
reviewAnswer8.textContent = `- Accepts UTF-16 value snd returns the character value`
console.log('')




//9.
reviewQuestion9.textContent = '9. .raw()'
console.log('9. .raw()')
console.log('used to return the raw value of ternary expressions')

let rawString = 'raw string'
let exclaim = '!'
let rawStrinTernary = rawString + exclaim
console.log(String.raw`${(rawStrinTernary)}`)
reviewAnswer9.textContent = `- used to return the raw value of ternary expressions`
console.log('')




//10.
reviewQuestion10.textContent = '10. .slice()'
console.log('10. .slice()')
console.log(' string method used to remove characters from a string')
let sliceString = 'slice string'
let sliceMethod = sliceString.slice(0,5)
console.log(sliceMethod)
reviewAnswer10.textContent = `- string method used to remove characters from a string`
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
codewarsQuestion1.textContent = '1. multilingual hello - write a functioned named welcome that accepts a parameter "language" and returns a greeting.'
console.log('1. multilingual hello - write a functioned named welcome that accepts a parameter "language" and returns a greeting.')

let welcome = (language) => {
    let greeting = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }
    
    if(greeting.hasOwnProperty(language)) {
        console.log(greeting[language])
    }
    else {
        console.log('Welcome') //welcome.english
    }
}
welcome('spanish')
codewarsAnswer1.textContent = `let welcome = ${welcome}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Feast of many beasts - write a function that takes the first and last letter of one arguement and compare them to another.  If they match, retuen true, else retuen false'
console.log('2. Feast of many beasts - write a function that takes the first and last letter of one arguement and compare them to another.  If they match, retuen true, else retuen false')

let feast = (stringA, stringB) => {
    for(let i = 0; i < stringA.length; i++) {
        let firstLetter = stringA[0];
        let lastLetter = stringA[stringA.length - 1]
        console.log(firstLetter, lastLetter)
    }

    for(let i = 0; i < stringB.length; i++) {
        let firstLetter = stringB[0];
        let lastLetter = stringB[stringB.length - 1]
        console.log(firstLetter, lastLetter)
    }
    if(stringA.firstLetter === stringB.firstLetter && stringA.lastLetter === stringB.lastLetter) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
feast('great blue heron', 'garlic naan')
codewarsAnswer2.textContent = `- `
console.log('')




//3.
codewarsQuestion3.textContent = '3. Discount - write a function that give a 3 for 2 discount'
console.log('3. Discount - write a function that give a 3 for 2 discount')

let discount = (quantity, price) => {
    let discount = Math.floor(quantity / 3) * price;
    let total = (quantity * price) - discount;
    console.log(total)
  
}
discount(2, 1)
codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. Points per Game - write a constructor called NBA that accepts playerName, playerTeam, and pointsPerGame.  Write a function called sumPPG that accepts two NBA objects and retuens the points total sum'
console.log('4. Points per Game - write a constructor called NBA that accepts playerName, playerTeam, and pointsPerGame.  Write a function called sumPPG that accepts two NBA objects and retuens the points total sum')
function NBA (name, team, points) {
    this.name = name;
    this.team = team;
    this.points = points
}

let sumPPG = (p1, p2) => {
    console.log(p1.points + p2.points)
}
let x = new NBA('name', 'team', 100);
let y = new NBA('NAME', 'TEAM', 300)
sumPPG(x, y)
codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = '5. Remove zeros. Write a function that removes the zeros from the end of a number'
console.log('5. Remove zeros. Write a function that removes the zeros from the end of a number')

let removeZeros = (num) => {
    while(num % 10 === 0 && num !== 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(5000)

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










