/*ANKI Review: */
console.log('ANKI Review: HTML')
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
reviewQuestion1.textContent = '1. What is an IP address'
console.log('1. What is an IP address')
console.log('"IP" stands for Internet protocol address.  It uses unique identifiers servers use to locate devices requesting content')

reviewAnswer1.textContent = ' - "IP" stands for Internet protocol address.  It uses unique identifiers servers use to locate devices requesting content'
console.log('')




//2.
reviewQuestion2.textContent = '2. Inherit Keyword'
console.log('2. Inherit Keyword')
console.log('The "inherit" keyword is used in OOP development to allow child elements to gain properties from their parent element. The allows polymorphed objects to be thrie own unique ojbect but have similar properties without hving to reqrite them.  Makes code more dry and provides independence for child elements ')

reviewAnswer2.textContent = ' - The "inherit" keyword is used in OOP development to allow child elements to gain properties from their parent element. The allows polymorphed objects to be thrie own unique ojbect but have similar properties without hving to reqrite them.  Makes code more dry and provides independence for child elements '
console.log('')





//3.
reviewQuestion3.textContent = '3. HTML'
console.log('3. HTML')
console.log('Hypertext Markup Language.  A programming markup language that relates to the physical content of a page, including objects like text, images, sound, and video. Uses tags syntax to identify individual objects items')

reviewAnswer3.textContent = ' - Hypertext Markup Language.  A programming markup language that relates to the physical content of a page, including objects like text, images, sound, and video. Uses tags syntax to identify individual objects items'
console.log('')




//4.
reviewQuestion4.textContent = '4. What is syntax?'
console.log('4. What is syntax?')
console.log('The structural, spelling, and gramatical rules of a language.')

reviewAnswer4.textContent = ' - The structural, spelling, and gramatical rules of a language.'
console.log('')




//5.
reviewQuestion5.textContent = '5. <header> tag'
console.log('5. <header> tag')
console.log('syntactical tag used to refer to content that is at the beginning of a document or page section')


reviewAnswer5.textContent = ' - syntactical tag used to refer to content that is at the beginning of a document or page section'
console.log('')




//6.
reviewQuestion6.textContent = '6. <tbody>'
console.log('6. <tbody>')
console.log('<tbody> is the syntactical tag representing a table body.')

reviewAnswer6.textContent = ' - <tbody> is the syntactical tag representing a table body.'
console.log('')




//7.
reviewQuestion7.textContent = '7. Target=“_blank”'
console.log('7. Target=“_blank”')
console.log('tag attribute used to open content in a seperate window from the main page')

reviewAnswer7.textContent = ' - tag attribute used to open content in a seperate window from the main page'
console.log('')




//8.
reviewQuestion8.textContent = '8. value'
console.log('8. value')
console.log('HTML attribute that provides a value represendation of that object when called in JavaScript, or another functionality language.  For example, an object can have anid, class, and content - all of which is too large to be presented well in a document.  The value attribute can hold a numerical or text value to represent that object when called')

reviewAnswer8.textContent = ' - HTML attribute that provides a value represendation of that object when called in JavaScript, or another functionality language.  For example, an object can have anid, class, and content - all of which is too large to be presented well in a document.  The value attribute can hold a numerical or text value to represent that object when called'
console.log('')




//9.
reviewQuestion9.textContent = '9. SVC'
console.log('9. SVC')
console.log('Scaleable Video Coding.  Adjusts video content to fit their viewport without adjusting teh aspect ratio')

reviewAnswer9.textContent = ' - Scaleable Video Coding.  Adjusts video content to fit their viewport without adjusting teh aspect ratio'
console.log('')




//10.
reviewQuestion10.textContent = '10. What is the "<src>" tag?'
console.log('10. What is the "<src>" tag?')
console.log('<src> is the source tag.  Used to link content like images, videos, and other content from either the directory file or other websites')

reviewAnswer10.textContent = ' - <src> is the source tag.  Used to link content like images, videos, and other content from either the directory file or other websites'
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
codewarsQuestion1.textContent = '1. Break, continue function - Create a function called "grabDoll" that accepts "dolls" as a parameter. Using a for loop, iterate through the array of dolls. If the doll element is eother "Hello Kitty" or "Barbie", add the element to a new array called "Bag". Write an else clause and continue the for loop. If the bag array length reaches 3, break out of the for loop and return the array'
console.log('1. Break, continue function - Create a function called "grabDoll" that accepts "dolls" as a parameter. Using a for loop, iterate through the array of dolls. If the doll element is eother "Hello Kitty" or "Barbie", add the element to a new array called "Bag". Write an else clause and continue the for loop. If the bag array length reaches 3, break out of the for loop and return the array')

let grabDoll = (dolls) => {
    let bag = []
    for(let i = 0; i < dolls.length; i++) {

        if(dolls[i] === "Hello Kitty" || dolls[i] ==="Barbie") {
            bag.push(dolls[i])
        }

        else {
            continue;
        }

        if(bag.length === 3) {
            break
        }
        
    }
    console.log(bag)
}
grabDoll(["Hello Kitty", "Barbie", "Hello Kitty", "Barbie"])

codewarsAnswer1.textContent = `let grabDoll = ${grabDoll}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Make 5 functions that concatenate the following vartiables into these words:1. Dad, 2. Can, 3. banana, 4. Bed, 5. and'
console.log('2. Make 5 functions that concatenate the following vartiables into these words:1. Dad, 2. Can, 3. banana, 4. Bed, 5. and')
let concatenation = () => {
    var a1="A";
    var a2="a";
    var b1="B";
    var b2="b";
    var c1="C";
    var c2="c";
    var d1="D";
    var d2="d";
    var e1="E";
    var e2="e";
    var n1="N";
    var n2="n";

    let Dad = d1 + a2 + d2;
    let Can = c1 + a2 + n2
    let banana = b2 + a2 + n2 + a2 + n2 + a2
    let Bed = b1 + e2 + d2
    let and = a2 + n2 + d2

    console.log(`${Dad}, ${Can}, ${banana}, ${Bed}, ${and}`)
}
concatenation()

codewarsAnswer2.textContent = `let concatentation = ${concatenation}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Write a function that removes the spaces from the string, then return the resultant string.'
console.log('3. Write a function that removes the spaces from the string, then return the resultant string.')

let removeSpaces = (string) => {
    console.log(string.replaceAll(' ', ''))
}

removeSpaces('hey there hows it going')
codewarsAnswer3.textContent = `let removeSpaces = ${removeSpaces}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Filter Out the Geese.Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the "geese" removed.'
console.log('4. Filter Out the Geese. Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the "geese" removed.')

let filterGeese = (array) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let filter = array.filter((birds) => !geese.includes(birds))
    console.log(filter)
}
filterGeese(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher", "Blackbird", "Goose"])
codewarsAnswer4.textContent = `let filterGeese = ${filterGeese}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Sum of Multiples. Find the sum of all multiples of n below m. Return INVALID if the total is less than 0'
console.log('5. Sum of Multiples. Find the sum of all multiples of n below m. Return INVALID if the total is less than 0')

let sumOfMultiples = (n, m) => {
    let total = 0
    for(let i = 1; i * m <= n; i++) {
        total += i * m
    }
    console.log(total)
}
sumOfMultiples(3, 1)

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










