/*ANKI Review: */
console.log('ANKI Review: JavaScript Syntax and Definition Review')
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
console.log('stands for post iteration - meaning that the iteration variable increases by one once it is iterated over')

reviewAnswer1.textContent = `- stands for post iteration - meaning that the iteration variable increases by one once it is iterated over`
console.log('')




//2.
reviewQuestion2.textContent = '2. fetch function syntax'
console.log('2. fetch function syntax')
console.log(`
let docObj = document.querySelector('click', getFetch)l

fetch(url).then(res => {
    if(!res.ok) {
        throw new Error('this is an error')
    }
    else {
        return res.json()
    }
}).then(data => {

}).catch(error => {
    console.log("Error", error.message)
})
`)

reviewAnswer2.textContent = `
let docObj = document.querySelector('click', getFetch)l

fetch(url).then(res => {
    if(!res.ok) {
        throw new Error('this is an error')
    }
    else {
        return res.json()
    }
}).then(data => {

}).catch(error => {
    console.log("Error", error.message)
})
`
console.log('')





//3.
reviewQuestion3.textContent = '3. document.body'
console.log('3. document.body')
console.log('JavaScript method used to access content in the body of a document of the body directly')

reviewAnswer3.textContent = `- JavaScript method used to access content in the body of a document of the body directly`
console.log('')




//4.
reviewQuestion4.textContent = '4. Polymorphism'
console.log('4. Polymorphism')
console.log('A concept in OOP refering to the multiple ways an ojbect can invoke a method, allowing objects of a shared superclass to have shared methods')

reviewAnswer4.textContent = `- A concept in OOP refering to the multiple ways an ojbect can invoke a method, allowing objects of a shared superclass to have shared methods`

class Animal {
    makeSound() {
        console.log('animals make sounds')
    }
}
    class Dog extends Animal {
        makeSound(){
            console.log('bark')
        }
    }

    class Cat extends Animal {
        makeSound(){
            console.log('meow')
        }
    }
    class Bird extends Animal {
        makeSound(){
            console.log('chirp')
        }
    }
const animal = new Animal();
const dog = new Dog();
let cat = new Cat();
let bird = new Bird();

animal.makeSound()
dog.makeSound()
cat.makeSound()
bird.makeSound()



console.log('')




//5.
reviewQuestion5.textContent = '5. Syntax for a spread operator in a function call'
console.log('5. Syntax for a spread operator in a function call')
console.log(`
let functionCall = (a, b, c) => {
    return a + b + c
}
let num = [1, 2, 3];
let total = functionCall(...num);
console.log(total)
`)


reviewAnswer5.textContent = `
let functionCall = (a, b, c) => {
    return a + b + c
}
let num = [1, 2, 3];
let total = functionCall(...num);
console.log(total)
`

let functionCall = (a, b, c) => {
    return a + b + c
}
let num = [1, 2, 3];
let total = functionCall(...num);
console.log(total)
console.log('')




//6.
reviewQuestion6.textContent = '6. Syntax for "Less Than"'
console.log('6. Syntax for "Less Than"')
console.log('<')

reviewAnswer6.textContent = ` <`
console.log('')




//7.
reviewQuestion7.textContent = '7. Keyword "extends"'
console.log('7. Keyword "extends"')
console.log('Used in OOP to extend properties of a parent class to connected chld nodes, allowing for inheritance and polymprphism')

reviewAnswer7.textContent = `- Used in OOP to extend properties of a parent class to connected chld nodes, allowing for inheritance and polymprphism`
console.log('')




//8.
reviewQuestion8.textContent = '8. spread'
console.log('8. spread')
console.log('an operator method used to expand elements of an iterable object into key-value pairs to manipulate objects by spreading their new values to function variables')

reviewAnswer8.textContent = `- an operator method used to expand elements of an iterable object into key-value pairs to manipulate objects by spreading their new values to function variables`
console.log('')




//9.
reviewQuestion9.textContent = '9. Abstraction'
console.log('9. Abstraction')
console.log('A concept in OOP that provides engineere the option to show or hide data based on the users need for access to it.  It improved security, code cleanliness, and organizational structure to code ')

reviewAnswer9.textContent = `- A concept in OOP that provides engineere the option to show or hide data based on the users need for access to it.  It improved security, code cleanliness, and organizational structure to code `
console.log('')




//10.
reviewQuestion10.textContent = '10. DOM'
console.log('10. DOM')
console.log('Document Object Model.  A model of the content of a website that can be used to manipulate the content without modifying the actual code')

reviewAnswer10.textContent = `- Document Object Model.  A model of the content of a website that can be used to manipulate the content without modifying the actual code`
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
codewarsQuestion1.textContent = '1. Remove the first ans last letter - write a function that removes the first and last characers of a string'
console.log('1. Remove the first ans last letter - write a function that removes the first and last characers of a string')
console.log(`
let modifyString = (string) => {
    let modified = string.slice(1, -1);
    console.log(modified)
}
modifyString('hello world')
`)

codewarsAnswer1.textContent = `
let modifyString = (string) => {
    let modified = string.slice(1, -1);
    console.log(modified)
}
modifyString('hello world')
`

let modifyString = (string) => {
    let modified = string.slice(1, -1);
    console.log(string)
    console.log(modified)
}
modifyString('hello world')

console.log('')


//2.
codewarsQuestion2.textContent = '2. Points per game - write two functions: one constructor function called NBA to hold player names, teams, and points scores.  The second called PPG to sum the total of both players point totals. define two players with the NBA function and add their scores together using PPG.  return the total PPG'
console.log('2. Points per game - write two functions: one constructor function called NBA to hold player names, teams, and points scores.  The second called PPG to sum the total of both players point totals. define two players with the NBA function and add their scores together using PPG.  return the total PPG')
console.log(`
let pointsPerGame = () => {
    function NBA (player, team, score) {
        this.player = player,
        this.team = team,
        this.score = score
    }
    
    let p1 = new NBA('player1', 'team' , 100);
    let p2 = new NBA('player2', 'team', 201)
    
    function PPG (p1, p2) {
        console.log(p1.score + p2.score)
    }
    
    PPG(p1, p2)
}
pointsPerGame()
`)

codewarsAnswer2.textContent = `
let pointsPerGame = () => {
    function NBA (player, team, score) {
        this.player = player,
        this.team = team,
        this.score = score
    }
    
    let p1 = new NBA('player1', 'team' , 100);
    let p2 = new NBA('player2', 'team', 201)
    
    function PPG (p1, p2) {
        console.log(p1.score + p2.score)
    }
    
    PPG(p1, p2)
}
pointsPerGame()
`

let pointsPerGame = () => {
    function NBA (player, team, score) {
        this.player = player,
        this.team = team,
        this.score = score
    }
    
    let p1 = new NBA('player1', 'team' , 100);
    let p2 = new NBA('player2', 'team', 201)
    
    function PPG (p1, p2) {
        console.log(p1.score + p2.score)
    }
    
    PPG(p1, p2)
}
pointsPerGame()

console.log('')




//3.
codewarsQuestion3.textContent = '3. Remove zeros - write a function that removes the zeros from the end of a number'
console.log('3. Remove zeros - write a function that removes the zeros from the end of a number')
console.log(`
let removeZeros = (num) => {
    while(num % 10 === 0 && num > 0) {
       num /= 10
    }
    console.log(num)
}

removeZeros(10000)
`)

codewarsAnswer3.textContent = `
let removeZeros = (num) => {
    while(num % 10 === 0 && num > 0) {
       num /= 10
    }
    console.log(num)
}

removeZeros(10000)
`

let removeZeros = (num) => {
    while(num % 10 === 0 && num > 0) {
       num /= 10
    }
    console.log(num)
}

removeZeros(10000)

console.log('')





//4.
codewarsQuestion4.textContent = '4. Remove Duplicates from a list - writea function that removes duplicates from an array'
console.log('4. Remove Duplicates from a list - writea function that removes duplicates from an array')
console.log(`
let removeDuplicates = (array) => {
    let newArray = new Set([...array])
    console.log(newArray)
}

removeDuplicates([1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5])
`)

codewarsAnswer4.textContent = `
let removeDuplicates = (array) => {
    let newArray = new Set([...array])
    console.log(newArray)
}

removeDuplicates([1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5])
`

let removeDuplicates = (array) => {
    let newArray = new Set([...array])
    console.log(newArray)
}

removeDuplicates([1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5])

console.log('')





//5.
codewarsQuestion5.textContent = '5. REverse Sequence - write a function that returns an array of integers from the numerical parameter value to 0'
console.log('5. REverse Sequence - write a function that returns an array of integers from the numerical parameter value to 0')
console.log(`
let reverseSequence = (num) => {
    let sequence = []
    for(let i = 0; i <= num; i++) {
      sequence.push(i)  
    }
    console.log(sequence.reverse())
}
reverseSequence(10)
`)

codewarsAnswer5.textContent = `
let reverseSequence = (num) => {
    let sequence = []
    for(let i = 0; i <= num; i++) {
      sequence.push(i)  
    }
    console.log(sequence.reverse())
}
reverseSequence(10)
`

let reverseSequence = (num) => {
    let sequence = []
    for(let i = 0; i <= num; i++) {
      sequence.push(i)  
    }
    console.log(sequence.reverse())
}
reverseSequence(10)

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










