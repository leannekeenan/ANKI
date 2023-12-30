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
reviewQuestion1.textContent = '1. element.getAttribute("attributeName")'
console.log('1. element.getAttribute("attributeName")')
console.log('"element.getAttribute("attributeName")" DOM method used to retrieve objects based on the attributes of an object')

reviewAnswer1.textContent = ' - "element.getAttribute("attributeName")" DOM method used to retrieve objects value based on the attributes of an object.'
console.log('')




//2.
reviewQuestion2.textContent = '2. window.prompt("message")'
console.log('2. window.prompt("message")')
console.log('A DOM method that provides a text input box within a window allowing users to enter a response before a page is loaded')

reviewAnswer2.textContent = ' - "window.prompt("message")" is A DOM method that provides a text input box within a window allowing users to enter a response before a page is loaded'
console.log('')





//3.
reviewQuestion3.textContent = '3. window.confirm("Confirmation Message")'
console.log('3. window.confirm("Confirmation Message")')
console.log('"window.confirm("Confirmation Message")" is A DOM method that provides a response confirmation notification informing the user an action has taken place and they can confirm or cancel the action before it is executed')

reviewAnswer3.textContent = ' - "window.confirm("Confirmation Message")" is A DOM method that provides a response confirmation notification informing the user an action has taken place and they can confirm or cancel the action before it is executed'
console.log('')




//4.
reviewQuestion4.textContent = '4. element.classList.remove(("className")'
console.log('4. element.classList.remove(("className")')
console.log('"element.classList.remove(("className")" is A DOM method used to remove a class from a object')

reviewAnswer4.textContent = ' - "element.classList.remove(("className")" is A DOM method used to remove a class from a object'
console.log('')




//5.
reviewQuestion5.textContent = '5. element.addEventListener("event", function)'
console.log('5. element.addEventListener("event", function)')
console.log('"element.addEventListener("event", function)" is a DOM method that  adds a specified event listener to an object that waits for a declared event to occur before executing its function')


reviewAnswer5.textContent = ' - "element.addEventListener("event", function)" is a DOM method that  adds a specified event listener to an object that waits for a declared event to occur before executing its function'
console.log('')




//6.
reviewQuestion6.textContent = '6. element.classList.toggle("className")'
console.log('6. element.classList.toggle("className")')
console.log('"element.classList.toggle("className")" is a DOM method used to toggle - or switch between applying and removing a class from an object')

reviewAnswer6.textContent = ' - "element.classList.toggle("className")" is a DOM method used to toggle - or switch between applying and removing a class from an object'
console.log('')




//7.
reviewQuestion7.textContent = '7. element.previousSibling'
console.log('7. element.previousSibling')
console.log('"element.previousSibling" is a DOM method used to select objects that come before specified objects that share tag, id or class types')

reviewAnswer7.textContent = ' - "element.previousSibling" is a DOM method used to select objects that come before specified objects that share tag, id or class types, or reside within he same parent object'
console.log('')




//8.
reviewQuestion8.textContent = '8. element.parentNode'
console.log('8. element.parentNode')
console.log('"element.parentNode" is a DOM method used to reference the parent element of a specified element')

reviewAnswer8.textContent = ' - "element.parentNode" is a DOM method used to reference the parent element of a specified element'
console.log('')




//9.
reviewQuestion9.textContent = '9. element.removeAttribute("attributeName")'
console.log('9. element.removeAttribute("attributeName")')
console.log('element.removeAttribute("attributeName")')

reviewAnswer9.textContent = ' - element.removeAttribute("attributeName") is a DOM method used to remoce a class from an element'
console.log('element.removeAttribute("attributeName") is a DOM method used to remoce a class from an element')




//10.
reviewQuestion10.textContent = '10.'
console.log('10. ')
console.log('')

reviewAnswer10.textContent = ' - '
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
codewarsQuestion1.textContent = '1. Sum of Multiples.  Find the sum of all multiples from 0 to a specified number'
console.log('1. Sum of Multiples.  Find the sum of all multiples from 0 to a specified number')
let sumOfMultiples = (n, m) => {
    let result = 0
    for(let i = 0; m * i <= n; i++) {
        result += m * i
    }
    console.log(result)
}
sumOfMultiples(10, 2)
console.log('')

codewarsAnswer1.textContent = `let sumOfMultiples = ${sumOfMultiples}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Keep Hydrated.  Write a function that calculates how much water you should drink after a provided number of hours.  The ammoount of water that should be consumed is .5 liters per hour of activity'
console.log('2. Keep Hydrated.  Write a function that calculates how much water you should drink after a provided number of hours.  The ammoount of water that should be consumed is .5 liters per hour of activity')

let hydrate = (hours) => {
    let result = 0
    if(hours <= 1) {
        result = 1
    }
    else {
        result = Math.floor(Math.min(hours / 2))
    }
    console.log(result)
}
hydrate(1)
console.log('')

codewarsAnswer2.textContent = `let hydrate = ${hydrate}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Return Negative. return a given positive number as a negative'
console.log('3. Return Negative. return a given positive number as a negative')

let returnNegative = (num) => {
    console.log(num * -1)
}
returnNegative(10)

console.log('')

codewarsAnswer3.textContent = `let returnNEgative = ${returnNegative}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. ATM'
console.log('4. ATM')

let ATM = (withdrawl) => {
    let total = 0
    let bills = [100, 50, 20, 10, 5, 1];
    for(let i = 0; i < bills.length; i++) {
        total += Math.floor(withdrawl / bills[i])
        withdrawl %= bills[i]
    }
    console.log(total)
}
ATM(101)
console.log('')

codewarsAnswer4.textContent = `let ATM = ${ATM}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Removing Elements. remove the second element of any array but keep the first element in the 0 index'
console.log('5. Removing Elements. remove the second element of any array but keep the first element in the 0 index')

let removeSecond = (array) => {
   for(let i = 1; i < array.length; i += 2) {
    array.splice(i, 1)
   }
   console.log(array)
}
removeSecond([1, 2, 3])

console.log('')

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










