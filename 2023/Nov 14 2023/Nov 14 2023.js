/*ANKI Review: */
console.log('ANKI Review: Syntactical Expressions')
//1.
console.log('1. objoect literal arrow function')
let objectliteral = () => {
    let obj = {
        property1: 'Name',
        property2: 'career'
    }
    console.log(`I\'m ${obj.property1} and I\m a ${obj.property2}`)
}
objectliteral()
console.log('')

//2.
console.log('2. Fetch Syntax')
document.querySelector('span').addEventListener('click', getFetch)
function getFetch() {
    let userInput = document.querySelector('input').value
    let url = 'https://www.google.com'
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data
    })
    .catch(err => {
        console.log(err)
    })
}
console.log('')

//3.
console.log('3. for ... in loop')
let forinArr = [1, 2, 3]
for(let num in forinArr) {
    console.log(forinArr[num] * 3)
}
console.log('')

//4.
console.log('4. do .while loop')
let doWhile = 0;
let result = []
do {
    result.push(doWhile += 1)
}
while(doWhile < 10)
console.log(result)
console.log('')

//5.
console.log('5. forEach arrow function')
let forEachArr = [1, 2, 3]
forEachArr.forEach((n, i, newArr) => {
    newArr[i] = n * 5
})
console.log(forEachArr)

//6.
console.log('6. arrow function')
console.log('let arrowFunction = (parameters) => {//holds condition}')
console.log('')

//7.
console.log('7. HTML syntax')
console.log('<p class="" id="" type="text">text</p>.  The HTML tag syntax consists of an opening tag that in itself holds the elements type, id and or class name attributes to provide specificity.  Between the opening tag and the closing tag is the element content.  some but not all HTML tags need a cloding tag but elements like images, iframes, links and inputs do not need closing tags')
console.log('')

//8.
console.log('8. forEach loop')
forEachArr.forEach((n, i, arr) => {
    arr[i] = n * 10
})
console.log(forEachArr)
console.log('')

//9.
console.log('9. for ... of loop')
let forOfObj = [1, 2, 3]
let thisresult = []
for(let theseobjects of forOfObj) {
    
    thisresult.push(theseobjects * 100)
    
}
console.log(thisresult)
console.log('')

//10.
console.log('10. traditional function')
function traditional() {

}
traditional()
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. multiples of 3 and 5')
function multiplesofthreeandfive(num) {
    let total = 0
    for(let i = 1; i < num; i++) {
        if(i % 5 === 0 || i % 3 === 0 ) {
            total += i
            console.log(i)   
            
        }
    }
    console.log('=')
    console.log(total)
}
multiplesofthreeandfive(10)
console.log('')

//2.
console.log('2. filter the number')
function filterNum(str) {
    let result = []
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[0-9]/ig)) {
            result.push(str[i])
        }
    }
    console.log(result)
}
filterNum('h3110')
console.log('')

//3.
console.log('3. Did they say hello?')
function hello(str) {
    let greetings = {
        english: 'hello',
        spanish: 'hola',
        french: 'bonjour',
        japanese: 'konichiwa'
    }

    for(let languages in greetings) {
        if(greetings[languages].includes(str)) {
            console.log(true)
            return
        }
        else {
            console.log(false)
            return
        }
    }
}
hello('hello')
console.log('')

//4.
console.log('4. List filtering')
function listFilter(str) {
    let newArr = str.filter(characters => typeof characters !== 'string');
    console.log(newArr)
}
listFilter(['h', 3, 1, 1, 0])
console.log('')

//5.
console.log('5. index of an element in an array')
function index(arr, e) {
    console.log(arr.indexOf(e))
    
    if(!arr.includes(e)) {
        console.log('not found')
    }  
}
index([1, 2, 3, 4], 2)
index([1, 2, 3, 4], 0)
console.log('')
