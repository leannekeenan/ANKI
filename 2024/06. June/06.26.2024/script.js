/*ANKI Review: */



let codewarsQuestion1 = document.getElementById('cwq1')
let codewarsQuestion2 = document.getElementById('cwq2')
let codewarsQuestion3 = document.getElementById('cwq3')
let codewarsQuestion4 = document.getElementById('cwq4')
let codewarsQuestion5 = document.getElementById('cwq5')

let codewarsAnswer1 = document.getElementById('cwa1')
let codewarsAnswer2 = document.getElementById('cwa2')
let codewarsAnswer3 = document.getElementById('cwa3')
let codewarsAnswer4 = document.getElementById('cwa4')
let codewarsAnswer5 = document.getElementById('cwa5')

/*Codewars Challenges*/
console.log('Codewars Challenges')


//1.
codewarsQuestion1.textContent = '1. Cypher - create a function that takes a string and returns a string cypher using the charcodeat 13 places from the current'
console.log('1. Cypher - create a function that takes a string and returns a string cypher using the charcodeat 13 places from the current')
console.log('')

let cypher = (string) => {
    console.log(string.replace(/[a-z]/ig, character => 
        String.fromCharCode((character.charCodeAt(0) + 13))))
}


cypher('hello')

codewarsAnswer1.textContent = `- `
console.log('')




//2.
codewarsQuestion2.textContent = '2. List Filtering - create a function that takes a list of non-negative numbers and characters, and retuns a new list containing only numbers'
console.log('2. List Filtering - create a function that takes a list of non-negative numbers and characters, and retuns a new list containing only numbers')
console.log('')

let filterList = (list) => {
    console.log(list.filter(character => typeof character === 'number').join(''))

    console.log(list.filter(character => typeof character !== 'number').join(''))
}

filterList([1, 2, 3, 'hello'])

codewarsAnswer2.textContent = `- `
console.log('')




//3.
codewarsQuestion3.textContent = '3. Is it even - write a function that returns true if the value is even and false if it is odd'
console.log('3. Is it even - write a function that returns true if the value is even and false if it is odd')
console.log('')

let oddOrEven = (num) => {
    if(num % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(oddOrEven(100))
console.log(oddOrEven(101))
console.log(oddOrEven(0))

codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. Trim a string - write a fruntion that will trim a string to a set arguemnet length and append a "..." to the end of the content if the lenght is shorter than the lengthof the content'
console.log('4. Trim a string - write a fruntion that will trim a string to a set arguemnet length and append a "..." to the end of the content if the lenght is shorter than the lengthof the content')
console.log('')

let trimString = (string, length) => {
    if(string.length > length) {
        console.log(string.slice(0, length) + ' ...')
    }
    else {
        console.log(string)
    }
}

trimString('hello world!', 5)
codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = '5. ATM - build a function that represents an ATM that can honora withdrawl of up to 1500 with the least number of bank notes possible'
console.log('5. ATM - build a function that represents an ATM that can honora withdrawl of up to 1500 with the least number of bank notes possible')
console.log('')

let ATM = (withdrawl) => {
    let notes = [100, 50, 20, 10, 5, 1];
    let total = 0

    for(let i = 0; i < notes.length; i++) {
        total += Math.floor(withdrawl / notes[i])
        withdrawl %= notes[i]
    }
    console.log(total)
}
ATM(101)

codewarsAnswer5.textContent = `- `
console.log('')







