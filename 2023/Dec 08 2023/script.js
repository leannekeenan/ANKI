/*ANKI Review: */
console.log('ANKI Review:')

let reviewTitle = document.getElementById('review')

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


let codewarsTitle = document.getElementById('codewars')

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




reviewTitle.textContent = 'Topic: Syntactical Expressions'


reviewQuestion1.textContent = '1. Fetch Syntax'
reviewAnswer1.textContent = ' - '
let userInput = document.querySelector('div').addEventListener('click', getFetch)
function getFetch() {
    url = 'https://www.google.com'
    fetch(url)
        .then(result => {
            if(result.ok) {
                return result.json()
            }
            throw newError('fetch error')
        })
        .then(data => {

        })
        .catch(error => {
            console.log('fetch error', error)
        })
}
reviewQuestion2.textContent = '2. Arrow Function'
reviewAnswer2.textContent = '  let function = (parameters) => {function executionables}'
reviewQuestion3.textContent = '3. FizzBuzz Function'


let fizbuzz = (num) => {
    for(let i = 0; i <= num ; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            console.log("FIZZBUZZ")
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
fizbuzz(15)
reviewAnswer3.textContent = fizbuzz
reviewQuestion4.textContent = '4. Else statement'
reviewAnswer4.textContent = ' - Example provided above in Fizzbuzz function.  The else statement provides a default response for the function to execute of none of the parameters of the function are met'
reviewQuestion5.textContent = '5.For Each arrow Function'
let arr = [1, 2, 3];
arr.forEach((num, i, newArr) => newArr[i] = num * 100)

reviewAnswer5.textContent = 'arr.forEach((num, i, newArr) => newArr[i] = function action)'

reviewQuestion6.textContent = '6. forEach loop'
let emptyArr = []
arr.forEach(num => {
    emptyArr.push(num * 200)
})
console.log(emptyArr)
reviewAnswer6.textContent = emptyArr



reviewQuestion7.textContent = '7. for of loop'
for(let num of arr) {
    console.log(num * 7) //multiplies the index position by 7 returning [0, 7, 14]
}
reviewAnswer7.textContent = ' - for(let num of arr) { console.log(num * 7)}'

reviewQuestion8.textContent = '8. do... while'
reviewAnswer8.textContent = ' - preforms a function as long as a set condition is met'
let value = 0;

do {
    value += 1
}
while(value < 10)
console.log(value)


reviewQuestion9.textContent = '9. for in loop'
reviewAnswer9.textContent = ' - execute a contition for each element index position in an iterable object'
for(let num in arr) {
    console.log(num * 9)
}
reviewQuestion10.textContent = '10. arrow function (object literal)'
let arrow = () => {
    let obj = {
        myName: "name",
        myProfession:"profession"
    }
    console.log(obj.myName + ' ' + obj.myProfession)
}
arrow()
reviewAnswer10.textContent = arrow


codewarsTitle.textContent = "Codewars Challenges"

codewarsQuestion1.textContent = '1. Change String'
let changeCase = (string) => {
    let words = string.split(' ').map(i => i.replace(i[0], i[0].toUpperCase())).join(' ')
    console.log(words)
}
changeCase('hello to you all')
codewarsAnswer1.textContent = 'let changeCase = ' + changeCase



codewarsQuestion2.textContent = '2. convert number to reversed array of digits'
let number = 12345;
let convert = number.toString().split('').reverse().join('')
console.log(convert)
codewarsAnswer2.textContent = convert



codewarsQuestion3.textContent = '3. Remove First and Last Character'
let string = 'Remove forst and last character'
codewarsAnswer3.textContent = string.slice(1, -1)



codewarsQuestion4.textContent = '4. count characters in a string'
let countCharacters = (string) => {
    let count = {} //object not an array
    for(let characters of string) {
        count[characters] = (count[characters] || 0) + 1
    }
    console.log(count)
}
countCharacters('hello')
codewarsAnswer4.textContent = countCharacters



codewarsQuestion5.textContent = '5. List Filtering'

let listFilter = (list) => {
   console.log(list.filter(item => typeof item  === 'number'))
}
listFilter(['hello', 'true', 10])

codewarsAnswer5.textContent = ' - '



codewarsQuestion6.textContent = '6.'
codewarsAnswer6.textContent = ' - '
codewarsQuestion7.textContent = '7.'
codewarsAnswer7.textContent = ' - '
codewarsQuestion8.textContent = '8.'
codewarsAnswer8.textContent = ' - '
codewarsQuestion9.textContent = '9.'
codewarsAnswer9.textContent = ' - '
codewarsQuestion10.textContent = '10.'
codewarsAnswer10.textContent = ' - '













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

//6.
console.log('6. ')
console.log('')
console.log('')

//7.
console.log('7. ')
console.log('')
console.log('')

//8.
console.log('8. ')
console.log('')
console.log('')

//9.
console.log('9. ')
console.log('')
console.log('')

//10.
console.log('10. ')
console.log('')
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
