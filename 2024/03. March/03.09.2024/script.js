/*ANKI Review: */
console.log('ANKI Review: JavaScript Definitions and Syntax Review')
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
reviewQuestion1.textContent = '1. fetch syntax'
console.log('1. fetch syntax')
console.log(`
//define a HTML element that the event listener will be attached to

fetch(url).then(res => {
    if(!res.ok) {
        throw new Error('this is a new error')
    }
    else {
        return res.json()
    }
}).then(data => {
    //return the pulled data from the API here
}).catch(error => {
 console.log('Error', error.message)
})
`)

reviewAnswer1.textContent = ` 
//define a HTML element that the event listener will be attached to

fetch(url).then(res => {
    if(!res.ok) {
        return new error('this is a new error')
    }
    else {
        return res.json()
    }
})
`
console.log('')




//2.
reviewQuestion2.textContent = '2. DOM'
console.log('2. DOM')
console.log('Stands for Document Object Model.  It is a modeling of the content of a website that can be manipulated without altering code of the document file')

reviewAnswer2.textContent = `- Stands for Document Object Model.  It is a modeling of the content of a website that can be manipulated without altering code of the document file`
console.log('')





//3.
reviewQuestion3.textContent = '3. Abstraction'
console.log('3. Abstraction')
console.log('A principle of teh OOP development process that allows objects to hide and show content at its discression and needs of the user. Tihs can be done my including or excluding variables from function code blocks, allowing them to be accessed by specific segment sof the progeam rather tha the entire program')

reviewAnswer3.textContent = `- A principle of teh OOP development process that allows objects to hide and show content at its discression and needs of the user. Tihs can be done my including or excluding variables from function code blocks, allowing them to be accessed by specific segment sof the progeam rather tha the entire program`
console.log('')




//4.
reviewQuestion4.textContent = '4. addEventListener'
console.log('4. addEventListener')
console.log('A JavaScript method used to add an event to an HTML element, allowing for a functon process to affect the nature of teh HTML ele,ent ')

reviewAnswer4.textContent = `- A JavaScript method used to add an event to an HTML element, allowing for a functon process to affect the nature of the HTML element.`
console.log('')




//5.
reviewQuestion5.textContent = '5. Polymprphism'
console.log('5. Polymprphism')
console.log('A principle of OOP allowing objects with different classes to be treated as objects of the same superclass. Often achieved through inheritance using the extends keyword to create subclasses that inherit from a superclass.')


reviewAnswer5.textContent = `- A principle of OOP allowing objects with different classes to be treated as objects of the same superclass. Often achieved through inheritance using the extends keyword to create subclasses that inherit from a superclass.`
console.log('')




//6.
reviewQuestion6.textContent = '6. keyword "extends"'
console.log('6. keyword "extends"')
console.log('Keyword Used in OOP to create a subclass of a superclass, allowing the sub to gain properties from its superclass, reguardless of its class name or type')

reviewAnswer6.textContent = `- Keyword Used in OOP to create a subclass of a superclass, allowing the sub to gain properties from its superclass, reguardless of its class name or type`
console.log('')




//7.
reviewQuestion7.textContent = '7. document.body'
console.log('7. document.body')
console.log('JavaScript properry that refers to the body element of the current HTML document')

reviewAnswer7.textContent = `- JavaScript properry that refers to the body element of the current HTML document`
console.log('')




//8.
reviewQuestion8.textContent = '8. Final Expression'
console.log('8. Final Expression')
console.log('the third parameter of a "for" loop, generally the iterator parameter')

reviewAnswer8.textContent = `- the third parameter of a "for" loop, generally the iterator parameter`
console.log('')




//9.
reviewQuestion9.textContent = '9. classList'
console.log('9. classList')
console.log('JavaScript property used to add, remove, or toggle classes on and off of HTML elements')

reviewAnswer9.textContent = `- JavaScript property used to add, remove, or toggle classes on and off of HTML elements`
console.log('')




//10.
reviewQuestion10.textContent = '10. Spread Syntax in a function call'
console.log('10. Spread Syntax in a function call')
console.log(`
let spreadSyntax = (a, b, c) => {
    return a * b + c
}
let nums = [1, 2, 3];
let sum = spreadSyntax(...nums)
console.log(sum)
`)

let spreadSyntax = (a, b, c) => {
    return a * b + c
}
let nums = [1, 2, 3];
let sum = spreadSyntax(...nums)
console.log(sum)
spreadSyntax()

reviewAnswer10.textContent = `
let spreadSyntax = (a, b, c) => {
   return a * b + c 
}
let nums = [1, 2, 3];
let sum = spreadSyntax(...nums)
console.log(sum)
`
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










