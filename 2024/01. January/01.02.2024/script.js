/*ANKI Review: */
console.log('ANKI Review: Git Bash Review')
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
reviewQuestion1.textContent = '1. cd'
console.log('1. cd')
console.log('"cd" stands for change directory.  Allows users to move from one directory to another')

reviewAnswer1.textContent = ' - "cd" stands for change directory.  Allows users to move from one directory to another'
console.log('')




//2.
reviewQuestion2.textContent = '2. git config --global user.name "username"'
console.log('2. git config --global user.name "username"')
console.log('"git config --global user.name "username"" is used to provide a digital signature to your GitHub content when pushing to your directories, illustrating ownership and data like last modification timestamp')

reviewAnswer2.textContent = ' - "git config --global user.name "username"" is used to provide a digital signature to your GitHub content when pushing to your directories, illustrating ownership and data like last modification timestamp'
console.log('')





//3.
reviewQuestion3.textContent = '3. ls -l'
console.log('3. ls -l')
console.log('"ls -l" stands for list show -long format.  This will show an extended version of a standard list show, meaning it will include content like the last timestamp, file size, and other non private, but hidden content')

reviewAnswer3.textContent = ' - "ls -l" stands for list show -long format.  This will show an extended version of a standard list show, meaning it will include content like the last timestamp, file size, and other non private, but hidden content'
console.log('')




//4.
reviewQuestion4.textContent = '4. ls'
console.log('4. ls')
console.log('list show.  Shows the common details of a directory')

reviewAnswer4.textContent = ' - list show.  Shows the common details of a directory'
console.log('')




//5.
reviewQuestion5.textContent = '5. mkdir'
console.log('5. mkdir')
console.log('"mkdir" stands for make directory.  Creates a new directory within the current location (folder or directory)')


reviewAnswer5.textContent = ' - "mkdir" stands for make directory.  Creates a new directory within the current location (folder or directory)'
console.log('')




//6.
reviewQuestion6.textContent = '6. code .'
console.log('6. code .')
console.log('"code . opens content in VS code')

reviewAnswer6.textContent = ' - "code . opens content in VS code'
console.log('')




//7.
reviewQuestion7.textContent = '7. touch'
console.log('7. touch')
console.log('"touch" creates a new file within a directory')

reviewAnswer7.textContent = ' - "touch" creates a new file within a directory'
console.log('')




//8.
reviewQuestion8.textContent = '8. rm -r'
console.log('8. rm -r')
console.log('"rm -r" is remove recursive.  It deletes both files and subdirectories within the specified directory and continues to do so for all subdirectories')

reviewAnswer8.textContent = ' - "rm -r" is remove recursive.  It deletes both files and subdirectories within the specified directory and continues to do so for all subdirectories'
console.log('')




//9.
reviewQuestion9.textContent = '9. ls -la'
console.log('9. ls -la')
console.log('"ls -la" stands for list show - list all.  Shows all directory content including hidden files')

reviewAnswer9.textContent = ' - "ls -la" stands for list show - list all.  Shows all directory content including hidden files'
console.log('')




//10.
reviewQuestion10.textContent = '10. What is the terminal?'
console.log('10. What is the terminal?')
console.log('A CLI (Command Line Interface) program window that grants users access to the computers OS without the need for a GUI')

reviewAnswer10.textContent = ' - A CLI (Command Line Interface) program window that grants users access to the computers OS without the need for a GUI'
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
codewarsQuestion1.textContent = '1. Return Negative'
console.log('1. Return Negative')


let returnNegative = (num) => {
    let negative;
    if(num > 0) {
        console.log(negative = num * -1)
    }
    else {
        console.log(num)
    }

}
returnNegative(-20)
codewarsAnswer1.textContent = `let returnNegative = ${returnNegative}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. How good are you? calculate the average of the class points and compare your score to the average'
console.log('2. How good are you? calculate the average of the class points and compare your score to the average')

let classGrades = (array, num) => {
    let classAverage = array.reduce((a, b) => (a + b), 0)/ array.length
    if(num > classAverage) {
        console.log(true)
    }
    if(num < classAverage || num === classAverage) {
        console.log(false)
    }
}
classGrades([67, 78, 89], 90)

codewarsAnswer2.textContent = `let classGrades = ${classGrades}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. clock.  Translate hours minutes and seconds to milliseconds passed midnight'
console.log('3. clock.  Translate hours minutes and seconds to milliseconds passed midnight')
let clock = (h, m, s) => {
    let hour = h * 3600000;
    let minute = m * 60000;
    let second = s * 1000;
    console.log(hour + minute + second)
}
clock(1, 1, 1)

codewarsAnswer3.textContent = `let clock = ${clock}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Summation.  Write a program that finds the summation of every number from 1 to num'
console.log('4. Summation.  Write a program that finds the summation of every number from 1 to num')

let summation = (n) => {
    let total = 0
    for(let i = 0; i <= n; i++) {
        total += i
    }
    console.log(total)
}
summation(3)

codewarsAnswer4.textContent = `let summation = ${summation}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Sum of Multiples. Find the sum of all multiples of n below m'
console.log('5. Sum of Multiples. Find the sum of all multiples of n below m')

let sumOfMultiples = (n, m) => {
    let total = 0
    for(let i = 0; m * i <= n; i++) {
        total += i * m; 
    }
    console.log(total)
}
sumOfMultiples(10, 5)

codewarsAnswer5.textContent = `let sumOfMultiples = ${sumOfMultiples}`
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










