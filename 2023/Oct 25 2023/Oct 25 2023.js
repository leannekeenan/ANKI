/*ANKI Review*/
//1.
console.log('selectors')
console.log('The identifying name of an HTML element used to add modifications in CSS.  Based on specificity, the selector can have 001 points of specificity for the selector type itself like a h1. The selector can have a class which provides 010 points of specificity and and id which allows for 100 points.  This tiered system allows for more intricate styling modifications')
console.log('')

//2.
console.log('inset property')
console.log('used to set the values of the top, left, bottom, and right of an absolute or relative object')
console.log('')

//3.
console.log('background-clip property')
console.log('Used in conjunction with background-color, background-image, and background-position, this property defines how far a backgrouund will extend within an object, using the values of border-box, padding-box, content-box, or text as the clip edge')
console.log('')

//4.
console.log('Target width formula')
console.log('margin left + border-left + padding left + content + padding-right + border-right + margin-right')
console.log('')

//5.
console.log('General Sibling selector')
console.log('Uses the tilde (~) operator between elements to signify that the modifications will affect the sibling element of the first')
console.log('')

//6.
console.log('<input type=“hidden”>')
console.log('An HTML type that can be added to an element to make it non-visable to the user, but still available on the page')
console.log('')

//7.
console.log('How to change the direction of a linear-gradient ?')
console.log('Change the degree value within the linear-gradfient declaration: (0 = top to bottom, 90 = left to righ,t 180 = bottom to top, 270 = right to left, or use key phrases like "to right top" or "to left bottom" to change the diaginal gradient')
console.log('')

//8.
console.log('position: relative')
console.log('Used to positon an element withn a page relative to its containing element.  If the element is not within a containing, element, the body of te page will be used.')
console.log('')

//9.
console.log('Boolean attribute')
console.log('An element that will returb a true or false value')
console.log('')

//10.
console.log('Relative Length Units')
console.log('pixels, percentages, vertical width and height, em, rem')
console.log('')



/*Codewars Challenge*/
//1.
console.log('Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.')

function bigger(a, b) {
    if(Math.pow(a.reduce((x, y) => x + y, 0), 2) > 
    Math.pow(b.reduce((x, y) => x + y, 0), 3)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
bigger([5, 6, 7], [1, 2, 3])
console.log('')

//2.
console.log('ATM')
function ATM(withdrawl) {
    let result = 0;
    let bills = [1, 5, 10, 20, 50, 100];
    for(let i = 0; i < bills.length; i++) {
        if(withdrawl >= bills[i]) {
            result++;
            withdrawl -= bills[i]
        }
    }
    console.log(result)
}
ATM(125)
console.log('')

//3.
console.log('Do...While Loop')
function doWhile(str, num) {
    do {
        if(num % 2 === 0) {
            str = `${str} *`;
            
        }
        
        else {
            str = `* ${str}`;
            
        }
      num--
    }
    while(num > 0);
    console.log(str)
}
doWhile('hello', 5)
console.log('')

//4.
console.log('disemvowel Trolls')
function trolls(str) {
    let vowels = /[aeiouAEIOU]/ig
    console.log(str.replaceAll(vowels, ''))
}
trolls('HELLO, hello')
console.log('')

//5.
console.log('Jaden Casting Strings')
function capitalize(str) {
    let speech = str.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
    console.log(speech)
}
capitalize('hello to all you beautiful people out there')
console.log('')
