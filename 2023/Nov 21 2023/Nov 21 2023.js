/*ANKI Review: */
console.log('ANKI Review: CSS')
//1.
console.log('1. What is a hexidecimal color')
console.log('A numerical and aplhabetical representation of a color, either three or six digits long, using 0-9 and A-F, represending in order values for red, green, abd blue')
console.log('')

//2.
console.log('2. How do you link CSS to an HTML document')
console.log('use "<link rel="stylesheet" href="style.css">"')
console.log('')

//3.
console.log('3. inline elements')
console.log('HTML elements that will display directly next to each other. "elements that do not start on a new line and only take up as much width as necessary."')
console.log('')

//4.
console.log('4. What is a float')
console.log('removes elements from the DOC flow and positions them to the left or right of the parent element')
console.log('')

//5.
console.log('5. How do you contain a float')
console.log('Set it inside a parent container like a div or section')
console.log('')

//6.
console.log('6. position properrty: absolute')
console.log('removes an element from the flow of a doc and uses inset values to position the element outside of its static position')
console.log('')

//7.
console.log('7. pseudo class')
console.log('a unique mofifier to a HTML tag that expresses a state or quality about the tag.  for example there is a ::hover pseudo class that affects selected elements with the function "hover", or "nth-child()" to select a specific object in a group, etc')
console.log('')

//8.
console.log('8. Logical Operators in Media Queries')
console.log('And, Not, and Only.  Used to specify at which width, height breakpoint a CSS effect will take place.  And is for multiple breakpoints, not is to exclude breakpoints, and only is for specified brekapoints')
console.log('')

//9.
console.log('9. the four values of the positon property')
console.log('static, meaining the original unfiltered original position, fixed, meaning it has been removed from the flow of the document and appended to the beginning of the DOM, absolute, which removes elements from the DOM flow and positions elements relative to their nearest positioned parent using inset values, and relative, whic stays witin the dom flow and uses inset values to position itself within the body of the document')
console.log('')

//10.
console.log('10. label')
console.log('a tag used in HTML within form elements to provide text indicators to input values.  An external placeholder value defining what information shoudl go into the input')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. ROT13')
console.log('write a function that makes a cypher code by replacing characters in a string with the letter 13 past its position in the alphabet')
let rot13 = (string) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm'
    for(let i = 0; i < string.length; i++) {
        let cypher = string.replace(/[a-z]/ig, c => 
            alpha[alpha.indexOf(c)  + 13])
        console.log(cypher)        
    }
}
rot13('hello')
console.log('')

//2.
console.log('2. Max Miltiples')
console.log('Given a divisor and a bound, return a number that is larger than 0, less then the bound and divisible by the divisor')
let maxMultiples = (bound, divisor) => {
    let N = Math.floor(bound / divisor) * divisor;
    console.log(N)
}
maxMultiples(100, 9)
console.log('')

//3.
console.log('3. Pipe Problem')
console.log('Given a list of unique numbers, sorted in asscending order, return a new list so that the values increment by one for each index from the minimum value to the maximum value')
let pipeProblem = (list) => {
    let result = []
    for(let i = 0; i < list.length; i++) {
        let newList = i + 1
        result.push(newList)
    }
    console.log(result)
}

pipeProblem([1, 3, 5, 7, 9])
console.log('')


function pipe(list) {
    let result = [];
    let sorted = list.slice().sort(); // Create a copy of list and sort it
    result.push(sorted);
    console.log(result);
    }
    pipe([1, 2, 3, 4, 5])
//4.
console.log('4. You are a square')
console.log('given a value, determine if it is a square value, if so return the square value, else return "not square"')
let square = (num) => {
    if(Math.sqrt(num) % 1 === 0) {
        console.log(Math.sqrt(num))
    }
    else {
        console.log('not square')
    }
}
square(100)
square(4)
square(30)
console.log('')

//5.
console.log('5. Friend or Foe')
console.log('Write a function that filters a list of strings and returns a list with only your friends names in it.  Your friends all have names that are four letters long, no more, no less')

let friendOrFoe = (list) => {
    console.log(list.filter(friend => friend.length === 4))
}
friendOrFoe(['Frank', 'Adam', 'Trish', 'Bill', 'Lisa'])
console.log('')

//6.
console.log('6. rot13 (lol)')
console.log('')
let ROT13 = (string) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm'
    console.log(string.replace(
        /[a-z]/ig, c => 
        alpha[alpha.indexOf(c) + 13]
        )
    )
}
ROT13('hello again')
console.log('')
