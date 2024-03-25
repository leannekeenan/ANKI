/*ANKI Review: */
console.log('ANKI Review: CSS Definition & Syntax Review')
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
reviewQuestion1.textContent = '1. Table Structure'
console.log('1. Table Structure')
console.log(`
<table>
    <thead>
        <th colspan="">
            
        </th>
    </thead>
    <tbody>
        <tr>
            <td></td>
        </tr>
    </tbody>
</table>

`)

reviewAnswer1.textContent = `
<table>
    <thead>
        <th colspan="">
            
        </th>
    </thead>
    <tbody>
        <tr>
            <td></td>
        </tr>
    </tbody>
</table>

`
console.log('')




//2.
reviewQuestion2.textContent = '2. Prefix MAtch Attribute Selector'
console.log('2. Prefix Match Attribute Selector')
console.log('for example, if an HTML class had the name "test-container", the Prefix match can find it and any other DOM element starting with "test" by using this style of context: div[class^="test"]')

reviewAnswer2.textContent = `for example, if an HTML class had the name "test-container", the Prefix match can find it and any other DOM element starting with "test" by using this style of context: div[class^="test"]`
console.log('')





//3.
reviewQuestion3.textContent = '3. text-decoration property'
console.log('3. text-decoration property')
console.log('CSS property used to add or remove decor from text like underline features')

reviewAnswer3.textContent = `CSS property used to add or remove decor from text like underline features`
console.log('')




//4.
reviewQuestion4.textContent = '4. contents'
console.log('4. contents')
console.log('CSS property used to replace a page element with a generated value')

reviewAnswer4.textContent = `CSS property used to replace a page element with a generated value`
console.log('')




//5.
reviewQuestion5.textContent = '5. contents'
console.log('5. contents')
console.log('A CSS property used to insert gennerated values into HTML elements')


reviewAnswer5.textContent = `A CSS property used to insert gennerated values into HTML elements`
console.log('')




//6.
reviewQuestion6.textContent = '6. block-flow'
console.log('6. block-flow')
console.log('')

reviewAnswer6.textContent = `- `
console.log('')




//7.
reviewQuestion7.textContent = '7. Image Sprites'
console.log('7. Image Sprites')
console.log('a technique used in web development to combine multiple images into a single image file. This single image is then used to display different parts of the images at different times through CSS background positioning')

reviewAnswer7.textContent = `a technique used in web development to combine multiple images into a single image file. This single image is then used to display different parts of the images at different times through CSS background positioning`
console.log('')




//8.
reviewQuestion8.textContent = '8. keyword "cover"'
console.log('8. keyword "cover"')
console.log('keyword used in background sizing and positioning to allow the background image to cover the size of the viewing devce screen')

reviewAnswer8.textContent = `keyword used in background sizing and positioning to allow the background image to cover the size of the viewing devce screen`
console.log('')




//9.
reviewQuestion9.textContent = '9. What technique can be used to contain float overflow content'
console.log('9. What technique can be used to contain float overflow content')
console.log('1. set overflow to hidden, 2, place object inside of a parent element and position the float element at relative to the parents size')

reviewAnswer9.textContent = `- 1. set overflow to hidden, 2, place object inside of a parent element and position the float element at relative to the parents size`
console.log('')




//10.
reviewQuestion10.textContent = '10. <q>'
console.log('10. <q>')
console.log('inline quotation in HTML')

reviewAnswer10.textContent = `- inline quotation in HTML`
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
codewarsQuestion1.textContent = '1. Youre a Square - write a function that checks if a passed value is or is not a square.  Return the square root value, or return "not square" if the value is not a square'
console.log('1. Youre a Square - write a function that checks if a passed value is or is not a square.  Return the square root value, or return "not square" if the value is not a square')
console.log('')

codewarsAnswer1.textContent = `- `

let square = (num) => {
    let sqrt = Math.sqrt(num);

    if(sqrt % 1 === 0) {
        console.log(true)
        console.log(sqrt)
        return
    }

    else {
        console.log(false)
        console.log('not square')
        return
    }
}
square(25)
square(8)
square(9)
console.log('')




//2.
codewarsQuestion2.textContent = '2. ATM - write a function that represents an ATM machine that will honor a withdrawl no less than 1 dollar and no more that $1500'
console.log('2. ATM - write a function that represents an ATM machine that will honor a withdrawl no less than 1 dollar and no more that $1500')
console.log('')

codewarsAnswer2.textContent = `- `

let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let count = 0;

    for(let i = 0; i < banknotes.length; i++) {
        count += Math.floor(withdrawl % banknotes[i])
        withdrawl /= banknotes[i]
    }
    console.log(count)

}
ATM(102)
console.log('')




//3.
codewarsQuestion3.textContent = '3. Remove Zeros - write a function that removes the zeros from the end of a value'
console.log('3. Remove Zeros - write a function that removes the zeros from the end of a value')
console.log('')

codewarsAnswer3.textContent = `- `

let removeZeros = (num) => {
    while(num % 10 === 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(100)

console.log('')





//4.
codewarsQuestion4.textContent = '4. Basic Data Types: Strings - Write a parable and fill in the blanks.'
console.log('4. Basic Data Types: Strings - Write a parable and fill in the blanks.')
console.log('')

codewarsAnswer4.textContent = `- `

let parable = (a, b, c) => {
    console.log('John\'s iron axe fell into the river. He cried sadly by the river. Then a monster came out of the water, with a golden axe in his hand. He asked John: is this golden axe yours?')

    if(a === false || a === 'no' || a === 'No') {
        console.log('John replied that it was not his axe. The monster took out a silver axe.He asked John: is this silver axe yours?')

        if(b === false || b === 'no' || b === 'No') {
            console.log('John replied that it was not his axe. The monster took out a iron axe. He asked John: is this iron axe yours?')

            if(c === true || c === 'yes' || c === 'Yes') {
                console.log('John said happily: This is my iron axe!!!')
                console.log('The monster smiled and said to John, "you are an honest boy! - I will now grant you one wish."')
            }
        }

    }
   
}
parable(false, false, true)

console.log('')





//5.
codewarsQuestion5.textContent = '5. Add Length - write a function that accepta a string and returns each word in an array with the length of the word appended to it'
console.log('5. Add Length - write a function that accepta a string and returns each word in an array with the length of the word appended to it')
console.log('')

codewarsAnswer5.textContent = `- `

let addLength = (string) => {
    string.split(' ').map(word => {
        word += word.length
        console.log(word)
    })
    
}
addLength('hello world')

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










