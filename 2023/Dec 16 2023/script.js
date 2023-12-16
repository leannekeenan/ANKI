/*ANKI Review: */
console.log('ANKI Review:')
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
reviewQuestion1.textContent = '1. What is a declaration'
console.log('1. What is a declaration')
console.log('A variable preceeded with keyword let, var, or const, depending on the function of the declaration.  Let cen be reassigned a value, const is a constant and can not be changed, and a var is a variable that can be changes within the scope of its function but is otherwise unable to be changed')

reviewAnswer1.textContent = ' - A variable preceeded with keyword let, var, or const, depending on the function of the declaration.  Let cen be reassigned a value, const is a constant and can not be changed, and a var is a variable that can be changes within the scope of its function but is otherwise unable to be changed'
console.log('')




//2. 
reviewQuestion2.textContent = '2. variable++'
console.log('2. variable++')
console.log('post-increment.  increments after the current value')

reviewAnswer2.textContent = ' - post-increment.  increments after the current value'
i = 0;
console.log(i++) //0
console.log(i) //1
console.log('')





//3.
reviewQuestion3.textContent = '3. Document'
console.log('3. Document')
console.log('Document is a keyword in JavaScript used to access the DOM and the elements it contains.  It is')

reviewAnswer3.textContent = ' - Document is a keyword in JavaScript used to access the DOM and the elements it contains.  It is'
console.log('')




/*//4.
reviewQuestion4.textContent = '4. fetch syntax'
console.log('4. fetch syntax')
console.log('')
document.querySelector('h1').addEventListener('click', 'getFetch')

function getFetch() {
    let input = document.querySelector('span').value
    let url = 'https://google.com'

    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('error')
        }
        else {
            return res.json()
        }
    })
    .then(data => {
        //enter values to be returned from the webpage sited.  Use postman to find object names
    })
    .catch( error => {
        console.log('There has been an error. Please advise', error)
    })
}

reviewAnswer4.textContent = ' - '
console.log('')

*/


//5.
reviewQuestion5.textContent = '5. Extend keyword'
console.log('5. Extend keyword')
console.log('Used in context of OOP, extend is used to create a child object that inherits properties from its parent.  These attributes can keep or change the property value, allowing the chile element to be related but not necessarially the same as its parent')


reviewAnswer5.textContent = ' - Used in context of OOP, extend is used to create a child object that inherits properties from its parent.  These attributes can keep or change the property value, allowing the chile element to be related but not necessarially the same as its parent'
console.log('')




//6.
reviewQuestion6.textContent = '6. Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question'
console.log('6. Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question')
console.log('')
let declaration = 'is this a question?'
if(declaration.endsWith('?')) {
    console.log(true)
}

reviewAnswer6.textContent = " - let declaration = 'is this a question?'. if(declaration.endsWith('?')) {alert(true)}"
console.log('')




//7.
reviewQuestion7.textContent = '7. var declaration'
console.log('7. var declaration')
console.log('')

reviewAnswer7.textContent = ' - Objects that can be modified within their function scope, but otherwise can not be changed or accessed.'
console.log('Objects that can be modified within their function scope, but otherwise can not be changed or accessed.')




//8.
reviewQuestion8.textContent = '8. rock paper scissors - bot edition'
console.log('8. rock paper scissors - bot edition')
console.log('')
let rps = () => {
    let choice = Math.random();
    if(choice < .33) {
        console.log('rock')
    }
    else if(choice < .66) {
        console.log('paper')
    }
    else {
        console.log('scissor')
    }
}

rps()
reviewAnswer8.textContent = ' - '
console.log('')




//9.
reviewQuestion9.textContent = '9. Underscore convention'
console.log('9. Underscore convention')
console.log('Not a rule, but a guideline used by developers to identify scoped variables that should not be modified outside of their scope else error in other areas of a program solution may develop errors')

reviewAnswer9.textContent = ' - Not a rule, but a guideline used by developers to identify scoped variables that should not be modified outside of their scope else error in other areas of a program solution may develop errors'
console.log('')




//10.
reviewQuestion10.textContent = '10. Define the while loop'
console.log('10. Define the while loop')
console.log('The while loop creates an iterative response that produces a result until a specified condition is met.  For example setting a value to 0 and an iterator to 1, you can use a while loop to add the iterator to the value, but set a condition that the value can go no higher than 10, and the returned total of te value will be 10 instead of the starting 0')

reviewAnswer10.textContent = ' - The while loop creates an iterative response that produces a result until a specified condition is met.  For example setting a value to 0 and an iterator to 1, you can use a while loop to add the iterator to the value, but set a condition that the value can go no higher than 10, and the returned total of te value will be 10 instead of the starting 0'
let value = 0;
let iterator = 1;
let array = []
while(value < 10) {
   array.push(value += iterator)
}
console.log(array)
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
codewarsQuestion1.textContent = '1. Convert Number to Reversed Array of Digits'
console.log('1. Convert Number to Reversed Array of Digits')
let numToArray = (num) => {
    console.log(num.toString().split('').reverse().map(Number))//turns numbers into strings to use split and reverse methods, then uses map method to return results as numerical values
}
numToArray(12345) //[5, 4, 3, 2, 1]

codewarsAnswer1.textContent = numToArray
console.log('')




//2.
codewarsQuestion2.textContent = '2. Index of an Element in an Array. Create a function which accepts two parameters (array & element) and returns the index of the element if found and "not found" otherwise.'
console.log('2. Index of an Element in an Array. Create a function which accepts two parameters (array & element) and returns the index of the element if found and "not found" otherwise.')
let indexOfElement = (index, element) => {
    let elementIndex = index.indexOf(element);
    console.log(`element being searched for : ${element}. element index position in the array : ${elementIndex}`)
}
indexOfElement([1, 2, 3, 4, 5], 3)

codewarsAnswer2.textContent = indexOfElement
console.log('')




//3.
codewarsQuestion3.textContent = '3. Trim a String. Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "...". If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.  If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.'

console.log('3. Trim a String. Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "...". If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.  If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.')
let trimString = (string, length) => {
   if(string.length > length) {
    console.log(string.slice(0, length).concat('...'))
   }
   else {
    console.log(string)
   }
}
trimString('I wonder if this is going to work.', 9)
codewarsAnswer3.textContent = trimString
console.log('')





//4.
codewarsQuestion4.textContent = '4.  count all the occurring characters in a string'
console.log('4.  count all the occurring characters in a string')
let countCharacters = (string) => {
    let count = {};
    for(let characters of string) {
        count[characters] = (count[characters] || 0) + 1
    }
    console.log(count)
}
countCharacters('hello')

codewarsAnswer4.textContent = countCharacters
console.log('')





//5.
codewarsQuestion5.textContent = '5. Is it a palemdrome'
console.log('5. Is it a palemdrome')
let palendrome = (string) => {
    if(string.toLowerCase() === string.split('').reverse().join('')) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
palendrome('racecar')
palendrome('Racecar')

codewarsAnswer5.textContent = palendrome
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










