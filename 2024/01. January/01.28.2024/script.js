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
reviewQuestion1.textContent = '1. element.innerHTML'
console.log('1. element.innerHTML')
console.log('DOM method used to add content to an existing HTML object')

reviewAnswer1.textContent = `- DOM method used to add content to an existing HTML object`
let newParagraph = document.createElement('p');
newParagraph.innerHTML = "This is an example of the .innerHTML method"
document.body.appendChild(newParagraph)


console.log('')




//2.
reviewQuestion2.textContent = '2. parentElement.removeChild(childElement)'
console.log('2. parentElement.removeChild(childElement)')
console.log('DOM method used to remove a child element from a parent node')

reviewAnswer2.textContent = `- DOM method used to remove a child element from a parent node`
let span = document.createElement('span')
span.innerHTML = "!"
newParagraph.appendChild(span)
newParagraph.removeChild(span)
console.log('')





//3.
reviewQuestion3.textContent = '3. parentElement.insertBefore(newElement, resourceElement'
console.log('3. parentElement.insertBefore(newElement, resourceElement')
console.log('DOM method used to add a new element before a referenced element thar currently exists in the DOM')

reviewAnswer3.textContent = `- DOM method used to add a new element before a referenced element thar currently exists in the DOM`
let newElement = document.getElementById('review')
let reference = document.getElementById(reviewAnswer1)
newElement.insertBefore(span, reference)
console.log('')




//4.
reviewQuestion4.textContent = '4. element.classList.remove("className")'
console.log('4. element.classList.remove("className")')
console.log('DOM method used to remove an existing class from a element.')

reviewAnswer4.textContent = `- DOM method used to remove an existing class from a element.`
review.classList.add('date')
review.classList.remove('date')
console.log('')




//5.
reviewQuestion5.textContent = '5. element.previousSibling()'
console.log('5. element.previousSibling()')
console.log('DOM element used to target the sibling node directly before the reference node')


reviewAnswer5.textContent = `- DOM element used to target the sibling node directly before the reference node!!!`
let previousSibling = reviewQuestion6.previousSibling;

if(previousSibling) {
    console.log(reviewAnswer5.textContent)
}
else {
    console.log('no previous sibling')
}
console.log('')




//6.
reviewQuestion6.textContent = '6. element.parentNode'
console.log('6. element.parentNode')
console.log('DOM method used to access the parent container of a specified chile element')

reviewAnswer6.textContent = `- DOM method used to access the parent container of a specified chile element`
let reviewContainer = reviewAnswer6.parentElement;
reviewContainer.classList.add('date')

console.log('')




//7.
reviewQuestion7.textContent = '7. element.nextSibling'
console.log('7. element.nextSibling')
console.log('DOM method used to target an element that follows the referenced node ')

reviewAnswer7.textContent = `- DOM method used to target an element that follows the referenced node!!!`

let nextSibling = reviewAnswer7.nextSibling;

if(nextSibling) {
    console.log(reviewAnswer7.textContent)
}
else {
    console.log('no sibling available')
}


console.log('')




//8.
reviewQuestion8.textContent = '8. document.querySelector("cssSelector")'
console.log('8. document.querySelector("cssSelector")')
console.log('DOM method used to select objects by the CSS selector type like p, div, span, or any other pre-existing tag within HTML, custom class or custom ID')

reviewAnswer8.textContent = `- DOM method used to select objects by the CSS selector type like p, div, span, or any other pre-existing tag within HTML, custom class or custom ID`
console.log('')




//9.
reviewQuestion9.textContent = '9. element.childNodes'
console.log('9. element.childNodes')
console.log('A DOM method used to reference all child nodes of a parent container')

reviewAnswer9.textContent = `- A DOM method used to reference all child nodes of a parent container`
console.log('')

console.log(reviewContainer.childNodes)



//10.
reviewQuestion10.textContent = '10. element.textContent = "NewTextContent"'
console.log('10. element.textContent = "NewTextContent"')
console.log('DOM method used to add new text to existing elements')

reviewAnswer10.textContent = `- DOM method used to add new text to existing elements`
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
codewarsQuestion1.textContent = '1. Points per Game - create a function called NBA that takes 3 parameters: team player, team name, points per game that accepts 2 parameters: player1 and player2.  Write a second function called PPG to return the sum of the points per game from both players'
console.log('1. Points per Game - create a function called NBA that takes 3 parameters: team player, team name, points per game that accepts 2 parameters: player1 and player2.  Write a second function called PPG to return the sum of the points per game from both players')

let pointsPerGame = () => {
    function NBA (player, team , points) {
        this.player = player,
        this.team = team,
        this.points = points
    }
    let player1 = new NBA("player1", 'team1', 100)
    let player2 = new NBA('player2', 'team2', 250)

    function PPG (player1, player2) {
        this.player1 = player1,
        this.player2 = player2
    }

    let total = new PPG(player1.points, player2.points)
    console.log(player1.points + player2.points)
}
pointsPerGame()
codewarsAnswer1.textContent = `let pointsPerGame = ${pointsPerGame}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Remove Zeros - write a function that removes the zeros from the end of a number'
console.log('2. Remove Zeros - write a function that removes the zeros from the end of a number')

let removeZeros = (num) => {
    while(num % 10 === 0 && num !== 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(1000)

codewarsAnswer2.textContent = `let removeZeros = ${removeZeros}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Multilingual Hello - write a function that takes a string as a parmameter and returns a greeting if it is within the provided array of languages'
console.log('3. Multilingual Hello - write a function that takes a string as a parmameter and returns a greeting if it is within the provided array of languages')

let multilingualHello = (language) => {
    let list = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }

    if(list.hasOwnProperty(language)) {
        console.log(list[language])
    }
    else {
        console.log('not found')
    }
}
multilingualHello('english')

codewarsAnswer3.textContent = `let multilingualHello = ${multilingualHello}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Reverse Sequence - write a function that returns an array of integers from n to 1 where n > 0'
console.log('4. Reverse Sequence - write a function that returns an array of integers from n to 1 where n > 0')

let reverseSequence = (array) => {
    let reverse = []
    for(let i = 0; i <= array; i++) {
        reverse.push(i)
    }
    console.log(reverse.reverse())
}
reverseSequence(10)

codewarsAnswer4.textContent = `let reverseSequence = ${reverseSequence}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Remove Duplicates from a List - create a function that removes duplicates from an array of non-negative numbers and returns it as a result'
console.log('5. Remove Duplicates from a List - create a function that removes duplicates from an array of non-negative numbers and returns it as a result')
let removeDuplicates = (list) => {
    let uniqueList = [...new Set(list)]
    console.log(uniqueList)
}
removeDuplicates([1, 2, 3, 4, 2, 5, 6, 1, 7]);
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










