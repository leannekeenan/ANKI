/*ANKI Review: */
console.log('ANKI Review: General Knowledge')
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
reviewQuestion1.textContent = '1. What is a markup language'
console.log('1. What is a markup language')
console.log('A syntactical language that organizes the content of a website')

reviewAnswer1.textContent = `- A syntactical language that organizes the content of a website`
console.log('')




//2.
reviewQuestion2.textContent = '2. how to measure image compression'
console.log('2. how to measure image compression')
console.log('(imageSize - compression) / imagerate * 100%')

reviewAnswer2.textContent = `- (imageSize - compression) / imagerate * 100%`
console.log('')





//3.
reviewQuestion3.textContent = '3. gzip compresssion'
console.log('3. gzip compresssion')
console.log('used to reduce the size of files during data transfers by conpressing content before sending')

reviewAnswer3.textContent = `- used to reduce the size of files during data transfers by conpressing content before sending`
console.log('')




//4.
reviewQuestion4.textContent = '4. flexible media'
console.log('4. flexible media')
console.log('Document content that respons to the size of its devide')

reviewAnswer4.textContent = `- Document content that respons to the size of its devide`
console.log('')




//5.
reviewQuestion5.textContent = '5. Benefits of short selectors'
console.log('5. Benefits of short selectors')
console.log('Makes code cleaner, makes code easier to read, allows for better inheritance, minimizes specificity lowering overriding')


reviewAnswer5.textContent = `- Makes code cleaner, makes code easier to read, allows for better inheritance, minimizes specificity lowering overriding`
console.log('')




//6.
reviewQuestion6.textContent = '6. What are some common pitfalls in we development'
console.log('6. What are some common pitfalls in we development')
console.log(`
1. unpotimized images (not compressed) 
2. render blocking JavaScript
3. excessive use of frameworks
4. a lack of 'catch' methods for errors
5.excessive requests being made to the server
6. unoptimized files (not compressed)
7. poorly written code
`)

reviewAnswer6.textContent = `- 
1. unpotimized images (not compressed) 
2. render blocking JavaScript
3. excessive use of frameworks
4. a lack of 'catch' methods for errors
5.excessive requests being made to the server
6. unoptimized files (not compressed)
7. poorly written code
`
console.log('')




//7.
reviewQuestion7.textContent = '7. components directory'
console.log('7. components directory')
console.log('the primary, or home folder that contains all materials related to a software program')

reviewAnswer7.textContent = `- the primary, or home folder that contains all materials related to a software program`
console.log('')




//8.
reviewQuestion8.textContent = '8. name four ways to embed flexible media'
console.log('8. name four ways to embed flexible media')
console.log(`
1: use percentage values within a parent container
2. use object-fit property
3.  use "max-width" and height properties
4. use sizes attribute (srcset)
`)

reviewAnswer8.textContent = `- 
1: use percentage values within a parent container
2. use object-fit property
3.  use "max-width" and height properties
4. use sizes attribute (srcset)
`
console.log('')




//9.
reviewQuestion9.textContent = '9. SMACSS: Module'
console.log('9. SMACSS: Module')
console.log('A part of the SMACSS development process used to categorize and organize CSS affecting a projects modules, as in the CSS used to define a entire section rather than its components')

reviewAnswer9.textContent = `- A part of the SMACSS development process used to categorize and organize CSS affecting a projects modules, as in the CSS used to define a entire section rather than its components`
console.log('')




//10.
reviewQuestion10.textContent = '10. CSS Grid'
console.log('10. CSS Grid')
console.log('A CSS property used to organize content in a 2-dimentional way allowing both the x and y axis to be used to organize the content')

reviewAnswer10.textContent = `- A CSS property used to organize content in a 2-dimentional way allowing both the x and y axis to be used to organize the content`
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
codewarsQuestion1.textContent = '1. remove zeros - write a function that removes zeros from the end of a number'
console.log('1. remove zeros - write a function that removes zeros from the end of a number')
console.log(`
let removesZeros = (num) => {
    while(num % 10 === 0 && num !== 0) {
        num /= 10
    }
    console.log(num)
}
removesZeros(1000)
`)

codewarsAnswer1.textContent = `
let removesZeros = (num) => {
    while(num % 10 === 0 && num !== 0) {
        num /= 10
    }
    console.log(num)
}
removesZeros(1000)
`

let removesZeros = (num) => {
    while(num % 10 === 0 && num !== 0) {
        num /= 10
    }
    console.log(num)
}
removesZeros(1000)

console.log('')




//2.
codewarsQuestion2.textContent = '2. rock paper scissors - write  ROCK PAPER SCISSOR game the returns a winner'
console.log('2. rock paper scissors - write  ROCK PAPER SCISSOR game the returns a winner')
console.log(`
let RPS = (playerChoice) => {
    let botChoice;
    console.log("player choice: " + playerChoice)
    let botPlay = () => {
        
        let botRamdomizer = Math.random(1)
        if(botRamdomizer <= .33) {
            botChoice = 'rock'
        }
        else if(botRamdomizer <= .66) {
            botChoice = 'paper'
        }
        else {
            botChoice = 'scissor'
        }

        console.log("bot choice: " + botChoice)
    }
    botPlay()
    let winner;
    if(playerChoice === botChoice) {
        winner = 'DRAW'
    }
    else if(playerChoice === 'rock' && botChoice === 'scissor' ||
    playerChoice === 'scissor' && botChoice === 'paper' ||
    playerChoice === 'paper' && botChoice === 'rock') {
        winner = 'Player'
    }
    else {
        winner = 'Bot'
    }
    console.log("Winner: " + winner)
}
RPS('rock')
`)

codewarsAnswer2.textContent = `
let RPS = (playerChoice) => {
    let botChoice;
    console.log("player choice: " + playerChoice)
    let botPlay = () => {
        
        let botRamdomizer = Math.random(1)
        if(botRamdomizer <= .33) {
            botChoice = 'rock'
        }
        else if(botRamdomizer <= .66) {
            botChoice = 'paper'
        }
        else {
            botChoice = 'scissor'
        }

        console.log("bot choice: " + botChoice)
    }
    botPlay()
    let winner;
    if(playerChoice === botChoice) {
        winner = 'DRAW'
    }
    else if(playerChoice === 'rock' && botChoice === 'scissor' ||
    playerChoice === 'scissor' && botChoice === 'paper' ||
    playerChoice === 'paper' && botChoice === 'rock') {
        winner = 'Player'
    }
    else {
        winner = 'Bot'
    }
    console.log("Winner: " + winner)
}
RPS('rock')
`

let RPS = (playerChoice) => {
    let botChoice;
    console.log("player choice: " + playerChoice)
    let botPlay = () => {
        
        let botRamdomizer = Math.random(1)
        if(botRamdomizer <= .33) {
            botChoice = 'rock'
        }
        else if(botRamdomizer <= .66) {
            botChoice = 'paper'
        }
        else {
            botChoice = 'scissor'
        }

        console.log("bot choice: " + botChoice)
    }
    botPlay()
    let winner;
    if(playerChoice === botChoice) {
        winner = 'DRAW'
    }
    else if(playerChoice === 'rock' && botChoice === 'scissor' ||
    playerChoice === 'scissor' && botChoice === 'paper' ||
    playerChoice === 'paper' && botChoice === 'rock') {
        winner = 'Player'
    }
    else {
        winner = 'Bot'
    }
    console.log("Winner: " + winner)
}
RPS('rock')
console.log('')




//3.
codewarsQuestion3.textContent = '3. Add Length:  calculate the length of each word in a string and append their lengths'
console.log('3. Add Length:  calculate the length of each word in a string and append their lengths')
console.log('')

codewarsAnswer3.textContent = `

`



console.log('')





//4.
codewarsQuestion4.textContent = '4. ATM - write a function that determins the minimum number of bank notes to honor a withdrawl'
console.log('4. ATM - write a function that determins the minimum number of bank notes to honor a withdrawl')
console.log(`
let atm = (withdrawl) => {
    let total = 0;
    let notes = [100, 50, 20, 10, 5, 1];
    for(let i = 0; i < notes.length; i++) { 
        total += Math.floor(withdrawl / notes[i]);
        withdrawl %= notes[i]
    }
   console.log(total)
}
atm(101)

`)

codewarsAnswer4.textContent = `
let atm = (withdrawl) => {
    let total = 0;
    let notes = [100, 50, 20, 10, 5, 1];
    for(let i = 0; i < notes.length; i++) { 
        total += Math.floor(withdrawl / notes[i]);
        withdrawl %= notes[i]
    }
   console.log(total)
}
atm(101)
`

let atm = (withdrawl) => {
    let total = 0;
    let notes = [100, 50, 20, 10, 5, 1];
    for(let i = 0; i < notes.length; i++) { 
        total += Math.floor(withdrawl / notes[i]);
        withdrawl %= notes[i]
    }
   console.log(total)
}
atm(101)

console.log('')





//5.
codewarsQuestion5.textContent = '5. Feast of Many Beast - Write a function feast that takes the animal\'s name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.'
console.log('5. Feast of Many Beast - Write a function feast that takes the animal\'s name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.')
console.log('')

codewarsAnswer5.textContent = `
let feast = (animal, dish) => {
    if(animal[0] === dish[0] && animal[animal.length - 1] === dish[dish.length - 1]) {
        console.log(true)
    }  
    else {
        console.log(false)
    }  
}
feast('centepede', 'cake')
`
console.log(`
let feast = (animal, dish) => {
    if(animal[0] === dish[0] && animal[animal.length - 1] === dish[dish.length - 1]) {
        console.log(true)
    }  
    else {
        console.log(false)
    }  
}
feast('centepede', 'cake')
`)

let feast = (animal, dish) => {
    if(animal[0] === dish[0] && animal[animal.length - 1] === dish[dish.length - 1]) {
        console.log(true)
    }  
    else {
        console.log(false)
    }  
}
feast('centepede', 'cake')

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










