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
reviewQuestion1.textContent = '1. variable++'
console.log('1. variable++')
console.log('The "i++" representation in JavaScript illustrates a variable will display its iterative value before increasing its value by one and iterating again until a set condition is met')

reviewAnswer1.textContent = ' - The "i++" representation in JavaScript illustrates a variable will display its iterative value before increasing its value by one and iterating again until a set condition is met'
console.log('')




//2.
reviewQuestion2.textContent = '2. Abstraction'
console.log('2. Abstraction')
console.log('A Practice used within OOP development allowing object content to be hidden or displayed based on user need.  This allows for a higher level security for data')

reviewAnswer2.textContent = ' - A Practice used within OOP development allowing object content to be hidden or displayed based on user need.  This allows for a higher level security for data'
console.log('')





//3.
reviewQuestion3.textContent = '3. Create a rock paper scissors function that determines a winner'
console.log('3. Create a rock paper scissors function that determines a winner')



let rockPaperScissor = (userChoice) => {
    let botsMove = () => {
        let randomizer = Math.random();
        if(randomizer <= .33) {
            return 'rock'
        }
        else if(randomizer <= .66) {
            return 'paper'
        }
        else {
            return 'scissor'
        }
    }

    let botChoice = botsMove();
    if(botChoice === userChoice) {
        return `bot Choice = ${botChoice} | user Choice = ${userChoice} : Game Tie`
    }
    else if(botChoice === 'paper' && userChoice === 'scissor' || botChoice === 'scissor' && userChoice === 'rock' || botChoice === 'rock' && userChoice === 'paper') {
        return `bot Choice = ${botChoice} | user Choice = ${userChoice} : user wins`
    }
    else {
        return `bot Choice = ${botChoice} | user Choice = ${userChoice} : bot wins`
    }
}
console.log(rockPaperScissor('rock'))

reviewAnswer3.textContent = `let rockPaperScissor = ${rockPaperScissor}`
console.log('')




//4.
reviewQuestion4.textContent = '4. Final Expression'
console.log('4. Final Expression')
console.log('The section of a a loop that defines the expected iteration')

reviewAnswer4.textContent = ' - The section of a a loop that defines the expected iteration'
console.log('')




//5.
reviewQuestion5.textContent = '5. Syntax for spread operator in function calls'
console.log('5. Syntax for spread operator in function calls')

let showHowToUseSpreadOpInFunctionCall = () => {
    let spreadOpInFunction = (a, b, c) => {
        return a + b + c;
    }
    let num = [1, 2, 3]
    console.log(spreadOpInFunction(...num))
}
showHowToUseSpreadOpInFunctionCall()


reviewAnswer5.textContent = `let spreadOpInFunction = ${showHowToUseSpreadOpInFunctionCall}`
console.log('')




//6.
reviewQuestion6.textContent = '6. Fetch Syntax'
console.log('6. Fetch Syntax')
let url = ""
fetch(url).then(res => {
    if(!res.ok) {
        throw new Error("error")
    }
    return res.json()
}).then(data => {

}).catch(error => {
    console.log(error, 'error')
})

reviewAnswer6.textContent = `${fetch}`
console.log('')




//7.
reviewQuestion7.textContent = '7. DOM'
console.log('7. DOM')
console.log('Document Object Model.  A rendering of your website that is the entry point to a web apges content')

reviewAnswer7.textContent = ' - Document Object Model.  A rendering of your website that is the entry point to a web apges content'
console.log('')




//8.
reviewQuestion8.textContent = '8. keyword extends'
console.log('8. keyword extends')
console.log('Keyword "extends" is used to extend behavios and properties from a parent node to a child node.  It allows for content to be shared without having it be retyped heeping code dry.  The extends also allows child nodes to keep or dismiss inherited properties and keep or modify the values of those they do retain')

reviewAnswer8.textContent = ' - Keyword "extends" is used to extend behavios and properties from a parent node to a child node.  It allows for content to be shared without having it be retyped heeping code dry.  The extends also allows child nodes to keep or dismiss inherited properties and keep or modify the values of those they do retain'
console.log('')




//9.
reviewQuestion9.textContent = '9. Polymorphism'
console.log('9. Polymorphism')
console.log('An OOP standard that allows for a singular object to be replicated and reused without rewriting the code.  Makes the different representatins be treated as the same base type')

reviewAnswer9.textContent = ' - An OOP standard that allows for a singular object to be replicated and reused without rewriting the code.  Makes the different representatins be treated as the same base type'
console.log('')




//10.
reviewQuestion10.textContent = '10. classList'
console.log('10. classList')
console.log('A JavaScript property that can be used to add, remove, or toggle classes from an object')

reviewAnswer10.textContent = ' - A JavaScript property that can be used to add, remove, or toggle classes from an object'
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
codewarsQuestion1.textContent = '1.'
console.log('1. ')
console.log('')

codewarsAnswer1.textContent = ' - '
console.log('')




//2.
codewarsQuestion2.textContent = '2.'
console.log('2. ')
console.log('')

codewarsAnswer2.textContent = ' - '
console.log('')




//3.
codewarsQuestion3.textContent = '3.'
console.log('3. ')
console.log('')

codewarsAnswer3.textContent = ' - '
console.log('')





//4.
codewarsQuestion4.textContent = '4.'
console.log('4. ')
console.log('')

codewarsAnswer4.textContent = ' - '
console.log('')





//5.
codewarsQuestion5.textContent = '5.'
console.log('5. ')
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










