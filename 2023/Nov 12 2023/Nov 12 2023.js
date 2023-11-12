/*ANKI Review: */
console.log('ANKI Review: CSS Review')
//1.
console.log('1. Logical Operators in media queries')
console.log('"and", "not", and "only". And is used to combine multiple conditions, not negates a condition, and only is used to ensure one exclusive condition is met')
console.log('')

//2.
console.log('2. What is a font')
console.log('a file that holds multiple renderings of a specific typeface')
console.log('')

//3.
console.log('3. How to change direction of a linear geadient')
console.log('use verbal conditions like "to right top"')
console.log('')

//4.
console.log('4. type selector')
console.log('The preset tag types in HTML that provide 001 points of specificity to a DOM element.  Although the lowest value, the type selectors are generally used to define base and layout architecture that does not require an class or ID')
console.log('')

//5.
console.log('5. <input type = "hidden">')
console.log('Used to pass data in the DOM to and from developers without it being seen by users, or used to hide DOM elements from users until a specified JS or CSS condition is executed')
console.log('')

//6.
console.log('6. How do you link a CSS doc to your HTML?')
console.log('If your CSS content is on a seperate page, use a <link> tag in your HTML within the head of the document, generally under the title.  The syntax should be as follows: <link rel="stylesheet" href="style.css">')
console.log('')

//7.
console.log('7. aspect-ratio media feature')
console.log('used to keep the length and width of a media element proportional to its specified condition. It can be set 1:1, meaning it takes up the same amount of proportional space, reguardless of screen size, 16:9 will make it widescreen, or verbal components can be used to set the ratio to "cover" or "fill"')
console.log('')

//8.
console.log('8. clear property')
console.log('used to control the behaviors of floated elements')
console.log('')

//9.
console.log('9. block-level element width?')
console.log('makes elements that stack within the flow of the DOM a specfied width?')
console.log('')

//10.
console.log('10. two forms of length values')
console.log('absolute and relative')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. do...while')
function doWhile(str, num) {
    do {
        if(num % 2 === 0) {
            str = `*${str}`
        }
        else {
            str = `${str}*`
        }
        num--
    }
    while(num > 0)
    console.log(str)
}
doWhile('hello', 5)
console.log('')

//2.
console.log('2. filer the number')
function filterNum(str) {
    let numbers = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[0-9]/ig)) {
            numbers.push(str[i])
        }
    }
    console.log(numbers)
}
filterNum('h3110')
console.log('')

//3.
console.log('3. sum of difference in array')
function sumOfDiff(arr) {
    let sorted = arr.sort((a, b) => b - a);
    let result = 0
    for(let i = 0; i < sorted.length - 1; i++) {
        result += sorted[i] - sorted[i + 1]
    }
    console.log(result)
}
sumOfDiff([1, 2, 3, 5])
console.log('')

//4.
console.log('4. Did they say hello?')
function hello(str) {
    let languages = {
        english: 'hello',
        spanish: 'hola',
        french: 'bonjour',
        japanese: 'konichiwa'
    }
    for(let hellos in languages) {
        if(languages[hellos].toLowerCase().includes(str.toLowerCase())) {
            console.log(true)
            return
        }
        else {
            console.log(false)
            return
        }
    }
    
}
hello('holla')
console.log('')

//5.
console.log('5. multiples of 3 and 5')
function multiples(list) {
    let solution = 0;
    for(let i = 0; i < list; i++) {
        
        if(i % 5 === 0 || i % 3 === 0) {
            solution += i
        }
    }
    console.log(solution)
}
multiples(10)
console.log('')
