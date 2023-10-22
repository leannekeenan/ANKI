/*ANKI REVIEW: Syntactical Expressions*/

//while loop

let a = 10;
let result = 0;
while (result < a * 10) {
    result++
}
console.log(result)

//arrow function
let b = (parameter) => {
    //execute condition if parameter is true
    console.log(parameter)
}
b('arguement')

//arrow function for an object literal

let c = () => {
    let personA = {
        name: 'Leanne',
        age: 36
    }

    let personB = {
        name: "Adam",
        age: 33
    }  
    
    console.log(personA)
}
c()

//for ... in loop

let d = {
    one: 1,
    two: 2,
    three: 3
}

for(let n in d) {
    console.log(d[n] * 10)
}

//do ... while loop

let e = 0;
do{
    e+= 1
}
while(e < 5)
console.log(e)

//forEach arrow function

let f = [1, 2, 3];
f.forEach((num, index, array) => {
    array[index] = num * 3
})
console.log(f)

//fetch syntax

document.querySelector('button').addEventListener('click', fetch)

function fetchSyntax() {
    let userInput = document.querySelector('input').value;
    let url = '' //URL to search data from

    //fetch function
    fetch(url)
    .then(result => result.json())
    .then(data => {
        data.array.forEach(element => {
            //preform action
            //to add non-existant element to existing element (li in ul for example):
            let li = document.createElement('li');
            li.textContent = //array.element
            document.querySelector('ul').appendChild(li);
        })
    })
    
    .catch(err => {
        console.log(`error ${err}`)
        });
}


//traditional function
function h(parameter) {
    //condition
}
h('arguement')

//forEach loop 

let i = [4, 5, 6];
i.forEach((n, i, arr) => {
    arr[i] = n *10
})
console.log(i)

//for...of loop

let j = [1, 2, 3]

for(let obj of j) {
    console.log(obj * 3)
}

/*CODEWARS Challenges*/

//1.Replace Letter with Alphabet index position
function replace(str) {
    let result = []
    for(let i = 0; i < str.length; i++) {
        let letter = str[i].charCodeAt() - 96;
        result.push(letter)
    }
    console.log(result)
}
replace('hello')


//Even or Odd
function evenOrOdd(num) {
    if(num % 2 === 0){
        console.log('Even')
    }
    else {
        //alert('Odd')
    }
}

evenOrOdd(10);
evenOrOdd(1)

//Count Sheep

function countSheep(num) {
    let sheep = []
    for(let i = 1; i <= num; i++) {
       sheep.push(i + ' sheep...');
    }
   console.log(sheep.join(' '))
}
countSheep(10)

//ATM

function ATM(withdrawal) {
    let banknotes = [5, 10, 20, 50, 100];
    let  total= 0;
    for (let i = 0; i < banknotes.length; i++) {
        if (withdrawal >= banknotes[i]) {
            total++;
            withdrawal -= banknotes[i];
        }
    }
    
    console.log(total)
}
ATM(55)


function disemvowel(str) {
    console.log(str.replace(/[aeiou]/ig, ''))
}
disemvowel('hello')
