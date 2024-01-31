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
reviewQuestion1.textContent = '1. touch'
console.log('1. touch')
console.log('Git Bash command that creates nre files within a directory')

reviewAnswer1.textContent = `- Git Bash command that creates nre files within a directory`
console.log('')




//2.
reviewQuestion2.textContent = '2. clear'
console.log('2. clear')
console.log('Git Bash command that empties the terminal of previous command entries')

reviewAnswer2.textContent = `- Git Bash command that empties the terminal of previous command entries`
console.log('')





//3.
reviewQuestion3.textContent = '3. git config --global user.email ""'
console.log('3. git config --global user.email ""')
console.log('"git config --global user.email """ is used to set the global email address used as a username for your GitHub account')

reviewAnswer3.textContent = `- "git config --global user.email """ is used to set the global email address used as a username for your GitHub account`
console.log('')




//4.
reviewQuestion4.textContent = '4. mkdir'
console.log('4. mkdir')
console.log('stands for "Make Direcrory".  Used to create a new directory within your file system')

reviewAnswer4.textContent = `- stands for "Make Direcrory".  Used to create a new directory within your file system`
console.log('')




//5.
reviewQuestion5.textContent = '5. ls'
console.log('5. ls')
console.log('')


reviewAnswer5.textContent = `- Stands for "List Show". Used to show a list of the non-private content in a directory`
console.log('Stands for "List Show". Used to show a list of the non-private content in a directory')




//6.
reviewQuestion6.textContent = '6. rm -r'
console.log('6. rm -r')
console.log('Stands for "remove recursively".  Used to remove a directory and any related files')

reviewAnswer6.textContent = `- Stands for "remove recursively".  Used to remove a directory and any related files`
console.log('')




//7.
reviewQuestion7.textContent = '7. cd ~'
console.log('7. cd ~')
console.log('Stands for "Change Directory".  Used to move out of directories within a filing system back to the home directory')

reviewAnswer7.textContent = `- Stands for "Change Directory".  Used to move out of directories within a filing system back to the home directory`
console.log('')




//8.
reviewQuestion8.textContent = '8. git config --global user.name ""'
console.log('8. git config --global user.name ""')
console.log('Used to set the username associated with your global GitHub Account.  A Virtual signature of sorts illustrating ownership of participating content')

reviewAnswer8.textContent = `- Used to set the username associated with your global GitHub Account.  A Virtual signature of sorts illustrating ownership of participating content`
console.log('')




//9.
reviewQuestion9.textContent = '9.ls -l'
console.log('9. ls -l')
console.log(' Stands for "List show -long format.  Used to show an extended list of directory/file content including last editor, timestamps, tile type, file, size, compression rate and more')

reviewAnswer9.textContent = `-  Stands for "List show -long format.  Used to show an extended list of directory/file content including last editor, timestamps, tile type, file, size, compression rate and more`
console.log('')




//10.
reviewQuestion10.textContent = '10. code .'
console.log('10. code .')
console.log('Opens file within Visual Studio')

reviewAnswer10.textContent = `- Opens file within Visual Studio`
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
codewarsQuestion1.textContent = '1. Multilingual Hello - write a function that accepts a language as a parameter.  The function will contain a list of ways to say hello in multiple languages. Have the function return the languages version of hello when their language is passed as an arguement'
console.log('1. Multilingual Hello - write a function that accepts a language as a parameter.  The function will contain a list of ways to say hello in multiple languages. Have the function return the languages version of hello when their language is passed as an arguement')
let multilingualHello = (language) => {
    let greetings = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    if(greetings.hasOwnProperty(language)) {
        console.log(greetings[language])
    }
    else {
        console.log(greetings.english)
    }
}
multilingualHello('')

codewarsAnswer1.textContent = `let multilingualHello = ${multilingualHello}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. ATM - write a function that determines the minimum number of bank note needed to honor a withdrawl.  The withdrawl must be greater than 1 dollar and less than $1500.'
console.log('2. ATM - write a function that determines the minimum number of bank note needed to honor a withdrawl.  The withdrawl must be greater than 1 dollar and less than $1500.')

let ATM = (withdrawl) => {
    let bills = [100, 50, 20, 10, 5, 1];
    let total = 0
    for(let i = 0; i < bills.length; i++) {
        total += Math.floor(withdrawl / bills[i]);
        withdrawl %= bills[i]
    }
    console.log(total)
}
ATM(101)

codewarsAnswer2.textContent = `let ATM = ${ATM}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. ROT 13 - create a function that creates a cipher from a provided string.  Shift the letters by 13 characters'
console.log('3. ROT 13 - create a function that creates a cipher from a provided string.  Shift the letters by 13 characters')

let cipherFunction = (string) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    console.log(string.replace(/[a-zA-Z]/ig, c => alpha[alpha.indexOf(c) + 13]));
}
cipherFunction('hello')

codewarsAnswer3.textContent = `let cipherFunction = ${cipherFunction}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. You\'re A Square - given a number, determine if it a square'
console.log('4. You\'re A Square - given a number, determine if it a square')

let square = (num) => {
    if(num % Math.sqrt(num) === 0) {
        console.log('square')
    }
    else {
        console.log('not square')
    }

}
square(25)

codewarsAnswer4.textContent = `let square = ${square}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Remove Duplicates from List - write a function that removes duplicates from an array and keeps the sequence the same'
console.log('5. Remove Duplicates from List - write a function that removes duplicates from an array and keeps the sequence the same')

let removeDuplicates = (list) => {
    let newList = new Set([...list]);
    console.log(newList)
}
removeDuplicates([1, 2, 2, 2, 2, 2, 1, 3, 1, 4, 1, 5])

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










