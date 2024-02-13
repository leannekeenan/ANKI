/*ANKI Review: */
console.log('ANKI Review: JavaScript Review')
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
reviewQuestion1.textContent = '1. keyword "extends"'
console.log('1. keyword "extends"')
console.log('Extends the properties of a parent class to its child node classes')

reviewAnswer1.textContent = `- Extends the properties of a parent class to its child node classes`
console.log('')




//2.
reviewQuestion2.textContent = '2. classList'
console.log('2. classList')
console.log('keyword used to reference the class of a DOM element. Can either add a class, remove a class or toggle a class from an element')

reviewAnswer2.textContent = `- keyword used to reference the class of a DOM element. Can either add a class, remove a class or toggle a class from an element`
console.log('')





//3.
reviewQuestion3.textContent = '3. variable ++'
console.log('3. variable ++')
console.log('post increment iterator - states an iterator will increase after a function is executed')

reviewAnswer3.textContent = `- post increment iterator - states an iterator will increase after a function is executed`
console.log('')




//4.
reviewQuestion4.textContent = '4. Inheritance'
console.log('4. Inheritance')
console.log('A key aspect of OOP where node elements can gain proerties from their parent elemnts and keep or change the values of said proerties or hold their own unique properties')

reviewAnswer4.textContent = `- `
console.log('')




//5.
reviewQuestion5.textContent = '5. Fetch Syntax'
// console.log('5. Fetch Syntax')
// fetch(url).then(res => {
//     if(!res.ok) {
//         throw new Error('Error')
//     }
//     else {
//        return res.json()
//     }
// }).then(data => {
//     //return data from url scrape
// }).catch(err => {
//     console.log(err)
// })


reviewAnswer5.textContent = `- `
console.log('')




//6.
reviewQuestion6.textContent = '6. Polymorphism'
console.log('6. Polymorphism')
console.log('A pillar of the OOP development deaign that allows one object to be a basis for the creation of "similar but different" elements.  As an example: dogs, cats and birds while all different, all can be polyporphed from an object called "Animals" that contains chared properties like name, eat, speak, and more')

reviewAnswer6.textContent = `- A pillar of the OOP development deaign that allows one object to be a basis for the creation of "similar but different" elements.  As an example: dogs, cats and birds while all different, all can be polyporphed from an object called "Animals" that contains chared properties like name, eat, speak, and more`
console.log('')




//7.
reviewQuestion7.textContent = '7. Spread Operator in a function call'
console.log('7. Spread Operator in a function call')

let functionCall = () => {
    let spreadFunction = (a, b, c) => {
        return a + b + c
    }
    let num = [1, 2, 3]
    let total = spreadFunction(...num)
    console.log(total)
}
functionCall()
reviewAnswer7.textContent = `${functionCall}`
console.log('')




//8.
reviewQuestion8.textContent = '8. DOM'
console.log('8. DOM')
console.log('Document Object Model - It is an interface representation of a webpage')

reviewAnswer8.textContent = `- Document Object Model - It is an interface representation of a webpage`
console.log('')




//9.
reviewQuestion9.textContent = '9. Declaration reassignment syntax'
console.log('9. Declaration reassignment syntax')
let declaration = 10;
console.log(declaration)
declaration *= 5
console.log(declaration)
console.log('')

reviewAnswer9.textContent = `- `
console.log('')




//10.
reviewQuestion10.textContent = '10. OOP'
console.log('10. OOP')
console.log('Object Oriented Programming -  a way of developing programs as module objects that can be broken down into unique pieces that if moved or edited will not affect other elemetns of the program')

reviewAnswer10.textContent = `- Object Oriented Programming -  a way of developing programs as module objects that can be broken down into unique pieces that if moved or edited will not affect other elemetns of the program`
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










