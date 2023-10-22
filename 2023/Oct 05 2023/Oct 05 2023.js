/*ANKI Review: Git Bash commands*/

//1
console.log('CLI')
console.log('A CLI is a command line interface.  This is a program where developers can enter specialized commands and execute specific functions without the use of a desktop GUI')
console.log('')

//2
console.log('rm -rf')
console.log('rm -rf is a forceful removal of a file and its recursive content, meaning anytyhing connected with that file is also removed.  This command requires you to be extra careful because files can not be retrieved again if this command is used and it can cause a lot of problems in your code')
console.log('')

//3
console.log('What is the terminal')
console.log('The terminal is the CLI used to connect with a computers OS, alloowing for commands to be entered to manipulate the content of your computer')
console.log('')

//4
console.log('mkdir')
console.log('make directory. Creates a directory path to a specified location')
console.log('')

//5
console.log('ls')
console.log('list show.  Shows the files and directories of the current directory, except for private and protected files')
console.log('')

//6
console.log('cd ~')
console.log('cd ~ is change directory from current to the home directory')
console.log('')

//7
console.log('git config --global user.name')
console.log('This is a command used to establish your Global User Name which is used as a signature when uploading to a git repository')
console.log('')

//8
console.log('git config --global user.email')
console.log('Sets global email address associated with Git configuration')
console.log('')

//9
console.log('ls -l')
console.log(' list show long.  Will show the content of a directory in long format including file details')
console.log()

//10
console.log('touch')
console.log('The touch command will create a new file in a directory folder')
console.log('')

/*Codewars Challenges*/

//1
console.log('Sum of positive.  You get an array of numbers, return the sum of all of the positives ones.Note: if there is nothing to sum, the sum is default to 0.');
function sumOfPositive(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(num > 0) {
            result.push(num)
        }  
    }
    console.log(result.reduce((a, b) => a + b, 0))
}

sumOfPositive([1, 2, 3, 4, -5])
console.log('')

//2
console.log('Return a new array consisting of elements which are multiple of their own index in input array')
function indexIsMultiple(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let index = arr.indexOf(num)
        if(num % index === 0) {
            result.push(num)
        }
    }
    console.log(result)
}
indexIsMultiple([1, 5, 8, 9, 10, 43, 36, 42, 80])
console.log('')

//3
console.log('Filter the Geese. Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the \'geese\' removed. The geese are any strings in the following array, which is pre-populated in your solution:["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]')

function filterGeese(arr) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = arr.filter((element) => !geese.includes(element))
    console.log(result)
}
filterGeese(["Roman Tufted", "Toulouse", 'blackbird'])
console.log('')

//4
console.log('If you can sleep, count sheep.  Given a non-negative integer,return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.')

function countSheep(num) {
    let result = []
    for(let i = 1; i <= num; i++) {
        result.push(`${i} sheep...`)
    }
    console.log(result)
}
countSheep(3)
console.log('')

//5
console.log('Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.')

function aOrB(a, b) {
    if(Math.pow(a.reduce((a, b) => a + b, 0), 2) > Math.pow(b.reduce((a, b) => a + b, 0), 3)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
    
}
aOrB([6, 7], [2, 3])
console.log('')