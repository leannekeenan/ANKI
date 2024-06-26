


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
codewarsQuestion1.textContent = '1. Pipe Problem - Given a list of unique numbers sorted in ascending order, return a new list so the values increment by one for each index from the minimum to the maximum values'
console.log('1. Pipe Problem - Given a list of unique numbers sorted in ascending order, return a new list so the values increment by one for each index from the minimum to the maximum values')
console.log('')

let pipeProblem = (list) => {
    let min = Math.min(...list);
    let max = Math.max(...list);

    let result = []

    for(let i = min; i <= max; i++) {
        result.push(i) + 1;
        
    }
    console.log(result)
}
pipeProblem([1, 2, 3])

codewarsAnswer1.textContent = `- `
console.log('')




//2.
codewarsQuestion2.textContent = '2. Traffic Light - write a function that takes a string as an arguement representing the state of the light and returns the state it will cange to'
console.log('2. Traffic Light - write a function that takes a string as an arguement representing the state of the light and returns the state it will cange to')
console.log('')

let trafficLight = (light) => {
    if(light === "green") {
        console.log('drive carefully, be be prepared to use caution in the intersection - it is about to turn yellow')
    }
    else if(light === "yellow") {
        console.log('use caution in the intersection and prepare to stop - it is about to turn red')
    }
    else if(light === "red") {
        console.log('come to a complete stop and prepare to go - the light is about to turn green')
    }
}

trafficLight('green')
trafficLight('yellow')
trafficLight('red')

codewarsAnswer2.textContent = `- `
console.log('')




//3.
codewarsQuestion3.textContent = '3. Cypher - Write a cypher that returns a word using different letters'
console.log('3. Cypher - Write a cypher that returns a word using different letters')
console.log('')

let cypher = (string) => {
    //"replace the characters in the string (insensitive & global) with a character code that when converted to a string can provide the character code from the the character at the position of the string character in question, and add 13 to the character position value"
    return string.replace(/[a-z]/ig, character => String.fromCharCode((character.charCodeAt(0) + 13)))
}



console.log(cypher('hello'))

codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. Twice as Old. Write a function with two arguements - sons age and fathers age. Calculate how many years ago the father was twice the age of the son'
console.log('4. Twice as Old. Write a function with two arguements - sons age and fathers age. Calculate how many years ago the father was twice the age of the son')
console.log('')

let twiceAsOld = (son, father) => {
    let ageDifference = father - (son * 2);
    console.log(ageDifference)
}
twiceAsOld(5, 50)

codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = '5. ATM - write a function that simulates an ATM that can honor withdrawls of up to 1500 using the least amount of bank notes possible'
console.log('5. ATM - write a function that simulates an ATM that can honor withdrawls of up to 1500 using the least amount of bank notes possible')
console.log('')

let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let total = 0

    for(let i = 0; i < banknotes.length; i++) {
        total += Math.floor(withdrawl / banknotes[i])
        withdrawl %= banknotes[i]
    }
    console.log(total)
}
ATM(101)

codewarsAnswer5.textContent = `- `
console.log('')













