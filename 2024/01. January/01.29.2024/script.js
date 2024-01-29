/*ANKI Review: */
console.log('ANKI Review: Syntactical Expresssions')
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
reviewQuestion1.textContent = '1. arrow function using an object literal'
console.log('1. arrow function using an object literal')
let objectLiteralFunction = () => {
    let object = {
        propertyA: "My name is Leanne",
        propertyB: "I want to be a front end developer"
    }
    console.log(`${object.propertyA} ${object.propertyB}`)
}
objectLiteralFunction()
reviewAnswer1.textContent = `let objectLiteralFunction = ${objectLiteralFunction}`
console.log('')




//2.
reviewQuestion2.textContent = '2. arrow function (implied return)'
console.log('2. arrow function (implied return)')
let impliedReturn = () => {
    let implied = () => //condition
    implied()
}
impliedReturn()

reviewAnswer2.textContent = `let impliedReturn = ${impliedReturn}`
console.log('')





//3.
reviewQuestion3.textContent = '3. forEach loop'
console.log('3. forEach loop')
let forEachLoop = () => {
    let arr = [1, 2, 3]
    arr.forEach((num, i, arr) => {
        arr[i] = num * 10
    })
    console.log(arr)
}
forEachLoop()
reviewAnswer3.textContent = `let forEachLoop = ${forEachLoop}`
console.log('')




//4.
reviewQuestion4.textContent = '4. for ... in loop'
console.log('4. for ... in loop')
let forInLoop = () => {
    let arr = {
        propertyA:'A',
        propertyB: 'B'
    }
    for(let num in arr) {
        console.log(arr[num])
    }
}
forInLoop()

reviewAnswer4.textContent = `let forUnLoop = ${forInLoop}`
console.log('')




//5.
reviewQuestion5.textContent = '5. forEach Arrow Function'
console.log('5. forEach Arrow Function')

let forEachArrowFunction = () => {
    let forEach = () => {
        let arr = [ 10, 20, 30]
        arr.forEach((n, i, arr) => arr[i] = n / 10)
        console.log(arr)
    }
    forEach()
}
forEachArrowFunction()

reviewAnswer5.textContent = `let forEachArrowFunction = ${forEachArrowFunction}`
console.log('')




//6.
reviewQuestion6.textContent = '6. while loop'
console.log('6. while loop')

let whileLoop = () => {
    let total = 0;
    let iterator = 1;
    while(total < 10) {
        total += iterator
    }
    console.log(total)
}
whileLoop()

reviewAnswer6.textContent = `let whileLoop = ${whileLoop}`
console.log('')




//7.
reviewQuestion7.textContent = '7. for ... of loop'
console.log('7. for ... of loop')

let forOfLoop = () => {
    let arr = [1, 2, 3]
    for(let num of arr) {
        console.log(num * 100)
    }
}
forOfLoop()

reviewAnswer7.textContent = `let forOfLoop = ${forOfLoop}`
console.log('')




//8.
reviewQuestion8.textContent = '8. do...while loop'
console.log('8. do...while loop')

let doWhileLoop = () => {
    let total = 0;
    do {
        total += 1
    }
    while(total < 15)
    console.log(total)
}
doWhileLoop()

reviewAnswer8.textContent = `let doWhileLoop = ${doWhileLoop}`
console.log('')




//9.
reviewQuestion9.textContent = '9. fetch syntax'
console.log('9. fetch syntax')
let fetchSyntax = () => {
   function getFetch(){
    fetch(url).then(res => 
        (!res.ok))
            throw error('fetch error')
        
        .then(data => console.log(data)).catch('error', error)
   }
}

reviewAnswer9.textContent = `let fetchSyntax = ${fetchSyntax}`
console.log('')




//10.
reviewQuestion10.textContent = '10. CSS Syntax'
console.log('10. CSS Syntax')
console.log('selector { property: value}')

reviewAnswer10.textContent = `- selector { property: value}`
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
codewarsQuestion1.textContent = '1. Youres a square - given a number, determine if it is a square'
console.log('1. Youres a square - given a number, determine if it is a square')

let youreASquare = (num) => {
    let square = Math.sqrt(num);
    if(square === Math.floor(square)){
        console.log('square')
    }
}
youreASquare(5)

codewarsAnswer1.textContent = `let youreASquare = ${youreASquare}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Remove Duplicates from a List'
console.log('2. Remove Duplicates from a List')

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 1, 3, 1, 4, 1, 5]))

codewarsAnswer2.textContent = `let removeDuplicates = ${removeDuplicates}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. PPG'
console.log('3. PPG')
let pointsPerGame = () => {
    function NBA (player, team, points){
        this.player = player,
        this.team = team,
        this.points = points
    }
    let p1 = new NBA('player1', 'team', 100);
    let p2 = new NBA('player2', 'team', 150)

    function PPG (p1, p2) {
        console.log(p1.points + p2.points)
    }
    PPG(p1, p2)
}
pointsPerGame()

codewarsAnswer3.textContent = `let pointsPerGame = ${pointsPerGame}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Multilingual Hello'
console.log('4. Multilingual Hello')
let multilingualHello = (string) => {
    let welcome = {
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
    if(welcome.hasOwnProperty(string)) {
        console.log(welcome[string])
    }
}
multilingualHello('spanish')

codewarsAnswer4.textContent =  `let multilingualHello = ${multilingualHello}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. ROT13'
console.log('5. ROT13')
let rot13 = (string) => {
    let aplphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    let sipher = string.replace(/[a-z]/ig, change => aplphabet[aplphabet.indexOf(change) + 13])
    console.log(sipher)
}
rot13('hello')

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










