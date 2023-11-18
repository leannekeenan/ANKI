/*ANKI Review: */
console.log('ANKI Review: General Knowledge')
//1.
console.log('1. MDN')
console.log('Mozilla Developers Network.  A centralizeed data hub and learning resource for developers to find information on web technologies')
console.log('')

//2.
console.log('2. SMACSS: State')
console.log('A semantic section of CSS used to encapsulate the multiple pseudo class state types of a DOM element including states like hidden and clicked')
console.log('')

//3.
console.log('3. Flexible Media')
console.log('On objects like iframes and img maintaining aspect ration regardless of device screen size')
console.log('')

//4.
console.log('4. Programming Language')
console.log('A set of instructions translated into a language a computer can understand used to execute a function')
console.log('')

//5.
console.log('5. How do you make embedded media flexible')
console.log('Set the embedded media object into a block-level element like a div and used the containing element (the parent) to manipulate the embedded media (the child')
console.log('')

//6.
console.log('6. how to measure compresson')
console.log('measured by comparing the size of the original file with the size of the compressed file. The compression ratio, which is the ratio of the original file size to the compressed file size, is a common metric used to measure file compression.  You can manually compresss the file, use an online tool like compressor.io, use a task runner, or a CDN')
console.log('')

//7.
console.log('7. How do you centralize your design related settings within your CSS file')
console.log('Use SMACSS to semantically seperate teh code, keep the CSS in a seperate file from the program\'s HTML and JS, use comments, breakdown stylesheet into smaller, object based stylesheets')
console.log('')

//8.
console.log('8. Scaleable Modular Architecture')
console.log('A process of semantically formatting the properties of a CSS stylesheet based in their intent and use.  Allows for the code to be more readable and easier to manage.  The sections of Scaleable Modular Architecture include layout, module, theme , base and state')
console.log('')

//9.
console.log('9. benefit of short selectors')
console.log('Makes code easier to read, minimizes specificity, improves inheritance and efficiency')
console.log('')

//10.
console.log('10. golden rule of front end development')
console.log('Rule of seperation of concerns. Keep content with HTML, design with CSS and function with JS')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. consonant count')
console.log('create a function that takes in a string and retrurns the number of consonants')
function consonants(str) {
    let consonant = /[bcdfghjklmnpqrstvwxyz]/ig;
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(consonant)) {
            count++
        }
    }
    console.log(count)
}

consonants('teo')
console.log('')

//2.
console.log('2. find min and max values of a list')
console.log('make two functions, each receiving a list of integers as a parameter and return the largest and smallest numbers in the array respectively')

 
    function findMin(arr) {
        console.log(Math.min(...arr))
    }
    
    function findMax(arr) {
        console.log(Math.max(...arr))
    }
findMax(  [1, 2, 3, 4, 5])
findMin(  [1, 2, 3, 4, 5])

function findMinAndMax(arr) {
    console.log(Math.min(...arr) + ', ' + Math.max(...arr))
}
    
findMinAndMax( [1, 2, 3, 4, 5])

console.log('')

//3.
console.log('3. youre a square')
console.log('given an integer, determine if it a square number')
function square(num) {
    if(Math.sqrt(num) % 1 === 0) {
        console.log(Math.sqrt(num))
    }
    else {
        console.log('Not a Square')
    }
}
square(25)
square(24)
console.log('')

//4.
console.log('4. Filter out the geese')
console.log('you are given an array of geese types.  Create a function that removes any of the geese from the provided array from the parameter array ')
function filterGeese(arr) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    console.log(arr.filter(birds => !geese.includes(birds)))

}
filterGeese(['blackbird', "African"])
console.log('')

//5.
console.log('5. max multiples')
console.log('Given a divisor and a bound, return the largest integer greater than 0, less than the bound and divisible by the divisor')
function maxMultiple(divisor, bound) {
    let N = Math.floor(bound / divisor) * divisor;
    console.log(N)
}
maxMultiple(9, 100)
console.log('')
