/*ANKI Review: */
console.log('ANKI Review: JavaScript DOM Methods')
//1.
console.log('1. element.firstChild')
console.log('Pseudo code that refers to the first child node within a DOM node that may share a type, class, or ID characteristic')
//let text = document.getElementById("myList").firstChild.innerHTML;
console.log('')

//2.
console.log('2. element.innerHTML = "New Content"')
console.log('Sets a new value for a DOM objects inner text')
let p = document.querySelector('p');
p.innerText = "hello"
console.log('')

//3.
console.log('3. element.classList.remove(("className")')
console.log('Used to remove a specified class from a DOM element')
console.log('')

//4.
console.log('4. element.setAttribute("attributeName", "value")')
console.log('adds/overwrites attributes to DOM elements')
p.setAttribute('style', 'color: red')
console.log('')

//5.
console.log('5. element.classList.remove("className")')
console.log('Used to remove a specified class from a DOM element')
console.log('')

//6.
console.log('6. window.prompt("Prompt Message")')
console.log('Allows for a user input bar to be included in an alert window prompt')
window.prompt("window prompt");


console.log('')

//7.
console.log('7. parentElement.insertBefore(newElement, referenceElement)')
console.log('Used to enter a new element within a parent container before its reference element')
let div = document.querySelector('div')
let h2 = document.createElement('h2');
h2.textContent = 'insertBeforeProperty'
div.insertBefore(h2, div.querySelector('span'))
console.log('')

//8.
console.log('8. document.createElement("tagName")')
console.log('creates a new element in the DOM without adding it through HTML')
let form = document.createElement("form")
document.body.appendChild(form)
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "username");
form.appendChild(input);

console.log('')

//9.
console.log('9. element.setAttribute("attributeName")')
console.log('used to set a attribute value to aDOM object.  If it currently has that property it is overwritten my this process')
p.setAttribute('style', 'color: red; font-size: 3rem')


console.log('')

//10.
console.log('10. parentElement.appendChild(childElement)')
console.log('Adds a child element to an existing parent element')
let newDiv = document.createElement('div')
document.body.appendChild(newDiv)
newDiv.setAttribute('style', 'border: 1px solid green; height: 1000px')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. ')
console.log('')
console.log('')

//2.
console.log('2. ')
console.log('')
console.log('')

//3.
console.log('3. ')
console.log('')
console.log('')

//4.
console.log('4. ')
console.log('')
console.log('')

//5.
console.log('5. ')
console.log('')
console.log('')
