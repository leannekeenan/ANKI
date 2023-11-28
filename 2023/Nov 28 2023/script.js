/*ANKI Review: Git Bash Commands*/
console.log('ANKI Review: Git Bash Commands')
//1.
console.log('1. touch')
console.log('creates a new file within a directory or modify the timestamp of a finle within the current directory')
console.log('')

//2.
console.log('2. clear')
console.log('clears the commands from the command line, but does not remove the effects of previous commands')
console.log('')

//3.
console.log('3. ls -l')
console.log('list show -long format')
console.log('shows content of a document of file within a directory including details like size, type, timestamp, etc.')

//4.
console.log('4. code .')
console.log('opend document or file in VS code editor')
console.log('')

//5.
console.log('5. CLI')
console.log('Command Line Interface')
console.log('A portal where users can interact with the content of on OS without the use of a GUI')

//6.
console.log('6. git config --global user.name "[your_name]')
console.log('Used like a signature to atttach ownership to content uploaded to GitHub')
console.log('')

//7.
console.log('7. rm -r')
console.log('remove recursively.  removes directories and subdirectories of content in order of relation to the removed file')
console.log('')

//8.
console.log('8. cd ..')
console.log('change directory to parent.  This command moves the user from the current directory to the directory that holds it.  If there is no containing directory, the command places the user in the directory of the desktop')
console.log('')

//9.
console.log('9. ls')
console.log('list show. Shows a list of the content of a directory (excluding protected files)')
console.log('')

//10.
console.log('10. rm')
console.log('remove.  removes files and directories')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. Filter the geese')
console.log('Write a function that filters out provided geese types')
let filterGeese = (list) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    console.log(list.filter((birds) => !geese.includes(birds)))
}
filterGeese(["Blackbird","African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher", "Red Tailed Hawk"])
console.log('')

//2.
console.log('2. count characters in a string')
console.log('write a function that accepts a string and returns the count of each character in the string')
let countCharacters = (string) => {
    for(let i = 0; i < string.length; i++) {
        let count = string.split(string[i]).length - 1
        console.log(string[i] + ' : ' + count)
    }
}
countCharacters('hello')
console.log('')

//3.
console.log('3. ATM')
console.log('Write a ATM function thet returns the least amount of banknotes to honor a withdrawl')
let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let count = 0
    for(let i = 0; i < banknotes.length; i++) {
        count += Math.floor(withdrawl / banknotes[i])
        withdrawl %= banknotes[i]
    }
    console.log(count)
}
ATM(101)
console.log('')

//4.
console.log('4. Total Amount of Points')
console.log('Write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.')

let totalPoints = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let ourScore = arr[i][0]
        let opponentScore = arr[i][2]
        console.log([...ourScore] + ' : ' + [...opponentScore])
        if([...ourScore] >= 3) {
            console.log('we win')
        }
        else if([...opponentScore] >= 3) {
            console.log('they won')
        }
    }
}
totalPoints(["3:1", "2:2", "0:1", "2:3"])
console.log('')

//5.
console.log('5. Jaden Casting Strings')
console.log('convert a string to all capital letters')
let capitalize = (string) => {
   let speech = string.split(' ').map(words => words.charAt(0).toUpperCase() + string.slice(1)).join(' ')
   console.log(speech)
}
capitalize('hello')
console.log('')
