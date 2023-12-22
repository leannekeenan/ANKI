/*ANKI Review: */
console.log('ANKI Review: Git Bash Methods')
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
reviewQuestion1.textContent = '1. git config - user.email "emailaddress@wherever.com"'
console.log('1. git config - user.email "emailaddress@wherever.com"')
console.log('the git config --global is for defining user emails as a signature contact for your content you add to git repositories')

reviewAnswer1.textContent = ' - the git config --global is for defining user emails as a signature contact for your content you add to git repositories'
console.log('')




//2.
reviewQuestion2.textContent = '2. rm -r'
console.log('2. rm -r')
console.log('remove recursive.  removes repositories and their content in recursive order, beginning with top level directories')

reviewAnswer2.textContent = ' - remove recursive.  removes repositories and their content in recursive order, beginning with top level directories'
console.log('')





//3.
reviewQuestion3.textContent = '3. ls -l'
console.log('3. ls -l')
console.log('list show -long format.  This command shows a repositories or a files content in a long format which includes content that is not considered private such as file length, last access date and time, last user, and more')

reviewAnswer3.textContent = ' - list show -long format.  This command shows a repositories or a files content in a long format which includes content that is not considered private such as file length, last access date and time, last user, and more'
console.log('')




//4.
reviewQuestion4.textContent = '4. GUI'
console.log('4. GUI')
console.log('GUI. Graphical User Interface.  A icon on your device that erpresents a program or file')

reviewAnswer4.textContent = ' - GUI. Graphical User Interface.  A icon on your device that erpresents a program or file'
console.log('')




//5.
reviewQuestion5.textContent = '5. git config - user.username "username"'
console.log('5. git config - user.name "username"')
console.log('git config - user.username "username" is used to degine a digital signature to associate your work with your github account')


reviewAnswer5.textContent = ' - git config - user.username "username" is used to degine a digital signature to associate your work with your github account'
console.log('')




//6.
reviewQuestion6.textContent = '6.rm -rf'
console.log('6. rm -rf')
console.log('remove -recursove force.  Removes repository content recursively from the top level file down, but will not wait for approval or user ok before removing.  This method can be problematic as it can remove all content which can affect other directories that may be connected')

reviewAnswer6.textContent = ' - remove -recursove force.  Removes repository content recursively from the top level file down, but will not wait for approval or user ok before removing.  This method can be problematic as it can remove all content which can affect other directories that may be connected'
console.log('')




//7.
reviewQuestion7.textContent = '7.touch'
console.log('7. touch')
console.log('creates new, empty file')

reviewAnswer7.textContent = ' - creates new, empty file'
console.log('')




//8.
reviewQuestion8.textContent = '8.ls'
console.log('8. ls')
console.log('list show.  Shows the content of a directory')

reviewAnswer8.textContent = ' - list show.  Shows the content of a directory'
console.log('')




//9.
reviewQuestion9.textContent = '9. code .'
console.log('9. code .')
console.log('opens content in VS code')

reviewAnswer9.textContent = ' - opens content in VS code'
console.log('')




//10.
reviewQuestion10.textContent = '10.clear'
console.log('10. clear')
console.log('method used to clear the commands in the terminal')

reviewAnswer10.textContent = ' - method used to clear the commands in the terminal'
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
codewarsQuestion1.textContent = '1. Sum of array. Write a function that takes an array of numbers and returns the sum of the numbers'
console.log('1. Sum of Array. Write a function that takes an array of numbers and returns the sum of the numbers')
let sumOfArray = (array) => {
    let sum = array.reduce((a, b) => a + b, 0);
    console.log(sum)
}
sumOfArray([1, 2, 3, 4, 5])

codewarsAnswer1.textContent = `let sumOfArray = ${sumOfArray}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. convert time to milliseconds. Write a function that retutns hours, minutes, and seconds in milliseconds past midnight (0)'
console.log('2. convert time to milliseconds. Write a function that retutns hours, minutes, and seconds in milliseconds past midnight (0)')
let convertTime = (h, m, s) => {
    let hour = h * 3600000;
    let minute = m * 60000;
    let second = s * 1000;
    let millisecondTime = hour + minute + second;
    console.log(millisecondTime)
}
convertTime(1, 1, 1)

codewarsAnswer2.textContent = `let convertTime = ${convertTime}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. ATM. write a function that determines the minimal number of banknotes that will be needed to honor a withdrawl greater than 1 but less than 1500'
console.log('3. ATM. write a function that determines the minimal number of banknotes that will be needed to honor a withdrawl greater than 1 but less than 1500')
let ATM = (withdrawl) => {
    let count = 0;
    let bills = [100, 50, 20, 10, 5, 1];
    for(let i = 0; i < bills.length; i++) {
        count += Math.floor(withdrawl / bills[i])
        withdrawl %= bills[i]
    }
    console.log(count)
}
ATM(101)

codewarsAnswer3.textContent = `let ATM = ${ATM}`
console.log('')





//4.
codewarsQuestion4.textContent = '4.  must return false without ever actually using the word false.'
console.log('4.  must return false without ever actually using the word false.')
let dontUseTrue = () => {
    console.log(!false)
}
dontUseTrue()

codewarsAnswer4.textContent = `let dontUseTrue = ${dontUseTrue}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Sum of multiples. Find the sum of all multiples of n below m. Return INVALID if the total is less than 0'
console.log('5. Sum of multiples. Find the sum of all multiples of n below m. Return INVALID if the total is less than 0')
let sumOfMultiples = (number, multiples) => {
    let total = 0
    for(let i = 1; i * multiples <= number; i++) {
        total += i * multiples
    }
    if(total > 0) {
        console.log(total)
    }
    else {
        console.log('invalid')
    }
}
sumOfMultiples(10, 3)

codewarsAnswer5.textContent = ' - '
console.log('')



//codewarsQuestion6.textContent = '6.'
//codewarsAnswer6.textContent = ' - '
//codewarsQuestion7.textContent = '7.'
//codewarsAnswer7.textContent = ' - '
//codewarsQuestion8.textContent = '8.'
//codewarsAnswer8.textContent = ' - '
//codewarsQuestion9.textContent = '9.'
//codewarsAnswer9.textContent = ' - '
//codewarsQuestion10.textContent = '10.'
//codewarsAnswer10.textContent = ' - '
//









