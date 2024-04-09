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
reviewQuestion1.textContent = '1. element.textContent()'
console.log('1. element.textContent()')
console.log('DOM method used to add text content to an existing DOM element')

reviewAnswer1.textContent = `- DOM method used to add text content to an existing DOM element`

let textContentElement = document.createElement('p');
textContentElement.textContent = 'hello';
document.body.appendChild(textContentElement);


console.log('')




//2.
reviewQuestion2.textContent = '2. element.previousSibling()'
console.log('2. element.previousSibling()')
console.log('DOM element used to place an element before the previous element, making them siblingd of the same parent')

reviewAnswer2.textContent = `- DOM element used to place an element before the previous element, making them siblingd of the same parent`

let sibling1 = document.createElement('p');
let sibling2 = document.createElement('p');
let sibling3 = document.createElement('p');
let newSibling = document.createElement('p')

sibling1.textContent = 'sibling 1';
sibling2.textContent = 'sibling 2';
sibling3.textContent = 'sibling 3';
newSibling.textContent = 'new sibling'

document.body.appendChild(sibling1)
document.body.appendChild(sibling2)
document.body.appendChild(sibling3)
document.body.appendChild(newSibling)
document.body.appendChild(newSibling.previousElementSibling)



console.log('')





//3.
reviewQuestion3.textContent = '3. parentElement.insertBefore(newElement, referenceElement)'
console.log('3. parentElement.insertBefore(newElement, referenceElement')
console.log('DOM method allows for new elements to be added to the DOM befire a provided reference element')

reviewAnswer3.textContent = `- DOM method allows for new elements to be added to the DOM befire a provided reference element`


let insertBeforeElement = document.createElement('p');
insertBeforeElement.textContent = 'insertBefore Element'
document.body.insertBefore(insertBeforeElement, sibling1)

console.log('')




//4.
reviewQuestion4.textContent = '4. window.prompt("message")'
console.log('4. window.prompt("message")')
console.log('Provides a box message for users to respond to.  Once a response is entered, the box is removed and the response can have an added functionality if desired')

reviewAnswer4.textContent = `- Provides a box message for users to respond to.  Once a response is entered, the box is removed and the response can have an added functionality if desired`
//window.prompt('hello')
console.log('')




//5.
reviewQuestion5.textContent = '5. element.firstChild()'
console.log('5. element.firstChild()')
console.log('DOM method used to access the first child of the specified parent child')


reviewAnswer5.textContent = `- DOM method used to access the first child of the specified parent child`



console.log('')




//6.
reviewQuestion6.textContent = '6. document.createElement("objectName")'
console.log('6. document.createElement("objectName")')
console.log('Creates a new DOM elemnt from the HTML tag type')

reviewAnswer6.textContent = `- Creates a new DOM element from the HTML tag type`
console.log('')




//7.
reviewQuestion7.textContent = '7. element.setAttribute("attributeName", "value")'
console.log('7. element.setAttribute("attributeName", "value")')
console.log('Sets a value for an attribute to be added to an element, like color, size and other CSS styling options')

reviewAnswer7.textContent = `- Sets a value for an attribute to be added to an element, like color, size and other CSS styling options`

insertBeforeElement.setAttribute("p", 'hello again!')

console.log('')




//8.
reviewQuestion8.textContent = '8. element.childNodes'
console.log('8. element.childNodes')
console.log('DOM method used to select specified child nodes of a parent returns a ndoeList of element')

reviewAnswer8.textContent = `- DOM method used to select specified child nodes of a parent returns a ndoeList of element`
console.log('')




//9.
reviewQuestion9.textContent = '9. element.parentNodes'
console.log('9. element.parentNodes')
console.log('DOM method used to select a specified parent element in the DOM')

reviewAnswer9.textContent = `- DOM method used to select a specified parent element in the DOM`
console.log('')




//10.
reviewQuestion10.textContent = '10. element.nextSibling'
console.log('10. element.nextSibling')
console.log('DOM method used to select the next sibling to the specified element declared.  if no element exists, null is returned')

reviewAnswer10.textContent = `- DOM method used to select the next sibling to the specified element declared.  if no element exists, null is returned`
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
codewarsQuestion1.textContent = '1. Trim a String - create a function thast will trim a string if it is longer than the rewuested max length, and end the string with "..."'
console.log('1. Trim a String - create a function thast will trim a string if it is longer than the rewuested max length, and end the string with "..."')

console.log('')

codewarsAnswer1.textContent = `- `

let trimString = (string, length) => {
    console.log(string.trim().slice(0, length) + ' ...')
}
trimString('hello world', 5)

console.log('')




//2.
codewarsQuestion2.textContent = '2. Remove String Spaces - write a function that removes the spaces from a string'
console.log('2. Remove String Spaces - write a function that removes the spaces from a string')
console.log('')

codewarsAnswer2.textContent = `- `

let removeSpace = (string) => {
    console.log(string.replaceAll(' ', ''))
}

removeSpace('h e l l o w o r l d')

console.log('')




//3.
codewarsQuestion3.textContent = '3. Feast of Many Beasts - write a function thact checks a name against an object.  if the name and object ahve the same first and last letter, return true, else return false'
console.log('3. Feast of Many Beasts - write a function thact checks a name against an object.  if the name and object ahve the same first and last letter, return true, else return false')
console.log('')

codewarsAnswer3.textContent = `- `

let feast = (animal, dish) => {
    if(animal[0] === dish[0] && 
        animal[animal.length - 1] === dish[dish.length - 1]) {
        console.log(true)
    } 
    else {
        console.log(false)
    } 
}

feast('blue', 'blue')

console.log('')





//4.
codewarsQuestion4.textContent = '4. Remove First and Last Character - create a functon that removes the first and last character of a string'
console.log('4. Remove First and Last Character - create a functon that removes the first and last character of a string')
console.log('')

codewarsAnswer4.textContent = `- `

let removeFirstAndLast = (string) => {
    console.log(string.slice(1, -1))
}
removeFirstAndLast('hello')

console.log('')





//5.
codewarsQuestion5.textContent = '5. Rock Paper Scissors - write a RPS game and return a winner'
console.log('5. Rock Paper Scissors - write a RPS game and return a winner')
console.log('')

codewarsAnswer5.textContent = `- `

let game = () => {
    let bot = Math.random();
    if(bot <= .33) {
        bot = 'rock'
    }
    else if(bot <= .66) {
        bot = 'paper'
    }
    else if(bot > .66) {
        bot = 'scissors'
    }

    

     let player = Math.random();
     if(player <= .33) {
         player = 'rock'
     }
     else if(player <= .66) {
         player = 'paper'
     }
     else {
         player = 'scissors'
     }

     console.log(`bot: ${bot}`);
     console.log(`player: ${player}`)

     if(player === bot) {
        console.log('tie')
     }
     else if(bot === 'rock' && player === 'paper' ||
     bot === 'paper' && player === 'scissors' ||
     bot === 'scissors' && player === 'rock') {
        console.log(`player wins`)
     }
     else if (player === 'rock' && bot === 'paper' ||
     player === 'paper' && bot === 'scissors' ||
     player === 'scissors' && bot === 'rock') {
        console.log(`bot wins`)
     }
}
game()

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










