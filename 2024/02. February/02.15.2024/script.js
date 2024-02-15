/*ANKI Review: */
console.log('ANKI Review: JavaScriot String Methods')
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
reviewQuestion1.textContent = '1. String.prototype[@@iterator]()'
console.log('1. String.prototype[@@iterator]()')
console.log('used to create an iterator specifically for iterating over the characters of a string. It allows you to access each character individually, either by using a for...of loop or by manually calling the next() method on the iterators')

let stringPrototype = () => {
    let hello = "hello";
    let iterator = hello[Symbol.iterator]();

    for(let i of iterator) {
        console.log(i)
    }

}
reviewAnswer1.textContent = `- used to create an iterator specifically for iterating over the characters of a string. It allows you to access each character individually, either by using a for...of loop or by manually calling the next() method on the iterator. let stringPrototype = ${stringPrototype}`
console.log('')




//2.
reviewQuestion2.textContent = '2. .match()'
console.log('2. .match()')
console.log('String method used to see if a string contains a specified character and returns its index position, content, and group')

let matchMethod = () => {

    //to find a singular element
    let string = 'string';
    let match = string.match("t");
    console.log(match)

    //tp find elements that have a realtive similarities
    let newstring = 'Hello There';
    let regex = /[A-Z]/g;
    let found = newstring.match(regex)
    console.log(found)
}
matchMethod()
reviewAnswer2.textContent = `- String method used to see if a string contains a specified character and returns its index position, content, and group. let matchMethod =  ${matchMethod}`
console.log('')





//3.
reviewQuestion3.textContent = '3. .matchAll()'
console.log('3. .matchAll()')
console.log('String method used to check if a strings elements match a set condition')

let matchAllMethod = () => {
    let string = 'string';
    let iterator = /[A-Z]/ig;
    let matchAll = [...string.matchAll(iterator)]
    console.log(matchAll[0])
    console.log(matchAll[1])
    console.log(matchAll[2])
    console.log(matchAll[3])
    console.log(matchAll[4])
    console.log(matchAll[5])
}

matchAllMethod()

reviewAnswer3.textContent = `- String method used to check if a strings elements match a set condition`
console.log('')




//4.
reviewQuestion4.textContent = '4. .padStart()'
console.log('4. .padStart()')
console.log('Adds padding to the start of a string. Ensure the value passed accounts fort the length of the string and the number of spaces for padding you would like to start the string')

let padStart = () => {
    let string = 'string';
    let padding = string.padStart(9, '.')
    console.log(padding)
}
padStart()

reviewAnswer4.textContent = `- Adds padding to the start of a string. Ensure the value passed accounts fort the length of the string and the number of spaces for padding you would like to start the string`
console.log('')




//5.
reviewQuestion5.textContent = '5. .from CharCode()'
console.log('5. .from CharCode()')
console.log('returns a numerical value from the UTF-16 list for the character passed')

let charCodeMethod = () => {
    let string = 'string';
    let charCode = string.charCodeAt(0)
    console.log(charCode)
}
charCodeMethod()

let fromCharCode = () => {
    let h = 104;
    let e = 101;
    let l = 108;
    let o = 111;

    let fromCharCodeString = String.fromCharCode(h, e, l, l, o);
    console.log(fromCharCodeString)
}
fromCharCode()
reviewAnswer5.textContent = `- returns a numerical value from the UTF-16 list for the character passed`
console.log('')




//6.
reviewQuestion6.textContent = '6. .search()'
console.log('6. .search()')
console.log('String method used to find the index of an existing character in a string returning the index value')
let searchMethod = () => {
    let string = 'hello';
    let search = string.search('e');
    console.log(search)
}
searchMethod()
reviewAnswer6.textContent = `- String method used to find the index of an existing character in a string returning the index value`
console.log('')




//7.
reviewQuestion7.textContent = '7. .raw()'
console.log('7. .raw()')
console.log('used to return the raw value of template literals')

let rawMethod = () => {
    let string = 'string raw method';
    let raw = String.raw`${string}`;
    console.log(raw)
}
rawMethod()

reviewAnswer7.textContent = `- used to return the raw value of template literals`
console.log('')




//8.
reviewQuestion8.textContent = '8. .toLowerCase()'
console.log('8. .toLowerCase()')
console.log('Translates the characters of a string to their upper case counterpart')

let toUpperCase = () => {
    let string = 'string';
    let upper = string.toUpperCase();
    console.log(upper)
}
toUpperCase()

reviewAnswer8.textContent = `- Translates the characters of a string to their upper case counterpart`
console.log('')




//9.
reviewQuestion9.textContent = '9. .fromCodePoint()'
console.log('9. .fromCodePoint()')
console.log('A Static string method used to create a string from a sequence of Unicode code points')

let fromCodePoint = () => { 
    let h = 104;
    let e = 101;
    let l = 108;
    let o = 111;
    let newString = String.fromCodePoint(104, 101, 108, 108, 111);
    console.log(newString)
}
fromCodePoint()
reviewAnswer9.textContent = `- A Static string method used to create a string from a sequence of Unicode code points`
console.log('')




//10.
reviewQuestion10.textContent = '10. .split()'
console.log('10. .split()')
console.log('String method used to return a word within a string based on its index position')
let string = 'string is written here';
let word = string.split(' ')
console.log(word[2])
reviewAnswer10.textContent = `- String method used to return a word within a string based on its index position`
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
codewarsQuestion1.textContent = '1. '
console.log('1. ')
console.log('')

codewarsAnswer1.textContent = `- `
console.log('')




//2.
codewarsQuestion2.textContent = '2. '
console.log('2. ')
console.log('')

codewarsAnswer2.textContent = `- `
console.log('')




//3.
codewarsQuestion3.textContent = '3. '
console.log('3. ')
console.log('')

codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. '
console.log('4. ')
console.log('')

codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = '5. '
console.log('5. ')
console.log('')

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










