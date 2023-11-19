/*ANKI Review: */
console.log('ANKI Review: HTML')
//1.
console.log('1. <button onClick= “multiple”>')
console.log('The multiple onclick multiple property value is used with the select tag to allow for multiple drop down options at one time')
console.log('')

//2.
console.log('2. class selector')
console.log('provides 010 points of specificity to HTML tags.  Can be used across multiple tags to set specified items into a singular class')
console.log('')

//3.
console.log('3. What is a DNS')
console.log('A Domain Name Server.  A DNS is the name of a website associated with the IP address for users to enter into a search bar to callup a page')
console.log('')

//4.
console.log('4. viewport initial scale property')
console.log('sets the initial size of the content of a webpage. generally set to 1.0 for a 100% fill on any size viewport, but can be set to any value greater than 0 to zoom in or out of the page')
console.log('')

//5.
console.log('5. legend')
console.log('Tag in HTML used to add titles to form fieldsets')
console.log('')

//6.
console.log('6. What is the <em> tag for?')
console.log('specified importance my setting content to italicized')
console.log('')

//7.
console.log('7. target = \'_blank\'')
console.log('attribute used to open page content into a new, blank viewport window')
console.log('')

//8.
console.log('8. viewport user-scaleable property')
console.log('Used to allow users to adjust the zoom of a viewport ')
console.log('')

//9.
console.log('9. What is an absolute path')
console.log('a link to a external website outside of the document, generally a .com, .net, .org, etc.')
console.log('')

//10.
console.log('10. <caption>')
console.log('Sementic tag used to add a caption to HTML elements')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. You\'re a square')
console.log('given a number, determine if it is a square.  If it is, return the squared value, else return \'not square\'')
function square(num) {
    if(Math.sqrt(num) % 1 === 0) {
        console.log(Math.sqrt(num))
    }
    else {
        console.log('not square')
    }
}
square(9)
square(5)
console.log('')

//2.
console.log('2. The prive of mangoes')
console.log('Given a quantity and a price, create a function that returns a 2 for 1 / 3 for 2 deal')

let discount = (quantity, price) => {
    
    if(quantity % 3 === 0 ) {
        console.log((quantity / 3) * price)
    }
    else if(quantity % 2 === 0) {
        console.log((quantity / 2) * price)
    }
    else {console.log(price * quantity)
    }
    
}

discount(4, 1)

console.log('')

//3.
console.log('3. Do ... While Loop')
console.log('. Use a do ... while to add astrisks to the right side of the string if the number is even, and to the left if the number is odd')
let doWhile = (string, num) => {
    do {
        if(num % 2 === 0) {
            string = `${string}*`
        }
        else {
            string = `*${string}`
        }
        num--
    }
    while(num > 0)
    console.log(string)
}
doWhile('hello',5)
console.log('')

//4.
console.log('4. ROT 13')
console.log('create a function that takes a string and returns it cyphered version using where the letters are 13 letters beyond the present letter')
let ROT13 = (string) => {
    let cypher = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm';
    console.log(string.replace(/[a-z]/ig, c => cypher[cypher.indexOf(c) + 13]))
 
} 
ROT13('hello')
console.log('')

//5.
console.log('5. Max Multiples')
console.log('Given a divisor and a bound, find the largest integer that is greter than 0, less than the bound and divisible by the divisor')
let maxMultiples = (d, b) => {
    let N = Math.floor(b / d) * d;
    console.log(N)
}
maxMultiples(9, 100)
console.log('')
