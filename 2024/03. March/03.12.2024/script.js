/*ANKI Review: */
console.log(`ANKI Review: JavaScript DOM MEthod Definitions and Syntax`)
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
reviewQuestion1.textContent = '1. element.parentNode'
console.log(`1. element.parentNode`)
console.log(`DOM method used to access a parent node of a specified element, meaning that it targets the element containing the defined element in the method call`)

reviewAnswer1.textContent = `- DOM method used to access a parent node of a specified element, meaning that it targets the element containing the defined element in the method call`
console.log(``)




//2.
reviewQuestion2.textContent = `2. element.previousElementSibling`
console.log(`2. element.previousElementSibling`)
console.log(`DOM method used to access the preceeding element to the defined element in the method, meaning the method targets the element before it within its parent.  If it has no previous elements, it will retutn null.`)

reviewAnswer2.textContent = `- DOM method used to access the preceeding element to the defined element in the method, meaning the method targets the element before it within its parent.  If it has no previous elements, it will retutn null.`
console.log(``)





//3.
reviewQuestion3.textContent = `3. element.setAttribute("name", "value")`
console.log(`3. element.setAttribute("name", "value")`)
console.log(`DOM method used to set an attrbute to an elelment that was not previously added in the CSS.`)

reviewAnswer3.textContent = `- DOM method used to set an attrbute to an elelment that was not previously added in the CSS.`
console.log(``)




//4.
reviewQuestion4.textContent = `4. element.childNodes`
console.log(`4. element.childNodes`)
console.log(`DOM method used to target the child elements it contains, returning a NodeList`)

reviewAnswer4.textContent = `- DOM method used to target the child elements it contains, returning a NodeList`
console.log(``)




//5.
reviewQuestion5.textContent = `5. document.createTextNode("")`
console.log(`5. document.createTextNode("")`)
console.log(`DOM method used to access the document directly and create a new text node element in the body.`)


reviewAnswer5.textContent = `- DOM method used to access the document directly and create a new text node element in the body.`
console.log(``)




//6.
reviewQuestion6.textContent = `6. element.firstChild`
console.log(`6. element.firstChild`)
console.log(`DOM method used to target the first child element within the specified element`)

reviewAnswer6.textContent = `- DOM method used to target the first child element within the specified element`
console.log(``)




//7.
reviewQuestion7.textContent = `7. parentElement.appendChild(childElement)`
console.log(`7. parentElement.appendChild(childElement)`)
console.log(`DOM method used to link any element created in JavaScript document to the DOM.`)

reviewAnswer7.textContent = `- DOM method used to link any element created in JavaScript document to the DOM.`
console.log(``)




//8.
reviewQuestion8.textContent = `8. element.setAttribute("attribute")`
console.log(`8. element.setAttribute("attribute")`)
console.log(`DOM method that adds a new arttribute to a element that was not previously defined in CSS`)

reviewAnswer8.textContent = `- DOM method that adds a new arttribute to a element that was not previously defined in CSS`
console.log(``)




//9.
reviewQuestion9.textContent = `9. parentElement.insertBefore(newElement, referenceElement)`
console.log(`9. parentElement.insertBefore(newElement, referenceElement)`)
console.log(`DOM method used to insert a new element into the DOM, using a reference element to determine its placement.`)

reviewAnswer9.textContent = `- DOM method used to insert a new element into the DOM, using a reference element to determine its placement.`
console.log(``)




//10.
reviewQuestion10.textContent = `10. element.getAttribute("attributeName")`
console.log(`10. element.getAttribute("attributeName")`)
console.log(`DOM method used to target existing CSS or HTML attributes of a specified element.`)

reviewAnswer10.textContent = `- DOM method used to target existing CSS or HTML attributes of a specified element.`
console.log(``)


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
codewarsQuestion1.textContent = `1. Multiples of 3 and 5 -  Create a solution that returns the sum of all the multiples of 3 and 5 below the bound number provided.  If the number is negative, return 0.`
console.log(`1. Multiples of 3 and 5 -  Create a solution that returns the sum of all the multiples of 3 and 5 below the bound number provided.  If the number is negative, return 0.`)


console.log(`
let threeAndFive = (num) => {
    let multiples = []
    for(let i = 1; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            multiples.push(i)
        }
    }
    console.log(multiples);
    let sum = multiples.reduce((a, b) => a + b, 0)
    console.log(sum)
}

threeAndFive(100)
`)

let threeAndFive = (num) => {
    let multiples = []
    for(let i = 1; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            multiples.push(i)
        }
    }
    console.log(multiples);
    let sum = multiples.reduce((a, b) => a + b, 0)
    console.log(sum)
}

threeAndFive(100)

codewarsAnswer1.textContent = `
let threeAndFive = (num) => {
    let multiples = []
    for(let i = 1; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            multiples.push(i)
        }
    }
    console.log(multiples);
    let sum = multiples.reduce((a, b) => a + b, 0)
    console.log(sum)
}

threeAndFive(100)
`
console.log(``)




//2.
codewarsQuestion2.textContent = `2. Count by X - create a function with 2 arguements that returns an array of multiples`
console.log(`2. Count by X - create a function with 2 arguements: an bound and a divisor.  Returns an array of multiples within the number that are divisible bythe divisor`)
console.log(`
let countByX = (num, x) => {
    let multiples = []
    for(let i = 1; i * x <= num; i++) {
        let value = i * x;
        multiples.push(value)
    }
    console.log(multiples)
}
countByX(10, 1)
`)

codewarsAnswer2.textContent = `
let countByX = (num, x) => {
    let multiples = []
    for(let i = 1; i * x <= num; i++) {
        let value = i * x;
        multiples.push(value)
    }
    console.log(multiples)
}
countByX(10, 1)
`

let countByX = (num, x) => {
    let multiples = []
    for(let i = 1; i * x <= num; i++) {
        let value = i * x;
        multiples.push(value)
    }
    console.log(multiples)
}
countByX(10, 1)

console.log(``)




//3.
codewarsQuestion3.textContent = `3. Basic Data types: String Concatenation - create 5 functions that concatenate the following variables into words:

1. Dad
2. Can
3. banana
4. Bed
5. and

var a1="A" var d1="D"
var a2="a" var d2="d"
var b1="B" var e1="E"
var b2="b" var e2="e"
var c1="C" var n1="N"
var c2="c" var n2="n"


`
console.log(`3. Basic Data types: String Concatenation - create 5 functions that concatenate the following variables into words:

1. Dad
2. Can
3. banana
4. Bed
5. and

var a1="A" var d1="D"
var a2="a" var d2="d"
var b1="B" var e1="E"
var b2="b" var e2="e"
var c1="C" var n1="N"
var c2="c" var n2="n"


`)
console.log(`
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

    let Dad = d1 + a2 + d2 ;
    let Can = c1 + a2 + n2;
    let banana = b2 + a2 + n2 + a2 + n2 + a2;
    let Bed = b1 + e2 + d2;
    let And = a1 + n2 + d2;
    let End = e1 + n2 + d2;
    let Nac = n1 + a2 + c2

    console.log(Dad)
    console.log(Can)
    console.log(banana)
    console.log(Bed)
    console.log(And)
    console.log(End)
    console.log(Nac)
    

}
concatenation()
`)

codewarsAnswer3.textContent = `
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

    let Dad = d1 + a2 + d2 ;
    let Can = c1 + a2 + n2;
    let banana = b2 + a2 + n2 + a2 + n2 + a2;
    let Bed = b1 + e2 + d2;
    let And = a1 + n2 + d2;
    let End = e1 + n2 + d2;
    let Nac = n1 + a2 + c2

    console.log(Dad)
    console.log(Can)
    console.log(banana)
    console.log(Bed)
    console.log(And)
    console.log(End)
    console.log(Nac)
    

}
concatenation()
`

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

    let Dad = d1 + a2 + d2 ;
    let Can = c1 + a2 + n2;
    let banana = b2 + a2 + n2 + a2 + n2 + a2;
    let Bed = b1 + e2 + d2;
    let And = a1 + n2 + d2;
    let End = e1 + n2 + d2;
    let Nac = n1 + a2 + c2

    console.log(Dad)
    console.log(Can)
    console.log(banana)
    console.log(Bed)
    console.log(And)
    console.log(End)
    console.log(Nac)
    

}
concatenation()

console.log(``)





//4.
codewarsQuestion4.textContent = `4. Friend or Foe - write a function that filters a list of strings and returns a list with the names that have only four letters, no more no less`
console.log(`4. Friend or Foe - write a function that filters a list of strings and returns a list with the names that have only four letters, no more no less`)
console.log(`
let friendOrFoe = (list) => {
    let friends = [];
    list.filter(names => { 
        if(names.length === 4) {
            friends.push(names)
        }
    })
    console.log(friends)
}
friendOrFoe(['Robert', 'Thom', 'Marc', 'Janet'])
`)

codewarsAnswer4.textContent = `
let friendOrFoe = (list) => {
    let friends = [];
    list.filter(names => { 
        if(names.length === 4) {
            friends.push(names)
        }
    })
    console.log(friends)
}
friendOrFoe(['Robert', 'Thom', 'Marc', 'Janet'])
`

let friendOrFoe = (list) => {
    let friends = [];
    list.filter(names => { 
        if(names.length === 4) {
            friends.push(names)
        }
    })
    console.log(friends)
}
friendOrFoe(['Robert', 'Thom', 'Marc', 'Janet'])

console.log(``)





//5.
codewarsQuestion5.textContent = `5. Convert Number to reverse array of digits - given a random non-negative number, return it to an array with its digits reversed`
console.log(`5. Convert Number to reverse array of digits - given a random non-negative number, return it to an array with its digits reversed`)
console.log(``)

codewarsAnswer5.textContent = `- `

let reverseNumToArray = (num) => {
    let reverseArray = []
    for(let i = 0; i <= num; i++) {
        reverseArray.push(i)
    }
    console.log(reverseArray.reverse())
 
}
reverseNumToArray(10)

console.log(``)



// codewarsQuestion6.textContent = `6.`
// codewarsAnswer6.textContent = `- `
// codewarsQuestion7.textContent = `7.`
// codewarsAnswer7.textContent = `- `
// codewarsQuestion8.textContent = `8.`
// codewarsAnswer8.textContent = `- `
// codewarsQuestion9.textContent = `9.`
// codewarsAnswer9.textContent = `- `
// codewarsQuestion10.textContent = `10.`
// codewarsAnswer10.textContent = `- `










