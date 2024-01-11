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
reviewQuestion1.textContent = '1. document.createTextNode("text content")'
console.log('1. document.createTextNode("text content")')
console.log('A JavaScript DOM method that creates a new text node within the document that contains text content not written within the HTML')



reviewAnswer1.textContent = ' - A JavaScript DOM method that creates a new text node within the document that contains text content not written within the HTML'
let textNode = document.createTextNode('Hello World') //define the content you want in the new obj
let paragraph = document.createElement('p'); //define the type of DOM obj
paragraph.appendChild(textNode) //attach content to obj type
document.body.appendChild(paragraph) //attack obj to body of DOM

console.log('')




//2.
reviewQuestion2.textContent = '2. element.classList.remove("class name")'
console.log('2. element.classList.remove("class name")')
console.log('removes a class from a DOM node stoping any functions or CSS associated with it to no longer execute')

reviewAnswer2.textContent = ' - removes a class from a DOM node stoping any functions or CSS associated with it to no longer execute'
console.log('')





//3.
reviewQuestion3.textContent = '3. window.alert(message'
console.log('3. window.alert(message')
console.log('displays an alert message to the user')

reviewAnswer3.textContent = ' - displays an alert message to the user'

//window.alert('hello')
console.log('')




//4.
reviewQuestion4.textContent = '4. element.nextSibling'
console.log('4. element.nextSibling')
console.log('the next sibling method is used to specify a DOM element based on its relation to other objects on the page. It chooses elements that are in order immediately to the right of the defined element.')

reviewAnswer4.textContent = ' - the next sibling method is used to specify a DOM element based on its relation to other objects on the page. It chooses elements that are in order immediately to the right of the defined element.'
console.log('')




//5.
reviewQuestion5.textContent = '5. document.createElement("tag name")'
console.log('5. document.createElement("tag name")')
console.log('DOM method used to create a new element within the DOM')

let h2 = document.createElement('h2');
h2.textContent = "H2 text content";
document.body.appendChild(h2);

reviewAnswer5.textContent = ' - DOM method used to create a new element within the DOM' 

console.log('')




//6.
reviewQuestion6.textContent = '6. element.style.property = "value"'
console.log('6. element.style.property = "value"')
console.log('DOM method used to style the elements in the document.  requires an appended property type to the method and an assigned value')

h2.style.color = "red"

reviewAnswer6.textContent = ' - DOM method used to style the elements in the document.  requires an appended property type to the method and an assigned value'
console.log('')




//7.
reviewQuestion7.textContent = '7. parseElement.insertBefore(newElement, referenceElement'
console.log('7. parseElement.insertBefore(newElement, referenceElement')
console.log('A DOM method used to insert a new elelment into the DOM, using an existing elelment as a reference point for its entry')

reviewAnswer7.textContent = ' - A DOM method used to insert a new elelment into the DOM, using an existing elelment as a reference point for its entry'

let parsed = document.createElement('p');
parsed.textContent = 'question 7: parseElement.insertBefore'

let referenceElement = document.getElementById('review')
referenceElement.parentNode.insertBefore(parsed, referenceElement)

console.log('')




//8.
reviewQuestion8.textContent = '8. element.parentNode'
console.log('8. element.parentNode')
console.log('DOM method used to reference the parent element of a specified object.  If the object does not have a specified parent, null is returned')

reviewAnswer8.textContent = ' - DOM method used to reference the parent element of a specified object.  If the object does not have a specified parent, null is returned'
console.log('')




//9.
reviewQuestion9.textContent = '9. element.childNodes'
console.log('9. element.childNodes')
console.log('DOM method used to retrieve a NodeList containing the children of a specified node including notes, text, and element nodes')

reviewAnswer9.textContent = ' - DOM method used to retrieve a NodeList containing the children of a specified node including notes, text, and element nodes'
console.log('')




//10.
reviewQuestion10.textContent = '10. element,getAttribute("attributeName")'
console.log('10. element.getAttribute("attributeName")')
console.log('DOM method used to select a specific attribute asociated with a elemenet')

reviewAnswer10.textContent = ' - DOM method used to select a specific attribute asociated with a elemenet'
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
codewarsQuestion1.textContent = '1. remove zeros - write a function that removes the zeros from the end of a number'
console.log('1. remove zeros - write a function that removes the zeros from the end of a number')


let removeZeros = (number) => {
    while(number % 10 === 0 && number !== 0) {
        number /= 10
    }
    console.log(number)
}

removeZeros(100)

codewarsAnswer1.textContent = `let removeZeros = ${removeZeros}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. sum of multiples - find the sum of all multiples between a given number and a multiple arguement. return invalid if less than zero'
console.log('2. sum of multiples - find the sum of all multiples between a given number and a multiple arguement. return invalid if less than zero')

let sumOfMultiples = (number, multiple) => {
    let total = 0
    for(let i = 1; i * multiple <= number; i++) {
        total += i * multiple
    }
    console.log(total)
}

sumOfMultiples(100, 8)

codewarsAnswer2.textContent = `let sumOfMultiples = ${sumOfMultiples}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Trim a String - create a function that will trima a string if it is longer than a given length arguement.  if it is longer, append a "..." to the end. Else print the entire string'
console.log('3. Trim a String - create a function that will trima a string if it is longer than a given length arguement.  if it is longer, append a "..." to the end. Else print the entire string')

let trimString = (string, max) => {
    if(string.length >= max) {
        console.log(string.slice(0, max).concat(' ... '))
    }
    else {
        console.log(string)
    }
}
trimString('let the string be trimmed!', 10)
trimString('let the string be trimmed!', 27)

codewarsAnswer3.textContent = `let trimString = ${trimString}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Alternating Case - create a method that accepts a string ant returns it with each character case reversed.  uppercase become lower case and lower case become upper case'
console.log('4. Alternating Case - create a method that accepts a string ant returns it with each character case reversed.  uppercase become lower case and lower case become upper case')

let changeCase = (string) => {
    let result = []
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase()) {
            result.push(string[i].toLowerCase())  
        }
        else if(string[i] === string[i].toLowerCase()) {
            result.push(string[i].toUpperCase())
        }
    }
    console.log(result.join(''))
}

changeCase('hello')

codewarsAnswer4.textContent = `let changeCase = ${changeCase}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. going to the cinema. Given a discount card, see how many visits you would need to make to make the  discount card worth it'
console.log('5. going to the cinema. Given a discount card, see how many visits you would need to make to make the  discount card worth it')

let cinema = (card, ticket, percentage) => {
    let visits = 0;
    let ticketsBought = 0; //A
    let promoCard = card //B
    while(Math.ceil(ticketsBought <= Math.ceil(promoCard))) {
        ticketsBought += ticket * percentage;
        promoCard += ticket * Math.pow(percentage, visits)
        visits++
    }
    console.log(visits)
}
cinema(100, 10, .10)

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










