/*ANKI Review: JavaScript DOM Methods*/
console.log('ANKI Review: JavaScript DOM Methods')
//1.
console.log('1. window.prompt("Prompt Message")')
console.log('a part of the browser object model that opens a prompt that accepts a directive message and a dialog box where users can type')
//window.prompt('Window Prompt Message', 'default message')
console.log('')

//2.
console.log('2. document.querySelectorAll("cssSelector")')
console.log('Selects all of the DOM objects that share a cssSelector name.  returns a NodeList of all elements in the document that match the specified CSS selector')
console.log('')

//3.
console.log('3. element.setAttribute("attributeName")')
console.log('Adds or modifies an attribute to an element that was not done in HTML or CSS')
let element = document.querySelectorAll('span');
element.forEach((element) => {
    element.setAttribute('class', 'setAttribute')
    element.setAttribute('style', 'color: red')
})
console.log('')

//4.
console.log('4. element.removeEventListener("event", function)')
console.log('Used to remove event listeners previously added using the .addEventListener() method. When an event is triggered, the defined listener function is removed')
console.log('')

//5.
console.log('5. element.classList.remove("className")')
console.log('removes one or more of the listed class name from a DOM element')
element.forEach((element) => {
    element.classList.remove('setAttribute');
})
console.log('')

//6.
console.log('6. parentElement.insertBefore(newElement, referenceElement)')
console.log('Adds a new element in the place of a reference before the data of that element is rendered.  insert a new element before a reference element in the DOM tree.')
console.log('')

//7.
console.log('7. element.lastChild()')
console.log('references the last chils element of a parent container')
console.log('')

//8.
console.log('8. element.setAttribute("attributeName", "value")')
console.log('Adds or modifies the value assigned to an object based on its name')
element.forEach((element) => {
    element.setAttribute('attribute','value')
})
console.log('')

//9.
console.log('9. parentElement.appendChild(childElement)')
console.log('adds a child element to the end of a container parent element')
console.log('')

//10.
console.log('10. document.getElementByClassName("className")')
console.log('Gets elements from DOM based on the name of the objects class')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. clock')
console.log(' write a function which returns the time since midnight in milliseconds')
let clock = (h, m, s) => {
    let hour = h * 3600000;
    let minute = m * 60000;
    let second = s * 1000;

    console.log(hour + minute + second)
}
clock(1, 1, 1)
console.log('')

//2.
console.log('2.count characters in a string')
console.log('write a function that accepts a string and returns each character and the number of times it occurs in the string')

let countStringCharacters = (string) => {
    for(let i = 0; i < string.length; i++) {
        let count = string.split(string[i]).length - 1;
        console.log(string[i] + ' : ' + count)
    }
}
countStringCharacters('hello')

console.log('')

//3.
console.log('3. ATM')
console.log('write a function that determins how many bank notes will be needed to fulfil an ATM withdrawl no less than a dollar, and no greater than 1500')

let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let count = 0;
    for(let i = 0; i < banknotes.length; i++) {
        //  Increment count by the integer part of the division of withdrawl by banknotes[i]
        count += Math.floor(withdrawl / banknotes[i]);
        //  Update withdrawl to be the remainder of the division of withdrawl by banknotes[i]
        withdrawl %= banknotes[i]
    }
    console.log(count)
}
console.log('')

//4.
console.log('4. sum of multiples')
console.log('return the sum of all multiples below a given number and a provided multiple of the number')

let sumOfMultiples = (num, multi) => {
    let total = 0
    for(let i = 1; i * multi <= num; i++) {
        total += i * multi
    }
    total > 0 ? total: 'invalid'
    console.log(total)
}
sumOfMultiples(100, 10)
console.log('')

//5.
console.log('5. Filter Out the Geese')
console.log('Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the "geese" removed.')
let filteredGeese = (list) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    console.log(list.filter((birds) => {
       return !geese.includes(birds)
    }))
}
filteredGeese(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher", 'Blackbird'])
console.log('')
