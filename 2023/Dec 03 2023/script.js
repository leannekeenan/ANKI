/*ANKI Review: */
console.log('ANKI Review: JavaScript')
//1.
console.log('1. declaration reassignment syntax')
let declarationSyntax = 10;
declarationSyntax *= 10
console.log(declarationSyntax)
console.log('')

//2.
console.log('2. ++variable')
console.log('increments by one before executing')
console.log('')

//3.
console.log('3. How to embed an expression into a template literal')
console.log('back ticks')
console.log(`I could live ${declarationSyntax} years and no one will ever respect me or appreciate me or accept me without complaint. `)
console.log('')

//4.
console.log('4. keyword "extend"')
console.log('used in OOP to provide inheritance to polymprohed objects.  Extend provides all of the proeprties of a shared object to its varying extensions allowing those properties to remaion the same, be changes, or allow the extended object to have new unrelated proerties that have no connection to the parent')
console.log('')

//5.
console.log('5. variable++')
console.log('increments by one after executing')
console.log('')

//6.
console.log('6. value comparison operator')
console.log('"=="')
console.log('')

//7.
console.log('7. eventListener')
console.log('DOM property that waits an action from the user on an DOM element to execute a defined function')
console.log('')

//8.
console.log('8. fetch syntax')
document.querySelector('span').addEventListener('click', getFetch)
function getFetch() {
    let userInput = document.querySelector('input').value
    let url = 'https://www.google.com'
    
        

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new error('new error')
        }
        return response.json()
    })
    .then(data => {

    })
    .catch(error => {
        console.log('error', error)
    })

}
console.log('')

//9.
console.log('9. arrow function syntax')
console.log('let function = () => {}')
console.log('')

//10.
console.log('10. underscore convention')
console.log('adoped as a guideline to remind developers that these variables are defined within the scope of their function and should not be modified outside of said function else you run the risk of errors occuring in unexpected places')
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
