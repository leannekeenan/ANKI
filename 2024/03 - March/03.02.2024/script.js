/*ANKI Review: */
console.log('ANKI Review: JavaScript DOM Method')
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
reviewQuestion1.textContent = '1. element.classList.remove("className")'
console.log('1. element.classList.remove("className")')
console.log('DOM manipulation method used to remove a previously attached class from an element removing its CSS class properties')

reviewAnswer1.textContent = `- DOM manipulation method used to remove a previously attached class from an element removing its CSS class porperties`
console.log('')




//2.
reviewQuestion2.textContent = '2. element.classList.remove("className")'
console.log('2. element.classList.remove("className")')
console.log('DOM manipulation method used to remove a previously attached class from an element removing its CSS class porperties')

reviewAnswer2.textContent = `- DOM manipulation method used to remove a previously attached class from an element removing its CSS class porperties`
console.log('')





//3.
reviewQuestion3.textContent = '3. document.createTextNode("text")'
console.log('3. document.createTextNode("text")')
console.log('used to add a node child text element to the document')
let textNode = document.createTextNode('question 3: text node example  ');
document.body.appendChild(textNode);
reviewAnswer3.textContent = `- used to add a node child text element to the document`
console.log('')




//4.
reviewQuestion4.textContent = '4. element.setAttribute(attributeProperty = "attributeValue")'
console.log('4. element.setAttribute(attributeProperty = "attributeValue")')
console.log('DOM method used to add a CSS property to a JavaScript element not previously defined within the HTML')


let setArttributeExample = document.createElement('span');
setArttributeExample.textContent = 'Question 4: set Arttribute Example  '
setArttributeExample.setAttribute('style', 'display: block; background-color: red');

document.body.appendChild(setArttributeExample);

reviewAnswer4.textContent = `- DOM method used to add a CSS property to a JavaScript element not previously defined within the HTML`
console.log('')

//5.
reviewQuestion5.textContent = '5. document.createElement("tagName")'
console.log('5. document.createElement("tagName")')
console.log('DOM method used to create a previously non-existing HTML element to the document')

let createElementExample = document.createElement('p')
createElementExample.textContent = 'Question 5: create element example';
createElementExample.setAttribute('style', 'background: blue; color: white;margin: 0' );
document.body.appendChild(createElementExample)

reviewAnswer5.textContent = `- DOM method used to create a previously non-existing HTML element to the document`
console.log('')




//6.
reviewQuestion6.textContent = '6. element.previousSibling()'
console.log('6. element.previousSibling()')
console.log('DOM method used to target a child element that preceeds tehspecified element.')

createElementExample.previousSibling.setAttribute('style', 'background-color: green')

reviewAnswer6.textContent = `- DOM method used to target a child element that preceeds tehspecified element.`
console.log('')




//7.
reviewQuestion7.textContent = '7. element.getAttribute("attributeName")'
console.log('7. element.getAttribute("attributeName")')
console.log('DOM method used to retrieve the value of an attribute')

let setArttributeExampleValue = setArttributeExample.getAttribute('style');
console.log(setArttributeExampleValue)

reviewAnswer7.textContent = `- DOM method used to retrieve the value of an attribute`
console.log('')




//8.
reviewQuestion8.textContent = '8. '
console.log('8. ')
console.log('')

reviewAnswer8.textContent = `- `
console.log('')




//9.
reviewQuestion9.textContent = '9. '
console.log('9. ')
console.log('')

reviewAnswer9.textContent = `- `
console.log('')




//10.
reviewQuestion10.textContent = '10. '
console.log('10. ')
console.log('')

reviewAnswer10.textContent = `- `
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










