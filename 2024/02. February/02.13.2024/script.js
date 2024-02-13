/*ANKI Review: */
console.log('Codewars Challenges:')
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
reviewQuestion1.textContent = '1. True or False - write a function that retutns false without using the keyword false'
console.log('1. True or False - write a function that retutns false without using the keyword false')

let trueOrFalse = (string) => {
    if(string) {
        return !true
    }
}
console.log(trueOrFalse('well'))
reviewAnswer1.textContent = `let trueOrFalse = ${trueOrFalse}`
console.log('')




//2.
reviewQuestion2.textContent = '2. Fest of Many Beasts - write a function that accepts two parameters: animal and dish. If the first character and the last character of an animals full name match the characters of the dish, return "allowed" else return "not allowed"'
console.log('2. Fest of Many Beasts - write a function that accepts two parameters: animal and dish. If the first character and the last character of an animals full name match the characters of the dish, return "allowed" else return "not allowed"')

let feastOfBeasts = (name, dish) => {
   if(name[0] === dish[0] && name[name.length - 1] === dish[dish.length - 1]) {
    console.log(true)
   }
   else {
    console.log(false)
   }
    
}
feastOfBeasts('leanne keenan', 'lemons')

reviewAnswer2.textContent = `let feastOfBeasts = ${feastOfBeasts}`
console.log('')





//3.
reviewQuestion3.textContent = '3. Ways to Say Hello - Write a function that takes accepts a language as a parameter.  The function will hold a object called"greetings" that hols multiple ways to say hello in different languages.  Write a function that returns the way to say hello if the languages object value as a string is passed as an arguement'
console.log('3. Ways to Say Hello - Write a function that takes accepts a language as a parameter.  The function will hold a object called"greetings" that hols multiple ways to say hello in different languages.  Write a function that returns the way to say hello if the languages object value as a string is passed as an arguement')

let waysToSayHello = (language) => {
    let greetings = {
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
    if(greetings.hasOwnProperty(language)) {
        console.log(greetings[language])
    }
    else {
        console.log(greetings.english)
    }
}
waysToSayHello('')

reviewAnswer3.textContent = `let waysToSayHello = ${waysToSayHello}`
console.log('')




//4.
reviewQuestion4.textContent = '4. Turn a number into a reversed array - Write a function that if given a non-negative number will return the number as a reversed array'
console.log('4. Turn a number into a reversed array - Write a function that if given a non-negative number will return the number as a reversed array')

let numToReverseArray = (num) => {
    let solution = String(num).split('').reverse(' ').join(' ');
    
    console.log(Array(solution))
}
numToReverseArray(1002)

  
reviewAnswer4.textContent = `let numToReversedArray = ${numToReverseArray}`
console.log('')




//5.
reviewQuestion5.textContent = '5. Sum of Multiples - write a function that sums the multiples betwen the given multiple and the number as a value limit'
console.log('5. Sum of Multiples - write a function that sums the multiples betwen the given multiple and the number as a value limit')

let sumOfMultiples = (num, m) => {
    let total = 0
    for(let i = 0; i * m <= num; i++) {
        total += i * m;
    }
    console.log(total)
}
sumOfMultiples(5, 1)


reviewAnswer5.textContent = `let sumOfMultiples = ${sumOfMultiples}`
console.log('')




//6.
reviewQuestion6.textContent = '6. Points per Game - write two functions: one constructor function called NBA that accepts parameters for team player, team name, and points scored.  The second function wil be called sum and will accept two players.  REturn the total number of points both players scored'
console.log('6. Points per Game - write two functions: one constructor function called NBA that accepts parameters for team player, team name, and points scored.  The second function wil be called sum and will accept two players.  REturn the total number of points both players scored')

let  pointsPerGame = () => {
    function NBA (player, team, points) {
        this.player = player,
        this.team = team,
        this.points = points
    }
    let p1 = new NBA('player1', 'team1', 100)
    let p2 = new NBA('player1', 'team1', 500)
    console.log(p1)
    
    function PointTotal (p1, p2) {
        this.p1 = p1,
        this.p2 = p2 
    }
    console.log(p1.points + p2.points)
}
pointsPerGame()

reviewAnswer6.textContent =` let pointsPerGame = ${pointsPerGame}`
console.log('')




//7.
reviewQuestion7.textContent = '7. Alternating Case - write a function so that each lower case letter becomes uper case and vice versa'
console.log('7. Alternating Case - write a function so that each lower case letter becomes uper case and vice versa')

let alternatingCase = (string) => {
    result = ""
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toLowerCase()) {
            result += (string[i].toUpperCase())
        }
        else if(string[i] === string[i].toUpperCase()) {
            result += (string[i].toLowerCase())
        }
    }
    console.log(result)
}
alternatingCase('hello WORLD 123')

reviewAnswer7.textContent = `let alternatingCase = ${alternatingCase}`
console.log('')




//8.
reviewQuestion8.textContent = '8. Keep Hydrated'
console.log('8. Keep Hydrated')
console.log('')

reviewAnswer8.textContent = `- `
console.log('')




//9.
reviewQuestion9.textContent = '9. '
console.log('9. ')
console.log('')

reviewAnswer9.textContent = `- `
console.log('')




//10.
reviewQuestion10.textContent = '10. '
console.log('10. ')
console.log('')

reviewAnswer10.textContent = `- `
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

// /*Codewars Challenges*/
// console.log('Codewars Challenges')


// //1.
// codewarsQuestion1.textContent = '1. '
// console.log('1. ')
// console.log('')

// codewarsAnswer1.textContent = `- `
// console.log('')




// //2.
// codewarsQuestion2.textContent = '2. '
// console.log('2. ')
// console.log('')

// codewarsAnswer2.textContent = `- `
// console.log('')




// //3.
// codewarsQuestion3.textContent = '3. '
// console.log('3. ')
// console.log('')

// codewarsAnswer3.textContent = `- `
// console.log('')





// //4.
// codewarsQuestion4.textContent = '4. '
// console.log('4. ')
// console.log('')

// codewarsAnswer4.textContent = `- `
// console.log('')





// //5.
// codewarsQuestion5.textContent = '5. '
// console.log('5. ')
// console.log('')

// codewarsAnswer5.textContent = `- `
// console.log('')



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










