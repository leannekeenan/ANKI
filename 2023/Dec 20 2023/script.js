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
reviewQuestion1.textContent = '1. If / else if /else statement syntax'
console.log('1. If / else if /else statement syntax')
let ifElseStatement = () => {
    condition = 5
    if(condition >= 5) {
        console.log(true)
    }
    else if(condition < 5) {
        console.log(false)
    }
}
ifElseStatement()
reviewAnswer1.textContent = ifElseStatement
console.log('')




//2.
reviewQuestion2.textContent = '2. forEach loop'
console.log('2. forEach loop')

let forEachLoop = (array) => {
    array.forEach((num, index, newArray) => {
        console.log(newArray[index] = num * 10)
    })
}
forEachLoop([1, 2, 3])
reviewAnswer2.textContent = forEachLoop
console.log('')





//3.
reviewQuestion3.textContent = '3. do...while loop'
console.log('3. do...while loop')

let doWhileLoop = () => {
    
    let i = 0
    do {
        i += 1
    }
    while(i < 10)
    console.log(i)
}
doWhileLoop()
reviewAnswer3.textContent = doWhileLoop
console.log('')




//4.
reviewQuestion4.textContent = '4. for of loop'
console.log('4. for of loop')
let countCharacters = (string) => {
    let count = {}
    for(characters of string) {
        count[characters] = (count[characters] || 0) + 1
    }
    console.log(count)
}
countCharacters('hello')
console.log('')

reviewAnswer4.textContent = countCharacters
console.log('')




//5.
reviewQuestion5.textContent = '5. for ... in loop'
console.log('5. for ... in loop')
let forInLoop = () => {
    let forIn = {
        1:1,
        2:2,
        3:3,
        4:4,
        5:5
    };
    for(let num in forIn) {
        console.log(num * 10)
    }
}
forInLoop()


reviewAnswer5.textContent = forInLoop
console.log('')




//6.
reviewQuestion6.textContent = '6. Arrow Function'
console.log('6. Arrow Function')

let arrowFunction = () => {
    let object = {
        one:1, 
        two:2, 
        three:3
    }
    console.log(object.one)
}

arrowFunction()
reviewAnswer6.textContent = `let arrowFunction = ${arrowFunction}`
console.log('')




//7.
reviewQuestion7.textContent = '7. for each arrow'
console.log('7. for each arrow')
let forEachLoopII = (x) => {
    x.forEach((num, i, arr) => {
        arr[i] = num * 100
    })
}
array = [2, 3, 4];
forEachLoopII(array)
console.log(array)
reviewAnswer7.textContent = forEachLoopII
console.log('')




//8.
reviewQuestion8.textContent = '8. if statement'
console.log('8. if sstatement')

let ifStatement = () => {
    let thisStatement = 2 + 3
    if(thisStatement < 6) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
ifStatement()
reviewAnswer8.textContent = ifStatement
console.log('')




//9.
reviewQuestion9.textContent = '9. fetch syntax'
console.log('9. fetch syntax')

let input = document.querySelector('span').addEventListener('click', getFetch)
function getFetch() {
    let url = 'https://google.com'
    fetch(url).then(res => {
        if(!res.ok) {
            throw new Error ('error', error)
        }
        else {
            res = res.json()
        }
    }).then(data => {

    }).catch(error => 
        console.log('error'))
}
reviewAnswer9.textContent = getFetch
console.log('')




//10.
reviewQuestion10.textContent = '10. if/else if statement'
console.log('10. if/else if statement')
let ifElseIf = (num) => {
    
    if(num + 2 > 6)  {
        console.log('A')
    }
    else if(num - 2 < 4) {
        console.log('B')
    }
    
}
ifElseIf(0)
reviewAnswer10.textContent = ifElseIf
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
codewarsQuestion1.textContent = '1.'
console.log('1. ')
console.log('')

codewarsAnswer1.textContent = ' - '
console.log('')




//2.
codewarsQuestion2.textContent = '2.'
console.log('2. ')
console.log('')

codewarsAnswer2.textContent = ' - '
console.log('')




//3.
codewarsQuestion3.textContent = '3.'
console.log('3. ')
console.log('')

codewarsAnswer3.textContent = ' - '
console.log('')





//4.
codewarsQuestion4.textContent = '4.'
console.log('4. ')
console.log('')

codewarsAnswer4.textContent = ' - '
console.log('')





//5.
codewarsQuestion5.textContent = '5.'
console.log('5. ')
console.log('')

codewarsAnswer5.textContent = ' - '
console.log('')



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










