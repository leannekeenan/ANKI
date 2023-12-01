/*ANKI Review: General Knowledge*/
console.log('ANKI Review: General Knowledge')
//1.
console.log('1. What is a Markup Language')
console.log('Languages associated with web development that centrialize on content and styling of a website')
console.log('')

//2.
console.log('2. The process of a computer making a request for a website')
console.log('A URL is entered into a search bar of a web access program such as Chrome, Firefox, GoDuck Go, etc.  The URL is translated into its DNS (Domain Name Server) form which is a numerical string of digits representing a website within the collection of servers we call the internet.  When the IP address is found, the content is then fetched from the server it lives on and sent to the IP address of your computer to complete the request. If errors arrise, they will be presented instead of the content of the website')
console.log('')

//3.
console.log('3. What is a web browser')
console.log('A program that grants access to the internet, providing users the opportunity to search and find data on websites')
console.log('')

//4.
console.log('4. Ways to cetntralize  design related settings within a CSS file')
console.log('1. Use the SMACSS format.  2. Use individual CSS pages for each element and import them to a singular sheet. 3. Use comments. 4. Use reser/normalize properties. 5. Use the :root pseudo class')
console.log('')

//5.
console.log('5. Modules Directory')
console.log('A directory file that holds the source files related to the architecture of a website (What you see on the left hand side of VS code)')
console.log('')

//6.
console.log('6. Component Directory')
console.log('Subdirectories within module directory that hold related content to a unique module')
console.log('')

//7.
console.log('7. gzip compression')
console.log('A compression method used to reduce the size of files when transmitting them over the internet')
console.log('')

//8.
console.log('8. How to measure compression')
console.log('Use a CDN, a task runner, or an online tool like compression.io ')
console.log('')

//9.
console.log('9. Golden Rule of Front-End Development')
console.log('The Seperation of Concerns.  Ensure content remains within HTML, styling remains in CSS, andfunctionality remains within the scripting language, in this case JavaScript')
console.log('')

//10.
console.log('10. SMACSS State')
console.log('Part of the SMACSS architecture that organized teh pseudo state selectors that affect the  status condition of the HTML element including :hover, :nth-child(), ::before, ::after, and more')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. Going to the Cinema')
console.log('write a function that takes three parameters: discountCard, normalTicketPrice, percentageOfDiscount.  return how many tickets you need to pay for to have the price of the discount card be less than the cost of tickets at the normal ticket price')
let cinema = (discountCard, ticketPrice, percentage) => {
    let ticketTotal = 0;
    let cardSystem = discountCard;
    let ticketSystem = 0
    //while getting more with the card system
    while(Math.ceil(cardSystem) >= Math.ceil(ticketSystem)) { 
        //the ticket system returns teh product of the ticket cost and total purchased
        ticketSystem += ticketPrice * percentage
        //the card returns the product of the ticket cost by the value of the percentage discount 
        cardSystem += ticketPrice * Math.pow(percentage, ticketTotal)
        //the ticket total increases by 1
        ticketTotal++;
        
    }
    console.log(ticketTotal)
}
cinema(100, 10, .75)
console.log('')

//2.
console.log('2. Jaden Casting Strings')
console.log('')
let castingStrings = (string) => {
    console.log(string.split(' ').map(character => 
        character.replace(character[0], character[0].toUpperCase())).join(''))
}
castingStrings('hello')
console.log('')

//3.
console.log('3. Count Characters in a String')
console.log('')
let countCharacters = (string) => {
    for(let i = 0; i < string.length; i++) {
        let count = string.split(string[i]).length - 1;
        console.log(`${string[i]} : ${count}`)
    }
}
countCharacters('hello')
console.log('')

//4.
console.log('4. Remove first and last Character')
console.log('')
let removeFirstAndLast = (string) => {
    return string.slice(1, -1)
}
console.log(removeFirstAndLast('hello'))
console.log('')

//5.
console.log('5. replace letters with alphabet index')
console.log('')
let replaceAlphabetIndexPosition = (string) => {
    for(let i = 0; i < string.length; i++) {
        let ASCII = string[i].charCodeAt() - 96
        console.log(ASCII)
    }
}
replaceAlphabetIndexPosition('hello')
console.log('')
