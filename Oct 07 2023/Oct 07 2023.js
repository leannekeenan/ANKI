/*ANKi Review: HTML*/
//0 .
console.log('Vertical-align property')
console.log('used to align elements on a page from top to bottom or centered.')
console.log('')

//1 .
console.log('viewport')
console.log('the visible area of a website')
console.log('')

//2 .
console.log('cache common files')
console.log('files that are added to the OS to refrain fro having to redownload them every time a program runs.  This help reduce slow load times')
console.log('')

//3 .
console.log('viewport property scale options')
console.log('A numerical value indicating the rendering scale of the website to the device it is being displayed on.  there are three main scales: minimum which allows for the smallest rendering possible, initial which fits the current device viewport, and user-scaleable which allows the user to change the viewing size at will')
console.log('')

//4 .
console.log('viewport meta tag')
console.log('a tag within the head of a HTML document which deals with how a website is scaled on the devise it is seen on.  Used to allow websites to be responsive to the size of the device screen size and orientation')
console.log('')

//5 .
console.log('<button onClick= “multiple”>')
console.log('The multiple option is used in conjunction with the select dropdown menu form element, allow ing users to select more than one option at a time')
console.log('')

//6 .
console.log('Front-End Programming')
console.log('Known ar user-side programming, this department of engineering deals with the aspects of a website that a user can interact with or use.  It involves languages such as HTML, CSS and JavaScript')
console.log('')

//7 .
console.log('Disabled boolean')
console.log('An option on an element that requires interaction from a user (like a button or checkbox) that has had its fucntionality removed to prevent the user from interacting the the element')
console.log('')

//8 .
console.log('Absolute Path')
console.log('refers to a link to a website outside of the main document. Generally directs to a .com, .org, .net, etc.')
console.log('')

//9 .
console.log('DOM')
console.log('The Document Object Model.  The structural representation of a website in a viewport allowing developers and users to see the code and make changes without modifying the code file.  The changes are temporary and revert back to the orignal code once the page is refreshed')
console.log('')

//10 .
console.log('target = \'_parent\'')
console.log('Opens an element within its containing element')
console.log('')



/*Codewars Challenge*/
// 1.
console.log('Remove Duplicates from a List - Define a function that removes duplicates from an array of non negative numbers and returns it as a result. The order of the sequence has to stay the same.')
function removeDuplicatesFromAList(list) {
    console.log([...new Set(list)])
}
removeDuplicatesFromAList([1, 2, 1, 3, 1, 4, 1, 5, 1, 6])
console.log('')

//2 .
console.log('Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.')
function reverse(list) {
    console.log(list.reverse())
}
reverse(['bulbasaur', 'pikachu', 'charmander', 'lapras'])
console.log('')

//3 .
console.log('Max Multiples. Given a divisor value and a boundary value, find the first number result that can be divisible by the divisor and is less than or equal to the boundary value.  ')
function maxMultiple(divisor, boundary) {
    let n = Math.floor(boundary / divisor) * divisor
    console.log(n)
}
maxMultiple(10, 35)
console.log('')

//4 .
console.log('Return a new array consisting of elements which are multiple of their own index in input')
function numDivisibleByIndex(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let n = arr[i] ;
        if(n % arr.indexOf(n) === 0) {
            result.push(n)
        }
    }
    console.log(result)
}
numDivisibleByIndex([0, 2, 4, 3, 6, 7, 12, 21, 20, 3])
console.log('')

//5 .
console.log('Array Plus Array')
function arrayPlusArray(arr1, arr2) {
    let arr = arr1.concat(arr2);
    console.log(arr.reduce((a, b) => a + b, 0))
}
arrayPlusArray([1, 2, 3], [4])
console.log('')
