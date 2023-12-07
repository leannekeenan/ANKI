/*ANKI Review: */
console.log('ANKI Review:')
//1.

console.log('1. element.getAttribute("AttributeName)')
//console.log('retrieves an element from the DOM based on the provided attribute name')
console.log('retrieves the value of a specified attribute from the element')
let rq1 = document.getElementById("rq1");
let exampleAttr = rq1.getAttribute("id"); // returns "div1"

console.log('')

//2.
console.log('2. parentElement.insertBefore(newElement, referenceElement)')
//console.log('breaks down an elemlent and searches for a reference element and enters a new element befroe its iteration')
console.log('Inserts a new element into the DOM as a child of a specified parent node before a reference node')
// Create a new element
let newElement = document.createElement("span");
newElement.textContent = "This is a new element";

// Get a reference to the parent element
let parentElement = document.getElementById("parentElement");

// Get a reference to the reference element
let referenceElement = document.getElementById("referenceElement");

// Insert the new element before the reference element
//parentElement.insertBefore(newElement, referenceElement);

console.log('')

//3.
console.log('3. elelment.textcontent')
rq1.textContent = 'Question 1: '
console.log('Used to add or get text content to a DOM element that has been defined in you JavaScript doc')
console.log('')

//4.
console.log('4. element.firstChild()')
console.log('used to single out the first elemetn of a parent node that may share a type or class with another element')
parentElement = document.getElementById("parentElement");
//let firstChildNode = parentElement.firstChild;
//let firstChildElement = parentElement.firstElementChild;

console.log('')

//5.
console.log('5. window.prompt("Prompt Message")')
console.log('Opens an alert type window with a input bar for users to enter a response')
//let prompt = window.prompt("What is your favorite animal")
if(prompt === 'cat') {
    let ra1 = document.getElementById("ra1");
    ra1.textContent = 'me too!!'
}
console.log('')

//6.
console.log('6. document.getElementById(\'elementID\'\)')
console.log('retrieved DOM element by ID name')
let rq3 = document.getElementById('rq3');
rq3.textContent = 'the document.getElementById(\'\') retrieves DOM elements by the objects ID name'
console.log('')

//7.
console.log('7. element.setAttribute("attributeName")')
console.log('Adds an attribute to a DOM node')
let element = document.getElementById("myElement");
rq1.setAttribute("style", "color: purple");

console.log('')

//8.
console.log('8. element.setAttribute("attributeName", "value")')
rq3.setAttribute("style", "color: green");
console.log('')
console.log('')

//9.
console.log('9. element.removeEventListener("event", function)')
console.log('used to remove a function to an element when a click event is activated')
console.log('')

//10.
console.log('10. document.createElement("tagName")')
console.log('creates a new DOM element')
let thisElement = document.createElement("div");
thisElement.innerHTML = "This is a new div element";
document.body.appendChild(thisElement);

console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. ATM')
let ATM = (withdrawl) => {
    let total = 0
    let banknotes = [100, 50, 20, 10, 5, 1]
    while(withdrawl > 0 && withdrawl <= 1500) {
        for(let i = 0; i < banknotes.length; i++) {
            total += Math.floor(withdrawl / banknotes[i]);
            withdrawl %= banknotes[i]
        }
    }
    
    console.log(total)
}
ATM(1501)
console.log('')

//2.
console.log('2. filter out the geese')
let filterGeese = (list) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    console.log(list.filter((bird) => !geese.includes(bird)))
}
filterGeese(["Toulouse", "Pilgrim", 'Pigegon', 'Blackbird', "African"])
console.log('')

//3.
console.log('3. count characters in a string')
let characterCount = (string) => {
    let count = {}
    for(let characters of string) {
        count[characters] = (count[characters] || 0) + 1
    }
    console.log(count)
}
characterCount('hello')
console.log('')

//4.
console.log('4. Change Case')
let changeCase = (string) => {
   let casing = string.split(' ').map(firstLetter => firstLetter.replace(firstLetter[0], firstLetter[0].toUpperCase())).join(' ')
   console.log(casing)
}
changeCase('hello')

console.log('')

//5.
console.log('5. Convert Number to Reversed Array of Digits')
let convertNumtoArr = (num) => {
    console.log(num.toString().split('').reverse().map(Number))
}
convertNumtoArr(12345)
console.log('')
