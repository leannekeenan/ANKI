/*ANKI Review: */
console.log('ANKI Review: CLI Terminal Commands and Definitions')
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
reviewQuestion1.textContent = '1. nano'
console.log('1. nano')
console.log('a command line text editor')

reviewAnswer1.textContent = `- a command line text editor`
console.log('')




//2.
reviewQuestion2.textContent = '2.  | '
console.log('2.  | ')
console.log('Known as the pipe operator, is used to redirect the output of one command to another, so " command1 | command2 " will set the output of command1 in command2, creating a chain of commands to preform complex tasks')

reviewAnswer2.textContent = `- Known as the pipe operator, is used to redirect the output of one command to another, so " command1 | command2 " will set the output of command1 in command2, creating a chain of commands to preform complex tasks`
console.log('')





//3.
reviewQuestion3.textContent = '3. alias'
console.log('3. alias')
console.log('a custom nickname for a series of commands.  Allows for shortcuts to be made to frequently used complex commands')

reviewAnswer3.textContent = `- a custom nickname for a series of commands.  Allows for shortcuts to be made to frequently used complex commands`
console.log('')




//4.
reviewQuestion4.textContent = '4. mv'
console.log('4. mv')
console.log('move.  moves file or directory to specified location. Syntax: mv [options] source destination')

reviewAnswer4.textContent = `- move.  moves file or directory to specified location. Syntax: mv [options] source destination`
console.log('')




//5.
reviewQuestion5.textContent = '5. grep -RI'
console.log('5. grep -Rl')
console.log('global regular expression print -recursive line match.  Recursively searches for files containing a specified pattern within a directory and its subdirectories while printing the only names of the files that contain a match. Good for finding files that contain a specific pattern, but the data is irrelevant')


reviewAnswer5.textContent = `- global regular expression print -recursive line match.  Recursively searches for files containing a specified pattern within a directory and its subdirectories while printing the only names of the files that contain a match. Good for finding files that contain a specific pattern, but the data is irrelevant`
console.log('')




//6.
reviewQuestion6.textContent = '6. PATH'
console.log('6. PATH')
console.log('an environment variable that lislts directories containing executable programs.  Allows you to run commands from any directory without having to specify the full path. PATH will output a list of directories where executable files are located, including system wide directories.')

reviewAnswer6.textContent = `- an environment variable that lislts directories containing executable programs.  Allows you to run commands from any directory without having to specify the full path. PATH will output a list of directories where executable files are located, including system wide directories.`
console.log('')




//7.
reviewQuestion7.textContent = '7. env'
console.log('7. env')
console.log('environment. Used to display or modify the current environment or run a command in a modified one')

reviewAnswer7.textContent = `- environment. Used to display or modify the current environment or run a command in a modified one`
console.log('')




//8.
reviewQuestion8.textContent = '8. ~/.bash_porfile'
console.log('8. ~/.bash_porfile')
console.log('~/.bash_profile essentially translates to "the file named .bash_profile located in the user\'s home directory')

reviewAnswer8.textContent = `- ~/.bash_profile essentially translates to "the file named .bash_profile located in the user's home directory`
console.log('')




//9.
reviewQuestion9.textContent = '9. env | grep variable'
console.log('9. env | grep variable')
console.log('shows the environment variables which are piped to the global regular expression print as a filter searching for patterns through the lines to find a match to the provided variable parameter')

reviewAnswer9.textContent = `- shows the environment variables which are piped to the global regular expression print as a filter searching for patterns through the lines to find a match to the provided variable parameter`
console.log('')




//10.
reviewQuestion10.textContent = '10. stderr'
console.log('10. stderr')
console.log('standard error.  a CLI error message informing you of an error')

reviewAnswer10.textContent = `- standard error.  a CLI error message informing you of an error`
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
codewarsQuestion1.textContent = '1. Count by X - write a function with two arguements that will return an array of the multiples of a value. '
console.log('1. Count by X - write a function with two arguements that will return an array of the multiples of a value. ')

let multiplesOfX = (multiple, X) => {
    let array = []
    for(let i = 1; i * multiple <= X; i++) {
        array += multiple * i + ' '
    }
    console.log(array)
}
multiplesOfX(9, 237)

codewarsAnswer1.textContent = `- let multiplesOfX = ${multiplesOfX}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Casting strings - write a function that changes the case of the first letter of each word to upper case'
console.log('2. Casting strings - write a function that changes the case of the first letter of each word to upper case')


let casing = (string) => {
    let newString = string.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
    console.log(newString)
}
   
casing('hello world')

codewarsAnswer2.textContent = `- let casting = ${casing}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Max Multiples - given a divisor and a bound, find the largest integer that is divisible by the divisor, is less than or equal to the bound, and is greater than 0'
console.log('3. Max Multiples - given a divisor and a bound, find the largest integer that is divisible by the divisor, is less than or equal to the bound, and is greater than 0')

let maxMultiple = (d, b) => {
    for(let i = 0; i * d <= b; i++) {
        let total = Math.floor(b / d) * d;
        console.log(total)
    }
}
maxMultiple(9, 100)
codewarsAnswer3.textContent = `- let maxMultiple = ${maxMultiple}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Remove Duplicates From a List - write a function that rempves duplicates from  a array'
console.log('4. Remove Duplicates From a List - write a function that rempves duplicates from  a array')

let removeDuplicates = (list) => {
    let removedDuplicates = new Set([...list])
    console.log(removedDuplicates)
}

removeDuplicates([1, 2, 1, 3, 1, 4, 1, 5])
codewarsAnswer4.textContent = `- let removedDuplicates = ${removeDuplicates}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Do ... While loop - write a function that accepts a string and a number.  Add an asterisk to the side pf the string based on the even or odd value: to the left if its odd, and the right if its even'
console.log('5. Do ... While loop - write a function that accepts a string and a number.  Add an asterisk to the side pf the string based on the even or odd value: to the left if its odd, and the right if its even')

let asterisk = (string, num) => {
    do {
        if(num % 2 === 0) {
            string = `${string} *`
        }
        else {
            string = `* ${string}`
        }
        num--
    }
    while(num > 0)

    console.log(string)
}
asterisk('hello', 5)

codewarsAnswer5.textContent = `- let asterisk = ${asterisk}`
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










