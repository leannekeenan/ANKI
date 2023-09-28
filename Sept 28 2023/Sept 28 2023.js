/*ANKi Review: CSS*/
console.log('ANKi Review: CSS')
//1
console.log('1. Relative Length Units')
console.log('vw, vh, %, rem - 3/5')
console.log(['viewport percentage units (vw, vh, vmin, vmax)', 'percentage (%)' , 'root element (rem)', 'element (em)', 'grid-fraction (fr)', 'character (ch) - 5/5'])
console.log('')
//2
console.log('2. <caption>')
console.log('HTML tag used to add context to a figure element such as images, code snipets, or videos - 0/5')
console.log('HTML tag used withn tables to provide titles or descriptions of the table content - 5/5')
console.log('')
//3
console.log('3. attribute value pair')
console.log('the assigning of a value to an HTML element using the assignment operator.  For example, <h1 class="value">Text</h1>, the attribute is class, and the value is value.  The value can be used to reference the element in CSS')
console.log('')
//4
console.log('4. Adjcent Selectors')
console.log('A pseudo class selector used to select sibling elements next to each other in the HTML structure using the addition (+) operator')
console.log('')
//5
console.log('5. General Sibling Selector')
console.log('A process of listing nested elements to reach what you are trying to get to.  There are no operators used, just the order in which the elements are nested - 0/5')
console.log('A pseudo class used to select elements that are siblings of a specific element, and share the same parent - reguardless of position within the parent in the HTML structure, using the tilde (~)operator')
console.log('')
//6
console.log('6. Modular CSS')
console.log('The concept of building you CSS in a way that can be moved, modified, and edited without affecting other parts of the websire.  Generally following the SMACSS process to create an architecture that is readible, including areas like the base elements, the mode elements, the layout...(cant remember last one :(  )')
console.log('')
//7
console.log('7. position: fixed')
console.log('takes element out of flow of page and sets it permenently in the offest position - 3.5')
console.log('takes element out of flow of page and sets it relative to its reference point - 5/5')
console.log('')
//8
console.log('8. border-radius')
console.log('a property that modifies the curvature of an elements corners')
console.log('')
//9
console.log('9. border-collapse')
console.log('a property used on table cells to either merge or keep cell borders independent/seperate within the table - 5/5')
console.log('')
//10
console.log('10. What is the default position of every element?')
console.log('Static - 5/5')
console.log('')


/*Codewars Challenges*/
console.log('Codewars Challenges')
//1
console.log('Remove First and Last Character.  Create a function that removes the first and last characters of a string. You\'re given one parameter, the original string. You don\'t have to worry with strings with less than two characters.')
function remove_first_and_Last_Character(str) {
    console.log(str.slice(1, -1))
    
};
remove_first_and_Last_Character('hello')

console.log('')




//2
console.log('ATM. An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes. You have to write the ATM\'s function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.')
function ATM(withdrawl) {
    let banknotes = [100, 50, 20, 10, 5, 1];
    let count = 0;
    for(let i = 0; i < banknotes.length; i++) {
        while(withdrawl  >= banknotes[i]) {
            withdrawl -= banknotes[i]
            count++
        }
    }
    console.log(count)
}

ATM(542)
console.log('')



//3
console.log('Pokemon Evolution: Boulder Badge. You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need')
function nextEvo(current, next) {
    return next - current
}
let bulbasaur = nextEvo(5, 16);
let caterpie = nextEvo(1, 7);
let weedle = nextEvo(1, 7);
console.log(`bulbasaur needs ${bulbasaur} candies to evolve`);
console.log(`caterpie needs ${caterpie} candies to evolve`);
console.log(`weedle needs ${weedle} candies to evolve`);
console.log(`You need a total of ${bulbasaur + caterpie + weedle} candies`)

console.log('')


//4
console.log('Sum of positive. You get an array of numbers, return the sum of all of the positives ones.Example [1,-4,7,12] => 1 + 7 + 12 = 20. Note: if there is nothing to sum, the sum is default to 0.')
function sumOfPositive(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0) {
            result.push(arr[i])
        }
    }
    console.log(result.reduce((a, b) => a + b, 0))
}
sumOfPositive([1, 3, 5, -10])
console.log('')



//5
console.log('Consonant Count. Complete the function that takes a string of English-language text and returns the number of consonants in the string. Consonants are all letters used to write English excluding the vowels a, e, i, o, u.')
function consonants(str) {
    let count = 0;
    let vowels = /[aeiou]/ig
    for(let i = 0; i < str.length; i++) {
        let letter = str[i];
        if(!letter.match(vowels)) {
            count++
        }
    }
    console.log(count)
}

consonants('Hello to all out there this fine day')
console.log('')