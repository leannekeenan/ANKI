/*ANKI Review: */
console.log('ANKI Review: JavaScript DOM Methods')
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
reviewQuestion1.textContent = '1. element.removeEventListener("event", function)'
console.log('1. element.removeEventListener("event", function)')
console.log('Used to remove an event listener function from a DOM element when a specified event takes place like a click or mouseout event')

reviewAnswer1.textContent = ' - Used to remove an event listener function from a DOM element when a specified event takes place like a click or mouseout event'
console.log('')




//2.
reviewQuestion2.textContent = '2. element.parentNode'
console.log('2. element.parentNode')
console.log('Used to access the parent node of a given DOM element allowing navigation through the documents hiearchal structure, like a family tree')

reviewAnswer2.textContent = ' - Used to access the parent node of a given DOM element allowing navigation through the documents hiearchal structure, like a family tree'
console.log('')





//3.
reviewQuestion3.textContent = '3. element.textContent'
console.log('3. element.textContent')
console.log('A DOM method used to add and get text to existing DOM elements.  The element needs to be grabbed from the DOM and assigned to a DOM element.')

reviewAnswer3.textContent = ' - A DOM method used to add and get text to existing DOM elements.  The element needs to be grabbed from the DOM and assigned to a DOM element.'
console.log('')




//4.
reviewQuestion4.textContent = '4. element.getAttribute("attributeName")'
console.log('4. element.getAttribute("attributeName")')
console.log('A method that retrieves the value of a specified DOM element from the document')

reviewAnswer4.textContent = ' - A method that retrieves the value of a specified DOM element from the document'
console.log('')




//5.
reviewQuestion5.textContent = '5. element.classList.add("className")'
console.log('5. element.classList.add("className")')
console.log('adds a defined class to an element without directly adding it in the HTML')


reviewAnswer5.textContent = ' - adds a defined class to an element without directly adding it in the HTML'
console.log('')




//6.
reviewQuestion6.textContent = '6. parentElement.insertBefore(newElement, referenceElement)'
console.log('6. parentElement.insertBefore(newElement, referenceElement)')
console.log('Adds a new element to the DOM without adding it directly to the HTML.  This method uses a reference element to navigate through the DOM and enters the new element before the reference element')

reviewAnswer6.textContent = ' - Adds a new element to the DOM without adding it directly to the HTML.  This method uses a reference element to navigate through the DOM and enters the new element before the reference element'
console.log('')




//7.
reviewQuestion7.textContent = '7. window.prompt("Prompt Message")'
console.log('7. window.prompt("Prompt Message")')
console.log('window.prompt("Prompt Message") is A method of including a input text bar in a window prompt that offers the users an opportunity to enter a response')

reviewAnswer7.textContent = ' - window.prompt("Prompt Message") is A method of including a input text bar in a window prompt that offers the users an opportunity to enter a response'
console.log('')




//8.
reviewQuestion8.textContent = '8. window.confirm("Confirmation Message")'
console.log('8. window.confirm("Confirmation Message")')
console.log('A method used to display a confirmation dialog to the user, providing the option to confirm or decline an action')

reviewAnswer8.textContent = ' - A method used to display a confirmation dialog to the user, providing the option to confirm or decline an action'
console.log('')




//9.
reviewQuestion9.textContent = '9. document.getElementsByTagName("tagName")'
console.log('9. document.getElementByTagName("tagName")')
console.log('retrieves DOM elements by tag name such as <p>, <span>, <h1>, or any other predefined tag in HTML.  This selects general objects that share the same tag without the need for specialized class or id names')

reviewAnswer9.textContent = ' - retrieves DOM elements by tag name such as <p>, <span>, <h1>, or any other predefined tag in HTML.  This selects general objects that share the same tag without the need for specialized class or id names'
console.log('')




//10.
reviewQuestion10.textContent = '10. document.createElement("tagName")'
console.log('10. document.createElement("tagName")')
console.log('creates a new element in the DOM')

reviewAnswer10.textContent = ' - creates a new element in the DOM'
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
codewarsQuestion1.textContent = '1. Feast of many Beasts. Write a function feast that takes the animal\'s name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.  the dish must start and end with the same letters as the animal\'s name'
console.log('1.  Feast of many Beasts. Write a function feast that takes the animal\'s name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.  the dish must start and end with the same letters as the animal\'s name')

let feast = (animal, dish) => {
    if(animal.charAt(0) === dish.charAt(0) && animal.charAt(animal.length - 1) === dish.charAt(dish.length - 1)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
feast('lion', 'lemon')
feast('bird', 'chip')

console.log('')

codewarsAnswer1.textContent = `let feast = ${feast}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Sum of Positive. You get an array of numbers, return the sum of all of the positives ones'
console.log('2. Sum of Positive. You get an array of numbers, return the sum of all of the positives ones')

let sumOfPositive = (array) => {
    let positives = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            positives.push(array[i])
        }
    }
    let sum = positives.reduce((a, b) => a + b, 0)
    console.log(sum)
}
sumOfPositive([1, 2, 3, -4])
codewarsAnswer2.textContent = `let sumOfPositive = ${sumOfPositive}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Alternating Case. Write a function where each lowercase letter becomes uppercase and each uppercase letter becomes lowercase'
console.log('3. Alternating Case. Write a function where each lowercase letter becomes uppercase and each uppercase letter becomes lowercase')

let alternating = (string) => {
    let newString = '';
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toLowerCase()) {
            newString += string[i].toUpperCase()
        }
        else if(string[i] === string[i].toUpperCase()) {
            newString += string[i].toLowerCase()
        }
    }
    console.log(newString)
}
alternating('HelLo1l2j4h5K')

codewarsAnswer3.textContent = `let alternating = ${alternating}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Count characters in a string'
console.log('4. Count characters in a string')

let countCharacters = (string) => {
    let count = {};
    for(let characters of string) {
        count[characters] = (count[characters] || 0) + 1
    }
    console.log(count)
}
countCharacters('hello out there world!')

codewarsAnswer4.textContent = `let countCharacters = ${countCharacters}`
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
removeZeros(100)

codewarsAnswer5.textContent = `let removeZeros = ${removeZeros}`
console.log('')



//codewarsQuestion6.textContent = '6.'
//codewarsAnswer6.textContent = ' - '
//codewarsQuestion7.textContent = '7.'
//codewarsAnswer7.textContent = ' - '
//codewarsQuestion8.textContent = '8.'
//codewarsAnswer8.textContent = ' - '
//codewarsQuestion9.textContent = '9.'
//codewarsAnswer9.textContent = ' - '
//codewarsQuestion10.textContent = '10.'
//codewarsAnswer10.textContent = ' - '










