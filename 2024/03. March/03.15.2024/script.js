/*ANKI Review: */
console.log('ANKI Review: CLI Terminal Commands')
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
reviewQuestion1.textContent = '1. < '
console.log('1. < ')
console.log('Input redirection operator.  used in conjunction with the "command" keyword as a directional for input redirection. Its a way to provide input to a command from a file without typing it interactively. [Takes file on the right and puts it in the file on the left]')
reviewAnswer1.textContent = `- Input redirection operator.  used in conjunction with the "command" keyword as a directional for input redirection. Its a way to provide input to a command from a file without typing it interactively. [Takes file on the right and puts it in the file on the left]`
console.log('')




//2.
reviewQuestion2.textContent = '2. rm -r '
console.log('2. rm -r ')
console.log('remove recursive.  used to remove directories and their contained subdorectories')
reviewAnswer2.textContent = `- remove recursive.  used to remove directories and their contained subdorectories`
console.log('')





//3.
reviewQuestion3.textContent = '3. touch'
console.log('3. touch')
console.log('opens a new file within directory')
reviewAnswer3.textContent = `- opens a new file within directory`
console.log('')




//4.
reviewQuestion4.textContent = '4. env'
console.log('4. env')
console.log('stands for "environment". CLI command that returns a list of environmental variables')
reviewAnswer4.textContent = `- stands for "environment". CLI command that returns a list of environmental variables`
console.log('')




//5.
reviewQuestion5.textContent = '5. >>'
console.log('5. >>')
console.log('Output redirection operator. Uses to append existing content.')
reviewAnswer5.textContent = `- Output redirection operator. Uses to append existing content.`
console.log('')




//6.
reviewQuestion6.textContent = '6. ~/.bash_profile'
console.log('6. ~/.bash_profile')
console.log('used to set up a users environment when logging in to a UNIX system. Allows users to customize their shell environment.')
reviewAnswer6.textContent = `- used to set up a users environment when logging in to a UNIX system. Allows users to customize their shell environment.`
console.log('')




//7.
reviewQuestion7.textContent = '7. ls -t'
console.log('7. ls -t')
console.log('list show -time.  Used to list files and directories sorted by modified time with the newest file appearing first')

reviewAnswer7.textContent = `- list show -time.  Used to list files and directories sorted by modified time with the newest file appearing first`
console.log('')




//8.
reviewQuestion8.textContent = '8. |'
console.log('8. |')
console.log('pipe operator.  Redirects the output of one command to another')
reviewAnswer8.textContent = `- pipe operator.  Redirects the output of one command to another`
console.log('')




//9.
reviewQuestion9.textContent = '9. stdin'
console.log('9. stdin')
console.log('standard input.  Identifies a variable as a standard input element')

reviewAnswer9.textContent = `- standard input.  Identifies a variable as a standard input element`
console.log('')




//10.
reviewQuestion10.textContent = '10. env | grep variable'
console.log('10. env | grep variable')
console.log('translates to " displays the the environment and pipe (filter) the output to show a global regular expression print containing the variable')

reviewAnswer10.textContent = `- translates to " displays the the environment and pipe (filter) the output to show a global regular expression printcontaining the variable`
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
codewarsQuestion1.textContent = '1. sale - write a function that gives a 3 for to deal'
console.log('1. sale - write a function that gives a 3 for to deal')
console.log(`
let sale = (price, count) => {
    let discount = Math.floor(count / 3) * price
    let total = (price * count) - discount;
    console.log(total)
}
sale(2, 3)
`)

codewarsAnswer1.textContent = `
let sale = (price, count) => {
    let discount = Math.floor(count / 3) * price
    let total = (price * count) - discount;
    console.log(total)
}
sale(2, 3)
`

let sale = (price, count) => {
    let discount = Math.floor(count / 3) * price
    let total = (price * count) - discount;
    console.log(total)
}
sale(2, 3)

console.log('')




//2.
codewarsQuestion2.textContent = '2. Count by X - write a function with two arguements: number, and multiple. Return an array of elements is divisible by your multiplier arguement'
console.log('2. Count by X - write a function with two arguements: number, and multiple. Return an array of elements is divisible by your multiplier arguement')
console.log(`
let multipleOfX = (n, m) => {
    let arr = [];
    for(let i = 1; i * m <= n; i++) {
        arr.push(i * m)
    }
    console.log(arr)
}
multipleOfX(10, 2)
`)

codewarsAnswer2.textContent = `
let multipleOfX = (n, m) => {
    let arr = [];
    for(let i = 1; i * m <= n; i++) {
        arr.push(i * m)
    }
    console.log(arr)
}
multipleOfX(10, 2)
`

let multipleOfX = (n, m) => {
    let arr = [];
    for(let i = 1; i * m <= n; i++) {
        arr.push(i * m)
    }
    console.log(arr)
}
multipleOfX(10, 2)

console.log('')




//3.
codewarsQuestion3.textContent = '3. filter the number - write a function that filters through a string and returns any numbers in the string in the order they appear'
console.log('3. filter the number - write a function that filters through a string and returns any numbers in the string in the order they appear')
console.log(`
let filterNum = (string) => {
    let filtered = string.split('').filter(char => {
        let num = /[0-9]/ig;
        if(char.match(num)) {
           return num
        }
    })
    console.log(filtered)
}
filterNum('h3110')
`)

codewarsAnswer3.textContent = `
let filterNum = (string) => {
    let filtered = string.split('').filter(char => {
        let num = /[0-9]/ig;
        if(char.match(num)) {
           return num
        }
    })
    console.log(filtered)
}
filterNum('h3110')
`

let filterNum = (string) => {
    let filtered = string.split('').filter(char => {
        let num = /[0-9]/ig;
        if(char.match(num)) {
           return num
        }
    })
    console.log(filtered)
}
filterNum('h3110')

console.log('')





//4.
codewarsQuestion4.textContent = '4. Friend or foe - write a function that returns a list of names with exactly 4 letters'
console.log('4. Friend or foe - write a function that returns a list of names with exactly 4 letters')
console.log(`
let friendOrFoe = (list) => {
    let friends = []
    for(let i = 0; i < list.length; i++) {
        if(list[i].length === 4) {
            friends.push(list[i])
        }
    }
    console.log(list)
    console.log(friends)
`)

codewarsAnswer4.textContent = `
let friendOrFoe = (list) => {
    let friends = []
    for(let i = 0; i < list.length; i++) {
        if(list[i].length === 4) {
            friends.push(list[i])
        }
    }
    console.log(list)
    console.log(friends)
`

let friendOrFoe = (list) => {
    let friends = []
    for(let i = 0; i < list.length; i++) {
        if(list[i].length === 4) {
            friends.push(list[i])
        }
    }
    console.log(list)
    console.log(friends)
}
friendOrFoe(['tim', 'james', 'tara', 'mary'])

console.log('')





//5.
codewarsQuestion5.textContent = '5. max multiples - given a divisor and a bound, write a function that finds the largest number that is less than the bound, greater than 0 and divisible by the divisor'
console.log('5. max multiples - given a divisor and a bound, write a function that finds the largest number that is less than the bound, greater than 0 and divisible by the divisor')
console.log(`
let maxMultiiples = (divisor, bound) => {
    let multiples = []
    for(let i = 0; i * divisor <= bound; i++) {
        multiples.push(i * divisor)
    }
    console.log(multiples[multiples.length - 1])
}
maxMultiiples(9, 100)
`)

codewarsAnswer5.textContent = `
let maxMultiiples = (divisor, bound) => {
    let multiples = []
    for(let i = 0; i * divisor <= bound; i++) {
        multiples.push(i * divisor)
    }
    console.log(multiples[multiples.length - 1])
}
maxMultiiples(9, 100)
`

let maxMultiiples = (divisor, bound) => {
    let multiples = []
    for(let i = 0; i * divisor <= bound; i++) {
        multiples.push(i * divisor)
    }
    console.log(multiples[multiples.length - 1])
}
maxMultiiples(9, 100)

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










