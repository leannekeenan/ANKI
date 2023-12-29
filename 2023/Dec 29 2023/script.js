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


let string = 'The quick sly fox jumped over the lazy brown dog'
//0.
console.log('.match()')
console.log('used to search a string for a match against a regeular expression and returns an array of matching elements in the order they appear in the string')
console.log(string)
console.log('let match = string.match(/[dog]/g)')
let match = string.match(/[dog]/g)
console.log(match)
console.log()
//1.
reviewQuestion1.textContent = '1. .charCodeAt()'
console.log('1. .charCodeAt()')
console.log('.charCodeAt() is a string method used to return the UTF-16 numerical value of the character arguement within the string')

let charCodeAt = string.charCodeAt(25)
console.log(charCodeAt)// character 'o' = 111 so 111 is returned

reviewAnswer1.textContent = ' .charCodeAt() is a string method used to return the UTF-16 numerical value of the character arguement within the string'
console.log('')




//2.
reviewQuestion2.textContent = '2. .raw()'
console.log('2. .raw()')
console.log('A static method that is used to get the raw string form of a template literal')
console.log(String.raw`Hi\n${2 + 3}!`);
// Outputs: 'Hi\\n5!'

reviewAnswer2.textContent = 'A static method that is used to get the raw string form of a template literal'
console.log('')





//3.
reviewQuestion3.textContent = '3. .slice()'
console.log('3. .slice()')
console.log('The .slice() method is used to copy a segment of a string and copy the elements to a new array that lie within the ranges of the start elementnt and the end element')
let slice = string.slice(0, 3)
console.log(slice)
reviewAnswer3.textContent = ' - The .slice() method is used to copy a segment of a string and copy the elements to a new array that lie within the ranges of the start elementnt and the end element'
console.log('')




//4.
reviewQuestion4.textContent = '4. .repeat()'
console.log('4. .repeat()')
console.log('.repeat() method returns a new string containing a number of copies of an existing string concatenated together')
let repeat = string.repeat(2);
console.log(repeat)
reviewAnswer4.textContent = ' - .repeat() method returns a new string containing a number of copies of an existing string concatenated together'
console.log('')




//5.
reviewQuestion5.textContent = '5. .toLowerCase()'
console.log('5. .toLowerCase()')
console.log('".toLowerCase()" converts the characters in a string to all lower case')

let lowerCase = string.toLocaleLowerCase()
console.log(lowerCase)

reviewAnswer5.textContent = ' - ".toLowerCase()" converts the characters in a string to all lower case'
console.log('')




//6.
reviewQuestion6.textContent = '6..toLocalLowerCase()'
console.log('6. .toLocalLowerCase()')
console.log('."toLocalLowerCase()" is used to convert characters in a string to lower case according to the specified language case mapping')

let toLocaleLower = `EN-US: ${string.toLocaleLowerCase('en-US')}`
console.log(toLocaleLower)

reviewAnswer6.textContent = ' - ."toLocalLowerCase()" is used to convert characters in a string to lower case according to the specified language case mapping'
console.log('')




//7.
reviewQuestion7.textContent = '7. .normalize()'
console.log('7. .normalize()')
console.log('".normalize()" is a string method used to make non-UTF-16 characters readable by character')

let s = '\u00C4n';
console.log(s.normalize('NFD')); // Än


reviewAnswer7.textContent = ' - ".normalize()" is a string method used to make non-UTF-16 characters readable by character'
console.log('')




//8.
reviewQuestion8.textContent = '8. .split()'
console.log('8. .split()')
console.log('.split() is a string method used to split string into a substring of array elements that follow the provided pattern')

let split = string.split('');
console.log(split)

reviewAnswer8.textContent = ' - .split() is a string method used to split string into a substring of array elements that follow the provided pattern'
console.log('')




//9.
reviewQuestion9.textContent = '9. .padEnd()'
console.log('9. .padEnd()')
console.log('Adds padding to the end of a string equal to the provided value')
let padded = string.padEnd(50)
console.log(padded + '...')
reviewAnswer9.textContent = ' - Adds padding to the end of a string equal to the provided value'
console.log('')




//10.
reviewQuestion10.textContent = '10. .fromCharCode()'
console.log('10. .fromCharCode()')
console.log('.fromCharCode() returns a character from the provided UTF-16 value provided')
let from = String.fromCharCode(111)
console.log(from)
reviewAnswer10.textContent = ' - .fromCharCode() returns a character from the provided UTF-16 value provided'
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
codewarsQuestion1.textContent = '1. sum of multiples.  Find sum of all multiples between 0 and a given number'
console.log('1. sum of multiples.  Find sum of all multiples between 0 and a given number')

let sumOfMultiples = (n, m) => {
    let result = 0;
    for(let i = 0; m * i <= n; i++) {
        result += i * m;
    }
    if(result > 0) {
        console.log(result)
    }
}
sumOfMultiples(10, 2)

console.log('')

codewarsAnswer1.textContent = `let sumOfMultiples = ${sumOfMultiples}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Alternating Case.  Change the case of the letters, if uppercase - make lower case, for lower case, make uppercase'
console.log('2. Alternating Case.  Change the case of the letters, if uppercase - make lower case, for lower case, make uppercase')

let changeCase = (string) => {
    let newString = []
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase()) {
            newString.push(string[i].toLowerCase())
        }
        else if(string[i] === string[i].toLowerCase()) {
            newString.push(string[i].toUpperCase())
        }
    }
    console.log(newString.join(''))
}
changeCase('HelLo')

codewarsAnswer2.textContent = `let changeCase = ${changeCase}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Filter out the Geese'
console.log('3. Filter out the Geese')

let filterGeese = (list) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let filtered = list.filter((birds) => !geese.includes(birds));
    console.log(filtered)
}
filterGeese(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher", "Blackbird"])
codewarsAnswer3.textContent = `let filterGeese = ${filterGeese}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. List Filtering - create a function that takes a list of non - negative numbers and characters and filters out the strings and returns only numbers'
console.log('4. List Filtering - create a function that takes a list of non - negative numbers and characters and filters out the strings and returns only numbers')

let listFiltering = (list) => {
    let filtered = list.filter(element => typeof element === 'number');
    console.log(filtered)
}
listFiltering([1, '2', 3, '4'])

codewarsAnswer4.textContent = `let listFiltering = ${listFiltering}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Summation.  Write a function that sums all digits between 1 and a provided number'
console.log('5. Summation.  Write a function that sums all digits between 1 and a provided number')

let summation = (num) => {
    let result = 0
    for(let i = 0; i <= num; i++) {
        result += i
    }
    console.log(result)
}
summation(10)

codewarsAnswer5.textContent = `let summation = ${summation}`
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










