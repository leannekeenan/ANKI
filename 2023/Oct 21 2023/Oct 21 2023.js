/*ANKi Review: Git Bash*/
//1.
console.log('ls -l')
console.log('list show long.  This command will show in detail the of a file - shows detailed information about each file and directory including: file type, permissions, number of hard links, owner, group, size, and time of last modification')
console.log('')

//2.
console.log('git config --global user.email')
console.log('used as a signature for content pushed to a github repository.  Allows other dewvelopers to see your contributions')
console.log('')

//3.
console.log('ls -la')
console.log('list show - list all is a command used to show all public and private or hidden files or directories within a file or directory')
console.log('')

//4.
console.log('ls')
console.log('list show.  Shows public directories and files within a directory or file')
console.log('')

//5.
console.log('rm -rf')
console.log('remove file recursive force.  This is a command that will remove a file / directory as well as all associated files and directories, including protected files')
console.log('')

//6.
console.log('git config --global user.name')
console.log('Provides a name to associate with work pushed to github repositories to provide accreditation to your contributions')
console.log('')

//7.
console.log('cd ~')
console.log('will change directory to main/home directory')
console.log('')

//8.
console.log('rm -r')
console.log('remove recursive.  Will remove directory and its content, but not associated files outside of its main directory')
console.log('')

//9.
console.log('touch')
console.log('touch is a command that will create new files in the specified directory')
console.log('')

//10.
console.log('mkdir')
console.log('make directory.  creates a new directory')
console.log('')



/*Codewars Challenge*/
//1.
console.log('Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.')
function reverseList(pokemon) {
    let reverse = pokemon.reverse()
    console.log(reverse)
}

reverseList(['pika', 'char', 'bulba', 'weedle'])
console.log('')

//2.
console.log('filter the number.  Pass a string through your function.  If the string contains a number, push it to a new array')
function filterTheNum(str) {
    let result = []
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[0-9]/g)) {
            result.push(str[i])
        }
    }
    console.log(result)
}

filterTheNum('h3110')
console.log('')

//3.
console.log('Jaden Casting Strings')
function capitalizeAllWords(str) {
    let result = str.split(' ').map(word => 
        word.replace(word[0], word[0].toUpperCase())).join(' ');
    console.log(result)
}

capitalizeAllWords('hello everyone')
console.log('')

//4.
console.log('if you cant sleep, count sheep')
function countSheep(num) {
    let result = []
    for(let i = 1; i <= num; i++) {
        result.push(`${i} sheep... `)
    }
    console.log(result)
}
countSheep(3)
console.log('')

//5.
console.log('You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party')
function pokemon(num) {
    for(let i = 1; i <= num; i++) {
        console.log(`pokemon # ${i}, I choose you!`)
    }
}
pokemon(3)
console.log('')
