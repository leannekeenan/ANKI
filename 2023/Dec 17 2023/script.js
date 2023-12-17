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



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//1.
reviewQuestion1.textContent = '1. .find()'
console.log('1. .find()')
console.log('Array method used to "find" the first element in an array that meets a proposed condition')
let findMethod = array.find(num => num % 1 === 0)
console.log(findMethod)

reviewAnswer1.textContent = ' - Array method used to "find" the first element in an array that meets a proposed condition. ' +  findMethod
console.log('')




//2.
reviewQuestion2.textContent = '2. .splice()'
console.log('2. .splice()')
console.log('adds, removes, or replaces elements in an array and returns the removed elements to a new array')
//let spliceMethod = array.splice(2, 3)
reviewAnswer2.textContent = ' - adds, removes, or replaces elements in an array and returns the removed elements to a new array' //+ spliceMethod
console.log('')





//3.
reviewQuestion3.textContent = '3. .keys()'
console.log('3. .keys()')
console.log('Used in conjunction with the "for ... of loop", will return the index key values of the elements of an array')
let keysMethod = array.keys();
let keyMethodArr = []
for(let key of keysMethod) {
    keyMethodArr.push(key)
}
console.log(keyMethodArr)

reviewAnswer3.textContent = ' - Used in conjunction with the "for ... of loop", will return the index key values of the elements of an array ' + keyMethodArr
console.log('')




//4.
reviewQuestion4.textContent = '4. flatMap()'
console.log('4. flatMap()')
console.log('used to apply a function to each element in an array, and then flatten the result into a new array, adding the function values and array elements to the same array ')

let flatMapMethod = array.flatMap((num) => [num * 10])

reviewAnswer4.textContent = ' - used to apply a function to each element in an array, and then flatten the result into a new array, adding the function values and array elements to the same array ' + flatMapMethod

console.log(flatMapMethod)
console.log('')




//5.
reviewQuestion5.textContent = '5. .entries()'
console.log('5. .entries()')
console.log('returns a new array iterator object that contains the key value pair for each index in an array.  Requires .next().value when declaring an entries value to retrun the index and element')

let entriesMethod = array.entries();
console.log(entriesMethod.next().value)

reviewAnswer5.textContent = ' - returns a new array iterator object that contains the key value pair for each index in an array.  Requires .next().value when declaring an entries value to retrun the index and element'
console.log('')




//6.
reviewQuestion6.textContent = '6. .unshift()'
console.log('6. ')
console.log('adds an element to the beginning of an array')
let unshiftMethod = array.unshift(0);
console.log(array)
reviewAnswer6.textContent = ' - adds an element to the beginning of an array'
console.log('')




//7.
reviewQuestion7.textContent = '7. .every()'
console.log('7. .every()')
console.log('checks an array against a condition and returns a boolean as a response to if the array meets the condition or not')

let everyMethod = array.every(num => num  <= 10);
console.log(everyMethod)

reviewAnswer7.textContent = ' - checks an array against a condition and returns a boolean as a response to if the array meets the condition or not'
console.log('')




//8.
reviewQuestion8.textContent = '8. .toSpliced()'
console.log('8. Used to splice an array by adding, removing or replacing array elements, but returns a new array without affecting the original')
let toSplicedMethod = array.toSpliced(2, 5);
console.log(toSplicedMethod)
console.log(array)
console.log('')

reviewAnswer8.textContent = ' - '
console.log('')




//9.
reviewQuestion9.textContent = '9. .values()'
console.log('9. .values()')
console.log('used to return the element values of objects in an array')
let valuesMethod = array.values();
let valuesArray = []
for(value of valuesMethod) {
    valuesArray.push(value)
}
console.log(valuesArray)
reviewAnswer9.textContent = ' - used to return the element values of objects in an array'
console.log('')




//10.
reviewQuestion10.textContent = '10. .fill()'
console.log('10. .fill()')
console.log('used to set a new values in a specified array index position')
let fillMethod = array.fill('hello', 3, 5);
console.log(fillMethod)
reviewAnswer10.textContent = ' - used to set a new values in a specified array index position'
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
console.log('ANKI Review: Codewars Challenges')


//1.
codewarsQuestion1.textContent = '1. Count Characters in a String'
console.log('1. Count Characters in a String')
let countCharacters = (string) => {
    let count = {}
    for(let characters of string) {
        count[characters] = (count[characters] || 0) + 1
    }
    console.log(count)
}
countCharacters('hello')
console.log('')

codewarsAnswer1.textContent = 'let countCharacters = ' + countCharacters
console.log('')




//2.
codewarsQuestion2.textContent = '2. Sum of Positive'
console.log('2. Sum of Positive')
console.log('You get an array of numbers, return the sum of all of the positives ones.')
let sumOfPositive = (array) => {
    let total = []
    for(let i = 0; i < array.length; i++) {  
        if(array[i] > 0) {
            total.push(array[i])
        } 
    }
    console.log(total.reduce((a, b) => a + b, 0))
}
sumOfPositive([1, 2, 3, -4])

codewarsAnswer2.textContent = 'let sumOfPositive = ' + sumOfPositive
console.log('')




//3.
codewarsQuestion3.textContent = '3. Price of Mangoes'
console.log('3. Price of Mangoes')
console.log('')
let priceOfMangoes = (price, count) => {
   let offer = Math.floor(count / 3); // needs to equal 1 for a discount //   
   let total = (count - offer) * price;
   console.log(total)
}
priceOfMangoes(2, 3)
codewarsAnswer3.textContent = priceOfMangoes
console.log('')





//4.
codewarsQuestion4.textContent = '4. filter out the geese'
console.log('4. filter out the geese')
console.log('')
let filterGeese = (array) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let filtered = array.filter((birds) => !geese.includes(birds));
    console.log(filtered)
}
filterGeese(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher", "Swallow", "Blackbird"])
codewarsAnswer4.textContent = filterGeese
console.log('')





//5.
codewarsQuestion5.textContent = '5. Convert Number to Reversed Array of Digits'
console.log('5. Convert Number to Reversed Array of Digits')
console.log('')
let convertArray = (num) => {
    let reversed = Number(num.toString().split('').reverse().join(''))
    console.log(reversed)
}
convertArray(12345)
codewarsAnswer5.textContent = convertArray
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










