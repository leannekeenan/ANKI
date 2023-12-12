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





//1.
reviewQuestion1.textContent = '1. What\'s an attribute-value pair?'
console.log('1. What\'s an attribute-value pair?')
console.log('<input type = \'text\'></input>. Placed within the start tag of an element, attribute-value pairs are used to define the properties of a page element. For example the <input type = \'text\'></input> can have an input type of button, number, email, phone, etc. Other tags that use attribute value pairs include anchor/href pairs, image/source pairs, paragraph/style pairs, language/selection pairs, button/value pairs, form/id pairs, etc')

reviewAnswer1.textContent = '<input type = \'text\'></input>. Placed within the start tag of an element, attribute-value pairs are used to define the properties of a page element. For example the <input type = \'text\'></input> can have an input type of button, number, email, phone, etc. Other tags that use attribute value pairs include anchor/href pairs, image/source pairs, paragraph/style pairs, language/selection pairs, button/value pairs, form/id pairs, etc.'
console.log('')




//2.
reviewQuestion2.textContent = '2. What\'s the <footer> tag for?'
console.log('2. What\'s the <footer> tag for?')
console.log('The footer tag is a semantic tag used to place content at the end of a document or section.')

reviewAnswer2.textContent = ' - The footer tag is a semantic tag used to place content at the end of a document or section.'
console.log('')





//3.
reviewQuestion3.textContent = '3. Front-End Programming'
console.log('3. Front-End Programming')
console.log('Known as client-side programming, front end development pretains to the content of a webpage that a user can interact with, see and use. ')

reviewAnswer3.textContent = ' - Known as client-side programming, front end development pretains to the content of a webpage that a user can interact with, see and use. '
console.log('')




//4.
reviewQuestion4.textContent = '4. What is syntax?'
console.log('4. What is syntax?')
console.log('The spelling and gramatical rules and guidelines of a language. In terms of HTML the semantic language is the versitile tags that can provide specificity to your document elements instead of using a generic <div> tag.')

reviewAnswer4.textContent = ' - The spelling and gramatical rules and guidelines of a language.  In terms of HTML the semantic language is the versitile tags that can provide specificity to your document elements instead of using a generic <div> tag.'
console.log('')




//5. 
reviewQuestion5.textContent = '5. value'
console.log('5. value')
console.log('a keyword in HTML that assigns a unique value to a element that can be used when preforming JavaScript functions that invlove that element.  The value can represent the element in a function')


reviewAnswer5.textContent = ' - a keyword in HTML that assigns a unique value to a element that can be used when preforming JavaScript functions that invlove that element.  The value can represent the element in a function'
console.log('')




//6.
reviewQuestion6.textContent = '6. What is a relative path'
console.log('6. What is a relative path')
console.log('Used to describe hyperlinks on a page that connect to other relative website content such as the links in a nav bar or to pages in a blog.  They use the octothorpe just like id\'s instead of a .com, .edu weblink')

reviewAnswer6.textContent = ' - Used to describe hyperlinks on a page that connect to other relative website content such as the links in a nav bar or to pages in a blog.  They use the octothorpe just like id\'s instead of a .com type weblink'
console.log('')




//7.
reviewQuestion7.textContent = '7. <target = "_blank">'
console.log('7. <target = "_blank> is used to open content in a new browser window')
console.log('')

reviewAnswer7.textContent = ' - <target = "_blank> is used to open content in a new browser window'
console.log('')




//8.
reviewQuestion8.textContent = '8. user-scaleable property'
console.log('8. user-scaleable property')
console.log('viewport property that allows the user to scale the screen size of their device allowing the content to be zoomed in on')

reviewAnswer8.textContent = ' - viewport property that allows the user to scale the screen size of their device allowing the content to be zoomed in on.  This is done by accepting a boolean value to allow ir disallow the users ability to zoom'
console.log('')




//9.
reviewQuestion9.textContent = '9. SVC'
console.log('9. SVC')
console.log('Scaleable Video Coding.  An extension that alloes videos to maintain their aspect ratio reguardless of screen size')

reviewAnswer9.textContent = ' - Scaleable Video Coding.  An extension that alloes videos to maintain their aspect ratio reguardless of screen size'
console.log('')




//10.
reviewQuestion10.textContent = '10. keyword \'inherit\''
console.log('10. keyword \'inherit\'')
console.log('used to specify that a property should inherit its value from its parent element')

reviewAnswer10.textContent = ' - used to specify that a property should inherit its value from its parent element'
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
codewarsQuestion1.textContent = '1. list filtering. Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.'
console.log('1. list filtering. Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.')
let listFiltering = (list) => {
    console.log(list.filter(i => typeof i === 'number'))
    
}
listFiltering([10, true, 'hello'])
console.log('')

codewarsAnswer1.textContent = listFiltering





//2.
codewarsQuestion2.textContent = '2. count characters in a string'
console.log('2. count characters in a string')
let countCharacters = (string) => {
    let count = {};
    for(let i = 0; i < string.length; i++) {
        let character = string[i];
        count[character] = (count[character] || 0) + 1
    }
    console.log(count)
}
countCharacters('hello')
console.log('')

codewarsAnswer2.textContent = countCharacters
console.log('')




//3.
codewarsQuestion3.textContent = '3. Sum of differences in an array'
console.log('3. Sum of differences in an array')
let sumOfDifferences = (arr) => {
    let sort = arr.sort((a, b) => b - a, 0)
    let total = 0;
    for(let i = 0; i < sort.length - 1; i++) {
        total += sort[i] - sort[i + 1]
    }
    console.log(total)
}
console.log('')
sumOfDifferences([1, 3, 6])
codewarsAnswer3.textContent = sumOfDifferences
console.log('')





//4.
codewarsQuestion4.textContent = '4. convert num to reverse list'
console.log('4. ')
let convert = (num) => {
    console.log(Number(num.toString().split('').reverse().join('')))
}
convert(12345)
console.log('')

codewarsAnswer4.textContent = convert
console.log('')





//5.
codewarsQuestion5.textContent = '5. going to the cinema'
console.log('5. going to the cinema')

let cinema = (card, ticket, percentage) => {
    let standardPurchase = 0; 
    let discountCard = card;
    let visits = 0

    while(Math.ceil(discountCard) >= Math.ceil(standardPurchase)) {
        standardPurchase += ticket * percentage
        discountCard += Math.pow(percentage, visits)
        visits ++
    }
    console.log(visits)

}
cinema(500, 50, .75)
codewarsAnswer5.textContent = cinema
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










