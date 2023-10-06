/*ANKI Review: General Knowledge*/

//0. 
console.log('Scaleable Modular Architecture: Layout')
console.log('The layout is a component of the SMACSS organization process that categorize basic elements of the page structure including the header, footer, page sections and divs as well as asides, forms, and others.  This helps provide a more maintainable and organized style sheet and in turn a more organized website')
console.log('')

//1.
console.log('How to centralize design-related settings within a CSS file')
console.log(['Use a preprocessor', 'Use SMACSS','Use Comments', 'Use a seperate file from HTML or JS', 'Avoid Global Variables'])
console.log('')

//2.
console.log('Base Directory')
console.log('The base directory stores the common styles and variable names of elements being utilized across a page ')
console.log('')

//3.
console.log('Scaleable Modular Architecture')
console.log('A organization strategy used to categorize element modifications in select categories including the layout, modular, base, state, and theme allowing developers to easily find what they are looking for based on the element they are working on')
console.log('')

//4.
console.log('common pitfalls in web dev preformance')
console.log('file size of media and javascript written in the <head> of a document instead of a seperate file')
console.log('')

//5.
console.log('Scaleable Modular Architecture: Layout')
console.log('The layout is a component of the SMACSS organization process that categorize basic elements of the page structure including the header, footer, page sections and divs as well as asides, forms, and others.  This helps provide a more maintainable and organized style sheet and in turn a more organized website')
console.log('')

//6.
console.log('80/20 Rule')
console.log('Refers to having 80% of your optimizations come from 20% of your code')
console.log('')

//7.
console.log('Scaleable Modular Architecture: Module')
console.log('A self contained reuseable, encapsulated component of a webpage that generally requores independent styling apart from the main page')
console.log('')

//8.
console.log('Scaleable Modular Architecture: Base')
console.log('The default position, style, size, etc. of HTML element content')
console.log('')

//9.
console.log('What is the Pomodoro Technique')
console.log('A study technique where you set a timer to work a set amount of time between 20 and 45 minutes, followed by a 5 - 15 minute break depending on the length of teh sstudy session.  This promotes healthier study behaviors and improves content retention over time more so than cram studying')
console.log('')

//10.
console.log('Scaleable Modular Architecture: State')
console.log('defines the behaviors of elements in interactive states')
console.log('')

/*Codewars Challenges*/

//1.
console.log('Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.')
function square_vs_cubed(arrA, arrB) {
    if(Math.pow(arrA.reduce((a, b) => a + b, 0), 2) > Math.pow(arrB.reduce((a, b) => a + b, 0), 3)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

square_vs_cubed([5, 6], [2, 3])
console.log('')

//2.
console.log('REplace the Dots. Write a function that replaces all the periods(.) with hyphens(-)')
function replacePeriods(string) {
    console.log(string.replaceAll('.', '-'))
}
replacePeriods('H.E.L.L.O')
console.log('')

//3.
console.log('Max Multiples')
function findLargest(divisor, bound) {
    let n = Math.floor(bound / divisor) * divisor;
    console.log(n)
}
findLargest(7.5, 100)
console.log('')

//4.
console.log('You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle')
function temp(Fahrenheit) {
    let celcius = (Fahrenheit - 32) * 5/9;
    console.log('current temp: ' + celcius + ' celcius');
    if(celcius > 0) {
        console.log('charmander can fight')
    }
    else {
        console.log('it\'s too cold.  fights off')
    }
}
temp(33)
console.log('')

//5.
console.log('Remove duplicates from a list')
function removeDuplicates(arr) {
    let newArr = [...new Set(arr)];
    console.log(newArr)
}

removeDuplicates([1, 2, 1, 4, 1, 2, 6, 5, 6, 4, 7 , 7, 9])
console.log('')