/*ANKI Review: */
console.log('ANKI Review: CSS')
//1.
console.log('boolean attribute')
console.log('returns a true or false value')
console.log('')

//2.
console.log('how do you change the direction of a linear gradient')
console.log('you can use degree values between 0 and 365 or use verbal keywords like "fromTopRight"')
console.log('')

//3.
console.log('define the value attribute')
console.log('specifies the value to be sent to a server when a form is submitted')
console.log('')

//4.
console.log('background-clip property')
console.log('sets background image or color to fit the specified portion of a container.  Values can include border-box, margin-box and content-box')
console.log('')

//5.
console.log('what is the margin property used for')
console.log('the margin property, in essence, moves object around on the page by adjusting the amount of space an element will sit away from the edge of its containing element')
console.log('')

//6.
console.log('How do you reverse the order of an element')
console.log('1. set the elements display value to flex.  2. set the displat-direction to either row-reverse or column-reverse based on your needs')
console.log('')

//7.
console.log('General Sibling selector')
console.log('~.  The tilde(~) operator is used to identify sibling selectors, meaning the object in closest relation to what is being called')
console.log('')

//8.
console.log('position property relative')
console.log('sets an element relative to its normal position and uses inset values for top, left, right, and bottom to adjust positioning')
console.log('')

//9.
console.log('position property static')
console.log('sets elements positions relative to their normal position in the document flow')
console.log('')

//10.
console.log('what is a font')
console.log('a file that holds the various renderings of a writing style, known as a typeface')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('convert Num to String')
function convertNumToString(num) {
    console.log(num.toString())
}
console.log(10)
convertNumToString(10)
console.log('')

//2.
console.log('Replace Letter with Alphabet index position')
function replaceLetters(str) {
    let result = []
    for(let i = 0; i < str.length; i++) {
        let position = str.charCodeAt(i) - 96;
        result.push(position)
    }
    console.log(result.join(' '))
}
replaceLetters('The sunset sets at twelve o\' clock.')
console.log('')

//3.
console.log('find smallest integer in array')
function findSmallestNum(arr) {
    console.log(Math.min(...arr))
}
findSmallestNum([3, 7, 2, 9, 6])
console.log('')

//4.
console.log('calculate BMI')
function BMI(weight, height) {
    let calculation = (weight / (height)) //height in inches (5 feet = 60 inches)
    if(calculation <= 1.85) {
        console.log('underweight')
    }
    else if(calculation <= 2.5) {
        console.log('average')
    }
    else if(calculation <= 3.0) {
        console.log('overweight')
    }
    else if(calculation > 3.0) {
        console.log('obese')
    }
}
BMI(150, 62)
console.log('')

//5.
console.log('sum of diff in arr')
function sumOfDiff(arr) {
    let sorted = arr.sort((a, b) => b - a);
    let difference = 0;
    for(let i = 0; i < sorted.length - 1; i++) {
        difference += sorted[i] - sorted[i + 1]
    }
    console.log(difference)
}
sumOfDiff([2, 5, 8])
console.log('')
