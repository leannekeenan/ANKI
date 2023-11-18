/*ANKI Review: */
console.log('ANKI Review: Git Bash')
//1.
console.log('1. touch')
console.log('Creates new folder/doc within directory or change timestamp of the last visit to a document within the directory')
console.log('')

//2.
console.log('2. rm -rf')
console.log('remove recursively by force.  Removes a directory and its contents ')
console.log('')

//3.
console.log('3. git config --global user.name \'username\'')
console.log('Sets username for the content you push to GitHub directories')
console.log('')

//4.
console.log('4. ls')
console.log('list show.  used to show content of a directory')
console.log('')

//5.
console.log('5. code .')
console.log('opens code in VS code compiler?')
console.log('')

//6.
console.log('6. rm -r')
console.log(' remove recursively.  removes a directory and its subdirectories')
console.log('')

//7.
console.log('7. cd')
console.log('change directory. Used to move user from current directory to another directory')
console.log('')

//8.
console.log('8. mkdir')
console.log('make directory.  makes a new directory')
console.log('')

//9.
console.log('9. ls -l')
console.log('list show long.  shows content of a directory including  additional information like timestamp, file size, and file type')
console.log('')

//10.
console.log('10. rm')
console.log('remove.  removes the specified directory, file or document from the file system')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. write a function that accepts quantity and price ad parameters and returns a 2 for 1 / 3 for 2 deal')
function deal(quantity, price) {
    let discount = 0;
    if(quantity >= 3) {
        discount = Math.floor(quantity /3) * 2 * price
    }
    else if(quantity >= 2) {
        discount = Math.floor(quantity / 2) * price
    }
    console.log(discount)
}
deal(5, 2);
deal(5, 1)
console.log('')
console.log('')

//2.
console.log('2. reverse sequence')
console.log('write a function that accepts a number as a parameter and returns an array of integers from n to 0')
function reverseSequence(num) {
    let result = []
    for(let i = num; i >= 0; i--) {
        result.push(i)
    }
    console.log(result)
}
reverseSequence(10)
console.log('')

//3.
console.log('3. List filtering')
console.log('given a list of integers and numbers, filter through the list and return a new array with the strings filtered out')
function filterString (list){
    let result = [];
    for(let i = 0; i < list.length; i++) {
        
        if(typeof list[i] === 'number') {
            result.push(list[i])
        }
    }
    console.log(result)
}

filterString(['h', 3, 1, 1, 0, true])
console.log('')

//4.
console.log('4. max multiples')
console.log('given a divisor and a bound, return the largest integer that is divisible by the divisor, less than or equal to the bound and greater than 0')
function maxMultiple(divisor, bound) {
    let N = Math.floor(bound / divisor) * divisor;
    console.log(N )
}
maxMultiple(5, 12)
console.log('')

//5.
console.log('5. filter the geese')
console.log('Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the values in the geese object removed.')

function filterGeese(arr) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(!geese.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    console.log(result)
}
filterGeese(['hawk', 'eagle',"Roman Tufted", "Toulouse", "Pilgrim"])
console.log('')
