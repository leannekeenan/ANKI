/*ANKI Review: */
console.log('ANKI Review: Git Bash')
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
reviewQuestion1.textContent = '1. CLI'
console.log('1. CLI')
console.log('Command Line Interface.  A program that allows users to acces the OS and propgrams within their computer without the use of a GUI (Graphic User Interface)')

reviewAnswer1.textContent = ' - Command Line Interface.  A program that allows users to acces the OS and propgrams within their computer without the use of a GUI (Graphic User Interface)'
console.log('')




//2.
reviewQuestion2.textContent = '2. cd ..'
console.log('2. cd ..')
console.log('cd .. is change directory but it goes to the parent directory of the current file')

reviewAnswer2.textContent = ' - cd .. is change directory but it goes to the parent directory of the current file'
console.log('')





//3.
reviewQuestion3.textContent = '3. mkdir'
console.log('3. mkdir')
console.log('mkdir is make directory.  It is used to create a new directory')

reviewAnswer3.textContent = ' - mkdir is make directory.  It is used to create a new directory'
console.log('')




//4.
reviewQuestion4.textContent = '4. touch'
console.log('4. touch')
console.log('touch is a command that creates a new file ')

reviewAnswer4.textContent = ' - touch is a command that creates a new file '
console.log('')




//5.
reviewQuestion5.textContent = '5. rm -r'
console.log('5. rm -r')
console.log('remove recursive.  Used to remove directories and connected subdirectories')


reviewAnswer5.textContent = ' -remove recursive.  Used to remove directories and connected subdirectories '
console.log('')




//6.
reviewQuestion6.textContent = '6. code .'
console.log('6. code .')
console.log('opens file in VS Code')

reviewAnswer6.textContent = ' - opens file in VS Code'
console.log('')




//7.
reviewQuestion7.textContent = '7. rm'
console.log('7. rm')
console.log('rm is remove and is used to remove directories and files ')

reviewAnswer7.textContent = ' - rm is remove and is used to remove directories and files '
console.log('')




//8.
reviewQuestion8.textContent = '8. rm -rf'
console.log('8. rm -rf')
console.log('rm -rf is remove recursive force.  This forces the removal of a file or directoy.  Use with caution')

reviewAnswer8.textContent = ' - rm -rf is remove recursive force.  This forces the removal of a file or directoy.  Use with caution'
console.log('')




//9.
reviewQuestion9.textContent = '9. cd~'
console.log('9. cd~')
console.log('return back to hoome directory')

reviewAnswer9.textContent = ' - return back to hoome directory'
console.log('')




//10.
reviewQuestion10.textContent = '10. git config --global user.name "Leanne Keenan"'
console.log('10. git config --global user.name "Leanne Keenan"')
console.log('git config --global user.name is used to set your user name as a signature of sorts on content you upload to GitHub - like a signature to let people know what you have worked on')

reviewAnswer10.textContent = ' - git config --global user.name is used to set your user name as a signature of sorts on content you upload to GitHub - like a signature to let people know what you have worked on'
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
codewarsQuestion1.textContent = '1. summation - write a program that finds the summation of every number from 1 to the defined number.'
console.log('1. summation - write a program that finds the summation of every number from 1 to the defined number.')

let summation = (num) => {
    let sum = 0
    for(let i = 1; i <= num; i++) {
        sum += i
    }
    console.log(sum)
}
summation(10)

codewarsAnswer1.textContent = `let summation = ${summation}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. write a function th check if a string contains the word hello in a different language'
console.log('2. write a function th check if a string contains the word hello in a different language')

let sayHello = (string) => {
    let greeting = [
        english = 'hello',
        french = "bonjour",
        spanish = "hola"
    ]
    for(let i = 0; i < greeting.length; i++) {
        if(string.includes(greeting[i])) {
            console.log('they said hello')
            return
        }
        else {
            console.log('they said something else')
            return
        }
    }
}
sayHello('hello')

codewarsAnswer2.textContent = `let sayHello = ${sayHello}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Remove Zeros - if a number ends with a zero, remove it'
console.log('3. Remove Zeros - if a number ends with a zero, remove it')

let removeZeros = (num) => {
    while(num % 10 === 0 && num !== 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(100)

codewarsAnswer3.textContent = ' - '
console.log('')





//4.
codewarsQuestion4.textContent = '4. Find Multiples of a Number'
console.log('4. Find Multiples of a Number')

let findMultiplesOfANumber = (n, m) => {
    let multiples = []
    for(let i = 0; i * m <= n; i++) {
        multiples.push(i * m)
    }
    console.log(multiples)
}
findMultiplesOfANumber(10, 2)

codewarsAnswer4.textContent = ' - '
console.log('')





//5.
codewarsQuestion5.textContent = '5. Abbreviation'
console.log('5. Abbreviation')

function abbreviate(str) {
    let names = str.split(' ')
    let initials = []
    for(let i = 0; i < names.length; i++) {
    let result = names[i][0] + '.'
    initials.push(result)
    }
    console.log(initials.join(''))
    }
    abbreviate('Leanne Keenan')

codewarsAnswer5.textContent = ' - '
console.log('')



// codewarsQuestion6.textContent = '6.'
// codewarsAnswer6.textContent = ' - '
// codewarsQuestion7.textContent = '7.'
// codewarsAnswer7.textContent = ' - '
// codewarsQuestion8.textContent = '8.'
// codewarsAnswer8.textContent = ' - '
// codewarsQuestion9.textContent = '9.'
// codewarsAnswer9.textContent = ' - '
// codewarsQuestion10.textContent = '10.'
// codewarsAnswer10.textContent = ' - '










