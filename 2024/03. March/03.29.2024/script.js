/*ANKI Review: */
console.log('ANKI Review: Codewars Challenges')

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


//1.
codewarsQuestion1.textContent = '1. Add Length - write a function that accepts a string as an arguement and returns it as an array with the length of each word appended to each array element'
console.log(`1. Add Length - write a function that accepts a string as an arguement and returns it as an array with the length of each word appended to each array element`)
console.log(`
let addLength = (string) => {
    let words = string.split(' ');
    let result = words.map(word => word + word.length)
    console.log(result)

}

addLength('hello world')
`)

codewarsAnswer1.textContent = `- 
let addLength = (string) => {
    let words = string.split(' ');
    let result = words.map(word => word + word.length)
    console.log(result)

}

addLength('hello world')
`

let addLength = (string) => {
    let words = string.split(' ');
    let result = words.map(word => `${word} ${word.length}`)
    console.log(result)

}

addLength('hello world')

console.log('')

//2.
codewarsQuestion2.textContent = '2. ATM - Write a function that simulates an ATM that honors withdrawls between 1 and 1500 with the least number of bank notes possible'
console.log(`2. ATM - Write a function that simulates an ATM that honors withdrawls between 1 and 1500 with the least number of bank notes possible`)
console.log(`
let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let total = 0
    for(let i = 0; i < banknotes.length; i++) {
        total += Math.floor(withdrawl / banknotes[i]);
        withdrawl %= banknotes[i];
    }
    console.log(total)
}
ATM(101)
`)

codewarsAnswer2.textContent = `- 
let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let total = 0
    for(let i = 0; i < banknotes.length; i++) {
        total += Math.floor(withdrawl / banknotes[i]);
        withdrawl %= banknotes[i];
    }
    console.log(total)
}
ATM(101)
`

let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let total = 0
    for(let i = 0; i < banknotes.length; i++) {
        total += Math.floor(withdrawl / banknotes[i]);
        withdrawl %= banknotes[i];
    }
    console.log(total)
}
ATM(101)

console.log('')

//3.
codewarsQuestion3.textContent = '3. Remove String Spaces - REmove all of the spaces in a string'
console.log(`3. Remove String Spaces - REmove all of the spaces in a string`)
console.log(`
let removeSpaces = (string) => {
    console.log(string.replaceAll(' ', ''))
}
removeSpaces('hello world')
`)

codewarsAnswer3.textContent = `- 
let removeSpaces = (string) => {
    console.log(string.replaceAll(' ', ''))
}
removeSpaces('hello world')
`

let removeSpaces = (string) => {
    console.log(string.replaceAll(' ', ''))
}
removeSpaces('hello world')

console.log('')

//4.
codewarsQuestion4.textContent = '4. Reverse Sequence - build a function that returns an array  of integers from a provided number arguement to 1'
console.log(`4. Reverse Sequence - build a function that returns an array  of integers from a provided number arguement to 1`)
console.log(`
let reverse = (num) => {
    let total = [];
    for(let i = 1; i <= num; i++) {
        total.push(i);
    }
    console.log(total.reverse())
}
reverse(10)
`)

codewarsAnswer4.textContent = `- 
let reverse = (num) => {
    let total = [];
    for(let i = 1; i <= num; i++) {
        total.push(i);
    }
    console.log(total.reverse())
}
reverse(10)
`

let reverse = (num) => {
    let total = [];
    for(let i = 1; i <= num; i++) {
        total.push(i);
    }
    console.log(total.reverse())
}
reverse(10)

console.log('')

//5.
codewarsQuestion5.textContent = '5. REmove Zeros - write a function that removes zeros from the end of a number'
console.log(`5. REmove Zeros - write a function that removes zeros from the end of a number`)
console.log(`
let removeZeros = (num) => {
    while(num % 10 === 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(100)
`)

codewarsAnswer5.textContent = `- 
let removeZeros = (num) => {
    while(num % 10 === 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(100)
`

let removeZeros = (num) => {
    while(num % 10 === 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(100)

console.log('')

codewarsQuestion6.textContent = '6. Points Per Game - Write two constructor fucntions: one to build NBA Players including arguements for namem team and points scrores.  The second will be points per game totaling the point totals from the previous constructor players score totals '
console.log(`6. Points Per Game - Write two constructor fucntions: one to build NBA Players including arguements for namem team and points scrores.  The second will be points per game totaling the point totals from the previous constructor players score totals `)
console.log(`

let pointspergame = () => {
    function Player(player, team, score) {
        this.player = player,
        this.team = team,
        this.score = score
    }

    function Sum(p1, p2) {
        console.log(p1.score + p2.score)
    }
    

    let p1 = new Player('playerName', 'playerTeam', 100)
    let p2 = new Player('playerName', 'playerTeam', 500)
 
    Sum(p1, p2)
   
}
pointspergame()`)

codewarsAnswer6.textContent = `- 

let pointspergame = () => {
    function Player(player, team, score) {
        this.player = player,
        this.team = team,
        this.score = score
    }

    function Sum(p1, p2) {
        console.log(p1.score + p2.score)
    }
    

    let p1 = new Player('playerName', 'playerTeam', 100)
    let p2 = new Player('playerName', 'playerTeam', 500)
 
    Sum(p1, p2)
   
}
pointspergame()`

let pointspergame = () => {
    function Player(player, team, score) {
        this.player = player,
        this.team = team,
        this.score = score
    }

    function Sum(p1, p2) {
        console.log(p1.score + p2.score)
    }
    

    let p1 = new Player('playerName', 'playerTeam', 100)
    let p2 = new Player('playerName', 'playerTeam', 500)
 
    Sum(p1, p2)
   
}
pointspergame()

console.log('')

codewarsQuestion7.textContent = '7. Trim a String - write a function that will trim a string to the requested maximum'
console.log(`7. Trim a String - write a function that will trim a string to the requested maximum`)
console.log(`
let trimString = (string, length) => {
    let trimmed = string.trim().slice(0, length);
    console.log(trimmed + ' ... ')
    
}

trimString('hello world', 5)
`)

codewarsAnswer7.textContent = `- 
let trimString = (string, length) => {
    let trimmed = string.trim().slice(0, length);
    console.log(trimmed + ' ... ')
    
}

trimString('hello world', 5)
`

let trimString = (string, length) => {
    let trimmed = string.trim().slice(0, length);
    console.log(trimmed + ' ... ')
    
}

trimString('hello world', 5)
console.log('')

codewarsQuestion8.textContent = '8. Feast of many beasts - animals are having a feast and are bring a dish - the dish must begin and end with the same lettwrs as the animal, like a porpoise can bring a pie, but not a cake (p and e match)'
console.log(`8. Feast of many beasts - animals are having a feast and are bring a dish - the dish must begin and end with the same lettwrs as the animal, like a porpoise can bring a pie, but not a cake (p and e match)`)
console.log(`
let feast = (animal, dish) => {
    console.log(animal[0] === dish[0] && animal[animal.length - 1] === dish[dish.length - 1])  
}
feast('porpoise', 'pie')
feast('bat', 'bagels')
`)

codewarsAnswer8.textContent = `- 
let feast = (animal, dish) => {
    console.log(animal[0] === dish[0] && animal[animal.length - 1] === dish[dish.length - 1])  
}
feast('porpoise', 'pie')
feast('bat', 'bagels')
`

let feast = (animal, dish) => {
    console.log(animal[0] === dish[0] && animal[animal.length - 1] === dish[dish.length - 1])  
}
feast('porpoise', 'pie')
feast('bat', 'bagels')

console.log('')

codewarsQuestion9.textContent = '9. Claasswork - your teacher asked you to make copies of his prints for everyone in clas.  Write a function that calculates how many pages you will be bringing back for the entire class'
console.log(`9. Claasswork - your teacher asked you to make copies of his prints for everyone in clas.  Write a function that calculates how many pages you will be bringing back for the entire class`)
console.log(`
let classwork = (printLength, classmates) => {
    console.log(printLength * classmates + ' pages in total')

    if(classmates <= 0 || printLength <= 0) {
        console.log('you dont have to make any prints')
    }
}

classwork(0, 100);
classwork(20, 35)`)

codewarsAnswer9.textContent = `- 
let classwork = (printLength, classmates) => {
    console.log(printLength * classmates + ' pages in total')

    if(classmates <= 0 || printLength <= 0) {
        console.log('you dont have to make any prints')
    }
}

classwork(0, 100);
classwork(20, 35)`

let classwork = (printLength, classmates) => {
    console.log(printLength * classmates + ' pages in total')

    if(classmates <= 0 || printLength <= 0) {
        console.log('you dont have to make any prints')
    }
}

classwork(0, 100);
classwork(20, 35)

console.log('')

codewarsQuestion10.textContent = '10. Remove duplicates from a list - write a function that acepts an array and returns a new array with any repeared values removed'
console.log(`10. Remove duplicates from a list - write a function that acepts an array and returns a new array with any repeared values removed`)
console.log(`
let removeDuplicates = (arr) => {
    let newArray = new Set([...arr])
    console.log(newArray)
}
removeDuplicates([1, 2, 1, 3, 1, 4, 1, 5])`)
codewarsAnswer10.textContent = `- 
let removeDuplicates = (arr) => {
    let newArray = new Set([...arr])
    console.log(newArray)
}
removeDuplicates([1, 2, 1, 3, 1, 4, 1, 5])`

let removeDuplicates = (arr) => {
    let newArray = new Set([...arr])
    console.log(newArray)
}
removeDuplicates([1, 2, 1, 3, 1, 4, 1, 5])










