/*ANKI Review: HTML*/
console.log('ANKI Review: HTML')
//1.
console.log('Viewport meta tag')
console.log('used to define the standard width of a page to fit the device it is being viewed upon')
console.log('<meta name="viewport" content= "width=device-width">')
console.log('')

//2.
console.log('How can you target an HTML element by its attribute?')
console.log('use square bracket notation')
console.log('element[attributeType = attributeName')
console.log('')

//3.
console.log('Diabled Boolean')
console.log('An option that turns off controls that can be interacted with by the user')
console.log('')

//4.
console.log('HTTP')
console.log('Hypertext Transfer Protocol')
console.log('')

//5.
console.log('ID selector')
console.log('Used as a unique identifier of HTML elements adding 100 points of specificity to the element ')
console.log('')

//6.
console.log('Inline-level elelment')
console.log('Elements that share the space of a single line without altering the flow of a bare.  The inline element only takes the with needed to hold the content of the object')
console.log('')

//7.
console.log('Sir Tim Berners Lee')
console.log('Founder of W3C (Worldwide Web Consortium) and inventor of the World Wide Web')
console.log('')

//8.
console.log('Viewport property scale options')
console.log('minimum scale, initial scale, and user scaleable.  the minimum size it can be, the starting size it will be, and the ability to allow users to increase or decrease the size of the viewport')
console.log('')

//9.
console.log('viewport')
console.log('The viewport is specifically the device screen a page is seen on. The viewport tag in HTML that sets the scaleable sizes of a webpage on a device.')
console.log('')

//10.
console.log('Fundamental differences between <section>, <article>, and <div>')
console.log('Specificity and accessability.  The specific tags allow users with screen readers navigate the bage with greateer ease.  The section is used to divide the sections of a page by category/like-content (stand alone sections).  The article is for the content within the section (sland alone, self-contained content).  The div is the least specific of the three used for additional but nnon-relevant content')
console.log('')



/*Codewars Challenge*/
//1.
console.log('Jaden Casing')
function capitalizeLetters(str) {
   
    let result = str.split(' ').map(word => 
         word.replace(word[0], word[0].toUpperCase())).join(' ')
    console.log(result)
    
}
capitalizeLetters('hello Everyone welcome')
console.log('')

//2.
console.log('Return a new array consisting of elements which are multiple of their own index in input array (length > 1).')
function returnNums(arr) {
    let answer = arr.filter((num, iterator) => num % iterator === 0);
    console.log(answer)
}
returnNums([1, 2, 3])
console.log('')

//3.
console.log('Expressions MAtter: Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()')
function expressions(a, b, c) {
    let options = [
        a + b + c,
        (a + b) + c,
        a + (b + c),
        a * b * c,
        (a * b) * c,
        a * (b * c),
        a * b + c,
        (a * b) + c,
        a * (b + c),
        a + b * c,
        (a + b) * c,
        a + (b * c),
    ]
    console.log(Math.max(...options))
}
expressions(1, 2, 30)
console.log('')

//4.
console.log('do..while loop')
function doWhile(str, n) {
    do{
        if(n % 2 === 0) {
            str = `* ${str}`
        }
        else {
            str = `${str} *`
        }
        n--
    }
    while(n > 0)  
    console.log(str)
}
doWhile('hello', 5)
console.log('')

//5.
console.log('Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.')
function poke(list) {
    console.log(list.reverse())
}
poke(['pika', 'char', 'bulba'])
console.log('')
