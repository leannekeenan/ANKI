/*ANKI Review: HTML Review */
console.log('ANKI Review: HTML Review')
//1.
console.log('1. inline level element')
console.log('an element that stays within the flow of a document but only takes up as buch spaces as needed for the content unless margin.padding/border is added.  These elements, like spans, will remain inline with other element son the same line unless otherwise instructed.')
console.log('')

//2.
console.log('2. viewport minimum scale property')
console.log('Accepts a specified value for how the user can scale a website on their viewing device. They can have a minumum-scale, a user-scaleable, or an initial-scale value.  The minimum won\'t allow users to scale farther that a certain point, uesr-scaleable allows users to scale as far as desired, and initial scale keeps users from scaling at all')
console.log('')

//3.
console.log('3. What are tags?')
console.log('A unique term for HTML selectors such as section, p, and article, that provide semantic structural value to your HTML content')
console.log('')

//4.
console.log('4. define the <strong> tag')
console.log('Used to emphisize the importance of text in an HTML tag by making the text bold.  This should only be used to stress emphasis of the element, but for stylistic purposes')
console.log('')

//5.
console.log('5. How can you target an HTML element by its attribute?')
console.log('using bracket notation, you can set the value of the target elements selector to the unique name you are looking for.  for example a paragraph with the class of hero would be p[class=\'hero\']')
console.log('')

//6.
console.log('6. viewport user-scaleable property')
console.log('Accepts a yes or no value to allow users to scale a webpage to their desired height/width')
console.log('')

//7.
console.log('7. type selector')
console.log('generally used with HTML input tags specifying the type od data being entered ranging from text to radio buttons, to a range meter. in terms of selectors, it refers to the base type of the selector (p, span, div...) providing 001 point of specificity')
console.log('')

//8.
console.log('8. absolute path')
console.log('a linke to an external website, generally ending with a .com, .org, .net, etc.')
console.log('')

//9.
console.log('9. legend')
console.log('used within HTML tables to give titles to form fieldsets')
console.log('')

//10.
console.log('10. viewport property scale options')
console.log('initial-scale, minimumm-scale, and user-scaleable')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. Abbreviate names')
function abbreviate(str) {
    let initials = ''
    let words = str.split(' ')
    for(let i = 0; i < words.length; i++) {
        initials += words[i][0] + '.'
    }
    console.log(initials)
}
abbreviate('Leanne Keenan')
console.log('')

//2.
console.log('2. points per game')
function NBA(name, team, ppg) {
    this.name = name,
    this.team = team,
    this.ppg = ppg
}

function PPG(p1, p2) {
    console.log(p1.ppg + p2.ppg)
}

let player1 = new NBA('player1 name', 'player1 team', 100);
let player2 = new NBA('player2 name', 'player2 team', 99)

console.log(PPG(player1, player2))
console.log('')

//3.
console.log('3. rot13')
function rot13(str) {
    let alpha = 'abcdefghijklmnopqrstuvuzyzabcdefghijklm';
    console.log(str.replace(/[a-z]/ig, newLetter => alpha[alpha.indexOf(newLetter) + 13]))
}
rot13('hello')
console.log('')

//4.
console.log('4. filter the number')
function filter(list) {
    let result = [];
    for(let i = 0; i < list.length; i++) {
        if(list[i].match(/[0-9]/ig)) {
            result.push(list[i])
        }
    }
   console.log(result)
}
filter('h3110 t0 y0ua11')
console.log('')

//5.
console.log('5. simple multiply')
function multiply(num) {
    if(num % 2 === 0) {
        console.log(num * 8)
    }
    else {
        console.log(num * 9)
    }
}
multiply(1)
multiply(2)
console.log('')
