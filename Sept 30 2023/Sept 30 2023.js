/*Syntactical Expressions*/

//1. Do while loop
let i = 0;
do {
    i += 5
}
while (i < 100)

console.log(i)



//2. switch statement
function month(days) {
    switch(days) {
        case 2: console.log(28);
        break;
        case 4:
        case 6:
        case 9:
        case 11 : console.log(30)
        break;
        default: console.log(31)
        break;
    }

}
month(2)



//3. FizzBuzz
function FizzBuzz(num) {
    for(let i = 1; i <= num; i ++) {
        if(i % 5 === 0 && i % 3 === 0) {
            console.log('FB')
        }
        else if(i % 5 === 0) {
            console.log('F')
        }
        else if(i % 3 === 0) {
            console.log('B')
        }
        else {
            console.log(i)
        }
    }
}
FizzBuzz(15)



//4. For Each arrow function
let arr = [1, 2, 3];
arr.forEach((n, i, arr) => {
    arr[i] = n * 3
})
console.log(arr)


//5. Implied arrow function return
let implied = () => console.log('return content goes here') 
implied()



//6. for ... in loop
let newObj = {
    name: 'Leanne',
    occupation: 'an engineer'
}
for(objElements in newObj) {
    console.log(`I am ${newObj.name} and I really want to be ${newObj.occupation}`)
}

//7. For Each loop
let arr1 = [1, 2, 3]
arr1.forEach((n, i, newarr) => {
    newarr[i] = n * 3
})
console.log(arr1)

//8, for ... of loop
let forOf = [1, 2, 3]
for(let obj of forOf) {
    console.log(obj + '...sheep')
}
//9.fetch Syntax


function fetch(url) {
///get an element from the dom to add a click event listener 
//get a url to pull data from
fetch(url)
.then(res => res.json())
.then(data => {

})
.catch(err => {
    console.log('error')
})
}



//10 arrow function obj lit

let obj1 = {
    one:1,
    two: 2
}
let obj2 = {
    ...obj1,
    three: 3
}
console.log(obj2)