/*ANKI Review: JavaScript*/
console.log('ANKI Review: JavaScript')
//1.
console.log('1. keyword "extend"')
console.log('Used in OOP to create obects with a shared base object, capeable of sharing proerties to eah extended object,which in turn can override the property value that it has inherited and hold unique values that are not inherited by their parent base object')
console.log('')

//2.
console.log('2. create a function to determine the winner between a bot using a rock paper scissor function and a player using a function parameter for their game choice')

let RPS = () => {
    let random = Math.random()

    if(random < .33) {
        return "rock"
    }
    else if(random < .66) {
        return "paper"    
    }
    else {
        return "scissor"
    }

}

let winner = (player) => {
    let bot = RPS()
    if(bot === player) {
        console.log('player: ' + player)
        console.log('bot: ' + bot)
        console.log('tie')
    }
    else if(bot === 'rock' && player === 'paper' || bot === 'paper' && player === 'scissors' || bot === 'scissors' && player === 'rock') {
        console.log('player: ' + player)
        console.log('bot: ' + bot)
        console.log('Player Wins')
    }
    else {
        console.log('player: ' + player)
        console.log('bot: ' + bot)
        console.log('Bot Wins')
    }
}
winner('rock')
console.log('')

//3.
console.log('3. underscore convention')
console.log('Used to identify objects that should not be modified outside of their score else unforseen errors may occur')
console.log('')

//4.
console.log('4. spread operator in object literal')
let obj1 = [1, 2, 3];
let obj2 = [...obj1, 4, 5, 6];
console.log(obj1);
console.log(obj2)
console.log('')

//5.
console.log('5. ++variable')
console.log('uset to add one to a varible before iterating')
console.log('')

//6.
console.log('6. querySelector')
console.log('used to select HTML elements within the DOM based on their tag, class, or ID')
console.log('')

//7.
console.log('7. value comparison operator')
console.log(' "==" is for value comparison, while "=" is assignment, and "===" is value + type ')
console.log('')

//8.
console.log('8. Declaration reassignment')
console.log('uses let or var keyword to establish a variable, them following that declaration, the variable is called again aith a different valus assigned to it')
let declaration = 10
console.log(declaration)
declaration = 20
console.log(declaration)
console.log('')

//9.
console.log('9. fetch syntax')
document.querySelector('span').addEventListener('click', getFetch) //assigns click function to DOM object.  When clicked, the  getFetch function runs

function getFetch() {
    let url = 'https.google.com'

    fetch(url)
    .then(res => res.json())
    .then(data => {

    })
    .catch(err => {

    })
    
}
console.log('')

//10.
console.log('10. variable++')
console.log('increments by one after executing')
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
