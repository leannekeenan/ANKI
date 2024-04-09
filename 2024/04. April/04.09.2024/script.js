/*ANKI Review: */
console.log('ANKI Review: Syntactical Review of Expressions from HTML, CSS & JavaScript')
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
reviewQuestion1.textContent = '1. Write a forEach arrow function'
console.log('1. Write a forEach arrow function')
console.log(`

let forEachArrowFunction = () => {
    let arr = [1, 2, 3]
    console.log(arr) //[1, 2, 3]
    arr.forEach((num, i, newArr) => {
       return newArr[i] = num * 10 //[10, 20, 30]
    })
    console.log(arr)
}
forEachArrowFunction()`)

reviewAnswer1.textContent = `

let forEachArrowFunction = () => {
    let arr = [1, 2, 3]
    console.log(arr)
    arr.forEach((num, i, newArr) => {
       return newArr[i] = num * 10
    })
    console.log(arr)
}
forEachArrowFunction()`

let forEachArrowFunction = () => {
    let arr = [1, 2, 3]
    console.log(arr)
    arr.forEach((num, i, newArr) => {
       return newArr[i] = num * 10
    })
    console.log(arr)
}
forEachArrowFunction()

console.log('')




//2.
reviewQuestion2.textContent = '2. Write a for...of loop'
console.log('2. Write a for...of loop')
console.log(`
let forOfLoop = () => {
    let arr = [1, 2, 3];
    let newArr = []
    console.log(arr)
    for(num of arr) {
        newArr.push(num * 10);
    }
    console.log(newArr)
    
}
forOfLoop()`)

reviewAnswer2.textContent = `
let forOfLoop = () => {
    let arr = [1, 2, 3];
    let newArr = []
    console.log(arr)
    for(num of arr) {
        newArr.push(num * 10);
    }
    console.log(newArr)
    
}
forOfLoop()`

let forOfLoop = () => {
    let arr = [1, 2, 3];
    let newArr = []
    console.log(arr)
    for(num of arr) {
        newArr.push(num * 10);
    }
    console.log(newArr)
    
}
forOfLoop()

console.log('')





//3.
reviewQuestion3.textContent = '3. Arrow function with explicit return function'
console.log('3. Arrow function with explicit return function')
console.log(`
let explicitArrowFunction = () => {

}
explicitArrowFunction()
`)

reviewAnswer3.textContent = `

let explicitArrowFunction = () => {

}
explicitArrowFunction()

`

let explicitArrowFunction = () => {

}
explicitArrowFunction()

console.log('')




//4.
reviewQuestion4.textContent = '4. Write an example of a for loop'
console.log('4. Write an example of a for loop')
console.log(`
let forLoop = () => {
    for(let i = 0; i < 1; i++) {

    }
}
forLoop()
`)

reviewAnswer4.textContent = `
let forLoop = () => {
    for(let i = 0; i < 1; i++) {

    }
}
forLoop()
`

let forLoop = () => {
    for(let i = 0; i < 1; i++) {

    }
}
forLoop()

console.log('')




//5.
reviewQuestion5.textContent = '5. Write an if/else if statement'
console.log('5. if.else if statement')
console.log(`
let ifElseIfStatement = () => {
    let num = 10
    if(num === 10) {
        console.log(true)
    }
    else if(num !== 10) {
        console.log(false)
    }
}
ifElseIfStatement()
`)


reviewAnswer5.textContent = `
let ifElseIfStatement = () => {
    let num = 10
    if(num === 10) {
        console.log(true)
    }
    else if(num !== 10) {
        console.log(false)
    }
}
ifElseIfStatement()
`
let ifElseIfStatement = () => {
    let num = 10
    if(num === 10) {
        console.log(true)
    }
    else if(num !== 10) {
        console.log(false)
    }
}
ifElseIfStatement()

console.log('')




//6.
reviewQuestion6.textContent = '6. Write an Object Literal Arrow Function'
console.log('6. Object Literal Arrow Function')
console.log(`
let objectLiteralArrowFunction = () => {
    let object = {
        propertyName: "my name is Leanne",
        propertyFunction: 'I want to be an engineer'
    }
    console.log("object.propertyName and object.propertyFunction")
}
objectLiteralArrowFunction()
`)

reviewAnswer6.textContent = `
let objectLiteralArrowFunction = () => {
    let object = {
        propertyName: "my name is Leanne",
        propertyFunction: 'I want to be an engineer'
    }
    console.log("object.propertyName and object.propertyFunction")
}
objectLiteralArrowFunction()
`

let objectLiteralArrowFunction = () => {
    let object = {
        propertyName: "my name is Leanne",
        propertyFunction: 'I want to be an engineer'
    }
    console.log(`${object.propertyName} and ${object.propertyFunction}`)
}
objectLiteralArrowFunction()

console.log('')




//7.
reviewQuestion7.textContent = '7. Write an if/else if/else syntax statement'
console.log('7. Write an if/else if/else syntax statement')
console.log(`
let ifElseIfElseStatement = () => {
    let x;
    if(x === true) {
        console.log(true)
    }
    else if(x !== true) {
        console.log(false)
    }
    else {
        console.log('NAN')
    }
}
ifElseIfElseStatement()
`)

reviewAnswer7.textContent = `
let ifElseIfElseStatement = () => {
    let x;
    if(x === true) {
        console.log(true)
    }
    else if(x !== true) {
        console.log(false)
    }
    else {
        console.log('NAN')
    }
}
ifElseIfElseStatement()
`
let ifElseIfElseStatement = () => {
    let x;
    if(x === true) {
        console.log(true)
    }
    else if(x !== true) {
        console.log(false)
    }
    else {
        console.log('NAN')
    }
}
ifElseIfElseStatement()

console.log('')




//8.
reviewQuestion8.textContent = '8. Write a for ... in loop'
console.log('8. Write a for ... in loop')
console.log(`
let forInLoop = () => {
    let arr = [1, 2, 3];
    for(let num in arr) {
        console.log(num) //index
        console.log(arr[num]) //index value
    }
    
}
forInLoop()
`)

reviewAnswer8.textContent = `
let forInLoop = () => {
    let arr = [1, 2, 3];
    for(let num in arr) {
        console.log(num) //index
        console.log(arr[num]) //index value
    }
    
}
forInLoop()
`

let forInLoop = () => {
    let arr = [1, 2, 3];
    for(let num in arr) {
        console.log(num) //index
        console.log(arr[num]) //index value
    }
    
}
forInLoop()
console.log('')




//9.
reviewQuestion9.textContent = '9. Write a traditional forEach loop'
console.log('9. Write a traditional forEach loop')
console.log(`
let traditionalForEachLoop = () => {
    let arr = [1, 2, 3];
    let newArr = []
    arr.forEach((num) => {
        newArr.push(num * 10)
    })
    console.log(newArr)
}
traditionalForEachLoop()
`)

reviewAnswer9.textContent = `
let traditionalForEachLoop = () => {
    let arr = [1, 2, 3];
    let newArr = []
    arr.forEach((num) => {
        newArr.push(num * 10)
    })
    console.log(newArr)
}
traditionalForEachLoop()
`

let traditionalForEachLoop = () => {
    let arr = [1, 2, 3];
    let newArr = []
    arr.forEach((num) => {
        newArr.push(num * 10)
    })
    console.log(newArr)
}
traditionalForEachLoop()

console.log('')




//10.
reviewQuestion10.textContent = '10. Write the fetch syntax'
console.log('10. Write the fetch syntax')
console.log(`
let elementFromDom = document.createElement('button');
document.body.appendChild(elementFromDom);
elementFromDom.textContent = 'fetchSyntax'
elementFromDom.addEventListener('click', getFetch);

function getFetch() {
    let url = "https://google.com";

   fetch(url)
   .then(res => {
    if(!res.ok) {
        throw new Error('this is an error')
    }
    return res.json();
   })
   
   .then(data => {
    //where data from the stated website will be gathered for return
   })
   
   .catch(error => {
    console.log(Error, error)
   })
          
}
`)

reviewAnswer10.textContent = `
let elementFromDom = document.createElement('button');
document.body.appendChild(elementFromDom);
elementFromDom.textContent = 'fetchSyntax'
elementFromDom.addEventListener('click', getFetch);

function getFetch() {
    let url = "https://google.com";
   fetch(url).then(res => {
    if(!res.ok) {
        throw new Error('this is an error')
    }
    return res.json();
   }).then(data => {

   }).catch(error => {
    console.log(Error, error)
   })
          
}
`
let elementFromDom = document.createElement('button');
document.body.appendChild(elementFromDom);
elementFromDom.textContent = 'fetchSyntax'
elementFromDom.addEventListener('click', getFetch);

function getFetch() {
    let url = "https://google.com";
   fetch(url).then(res => {
    if(!res.ok) {
        throw new Error('this is an error')
    }
    return res.json();
   }).then(data => {

   }).catch(error => {
    console.log(Error, error)
   })
          
}

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
codewarsQuestion1.textContent = '1. Trim a string - write a function that eill trim a string if it is longer than the maximum string length.  End the string with "..."'
console.log('1. Trim a string - write a function that eill trim a string if it is longer than the maximum string length.  End the string with "..."')
console.log('')

codewarsAnswer1.textContent = `- `

let trimAString = (string, maxLength) => {
    let trimmed = string.slice(0, maxLength) + ' ...';
    console.log(trimmed)
}
trimAString('hello world', 5)

console.log('')




//2.
codewarsQuestion2.textContent = '2. ATM - write a function that models an ATM machine that can honor withdrawls between 01 and 1500 dollars with the least number of bamk note biills possible'
console.log('2. ATM - write a function that models an ATM machine that can honor withdrawls between 01 and 1500 dollars with the least number of bamk note biills possible')
console.log('')

codewarsAnswer2.textContent = `- `

let ATM = (withdrawl) => {
    let count = 0;
    let bills = [100, 50, 20, 10, 5, 1];

    for(let i = 0; i < bills.length; i++) {
        count += Math.floor(withdrawl % bills[i])
        withdrawl /= bills[i]
       
    }
    console.log(count)
}
ATM(101)

console.log('')




//3.
codewarsQuestion3.textContent = '3. Rock Paper Scissor'
console.log('3. Rock Paper Scissor')
console.log(`
let game = () => {

    //randomizer for both players
    let bot = Math.random();
    let player = Math.random();


//function for bot randomizer
    if(bot <= .33) {
        bot  = 'rock';
    }
    else if(bot <= .66) {
        bot  = 'paper';
    }
    else {
        bot = 'scissors';
    }

    //function for player randomizer

    if(player <= .33) {
        player  = 'rock';
    }
    else if(player <= .66) {
        player  = 'paper';
    }
    else {
        player = 'scissors';
    }
    console.log(bot);
    console.log(player) 
    ;

    //game Function

    if(bot === 'rock' && player === 'paper' || bot === 'paper' && player === 'scissors' || bot === 'scissors' && player === 'rock') {
        console.log('player wins')
    }
    else if(player === bot) {
        console.log('tie')
    }
    else {
        console.log('bot wins')
    }
}
game()
`)

codewarsAnswer3.textContent = `
let game = () => {

    //randomizer for both players
    let bot = Math.random();
    let player = Math.random();


//function for bot randomizer
    if(bot <= .33) {
        bot  = 'rock';
    }
    else if(bot <= .66) {
        bot  = 'paper';
    }
    else {
        bot = 'scissors';
    }

    //function for player randomizer

    if(player <= .33) {
        player  = 'rock';
    }
    else if(player <= .66) {
        player  = 'paper';
    }
    else {
        player = 'scissors';
    }
    console.log(bot);
    console.log(player) 
    ;

    //game Function

    if(bot === 'rock' && player === 'paper' || bot === 'paper' && player === 'scissors' || bot === 'scissors' && player === 'rock') {
        console.log('player wins')
    }
    else if(player === bot) {
        console.log('tie')
    }
    else {
        console.log('bot wins')
    }
}
game()
`

let game = () => {

    //randomizer for both players
    let bot = Math.random();
    let player = Math.random();


//function for bot randomizer
    if(bot <= .33) {
        bot  = 'rock';
    }
    else if(bot <= .66) {
        bot  = 'paper';
    }
    else {
        bot = 'scissors';
    }

    //function for player randomizer

    if(player <= .33) {
        player  = 'rock';
    }
    else if(player <= .66) {
        player  = 'paper';
    }
    else {
        player = 'scissors';
    }
    console.log(bot);
    console.log(player) 
    ;

    //game Function

    if(bot === 'rock' && player === 'paper' || bot === 'paper' && player === 'scissors' || bot === 'scissors' && player === 'rock') {
        console.log('player wins')
    }
    else if(player === bot) {
        console.log('tie')
    }
    else {
        console.log('bot wins')
    }
}
game()

console.log('')





//4.
codewarsQuestion4.textContent = '4. Points per game - write a constructor function to build NBA players with a name, tam and points score. Write a second function to total the points per game from both players made from the constructor function'
console.log('4. Points per game - write a constructor function to build NBA players with a name, tam and points score. Write a second function to total the points per game from both players made from the constructor function')
console.log('')

codewarsAnswer4.textContent = `- `

function NBAPlayers (player, team, score) {
    this.player = player,
    this.team = team,
    this.score = score
}
let p1 = new NBAPlayers('palyer1', 'team A', 205);
let p2 = new NBAPlayers('player2', 'teamA', 107);

function PPG(p1, p2) {
   console.log( p1.score + p2.score)
}



PPG(p1, p2)
console.log('')





//5.
codewarsQuestion5.textContent = '5. Feast of many beasts - write a function that checks the first and last characters of two strings. If they match, return true - else return false'
console.log('5. Feast of many beasts - write a function that checks the first and last characters of two strings. If they match, return true - else return false')
console.log('')

codewarsAnswer5.textContent = `- `

let feast = (string1, string2) => {
   if(string1[0] === string2[0] && string1[string1.length - 1] === string2[string2.length - 1]) {
    console.log(true)
   }
   else {
    console.log(false)
   }
}

feast('bag', 'bag')
feast('bag', 'bowl')

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










