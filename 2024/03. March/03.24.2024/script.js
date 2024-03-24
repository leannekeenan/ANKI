/*ANKI Review: */
console.log('ANKI Review: HTML Definition and Syntax Review')
let reviewQuestion1 = document.getElementById('rq1')
let reviewQuestion2 = document.getElementById('rq2')
let reviewQuestion3 = document.getElementById('rq3')
let reviewQuestion4 = document.getElementById('rq4')
let reviewQuestion5 = document.getElementById('rq5')
let reviewQuestion6 = document.getElementById('rq6')
let reviewQuestion7 = document.getElementById('rq7')
let reviewQuestion8 = document.getElementById('rq8')
let reviewQuestion9 = document.getElementById('rq9')
let reviewQuestion10 = document.getElementById('rq10')

let reviewAnswer1 = document.getElementById('ra1')
let reviewAnswer2 = document.getElementById('ra2')
let reviewAnswer3 = document.getElementById('ra3')
let reviewAnswer4 = document.getElementById('ra4')
let reviewAnswer5 = document.getElementById('ra5')
let reviewAnswer6 = document.getElementById('ra6')
let reviewAnswer7 = document.getElementById('ra7')
let reviewAnswer8 = document.getElementById('ra8')
let reviewAnswer9 = document.getElementById('ra9')
let reviewAnswer10 = document.getElementById('ra10')





//1.
reviewQuestion1.textContent = '1. What does "Seperation of Concerns" help with?'
console.log('1. What does "Seperation of Concerns" help with?')
console.log('The "Seperation of Concerns" keeps code organized and easyier to follow for other programmers who may work on our project.  The peperation keeps content in the HTML ,styling in CSS and functionality in JavaScript or other scripting language')

reviewAnswer1.textContent = `- The "Seperation of Concerns" keeps code organized and easyier to follow for other programmers who may work on our project.  The peperation keeps content in the HTML ,styling in CSS and functionality in JavaScript or other scripting language`
console.log('')




//2.
reviewQuestion2.textContent = '2. URL'
console.log('2. URL')
console.log('Stands for Uniform Resource Locator.  It Searches a DNS (Domain Name Server) looking for a website IP addresses, returning a human-readable identifier of a website')

reviewAnswer2.textContent = `- Stands for Uniform Resource Locator.  It Searches a DNS (Domain Name Server) looking for a website IP addresses, returning a human-readable identifier of a website`
console.log('')





//3.
reviewQuestion3.textContent = '3. <header>'
console.log('3. <header>')
console.log('HTML tag used to identify content that should be at the top of the document')

reviewAnswer3.textContent = `- HTML tag used to identify content that should be at the top of the document`
console.log('')




//4.
reviewQuestion4.textContent = '4. IP Address'
console.log('4. IP Address')
console.log('Internet Potocol Address.  The numerical representation of a specific device, used by a DNS to translate domain names into IP addresses and back when on a shared network')

reviewAnswer4.textContent = `- Internet Potocol Address.  The numerical representation of a specific device, used by a DNS to translate domain names into IP addresses and back when on a shared network`
console.log('')




//5.
reviewQuestion5.textContent = '5. What is Full-Stack Development?'
console.log('5. What is Full-Stack Development?')
console.log('A term used to define building both the front and back end of an application')


reviewAnswer5.textContent = `- A term used to define building both the front and back end of an application`
console.log('')




//6.
reviewQuestion6.textContent = '6. validator'
console.log('6. validator')
console.log('An internal tool within Developers Tools that helps identify errors in your code')

reviewAnswer6.textContent = `- An internal tool within Developers Tools that helps identify errors in your code`
console.log('')




//7.
reviewQuestion7.textContent = '7. "inherit"'
console.log('7. "inherit"')
console.log('A Keyword used in OOP development allowing for child nodes to inherit properties from their parent elements, improving readability, reducing repetition and imporving modality')

reviewAnswer7.textContent = `- A Keyword used in OOP development allowing for child nodes to inherit properties from their parent elements, improving readability, reducing repetition and imporving modality`
console.log('')




//8.
reviewQuestion8.textContent = '8. viewport meta tag'
console.log('8. viewport meta tag')
console.log('used to set the default parameters of a document including the doc type, viewport initial sizing and <meta name= "viewport" content="width=device-width" initial-scale= "1.0">')

reviewAnswer8.textContent = `- used to set the default parameters of a document including the doc type, viewport initial sizing and <meta name= "viewport" content="width=device-width" initial-scale= "1.0">`
console.log('')




//9.
reviewQuestion9.textContent = '9. target = _top'
console.log('9. target = _top')
console.log('Property used to open a HTML document outside of the browser window, , expanding to the full size of the viewport')

reviewAnswer9.textContent = `- Property used to open a HTML document outside of the browser window, , expanding to the full size of the viewport`
console.log('')




//10.
reviewQuestion10.textContent = '10. submit'
console.log('10. submit')
console.log('Property value used in forms to send the content to a new location')

reviewAnswer10.textContent = `- Property value used in forms to send the content to a new location`
console.log('')


let codewarsQuestion1 = document.getElementById('cwq1')
let codewarsQuestion2 = document.getElementById('cwq2')
let codewarsQuestion3 = document.getElementById('cwq3')
let codewarsQuestion4 = document.getElementById('cwq4')
let codewarsQuestion5 = document.getElementById('cwq5')
let codewarsQuestion6 = document.getElementById('cwq6')
let codewarsQuestion7 = document.getElementById('cwq7')
let codewarsQuestion8 = document.getElementById('cwq8')
let codewarsQuestion9 = document.getElementById('cwq9')
let codewarsQuestion10 = document.getElementById('cwq10')

let codewarsAnswer1 = document.getElementById('cwa1')
let codewarsAnswer2 = document.getElementById('cwa2')
let codewarsAnswer3 = document.getElementById('cwa3')
let codewarsAnswer4 = document.getElementById('cwa4')
let codewarsAnswer5 = document.getElementById('cwa5')
let codewarsAnswer6 = document.getElementById('cwa6')
let codewarsAnswer7 = document.getElementById('cwa7')
let codewarsAnswer8 = document.getElementById('cwa8')
let codewarsAnswer9 = document.getElementById('cwa9')
let codewarsAnswer10 = document.getElementById('cwa10')

/*Codewars Challenges*/
console.log('Codewars Challenges')


//1.
codewarsQuestion1.textContent = '1. Filter the Numbers Out of the String - filter the numbers out of a string and return them to a new array. return the array with the number in their orignal order'
console.log('1. Filter the Numbers Out of the String - filter the numbers out of a string and return them to a new array. return the array with the number in their orignal order')
console.log(`
let filterNumOutOfStr = (string) => {
    let arr = []
    string.split('').filter(character => {
        if(character.match(/[0-9]/g)) {
            arr.push(character)
        }
    })
    console.log(arr)
}
filterNumOutOfStr('h3110')
`)

codewarsAnswer1.textContent = `
let filterNumOutOfStr = (string) => {
    let arr = []
    string.split('').filter(character => {
        if(character.match(/[0-9]/g)) {
            arr.push(character)
        }
    })
    console.log(arr)
}
filterNumOutOfStr('h3110')
`

let filterNumOutOfStr = (string) => {
    let arr = []
    string.split('').filter(character => {
        if(character.match(/[0-9]/g)) {
            arr.push(character)
        }
    })
    console.log(arr.join(''))
}
filterNumOutOfStr('h3110')

console.log('')




//2.
codewarsQuestion2.textContent = '2. Youre a square - write a function that determins if an integer is a square root '
console.log('2. Youre a square - write a function that determins if an integer is a square root ')
console.log(`
let square = (num) => {
    let sqrt = Math.sqrt(num);
    if(sqrt % 1 === 0) {
        console.log(sqrt)
    }
    else {
        console.log('NS')
    }
}
square(25) //5
square(9) // 3
square(3) // NS
`)

codewarsAnswer2.textContent = `- `

let square = (num) => {
    let sqrt = Math.sqrt(num);
    if(sqrt % 1 === 0) {
        console.log(sqrt)
    }
    else {
        console.log('NS')
    }
}
square(25)
square(9)
square(3)

console.log('')




//3.
codewarsQuestion3.textContent = '3. ATM - write a function that determines the minimum number of bank notes needed to honor a withdrawl greater than 1 and less than 1500'
console.log('3. ATM - write a function that determines the minimum number of bank notes needed to honor a withdrawl greater than 1 and less than 1500')
console.log(`
let ATM = (withdrawl) => {
    let honoredTotal = 0;
    let banknotes = [100, 50, 20, 10, 5, 1];

    if(withdrawl < 1 || withdrawl > 1500) {
        console.log('appologies, we can not honor an ammount less than 1 dollar or greater that $1500.  Please enter a new ammount to try again')
    }

    for(let i = 0; i < banknotes.length; i++) {
        honoredTotal += Math.floor(withdrawl / banknotes[i]);
        withdrawl %= banknotes[i] 
    }
    console.log(honoredTotal)
}

ATM(17)

`)

codewarsAnswer3.textContent = `
let ATM = (withdrawl) => {
    let honoredTotal = 0;
    let banknotes = [100, 50, 20, 10, 5, 1];

    if(withdrawl < 1 || withdrawl > 1500) {
        console.log('appologies, we can not honor an ammount less than 1 dollar or greater that $1500.  Please enter a new ammount to try again')
    }

    for(let i = 0; i < banknotes.length; i++) {
        honoredTotal += Math.floor(withdrawl / banknotes[i]);
        withdrawl %= banknotes[i] 
    }
    console.log(honoredTotal)
}

ATM(17)

`

let ATM = (withdrawl) => {
    let honoredTotal = 0;
    let banknotes = [100, 50, 20, 10, 5, 1];

    if(withdrawl < 1 || withdrawl > 1500) {
        console.log('appologies, we can not honor an ammount less than 1 dollar or greater that $1500.  Please enter a new ammount to try again')
    }

    for(let i = 0; i < banknotes.length; i++) {
        honoredTotal += Math.floor(withdrawl / banknotes[i]);
        withdrawl %= banknotes[i] 
    }
    console.log(honoredTotal)
}

ATM(17)

console.log('')





//4.
codewarsQuestion4.textContent = '4. The price of Mangoes - Write a function that gives a 3 for 2 deal on mangoes'
console.log('4. The price of Mangoes - Write a function that gives a 3 for 2 deal on mangoes')
console.log(`
let deal = (price, count) => {
    let discount = Math.floor(count / 3) * price;
    let total = (price * count) - discount
    console.log(total)
}
deal(1, 6)
`)

codewarsAnswer4.textContent = `
let deal = (price, count) => {
    let discount = Math.floor(count / 3) * price;
    let total = (price * count) - discount
    console.log(total)
}
deal(1, 6)
`

let deal = (price, count) => {
    let discount = Math.floor(count / 3) * price;
    let total = (price * count) - discount
    console.log(total)
}
deal(1, 6)

console.log('')





//5.
codewarsQuestion5.textContent = '5. Feast of Many Beasts - write a function that checks the fitst and last character of a party attendee and the item they brought.  If the first and last characters match, return true, else false'
console.log('5. Feast of Many Beasts - write a function that checks the fitst and last character of a party attendee and the item they brought.  If the first and last characters match, return true, else false')
console.log('')

codewarsAnswer5.textContent = `- `

let feast = (attendee, item) => {
   for(let a = 0; a < attendee.length; a++) {
    for(let i = 0; i < item.length; i++) {
        if(attendee[a][0] === item[i][0] && 
            attendee[attendee.length - 1] === item[item.length - 1]) {
            console.log(true)
            return
        }
        else {
            console.log(false)
            return
        }
    }
   }
   
}
feast('bat', 'blue hat')
console.log('')



// codewarsQuestion6.textContent = '6.'
// codewarsAnswer6.textContent = `- `
// codewarsQuestion7.textContent = '7.'
// codewarsAnswer7.textContent = `- `
// codewarsQuestion8.textContent = '8.'
// codewarsAnswer8.textContent = `- `
// codewarsQuestion9.textContent = '9.'
// codewarsAnswer9.textContent = `- `
// codewarsQuestion10.textContent = '10.'
// codewarsAnswer10.textContent = `- `










