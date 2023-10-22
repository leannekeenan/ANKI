/*ANKi Review: General Knowledge*/
//1.
console.log('How do you make embedded media flexible?')
console.log('Position the element as absolute with a width and a height of 100%')
console.log('')

//2.
console.log('What is front end development')
console.log('Known as client side development, This side of programming deals with the visual and interactive aspects of a page, generally intended for the user to interact with, see, and use')
console.log('')

//3.
console.log('Adaptive Web Design')
console.log('A tactic of creating a website that can appear clean and professional on any size device - generally accomplished with media queries and responsive page elements')
console.log('')

//4.
console.log('What is generally found on a client device')
console.log('desktop application icons, files, OS software, web browser')
console.log('')

//5.
console.log('SMACSS: Base')
console.log('The default HTML element selector style')
console.log('')

//6.
console.log('Best tools for image compression')
console.log('PNG gauntlet & ImageOptim')
console.log('')

//7.
console.log('SMACSS: Theme')
console.log('Thematic elements, like the main, sections, divs, or anything the breaks the content up into recognizable modules, as well as the main theme of the entire website including color and font type')
console.log('')

//8.
console.log('how do you centralize design-related settings within a CSS file')
console.log('use custom CSS proerties')
console.log('')

//9.
console.log('benefit of short selectors')
console.log('easier to read, easier to understand, improves element inheritance')
console.log('')

//10.
console.log('SMACSS: Layout')
console.log('deals with the structire of the page as a whole and create a visual consistancy across the entire page structure')
console.log('')



/*Codewars Challenge*/
//1.
console.log('Jaden Casting Strings')
function capitalize(str) {
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        
    }
    console.log(words.join(' '))
}
capitalize('hello everyone good to see you')
console.log('')

//2.
console.log('Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.')
function whichIsBigger(a, b) {
   let a_total = a.reduce((x, y) => x + y, 0);
   let b_total = b.reduce((x, y) => x + y, 0);
   if(Math.pow(a_total, 2) > Math.pow(b_total, 3)) {
    console.log(true)
   }
   else {
    console.log(false)
   }
}
whichIsBigger([1, 4, 5], [5])
console.log('')

//3.
console.log('ROT 13')
function rot13(str) {
    let abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
    
    console.log(str.replace(/[a-z]/gi, result => 
       abc[abc.indexOf(result) + 13]
    ))
    
}
rot13('hello')
console.log('')

//4.
console.log('Reverse pokemon order')
function reverseOrder(pokemon) {
    console.log(pokemon.reverse())
}
reverseOrder(['pika', 'bulba', 'char char', 'squirt'])
console.log('')

//5.
console.log('You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party')
function multipleCalls(pokemon) {
    for(let i = 1; i <= pokemon; i++) {
        console.log(`pokemon, I choose you! ${i}`)
    }
}

multipleCalls(3)
console.log('')
