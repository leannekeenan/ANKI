/*ANKI Review: */
console.log('ANKI Review: syntactical Expressions')
//1.
console.log('for each arrow function')
let total = [1, 2, 3]; 
total.forEach((num, i, arr) => {
    console.log(arr[i] = num * 2)
})
console.log('')

//2.
console.log('for...in loop')
let obj = {
    name: 'Leanne',
    age: 36
}

for(property in obj) {
    console.log(`is ${obj.name}`)
}

console.log('')

//3.
console.log('forEach()')
let foreachArr = [1, 2, 3]
foreachArr.forEach((num) => console.log(num * 3))
console.log('')

//4.
console.log('do...while')
let doWhileLoop = 1;
do {
    console.log(doWhileLoop++)
}
while(doWhileLoop <= 10)

console.log('')

//5.
console.log('for...of loop')
let forOfArr = [1, 2, 3];
for(const num of forOfArr) {
    console.log(num * 3)
}
console.log('')

//6.
console.log('if / else if')
/*if(true) {
    return true
}
else if(false) {
    return false
}
console.log('')
*/
//7.
console.log('fetch syntax')
/*
let userInput = document.querySelector('span').addEventListener('click', getFetch);

function getFetch() {
    let url = '';
    getFetch(url)
    .then(res => res.json())
    .then(data => {

    })
    .catch(err => {
        console.log(`${err}`)
    })
}
console.log('')
*/
//8.
console.log('for loop')
let forLoop = []
for(let i = 0; i < forLoop.length; i++) {

}
console.log('')

//9.
console.log('while loop')
let whileLoop = 1;
while(whileLoop <= 10) {
    console.log(whileLoop++)
}

console.log('')

//10.
console.log('arrow function: object literal')
let objLitFun = () => {
    let objectLiteral = {
        name: 'leanne',
        age: 36
    }
}
console.log(`${obj.name}`)

console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('')
console.log('')
console.log('')

//2.
console.log('')
console.log('')
console.log('')

//3.
console.log('')
console.log('')
console.log('')

//4.
console.log('')
console.log('')
console.log('')

//5.
console.log('')
console.log('')
console.log('')
