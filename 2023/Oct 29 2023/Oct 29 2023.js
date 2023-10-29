/*ANKI Review: Git Bash*/
console.log('ANKI Review: Git Bash Commands')
//1.
console.log('clear')
console.log('a shell command used to visually clear the current command propmpt window of previous commands')
console.log('')

//2.
console.log('touch')
console.log('a shell command that creates a new file within a directory')
console.log('')

//3.
console.log('rm -rf')
console.log('remove recursive files by force.  A command used in the terminal to remove a folder and its relevant content including any subdirectories and files, without asking for confirmation')
console.log('')

//4.
console.log('rm -r')
console.log('remove -recursive.  Shell command used to remove files within a directory')
console.log('')

//5.
console.log('git config --global user.email')
console.log('used to set your email address as the global contact for yourself and acts as a identifier of the content creator on your GitGub account')
console.log('')

//6.
console.log('ls -l')
console.log('list show -long version.  Will show all of the available content of a directory including file permissions')
console.log('')

//7.
console.log('cd ~')
console.log('Change directory to containing directory, or the home directory of the current directory')
console.log('')

//8.
console.log('ls')
console.log('list show.  Shows names of files and directories within the directory but does not show permissions or hidden files')
console.log('')

//9.
console.log('git config --global user..name')
console.log('Used as a signature to identify you as the author of commits in GitHub')
console.log('')

//10.
console.log('ls -la')
console.log('list show -list all is a command that will show everything within a directory')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('Count Characters in a String - The main idea is to count all the occurring characters in a string. If you have a string like aba = {"a": 2, "b": 1}')
function countCharacters(str) {
    let total = [];
    for(let i = 0; i < str.length; i++) {
        let characters = str.charAt(i)//let characters vriable equal the characters at the position of 'i' within the string 
        if(total[characters]) { //if multiple of the same characters is found within the string..
            total[characters]++ //..the tally value increases by one
        }
        else {
            total[characters] = 1 //else the value is set to one
        }
    }
    console.log(total)
}
countCharacters('hello ')
console.log('')

//2.
console.log('going to the cinema')
function cinema(card, ticket, percent) {
    let A = 0
    let B = card;
    let visits = 0;
    
    while(Math.ceil(B) >= Math.ceil(A)) {
    visits ++;
    A += ticket * 0.9;
    B += ticket * Math.pow(percent, visits)
    }
    console.log(visits)
    }

cinema(100, 10, .25)
console.log('')

//3.
console.log('Count LowerCase Letters')
function countLowerCaseLetters(str) {
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] ===str[i].toLowerCase()) {
            count++
        }
        if(str[i] === ' ') {
            count--
        }
    }
    console.log(count)
}
countLowerCaseLetters('hello there')
console.log('')

//4.
console.log('Make Uppercase')
function changeCase(str) {
    console.log(str.toUpperCase())
}

changeCase('HeLlo ThErE')
console.log('')

//5.
console.log('sum diff or arr')
function sumDiff(arr) {
   let sorted =  arr.sort((a, b) => b - a)
   let total = 0;
   for(let i = 0; i < sorted.length - 1; i++) {
    total += sorted[i] - sorted[i + 1]
   }
    console.log(total)
}
sumDiff([2, 5, 1, 7, 9, 5])
console.log('')
