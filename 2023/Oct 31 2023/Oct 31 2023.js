/*ANKI Review: */
console.log('ANKI Review:HTML')
//1.
console.log('How can you target an HTML element by its attribute?')
console.log('use bracket notation')
console.log('in HTML the element will be <p class="test"></p>')
console.log('in CSS the attribute will be called using brackets: p [class = "test"]')
console.log('')

//2.
console.log('<button onClick = "multiple">')
console.log('This command will allow users to click multiple options in a select dropdown menu instead of the default one')
console.log('')

//3.
console.log('type attribute')
console.log('provides HTML elements 100 points of specificity when styling in CSS, as well is a element key in JavaScript to add functionality.  type is also a attribute term used in forms to denote the type of data beiing requested from the user, including text, numbers, tel, and email')
console.log('')

//4.
console.log('viewport property scale options')
console.log('initial-scale, user-scaleable, minimum-scale ')
console.log('')

//5.
console.log('viewport meta tag')
console.log('<meta name="viewport" content="width=device-width">')
console.log('')

//6.
console.log('type selector')
console.log('the default names of HTML elements used to target content for modification in CSS or JavaScript')
console.log('')

//7.
console.log('What is a program')
console.log('A collection of instructions writtten in a language for a compter to comprehend allowing it to execute a function')
console.log('')

//8.
console.log('viewport minimum scale property')
console.log('allows the website to be viewed no larger that te set size of the doc body')
console.log('')

//9.
console.log('What is an absolute path')
console.log('a linke to a external webpage, generally ending with a .com, .net, .org, or is not an internal file of the website')
console.log('')

//10.
console.log('inline level element')
console.log('elements like spans are inline level elements meaning they remain within the flow of a document and share linespace with other inline elements')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('sum of arrays')
function sumOfArrays(arr) {
    console.log(arr.reduce((a, b) => a + b, 0))
  
}
sumOfArrays([2, 3, 4])
console.log('')

//2.
console.log('sum of diff in arr')
function sumOfDiff(arr) {
    let result = 0;
    let sortedArr = arr.sort((a, b) => b - a);
    for(let i = 0; i < sortedArr.length - 1; i++) {
        result += sortedArr[i] - sortedArr[i + 1]
    }
    console.log(result)
}
sumOfDiff([2, 6, 8, 12])
console.log('')

//3.
console.log('convert boolean values to strings')
function convertToString(boolean) {
    if(boolean === true) {
        console.log('yes')
    }
    else if(boolean === false) {
        console.log('no')
    }
}
convertToString(false)
convertToString
console.log('')

//4.
console.log('count characters in a string')
function countCharacters (str) {
    let count = {};
    for(let i = 0; i < str.length; i++) {
        let characters = str.charAt(i);
        if(count[characters]) {
            count[characters]++
        }
        else {
            count[characters] = 1
        }
    }
    console.log(count)
}
countCharacters('hello')
console.log('')

//5.
console.log('vowel count')
function vowelCount(str) {
    let count = 0;
    let vowels = str.match(/[aeiou]/ig);
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++
        }
    }
    console.log(count)
}
vowelCount('hello')
console.log('')
