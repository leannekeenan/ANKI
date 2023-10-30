/*ANKI Review: */
console.log('ANKI Review: General Knowledge')
//1.
console.log('Modules Directory')
console.log('A specific folder within a project that contains the source files for a module (a self-contained unit of code)')
console.log('')

//2.
console.log('SMACSS: Architecture')
console.log('Refers to the modality of the CSS components within a page, generaly, divided into subclasses for base elements, layout, element state, themes, and module.  It is a common practice used to improve semantic meaning of HTML components and content an dmake your code easier to read')
console.log('')

//3.
console.log('Base directory')
console.log('Also known as a root directory, the base directory is the top level folder within a program that contains all assets related to the content and structure of the program')
console.log('')

//4.
console.log('Centrlaize design related settings within CSS file')
console.log('1. use consistant formatting, 2. use consistant design, 3.write comments, 4. create small, integrateable stylesheets')
console.log('')

//5.
console.log('Flex Grid')
console.log('A property of CSS that allows a grid element to expand and contract with the size of its device screen size')
console.log('')

//6.
console.log('SMACSS: Module')
console.log('Used to refere to the unique elements of a page that can be copied easily and placed into another file.  This could include but not be limited to buttons, anchor tags, forms and other like elements')
console.log('')

//7.
console.log('Adaptive Web Design')
console.log('Creating web content that can be scaleable to any size screen')
console.log('')

//8.
console.log('Responsive Web Design')
console.log('A method of building websites that allows its content to be scaleable to the size of the screen it is viewed on')
console.log('')

//9.
console.log('How do you make embedded media flexible')
console.log('set the element within a div and manipulate the div')
console.log('')

//10.
console.log('What is the 80/20 rule')
console.log('having 80% of your website optimized by 20% of the effort put into it')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('Sum Diff in arr')
function sumDiff(arr) {
    let result = 0
    let sorted = arr.sort((a, b) => b - a)
    for(let i = 0; i < sorted.length - 1; i++) {
        result += sorted[i] - sorted[i + 1]
    }
    console.log(result)
}
sumDiff([2, 4, 5, 3])
/*Why the difference is 3?  The function sorts the current array to be [2, 3, 4, 5], thereby having only difference of one between each value. Accumulated that total equals 3*/

console.log('')

//2.
console.log('is it even')
function isItEven(n) {
    if(n % 2 === 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
isItEven(10)
isItEven(1)
console.log('')

//3.
console.log('Multiples of 3 & 5')
function multiplesOf(n) {
    let result = []
    for(let i = 1; i < n; i++) {
        if(i % 5 === 0 || i % 3 === 0) [
            result.push(i)
        ]
    }
    console.log(result.reduce((a, b) => a + b, 0))
}
multiplesOf(10)
console.log('')

//4.
console.log('vowel count')
function vowelCount(str) {
    let count = 0;
    let vowels = /[aeiou]/ig;
   
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(vowels)) {
            count++
        }
    }
    
    console.log(count)
}
vowelCount('hello')
console.log('')

//5.
console.log('count char in string') //use .charAt()
function countChar(str) {
    let count = {} //count has to equal an object - not an array
    
    for(let i = 0; i < str.length; i++) {
        let characters = str.charAt(i)
        if(count[characters]) {
            count[characters]++
        }
        else {
            count[characters] = 1
        }
    }
    console.log(count)
}
countChar('hello')
console.log('')
