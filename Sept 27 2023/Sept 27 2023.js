/*ANKi Deck: HTML*/

//1 Cache Common Files
console.log('Cache Common Files');
console.log('Stored ierations of site visits and program usage - 3/5' );
console.log('storing frequently used resources locally on a user\'s device - 5/5');
console.log('')

console.log('<button onClick= “multiple”>')
console.log('The multiple option is generally used in conjunction with the dropdown select tag, allowing users to choose more than one option from the menu - 4.5/5')
console.log('')

console.log('<figure>')
console.log('A semantic tag used to encapsulate sel fontained elements and their related content (think maps, iframes, images, etc. - 4.25/5')
console.log('')

console.log('What is a screen reader')
console.log('A feature used to read the content from the screen to a user - 3.75/5')
console.log('')

console.log('What is the <src> tag?')
console.log('The source tag.  Used to specify multiple media resources for media elements like <video>, <audio>, and <picture> - 4.75/5')
console.log('')

console.log('What is an element')
console.log('An object within HTML that has a semantic tag identifying its purpose in the content - 4.75/5')
console.log('')

console.log('Headings')
console.log('Semantic tags used for importance hiearchy of the content. Starting at H1 being the highest priority and ending at H6 at the lowest, these tags help with screen readers and site access features to help impaired users access your site with minimal issue')
console.log('')

console.log('Viewport poroperty scale options')
console.log('vh: viewport height and vw: viewport width - 0/5')
console.log(['minimum: prevents users from zooming out', 'initial-scale - determines how much the content is scaled relative to the viewport', 'user-scaleable - accepts a boolean value.  If yes, users can double tap to zoom in, and if no, users are prevented from zooming - keeping the display at initial scale - 5/5' ])
console.log('')

console.log('Viewport meta tag')
console.log('sets the scale, width and type of viewport is being created: <viewport initial-scale = 1.0, initial-width = 0> - 1/5')
console.log('Defines the height and width of a viewport: <meta name = "viewport" content = "width = device-width"')
console.log('')

console.log('The viewport initial scale property')
console.log('uses to set the scale of the page to the viewport. generally set at 1.0 - 2.5/5')
console.log('Sets the initial zoom with a page is first loaded')
console.log('')


/*Daily Codewars Review*/

//1. Sum of positive 5/5
function sumOfPositive(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(num >= 0) {
            result.push(num)
            
        }
    }
    console.log(result.reduce((a, b) => a + b, 0))
}
sumOfPositive([1, 2, 3, 4, -5, -6, -7])



//2. Array Plus Array - 5/5
function array_Plus_Array(arr1, arr2) {
    let arr = arr1.concat(arr2);
    console.log(arr)
    console.log(arr.reduce((a, b) => a + b, 0))
}
array_Plus_Array([1, 2, 3], [4, 5])



//3. REGEX count lower case - 5/5
function countLowerCase(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        let letter = str[i];
        if(letter === letter.toLowerCase()) {
            count++
        }
        if(letter === ' ') {
            count--
        }
    }
    console.log(count)
}
countLowerCase('LeAnNe KeEnAn')



//4.Breaking chocolate - 5/5
function breakingChocolate(height, width) {
    let size = height * width;
    let breaks = size - 1;
    console.log(breaks)
    if(height === 0 || width === 0) {
        console.log('cant break')
    }
    
}
breakingChocolate(1, 1)



//5. Add Length - 0/5
function addLength(str) {
    console.log(str.split(" ").map(word => `${word}, ${word.length}`))
}
addLength('hello everyone how are you today')