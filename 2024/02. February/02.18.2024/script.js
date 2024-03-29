/*ANKI Review: */
console.log('ANKI Review: JavaScript DOM Manipulation Method Review')
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
reviewQuestion1.textContent = '1. element.setAttribute("attributeName", "value")'
console.log('1. element.setAttribute("attributeName", "value")')
console.log('DOM method used to add an attribute to an element in JavaScript. Used to change the value of an exissting attribute or adds a new attribute to an existing element')
let space = document.querySelector('.space')
space.setAttribute('style', 'background-color: purple')
reviewAnswer1.textContent = `- DOM method used to add an attribute to an element in JavaScript. Used to change the value of an exissting attribute or adds a new attribute to an existing element`
console.log('')




//2.
reviewQuestion2.textContent = '2. element.style.property = "value"'
console.log('2. element.style.property = "value"')
console.log('JS DOM method that allows developers to alter a DOM elements CSS properties relating to its styling.  It is a best practice to keep styling and functionality seperate, but this can be used when styling is a functionality of a DOM element.')
let body = document.querySelector('body');
body.style.background = "black"
body.style.color = "white"
reviewAnswer2.textContent = `- JS DOM method that allows developers to alter a DOM elements CSS properties relating to its styling.  It is a best practice to keep styling and functionality seperate, but this can be used when styling is a functionality of a DOM element.`
console.log('')





//3.
reviewQuestion3.textContent = '3. element.style.property = "value"'
console.log('3. element.style.property = "value"')
console.log(' DOM method that allows developers to alter a DOM elements CSS properties relating to its styling.  It is a best practice to keep styling and functionality seperate, but this can be used when styling is a functionality of a DOM element.')

reviewAnswer3.textContent = `-  DOM method that allows developers to alter a DOM elements CSS properties relating to its styling.  It is a best practice to keep styling and functionality seperate, but this can be used when styling is a functionality of a DOM element.`
console.log('')




//4.
reviewQuestion4.textContent = '4. document.createElement("tagName")'
console.log('4. document.createElement("tagName")')
console.log('JS DOM element used to add a new element to the DOM without directly adding it through HTML.  While seperating content and functionality is a recommmended practice, this is a functionlity to be used when providing information is a functionality of the DOM element')
let p = document.createElement('p')
p.textContent = 'hello, this is element has been added using the ".createElement" method and added to the DOM using the .appendChild method'

reviewAnswer4.textContent = `- JS DOM element used to add a new element to the DOM without directly adding it through HTML.  While seperating content and functionality is a recommmended practice, this is a functionlity to be used when providing information is a functionality of the DOM element. `
reviewAnswer4.appendChild(p)
console.log('')




//5.
reviewQuestion5.textContent = '5. element.childNodes'
console.log('5. element.childNodes')
console.log('DOM method used to target the child nodes of a specified object')

const review = document.querySelector('.title');

// Iterate over each child node of the title element
review.childNodes.forEach(node => {

    console.log(node)

        
    
});

reviewAnswer5.textContent = `- DOM method used to target the child nodes of a specified object`
console.log('')




//6.
reviewQuestion6.textContent = '6. parentElement.insertBefore(newElement, referenceElement)'
console.log('6. parentElement.insertBefore(newElement, referenceElement)')
console.log('DOM method used to insert new element before existing ones created in HTML.  The existing parent element may contain other ereference elements to insert the element before,')

let newElement = document.createElement('p');
newElement.textContent = 'parentElement.insertBefore Example';
let reviewObj = document.querySelector('.review')
let reference = document.getElementById('rq7')
reviewObj.insertBefore(newElement, reference)

reviewAnswer6.textContent = `- DOM method used to insert new element before existing ones created in HTML.  The existing parent element may contain other ereference elements to insert the element before,`
console.log('')




//7.
reviewQuestion7.textContent = '7. element.innerHTML'
console.log('7. element.innerHTML')
console.log('DOM method that changes teh content of HTML objects')

reviewAnswer7.textContent = `- DOM method that changes teh content of HTML objects`
reviewQuestion7.innerHTML = reviewQuestion7.textContent
console.log('')




//8.
reviewQuestion8.textContent = '8. element.classList.add("className")'
console.log('8. element.classList.add("className')
console.log('adds a class to a element')
reviewAnswer8.classList.add('example')
reviewAnswer8.textContent = `- adds a class to a element`
console.log('')




//9.
reviewQuestion9.textContent = '9. element.previousSibling'
console.log('9. element.previousSibling')
console.log('DOM method used to target the previous sibling of a specified element')

let previousSibling = reviewQuestion10.previousSibling;

if(previousSibling) {
console.log(reviewAnswer9.textContent)
}
else {
console.log('no previous sibling')
}


reviewAnswer9.textContent = `- DOM method used to target the previous sibling of a specified element. `
console.log('')




//10.
reviewQuestion10.textContent = '10. document.createTextNode("text content")'
console.log('10. document.createTextNode("text content")')
console.log('Adds a new node element containing text in the document, which is used as a parent element.')

let textNode = document.createTextNode('     ---> hello')
reviewQuestion10.appendChild(textNode)

reviewAnswer10.textContent = `- Adds a new node element containing text in the document, which is used as a parent element.`
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










