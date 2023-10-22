/*ANKi Review: CSS*/
//1 .
console.log('Audio source Options')
console.log('.ogg, .wav, .mp3')
console.log('')

//2 .
console.log('How can you control if or when an element repeats?')
console.log('background-reprat property with no-repeat value')
console.log('')

//3 .
console.log('General Sibling Selector')
console.log('use the tilde (~) operator between selectors to select a sibling element')
console.log('')

//4 .
console.log('Target Width Formula')
console.log('container width * percentage')
console.log('')

//5 .
console.log('Modular CSS')
console.log('a way of ordanizing CSS based on selector purpose within the website  including base, layout, stste, theme, and, modules.')
console.log('')

//6 .
console.log('Adjcent Selectors')
console.log('The addition operator (+) can be used to selects elements next to each other')
console.log('')

//7 .
console.log('<input type=“submit”>')
console.log('Used in forms to send form information through a server to a nother location like an email')
console.log('')

//8 .
console.log('<option> elelment')
console.log('used in select dropdown menus as independent options within the list')
console.log('')

//9 .
console.log('What are Pixels')
console.log('A measurement of lwngth in CSS that measures to 1/96th of an inch')
console.log('')

//10 .
console.log('<caption>')
console.log('An HTML tag used in tables to add descriptions of the table')
console.log('')



/*1Codewars Challenge*/
// .
console.log('filter the number')
function filterTheNumber(str) {
    console.log(str.split('').filter((letters) => !/[0-9]/.test(letters)).join(''))
}
filterTheNumber('this has 3 numbers')
console.log('')

//2 .
console.log('You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party')
function undergroundLeague(pokemon) {
    for(let i = 1; i <= pokemon; i++) {
        console.log(`I choose you ${i}` )
    }
}
undergroundLeague(3)
console.log('')

//3 .
console.log('Write function RemoveExclamationMarks which removes all exclamation marks from a given string.')
function removeExclaimationMaarks(str) {
    console.log(str.replaceAll("!", ""));
}

removeExclaimationMaarks('Hello! My name is Leanne.  It\'s so nice to meet you!!!')
console.log('')

//4 .
console.log('Remove first and last character')
function removeFirstAndLastCharacter(str) {
    console.log(str.slice(1, -1))
}

removeFirstAndLastCharacter('Remove first and last character')
console.log('')

//5 .
console.log('Disemvowel Trolls')
function disemvowel(str) {
    let vowels = /[aeiou]/ig;
    console.log(str.replace(vowels, ''))
}
disemvowel('disemvowel')
console.log('')
