/*ANKI Review: */
console.log('ANKI Review: JavaScript Array Methods')
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
reviewQuestion1.textContent = '1. .of()'
console.log('1. .of()')
console.log('".of()" is an array method used with the "Array" keyword to create an array out of any given list of values reguardless of type')

reviewAnswer1.textContent = ' - ".of()" is an array method used with the "Array" keyword to create an array out of any given list of values reguardless of type'
let ofMethod = Array.of("hello", true, false, 100);
console.log(ofMethod)
console.log('')




//2.
reviewQuestion2.textContent = '2. .find()'
console.log('2. .find()')
console.log('Array methid used to return the first element in an array that meets the set condition')

reviewAnswer2.textContent = ' - Array methid used to return the first element in an array that meets the set condition'

let findArray = [5, 7, 9, 11, 12, 13, 17, 23]
let findMethod = findArray.find(num => num % 4 === 0 && num % 3 === 0 & num % 2 === 0);
console.log(findMethod)
console.log('')





//3.
reviewQuestion3.textContent = '3. '
console.log('3. ')
console.log('".fill()" is an array method that accepts values for 1: replacement vaalue to fill index positions within the array. 2: the starting index from where the replacement value will take the place of the indexes current value, the end index value for where the fill replacements will end')

reviewAnswer3.textContent = ' - ".fill()" is an array method that accepts values for 1: replacement vaalue to fill index positions within the array. 2: the starting index from where the replacement value will take the place of the indexes current value. 3: the final index value for where the fill replacements will end'

let fillArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let fillMethod = fillArray.fill("hello", 0, 3)
console.log(fillMethod)

console.log('')




//4.
reviewQuestion4.textContent = '4. .every()'
console.log('4. .every()')
console.log('".every()" is an array method used to check if every value within the array meets a set condition and returns a boolean response')

reviewAnswer4.textContent = ' - ".every()" is an array method used to check if every value within the array meets a set condition and returns a boolean response'

let everyArray1 = [2, 4, 6, 8]
let everyArray2 = [1, 2, 3, 4];
let condition = num => num % 2 === 0;
let everyMethod1 = everyArray1.every(condition)
let everyMethod2 = everyArray2.every(condition)
console.log(everyMethod1);
console.log(everyMethod2);

console.log('')





//5.
reviewQuestion5.textContent = '5. isArray()'
console.log('5. isArray()')
console.log('".isArray() is an array method used to verify of the value is or is not an array')


reviewAnswer5.textContent = ' - ".isArray() is an array method used to verify of the value is or is not an array'

let isArrayArray = [1, 2, 3];
let isArrayString = 'is not array';

console.log(Array.isArray(isArrayArray))
console.log(Array.isArray(isArrayString))
console.log('')




//6.
reviewQuestion6.textContent = '6. .unshift()'
console.log('6. .unshift()')
console.log('Adds element to the start of an array')

reviewAnswer6.textContent = ' - Adds element to the start of an array'

let unshiftArray = [1, 2, 3];
unshiftArray.unshift(0);
console.log(unshiftArray)

console.log('')




//7.
reviewQuestion7.textContent = '7. .entries()'
console.log('7. .entries()')
console.log('".entries()" is an array method used to return the value and index position as a pair. Generally used in conjunction with a "for... of" loop')

reviewAnswer7.textContent = ' - ".entries()" is an array method used to return the value and index position as a pair. Generally used in conjunction with a "for... of" loop'

let entriesArray = [1, 2, 3];
let entriesMethod = entriesArray.entries()

for(let entry of entriesMethod) {
    console.log(entry)
}

console.log('')




//8.
reviewQuestion8.textContent = '8. .values()'
console.log('8. .values()')
console.log('".values()" is an array method used in conjunction with a for ... of loop to return the values of an arrays indexies')

reviewAnswer8.textContent = ' - ".values()" is an array method used in conjunction with a for ... of loop to return the values of an arrays indexies'

let valuesArray = [1, 2, 3];
let valuesMethod = valuesArray.values()
let newValuesArray = []
for(let value of valuesMethod) {
    newValuesArray.push(value)
}
console.log(newValuesArray)

console.log('')




//9.
reviewQuestion9.textContent = '9. .splice()'
console.log('9. .splice()')
console.log('".splice()" is an array method used to add, remove, or replace index values in an array')

reviewAnswer9.textContent = ' - ".splice()" is an array method used to add, remove, or replace index values in an array'

let spliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let spliceMethod = spliceArray.splice(10, 9, 11)
console.log(spliceArray)

console.log('')




//10.
reviewQuestion10.textContent = '10. .flatMap()'
console.log('10. .flatMap()')
console.log('".flatMap()" is a method that retuens a new array by applying a condition to each element in an array, and "flattening" it to a single level')

reviewAnswer10.textContent = ' - ".flatMap()" is a method that retuens a new array by applying a condition to each element in an array, and "flattening" it to a single level'

const flatMapMethod = [1, 2, 3, 4];
console.log(flatMapMethod.flatMap((x) => [x * 2]))
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
codewarsQuestion1.textContent = '1. Abbreviate a Two Word Name - write a fucntion that converts a name into Innitials'
console.log('1. Abbreviate a Two Word Name - write a fucntion that converts a name into Innitials')

let abbreviate = (name) => {
    let wholeName = name.split(' ')
    let initials = []
    for(let i = 0; i < wholeName.length; i++) {
        let firstLetter = wholeName[i][0]
        initials.push(firstLetter + '.')
    }
    console.log(initials.join(''))
}
abbreviate('Leanne Michelle Keenan')

codewarsAnswer1.textContent = `let abbreviate = ${abbreviate}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Did they say hello - write a fucntion that checks if a strign contains the word hello in another language'
console.log('2. Did they say hello - write a fucntion that checks if a strign contains the word hello in another language')

let sayhello = (string) => {
    let greetings = {
        english: 'hello',
        french: 'bonjour',
        splanish: "hola"
    }

    for(let greeting in greetings) {
        if(string.includes(greetings[greeting])) {
            console.log(true)
            return
        }
        else {
            console.log(false)
            return
        }
    }
}
sayhello('hello')
console.log('')

codewarsAnswer2.textContent = `let sayHello = ${sayhello}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. Remove Zeros - write a fucntion that removes the zeros from the end of a number'
console.log('3. Remove Zeros - write a fucntion that removes the zeros from the end of a number')

let removeZeros = (num) => {
    while(num % 10 === 0 && num !== 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(1000)

console.log('')

codewarsAnswer3.textContent = `let remvoeZeros = ${removeZeros}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Sum of multiples - write a function that retuens the sum of the multiples between a given number and a given multiple'
console.log('4. Sum of multiples - write a function that retuens the sum of the multiples between a given number and a given multiple')
console.log('')

let sumOfMultiples = (num, m) => {
    let result = 0
    for(let i = 1; i * m <= num; i++) {
        result += m * i
    }
    console.log(result)
}
sumOfMultiples(100, 10)

codewarsAnswer4.textContent = `let sumOfMultiples = ${sumOfMultiples}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Return Negative - write a function that returns any number as a negative.  Account for a "0" edgecase'
console.log('5. Return Negative - write a function that returns any number as a negative.  Account for a "0" edgecase')

let returnNegative = (num) => {
    if(num === 0) {
        console.log(num)
    }
    else {
        console.log(-Math.abs(num))
    }
}
returnNegative(10)
returnNegative(0)
returnNegative(-100)

console.log('')

codewarsAnswer5.textContent =  `let returnNegative = ${returnNegative}`
console.log('')



// codewarsQuestion6.textContent = '6.'
// codewarsAnswer6.textContent = ' - '
// codewarsQuestion7.textContent = '7.'
// codewarsAnswer7.textContent = ' - '
// codewarsQuestion8.textContent = '8.'
// codewarsAnswer8.textContent = ' - '
// codewarsQuestion9.textContent = '9.'
// codewarsAnswer9.textContent = ' - '
// codewarsQuestion10.textContent = '10.'
// codewarsAnswer10.textContent = ' - '










