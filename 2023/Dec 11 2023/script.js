/*ANKI Review: */
console.log('ANKI Review:')
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



reviewQuestion1.textContent = '1. The benefit to short selectors'

//1.
console.log('1. The benefit to short selectors')
console.log('Reduces load time, improves readability, reduces override errors, & inproves inheritance')

reviewAnswer1.textContent = ' - Reduces load time, improves readability, reduces override errors, & inproves inheritance '
console.log('')



reviewQuestion2.textContent = '2. Program Base Directory'
//2.
console.log('2. Program Base Directory')
console.log('The containing directory that holds all relative materials and assest related to the program including images, media files, code files, etc.')

reviewAnswer2.textContent = ' - The containing directory that holds all relative materials and assets related to the program including images, media files, code files, etc.'
console.log('')



reviewQuestion3.textContent = '3. Flexible Media'

//3.
console.log('3. Flexible Media')
console.log('Media content that maintains an aspect ratio reguardless of the viewing device screen size')

reviewAnswer3.textContent = ' - Media content that maintains an aspect ratio reguardless of the viewing device screen size'
console.log('')



reviewQuestion4.textContent = '4. How to measure compression'
//4.
console.log('4. The compression ratio is the uncompresses size of the file divided by the compressed size. You can use a CDN, task runner, or a online tool like compression.io to compress your files')
console.log('')

reviewAnswer4.textContent = ' - The compression ratio is the uncompresses size of the file divided by the compressed size.  You can use a CDN, task runner, or a online tool like compression.io to compress your files'
console.log('')



reviewQuestion5.textContent = '5. Components directory'
//5.
console.log('5. Components directory')
console.log('The components are the files and assets within a base directory that are related to a single program.  These components can include code, images, media and can inturn be organized in files themselves within the base file adding more organization')


reviewAnswer5.textContent = ' - The components are teh files and assets within a base directory'
console.log('')



reviewQuestion6.textContent = '6. Scaleable Modular Architecture'
//6.
console.log('6. Scaleable Modular Architecture')
console.log('A process of development where components of a program or webpage are broken down into independent modules that can be added or removed from their positions in a program without altering other portions of the program. The architecture breaks down content into base elements, Layout, Modules, state, and style.')

reviewAnswer6.textContent = ' - A process of development where components of a program or webpage are broken down into independent modules that can be added or removed from their positions in a program without altering other portions of the program. The architecture breaks down content into base elements, Layout, Modules, state, and theme.'
console.log('')



reviewQuestion7.textContent = '7. Modules Directory'
//7.
console.log('7. Modules Directory')
console.log('A directory within the base directory containing the content elements of a program or website')

reviewAnswer7.textContent = ' - A directory within the base directory containing the content elements of a program or website'
console.log('')



reviewQuestion8.textContent = '8. Golden rule of front-end decelopment'
//8.
console.log('8. Golden rule of front-end decelopment')
console.log('Seperation of Concerns.  Keep content, styling, and functionality seperate.  this can be done by organizing a programs files to keep HTML, CSS, and JavaScript on seperate pages and ensuring the content remains in HTML, style in CSS and functionality within JS')

reviewAnswer8.textContent = ' - Seperation of Concerns.  Keep content, styling, and functionality seperate.  this can be done by organizing a programs files to keep HTML, CSS, and JavaScript on seperate pages and ensuring the content remains in HTML, style in CSS and functionality within JS'
console.log('')



reviewQuestion9.textContent = '9. SMACSS: Theme'
//9.
console.log('9. SMACSS: Theme')
console.log('Refers to the thematic elements that will be used throughout a program or website. The theme generally holds teh font type, style, page color scheme, and any other element that can be associated with the overall presentation of a program or websites content')

reviewAnswer9.textContent = ' - Refers to the thematic elements that will be used throughout a program or website. The theme generally holds teh font type, style, page color scheme, and any other element that can be associated with the overall presentation of a program or websites content'
console.log('')



reviewQuestion10.textContent = '10. gzip compression'
//10.
console.log('10. gzip compression')
console.log(' It allows you to specify a range of compression levels, from 1 to 9. The higher the compression level, the longer the process takes')

reviewAnswer10.textContent = ' -  It allows you to specify a range of compression levels, from 1 to 9. The higher the compression level, the longer the process takes'
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

codewarsQuestion1.textContent = '1. Change Case'
//1.
console.log('1. Change Case')
let changeCase = (string) => {
    let result = string.split(' ').map(i => i.replace(i[0], i[0].toUpperCase())).join(" ")
    console.log(result)
}
console.log(changeCase)
changeCase('hello everyone')
console.log('')

codewarsAnswer1.textContent = 'let changeCase = ' + changeCase
console.log('')



codewarsQuestion2.textContent = '2. Count Characters in a string'
//2.
console.log('2. Count Characters in a string')
console.log('')
let countCharacters = (string) => {
    let count = {};
    for(let characters of string) {
        count[characters] = (count[characters] || 0) + 1
    }
    console.log(count)
}
countCharacters('hello')

codewarsAnswer2.textContent = 'let countCharacters = ' + countCharacters
console.log('')



codewarsQuestion3.textContent = '3. Filter out the Geese'
//3.
console.log('3. Filter out the Geese')
let filterGeese = (list) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    console.log(list.filter((birds) => !geese.includes(birds)))
    
}
filterGeese(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher", "raven"])
console.log('')

codewarsAnswer3.textContent = filterGeese
console.log('')



codewarsQuestion4.textContent = '4. Going to the Cinema'

//4.
console.log('4. Going to the Cinema')
let cinema = (card, ticket, percentage) => {
    let systemA = 0;
    let systemB = card;
    let visits = 0;
    while(Math.ceil(systemB) > Math.ceil(systemA)) {
        systemA += ticket * percentage;
        systemB += ticket * Math.pow(percentage, visits)
        visits ++
    }
    console.log(visits)
}
cinema(100, 10, .15)
console.log('')

codewarsAnswer4.textContent = cinema
console.log('')




codewarsQuestion5.textContent = '5. ATM'
//5.
console.log('5. ATM')
let ATM = (withdrawl) => {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let total = 0;
    for(let i = 0; i < banknotes.length; i++) {
        total += Math.floor(withdrawl / banknotes[i]);
        withdrawl %= banknotes[i]
    }
    console.log(total)
}
ATM(101)
console.log('')

codewarsAnswer5.textContent = ' - '
console.log('')



//codewarsQuestion6.textContent = '6.'
//codewarsAnswer6.textContent = ' - '
//codewarsQuestion7.textContent = '7.'
//codewarsAnswer7.textContent = ' - '
//codewarsQuestion8.textContent = '8.'
//codewarsAnswer8.textContent = ' - '
//codewarsQuestion9.textContent = '9.'
//codewarsAnswer9.textContent = ' - '
//codewarsQuestion10.textContent = '10.'
//codewarsAnswer10.textContent = ' - '










