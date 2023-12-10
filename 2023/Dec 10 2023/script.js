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







reviewQuestion1.textContent = '1. cd ~'
reviewAnswer1.textContent = ' - changes to the home directory'
reviewQuestion2.textContent = '2. git config --global user.name "userName"'
reviewAnswer2.textContent = ' - used as a signature for your gitHub account and used to identify you as the creator of the content'
reviewQuestion3.textContent = '3. ls -l'
reviewAnswer3.textContent = ' - list show long format.  This command will show the content of a directory including details not normally included such as last modification, file sizes, file type and other details'
reviewQuestion4.textContent = '4. rm'
reviewAnswer4.textContent = ' - remove command.  USed to remove files and directories.'
reviewQuestion5.textContent = '5. clear'
reviewAnswer5.textContent = ' - used to clear the commands on the command line, but does not remove them from the memory therefore the previous executions are still active and can be reaccessed in the panel at any time.'
reviewQuestion6.textContent = '6. code .'
reviewAnswer6.textContent = ' - opens all the file folders in VS code'
reviewQuestion7.textContent = '7. touch'
reviewAnswer7.textContent = ' - creates a new files within a directory - commonly used to change, modify, or remove timestamps'
reviewQuestion8.textContent = '8. rm -r'
reviewAnswer8.textContent = ' - remove recursive.  Removes directories and their associated subdirectories until all associated content is removed'
reviewQuestion9.textContent = '9. rm -rf'
reviewAnswer9.textContent = ' - removes directories and their subdirectories by force, and possibly to the detriment to other associated directories.  Use with caution'
reviewQuestion10.textContent = '10. ls'
reviewAnswer10.textContent = ' - list show.  Shows the basic content of a directory or file including name ans size'


codewarsQuestion1.textContent = '1. Convert Number to Reversed Array of Digits. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.'
//1.
console.log('1. Convert Number to Reversed Array of Digits')
console.log('Given a random non-negative number, you have to return the digits of this number within an array in reverse order.')
let convertNum = (num) => {
    console.log(Number(num.toString().split('').reverse().join('')))
}
convertNum(12345)
convertNum(9876)
console.log('')

codewarsAnswer1.textContent = convertNum



codewarsQuestion2.textContent = '2. remove first and last letter.  Create a function that removes the first and last characters of a string. You\'re given one parameter, the original string. You don\'t have to worry with strings with less than two characters.'
//2.
console.log('2. remove first and last letter')
console.log('Create a function that removes the first and last characters of a string. You\'re given one parameter, the original string. You don\'t have to worry with strings with less than two characters.')

let removeFirstAndLast = (string) => {
    console.log(string.slice(1, -1))
}
removeFirstAndLast('hello')
console.log('')

codewarsAnswer2.textContent = removeFirstAndLast



codewarsQuestion3.textContent = '3. Change String Case. Change the case of each word in the string to upper case'

//3.
console.log('3. Change String Case')
console.log('Change the case of each word in the string to upper case')
let changeCase = (string) => {
    console.log(string.split(' ').map(i => i.replace(i[0], i[0].toUpperCase())).join(''))
}
changeCase('hello')
console.log('')

codewarsAnswer3.textContent = changeCase



codewarsQuestion4.textContent = '4. Clock. Your task is to write a function which returns the time since midnight in milliseconds.'
//4.
console.log('4. Clock')
console.log('Your task is to write a function which returns the time since midnight in milliseconds.')
let clock = (h, m, s) => {
    let hour = h * 3600000;
    let minute = 60000;
    let second = 1000;

    console.log(hour + minute + second)
}

clock(1, 1, 1)
console.log('')

codewarsAnswer4.textContent = clock



codewarsQuestion5.textContent = '5. count characters in a string. count occuring characters in a string'
//5.
console.log('5. count characters in a string')
console.log('count occuring characters in a string')
let countCharacters = (string) => {
    let count = [];
    string.split('').forEach(i => count[i] = (count[i] || 0) + 1)
    console.log(count)
}
countCharacters('hello')
console.log('')
codewarsAnswer5.textContent = countCharacters
















