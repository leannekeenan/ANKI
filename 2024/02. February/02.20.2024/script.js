/*ANKI Review: */
console.log('ANKI Review: Syntactical Expressions')
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
reviewQuestion1.textContent = '1. for ... of loop'
console.log('1. for ... of loop')
console.log('Used to loop through iterable objects like strings')
let forOfLoop = () => {
    let obj = [1, 2, 3];
    let arr = []
    for (let num of obj) {
        arr.push(num * 2)
    }
    console.log(arr)
}
forOfLoop()
reviewAnswer1.textContent = `- Used to loop through iterable objects like strings, lrt forOfLoop = ${forOfLoop}`
console.log('')




//2.
reviewQuestion2.textContent = '2. do ... while loop'
console.log('2. do ... while loop')
console.log('preforms a specified sction while a certain condition is met')

let doWhileLoop = () => {
    let num = 0;
    let arr = []
    let iterator = 1;

    do {
        num += iterator
        arr.push(num)
        
    }
    while(num < 10)
    console.log(arr)
}
doWhileLoop()

reviewAnswer2.textContent = `- preforms a specified sction while a certain condition is met. let doWhile = ${doWhileLoop}`
console.log('')





//3.
reviewQuestion3.textContent = '3. forEach arrow function'
console.log('3. forEach arrow function')
console.log('preforms a specified action for each element in an iterable object')

let forEachArrowFunction = () => {
    let arr = [1, 2, 3];
    arr.forEach((n, i, a) => a[i] = n * 10);
    console.log(arr)
}
forEachArrowFunction()

reviewAnswer3.textContent = `- preforms a specified action for each element in an iterable object. let forEachArrowFunction = ${forEachArrowFunction}`
console.log('')




//4.
reviewQuestion4.textContent = '4. arrow function (object literal)'
console.log('4. arrow function (object literal)')
console.log('A function that contains an object that inturn contains properties and values that can be called by the function')

let objLitArrowFunction = () => {
    let arrowFunction = () => {
        let obj = {
            myName: "Leanne",
            occupation: "Front-End Developer"
        }
        console.log(`${obj.myName} is a ${obj.occupation}`)
    }
    arrowFunction()
}
objLitArrowFunction()

reviewAnswer4.textContent = `- A function that contains an object that inturn contains properties and values that can be called by the function. let objLitFunction = ${objLitArrowFunction}`
console.log('')




//5.
reviewQuestion5.textContent = '5. while loop'
console.log('5. while loop')
console.log('loop that executes while a condition is met.  Creates an infinite loop')

let whileLoop = () => {
    let i = 10;
    while(i > 1) {
        console.log('hello')
    }
}


reviewAnswer5.textContent = `- loop that executes while a condition is met.  Creates an infinite loop. let whileLoop = ${whileLoop}`
console.log('')




//6.
reviewQuestion6.textContent = '6. switch statement'
console.log('6. switch statement')
console.log('alternative to if/else if syntax for swapping out a value for a singular object')

let switchStatement = () => {
    function daysInAMonth(month) {
        switch(month) {
            case "January" || "March" || "May" || "July" || "August" || "October" || "December": console.log(31)
            break;
            case "April" || "June" || "September" || "November": console.log(30)
            break;
            case "February": console.log(28)
        }
    }
    daysInAMonth("February")
}
switchStatement()

reviewAnswer6.textContent = `- alternative to if/else if syntax for swapping out a value for a singular object`
console.log('')




//7.
reviewQuestion7.textContent = '7. Fetch Syntax'
console.log('7. Fetch Syntax')
console.log('Used to return content from an API')

function getFetch() {
    let url = 'https://'
fetch(url).then(res => {
    if(!res.ok) {
        throw new error('error')
    }
    res.json()
}).then(data => {

}).catch(error => {
    return('error', error)
})
}

reviewAnswer7.textContent = `- Used to return content from an API. function getFetch(${getFetch})`
console.log('')




//8.
reviewQuestion8.textContent = '8. FizzBuzz Function'
console.log('8. FizzBuzz Function')
console.log('')

let fizzBuzz = (num) => {
    for(let i = 1; i <= num; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            console.log('FIZZBUZZ')
        }
        else if(i % 5 === 0) {
            console.log("Buzz")
        }
        else if(i % 3 === 0) {
            console.log('Fizz')
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz(20)

reviewAnswer8.textContent = `let fizzBuzz = ${fizzBuzz}`
console.log('')




//9.
reviewQuestion9.textContent = '9. forEach Loop'
console.log('9. forEach Loop')
console.log('executes a condition on each element in an array')

let forEachFunction = () => {
    let arr = [1, 2, 3];
    arr.forEach((num, i, a) => {
        a[i] = num * 10
    })
    console.log(arr)

}
forEachFunction()

reviewAnswer9.textContent = `- executes a condition on each element in an array`
console.log('')




//10.
reviewQuestion10.textContent = '10. for ... in loop'
console.log('10. for ... in loop')
console.log('ecexutes contition for all elements index value in an iterable object')

let forInLoop = () => {
    let arr = [1, 2, 3];
    let newArr = []
    for(let num in arr) {
     newArr.push(num * 10)
    }
    console.log(newArr)
}
forInLoop()

reviewAnswer10.textContent = `- ecexutes contition for all elements index value in an iterable object`
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
codewarsQuestion1.textContent = '1. multilingual hello - Write a "welcome" function that takes a parameter "language" (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.'



console.log('1. multilingual hello - Write a "welcome" function that takes a parameter "language" (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.')
let multilingualHello = (languages) => {
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
    if(greetings.hasOwnProperty(languages)) {
        console.log(greetings[languages])
    }
}
multilingualHello('english')
codewarsAnswer1.textContent = `- `
console.log('')




//2.
codewarsQuestion2.textContent = '2. Abbreviate a name - Write a function to convert a name into initials'
console.log('2. Abbreviate a name - Write a function to convert a name into initials.')

let abbreviate = (name) => {
    let initials = name.split(" ")
    let result = []
    for(let i = 0; i < initials.length; i++) {
        result.push(initials[i][0] + '.')
    }
    console.log(result.join(''))
}
abbreviate("Leanne Keenan")

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










