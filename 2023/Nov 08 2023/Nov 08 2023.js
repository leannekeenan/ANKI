/*ANKI Review: */
console.log('ANKI Review: Git Bash')
//1.
console.log('1. GUI')
console.log('Graphic User Interface.  A visual icon that represents a file, folder, program or software on a desktop')
console.log('')

//2.
console.log('2. touch')
console.log('a command used in the desktop powershell to create new files or update the timestamp of existing files. ')
console.log('')

//3.
console.log('3. cd ~')
console.log('change directory to main/home/containing directory')
console.log('')

//4.
console.log('4. ls -la')
console.log('list show list all.  Command used to show all content of a file including private/hidden files, timestamps, directories, etc. in long format')
console.log('')

//5.
console.log('5. rm -r')
console.log('remove recursive. removes a specified directory including all if its files and subdirectories within it')
console.log('')

//6.
console.log('6. git config --global user.name "User Name"')
console.log('Used to identify the author of a commit on a GitHub account.')
console.log('')

//7.
console.log('7. git config --global user.email "User@email.com')
console.log('Used to identify the author email address of a commit on a GitHub account')
console.log('')

//8.
console.log('8. ls')
console.log('list show.  Shows a list of all content within a directory that is not hidden, protected or private')
console.log('')

//9.
console.log('9. ls -l')
console.log('Shows a list of all content within a directory including hidden, protected or private in long format (showing last modification, size, etc.')
console.log('')

//10.
console.log('10. rm -rf')
console.log('remove -recursive force.  Forcefully removes a directory and its containing subdirectories and files.  This must be used with caution as the files can not be recoveried.')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. Remove String Spaces')
let str = 'the quick sly fox jumped over the lazy brown dog'
function removeStringSpaces(str) {
    console.log(str.replaceAll(" ", ""))
}
removeStringSpaces(str)
console.log('')

//2.
console.log('2. Vowel Count')
function vowelCount(str) {
    let vowels = /[aeiou]/ig;
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(vowels)) {
            count ++
        }
    }
    console.log(count)
}
vowelCount(str)
console.log('')

//3.
console.log('3. is it a palendrome')
function palemdrome(str) {
    if(str.toLowerCase() === str.split('').reverse().join('').toLowerCase()) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
console.log('')
palemdrome('moM');
palemdrome('dad');
palemdrome('kid')
//4.
console.log('4. Abbreviate a two word name')
function abbreviate(str) {
    let names = str.split(' ')
    let initials = ''
    for(let i = 0; i < names.length; i++) {
        initials += names[i].charAt(0).toUpperCase()
        if (i < names.length - 1) {
            initials += '.';
        }
    }
    console.log(initials)
}
abbreviate('Leanne Michelle Keenan')
console.log('')

//5.
console.log('5. points per game')
function Player(name, team, ppg) {
    this.name = name,
    this.team = team,
    this.ppg = ppg
}

function sumPPG(p1, p2) {
    console.log(p1.ppg + p2.ppg)
}
let Mike = new Player('Mike', 'Raptors', 10)
let Kobe = new Player('Kobe', 'Celtics', 4)
sumPPG(Mike, Kobe)
console.log('')
