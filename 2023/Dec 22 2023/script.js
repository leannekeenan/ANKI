/*ANKI Review: */
console.log('ANKI Review: General Knowledge')
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
reviewQuestion1.textContent = '1. SMACSS: Base'
console.log('1. SMACSS: Base')
console.log('SMACSS: Base is a part of the module architecture structure, generally related to singular element selectors in HTML')

reviewAnswer1.textContent = ' - SMACSS: Base is a part of the module architecture structure, generally related to singular element selectors in HTML'
console.log('')




//2.
reviewQuestion2.textContent = '2. Two common web dev pitfalls in reguard to preformance'
console.log('2. Two common web dev pitfalls in reguard to preformance')
console.log('Two common web dev pitfalls in reguard to preformance can include image compression size and the use of embedded JavaScript in the HTML doc')

reviewAnswer2.textContent = ' - Two common web dev pitfalls in reguard to preformance can include image compression size and the use of embedded JavaScript in the HTML doc'
console.log('')





//3.
reviewQuestion3.textContent = '3. gzip compression'
console.log('3. gzip compression')
console.log('a compression format that is widely used for file compression and decompression')

reviewAnswer3.textContent = ' - a compression format that is widely used for file compression and decompression'
console.log('')




//4.
reviewQuestion4.textContent = '4. Flexible Media'
console.log('4. Flexible Media')
console.log('Web content that can adjust its orientation and composition based on its device viewport')

reviewAnswer4.textContent = ' - Web content that can adjust its orientation and composition based on its device viewport'
console.log('')




//5.
reviewQuestion5.textContent = '5. Modules Directory'
console.log('5. A containing file folder that holds all related content for a program - a parent folder')
console.log('')


reviewAnswer5.textContent = ' -  A containing file folder that holds all related content for a program - a parent folder'
console.log('')




//6.
reviewQuestion6.textContent = '6. How do you make embedded media flexible?'
console.log('6. using a combination of relative units (like percentages) and max-width/max-height properties to ensure the media scales appropriately within its container. This allows the media to maintain its aspect ratio while fitting within the constraints of the container')

reviewAnswer6.textContent = ' - using a combination of relative units (like percentages) and max-width/max-height properties to ensure the media scales appropriately within its container. This allows the media to maintain its aspect ratio while fitting within the constraints of the container'
console.log('')




//7.
reviewQuestion7.textContent = '7. SMACSS: Theme'
console.log('7. SMACSS: Theme')
console.log('SMACSS: Theme is a part of the module architecture structure, focused on organizing the the,atic elements of the entire website.  This tends to include root pseudo codes for site colors, font types that will be used throughout the site, and other design related elements that impact the theme of the website')

reviewAnswer7.textContent = ' - SMACSS: Theme is a part of the module architecture structure, focused on organizing the the,atic elements of the entire website.  This tends to include root pseudo codes for site colors, font types that will be used throughout the site, and other design related elements that impact the theme of the website'
console.log('')




//8.
reviewQuestion8.textContent = '8. How to measure compression'
console.log('8. How to measure compression')
console.log('"compression ratio = (original file size - compressed file size) / original file size * 100%"')

reviewAnswer8.textContent = 'compression ratio = (original file size - compressed file size) / original file size * 100%'
console.log('')




//9.
reviewQuestion9.textContent = '9. How do you centralize your design related settings within your CSS file'
console.log('9. How do you centralize your design related settings within your CSS file')
console.log('Import them from other individual stylesheets / write your style code in a independent stylesheet ans use a link to connect it to your HTML')

reviewAnswer9.textContent = ' - Import them from other individual stylesheets / write your style code in a independent stylesheet ans use a link to connect it to your HTML / use comments / use SMACSS structure / use consistat formating (camel case, theme elements, etc)'
console.log('')




//10.
reviewQuestion10.textContent = '10. Scaleable Modular Architecture'
console.log('10. Scaleable Modular Architecture')
console.log('SMACSS is a organization concept that breaks the content of a CSS stylesheet into categories based on their relation to a projects base elements, module elements, thematic elements, state elements, and layout elements')

reviewAnswer10.textContent = ' - SMACSS is a organization concept that breaks the content of a CSS stylesheet into categories based on their relation to a projects base elements, module elements, thematic elements, state elements, and layout elements'
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
codewarsQuestion1.textContent = '1. Index of an Element in an Array - Create a function which accepts two parameters (array & element) and returns the index of the element if found and "not found" otherwise'
console.log('1. Index of an Element in an Array - Create a function which accepts two parameters (array & element) and returns the index of the element if found and "not found" otherwis')
let indexOfElement = (array, element) => {
    if(array.includes(element)) {
        console.log(array.indexOf(element))
    }
    else{
        console.log('not found')
    }
}
indexOfElement('hello', 'h')
indexOfElement('hello', 'e')
indexOfElement('hello', 'o')

codewarsAnswer1.textContent = `let indexOfElement = ${indexOfElement}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. ATM - write a function that determines the minimal number of banknotes that will be needed to honor a withdrawl'
console.log('2. ATM - write a function that determines the minimal number of banknotes that will be needed to honor a withdrawl')
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

codewarsAnswer2.textContent = `let ATM = ${ATM}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Remove First and Last Character - Create a function that removes the first and last characters of a string'
console.log('3. Remove First and Last Character - Create a function that removes the first and last characters of a string')
let removefirstAndLast = (string) => {
    console.log(string.slice(1, -1))
} 
removefirstAndLast('hello')

codewarsAnswer3.textContent = `let removeFirstAndLast = ${removefirstAndLast}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Sum of Multiples - Find the sum of all multiples of n below m'
console.log('4. Sum of Multiples - Find the sum of all multiples of n below m')


let sumOfMultiples = (n, m) => {
    let total = 0;
    for(let i = 1; i * m <= n; i++) {
        total += i * m
    }
    console.log(total)
}
sumOfMultiples(10, 2)
codewarsAnswer4.textContent = `let sumOfMultiples = ${sumOfMultiples}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Summation - Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0'
console.log('5. Summation - Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0')

let summation = (num) => {
    let total = 0
    for(let i = 0 ; i <= num ; i++)  {
        total += i
    }
    console.log(total)
}
summation(3)

codewarsAnswer5.textContent = ' - '
console.log('')



codewarsQuestion6.textContent = '6.'
codewarsAnswer6.textContent = ' - '
codewarsQuestion7.textContent = '7.'
codewarsAnswer7.textContent = ' - '
codewarsQuestion8.textContent = '8.'
codewarsAnswer8.textContent = ' - '
codewarsQuestion9.textContent = '9.'
codewarsAnswer9.textContent = ' - '
codewarsQuestion10.textContent = '10.'
codewarsAnswer10.textContent = ' - '










