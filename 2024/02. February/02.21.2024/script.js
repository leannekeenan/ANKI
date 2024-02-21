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
reviewQuestion1.textContent = '1. grep -R'
console.log('1. grep -R')
console.log('global regular expression print recursive - searches all files in a directory and outputs filenames and lines containing matched results')

reviewAnswer1.textContent = `- grep -R stands for global regular expression print recursive.  IT searches all files in a directory and outputs the filenames and lines containing matched results`
console.log('')




//2.
reviewQuestion2.textContent = '2. cd ~'
console.log('2. cd ~')
console.log('change directory to home')

reviewAnswer2.textContent = `- change directory to home`
console.log('')





//3.
reviewQuestion3.textContent = '3. source'
console.log('3. source')
console.log('activates changes in a specified files for the current session without having to close and restart the terminal.  Makes changes available immediately within the current session')

reviewAnswer3.textContent = `- The source command is used to make changes to a specified file in the current session without having to rearart a new session window, allowing the changes to take effect immediately.`
console.log('')




//4.
reviewQuestion4.textContent = '4. "<"'
console.log('4. "<"')
console.log('Takes input from the right and puts it into the program on the left.  Example: $ file < doc.txt puts the doc inside the file ')

reviewAnswer4.textContent = `- Takes input from the right and puts it into the program on the left.  Example: $ file < doc.txt puts the doc inside the file `
console.log('')




//5.
reviewQuestion5.textContent = '5. export'
console.log('5. export')
console.log('Interface command used to make a variable available to all child sessions initiated from the current session.  THIS IS HOW YOU GET VARAIBLES TO PERSIST ACROSS PROGRAMS.  Example: export USER="Jane Doe"')


reviewAnswer5.textContent = `- Interface command used to make a variable available to all child sessions initiated from the current session.  THIS IS HOW YOU GET VARAIBLES TO PERSIST ACROSS PROGRAMS.  Example: $USER="Jane Doe"`
console.log('')




//6.
reviewQuestion6.textContent = '6. rm -r'
console.log('6. rm -r')
console.log('remove recursively.  Removes a directory, its sub directories and related files')

reviewAnswer6.textContent = `- remove recursively.  Removes a directory, its sub directories and related files`
console.log('')




//7.
reviewQuestion7.textContent = '7. HOME'
console.log('7. HOME')
console.log('a variable within an environment variable that displays a path of the home directory')

reviewAnswer7.textContent = `- a variable within an environment variable that displays a path of the home directory`
console.log('')




//8.
reviewQuestion8.textContent = '8. touch'
console.log('8. touch')
console.log('creates a new file withina directory')

reviewAnswer8.textContent = `- creates a new file withina directory`
console.log('')




//9.
reviewQuestion9.textContent = '9. clear'
console.log('9. clear')
console.log('Command used to clear previous commands in the CLI')

reviewAnswer9.textContent = `- Command used to clear previous commands in the CLI`
console.log('')




//10.
reviewQuestion10.textContent = '10. grep -i'
console.log('10. grep -i')
console.log('Global Regular Expression Print, but case sensitive')

reviewAnswer10.textContent = `- Global Regular Expression Print, but case sensitive`
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
codewarsQuestion1.textContent = '1. Abbreviate your name - Write a function that returns the abbreviated version of your name with the letters seperated by a "."'
console.log('1. Abbreviate your name - Write a function that returns the abbreviated version of your name with the letters seperated by a "."')


let abbreviate = (name) => {
    let yourName = name.split(' ')
    let initials = []
    for(let i = 0; i < yourName.length; i++) {
        initials.push(yourName[i][0] + '. ')
    }
    console.log(initials.join(''))
}
abbreviate("Leanne M Keenan")
codewarsAnswer1.textContent = `- let abbreviate = ${abbreviate}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Points Per Game - create two functions:  the first will be a constructor for NBA players using parameters for their name, team, and points scored. The second function will accept the player objects created by the first function and return a sum of their point totals'
console.log('2. Points Per Game - create two functions:  the first will be a constructor for NBA players using parameters for their name, team, and points scored. The second function will accept the player objects created by the first function and return a sum of their point totals')

let pointsPerGame = () =>  {
    function NBA (name, team, points) {
    this.name = name,
    this.team = team,
    this.points = points;
    }

    let p1 = new NBA("player1", 'team1', 181);
    let p2 = new NBA("player2", 'team1', 165);

    let PPG = (p1, p2) => {
        console.log(p1.points + p2.points)
    }
    PPG(p1, p2)
}
pointsPerGame()


codewarsAnswer2.textContent = `let pointsPerGame = ${pointsPerGame}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. '
console.log('3. ')
console.log('')

codewarsAnswer3.textContent = `- `
console.log('')





//4.
codewarsQuestion4.textContent = '4. '
console.log('4. ')
console.log('')

codewarsAnswer4.textContent = `- `
console.log('')





//5.
codewarsQuestion5.textContent = '5. '
console.log('5. ')
console.log('')

codewarsAnswer5.textContent = `- `
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










