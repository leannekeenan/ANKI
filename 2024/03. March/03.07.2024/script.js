/*ANKI Review: */
console.log('ANKI Review: HTML Review')
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
reviewQuestion1.textContent = '1. submit keyword'
console.log('1. submit keyword')
console.log('used in forms to specify that the content is intended to be sent to a new location like an email account, server, or document')

reviewAnswer1.textContent = `- used in forms to specify that the content is intended to be sent to a new location like an email account, server, or document`
console.log('')




//2.
reviewQuestion2.textContent = '2. IP Address'
console.log('2. IP Address')
console.log('Internet Protocol Address.  The identifying numerical address value a computer uses to communicate with other computers in its network')

reviewAnswer2.textContent = `- Internet Protocol Address.  The identifying numerical address value a computer uses to communicate with other computers in its network`
console.log('')





//3.
reviewQuestion3.textContent = '3. validator'
console.log('3. validator')
console.log('a pre-existing tool in Developers Tools used to return errors in your code allowing you to find and fix them quickly')

reviewAnswer3.textContent = `- a pre-existing tool in Developers Tools used to return errors in your code allowing you to find and fix them quickly`
console.log('')




//4.
reviewQuestion4.textContent = '4. What is full-stack development'
console.log('4. What is full-stack development')
console.log('The act of creating the front and back end of a website, program or app')

reviewAnswer4.textContent = `- The act of creating the front and back end of a website, program or app`
console.log('')




//5.
reviewQuestion5.textContent = '5. W3C'
console.log('5. W3C')
console.log('The World Wide Web Consortium. A group created by Sir Tim Berners-Lee that regulates the development of the web')


reviewAnswer5.textContent = `- The World Wide Web Consortium. A group created by Sir Tim Berners-Lee that regulates the development of the web`
console.log('')




//6.
reviewQuestion6.textContent = '6. data-* attribute'
console.log('6. data-* attribute')
console.log('creates unique attribute types and values to create individuality of of HTML selectors')

reviewAnswer6.textContent = `- creates unique attribute types and values to create individuality of of HTML selectors`
console.log('')




//7.
reviewQuestion7.textContent = '7. What does the seperation of concerns help with?'
console.log('7. What does the seperation of concerns help with?')
console.log('Keeping code organized and increases readability for other developers who may work on your code')

reviewAnswer7.textContent = `- Keeping code organized and increases readability for other developers who may work on your code`
console.log('')




//8.
reviewQuestion8.textContent = '8. Legend'
console.log('8. Legend')
console.log('HTML selector used in table fieldsets to provide titles to sections')

reviewAnswer8.textContent = `- HTML selector used in table fieldsets to provide titles to sections`
console.log('')




//9.
reviewQuestion9.textContent = '9. viewport meta tag'
console.log('9. viewport meta tag')
console.log('<meta name="viewport" content="width=device device-width", initial-scale= 1.0>')

reviewAnswer9.textContent = `- <meta name="viewport" content="width=device device-width", initial-scale= 1.0>`
console.log('')




//10.
reviewQuestion10.textContent = '10. viewport property scale options'
console.log('10. viewport property scale options')
console.log('initial-scale, user-scaleable, and minimum-scale')

reviewAnswer10.textContent = `- initial-scale, user-scaleable, and minimum-scale`
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
codewarsQuestion1.textContent = '1. Filter the number - write a function that filters numbers out of a string'
console.log('1. Filter the number - write a function that filters numbers out of a string')

let filterNum = (string) => {
    let filtered = string.split('').filter(character => {
        return '1234567890'.includes(character)
    });
    console.log(filtered)
}
filterNum('h3110')



codewarsAnswer1.textContent = `- let filterNum = ${filterNum}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Basic Data Type: Numbers - write a function that shows all five math operations in JavaSCript'
console.log('2. Basic Data Type: Numbers - write a function that shows all five math operations in JavaSCript')

let operators = (a, b) => {
    let add = a + b;
    let sub = a - b;
    let div = a / b;
    let multi = a * b;
    let mod = a % b;

    console.log(add)
    console.log(sub)
    console.log(div)
    console.log(multi)
    console.log(mod)
}
operators(100, 9)

codewarsAnswer2.textContent = `- let opersators = ${operators}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. do... while loop - write a function that accepts a string and a number.  Add asterisks to the string based on the even/odd nature of the number - odd adds to the left - even adds to the right'
console.log('3. do... while loop - write a function that accepts a string and a number.  Add asterisks to the string based on the even/odd nature of the number - odd adds to the left - even adds to the right')

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
asterisk('string', 5)
codewarsAnswer3.textContent = `- let asterisk = ${asterisk}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Remove duplicates from a list - write a function that removes the duplicates from an array'
console.log('4. Remove duplicates from a list - write a function that removes the duplicates from an array')

let removeDuplicates = (arr) => {
    let newArr = new Set([...arr]);
    console.log(newArr)
}
removeDuplicates([1, 2, 1, 3, 1, 4, 1, 5])

codewarsAnswer4.textContent = `- let removeDuplicates = ${removeDuplicates}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Max Multiples - Given a bound a d a divisor, find the largest number that id dividible by the divisor, less than the bound and greater than 0'
console.log('5. Max Multiples - Given a bound a d a divisor, find the largest number that id dividible by the divisor, less than the bound and greater than 0')

let maxMultple = (bound, divisor) => {
    let n = Math.floor(bound / divisor) * divisor;
    console.log(n)
    
}
maxMultple(100, 9)

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










