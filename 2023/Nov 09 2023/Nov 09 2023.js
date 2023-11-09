/*ANKI Review: */
console.log('ANKI Review: General Knowledge')
//1.
console.log('1. Common pitfalls in web development')
console.log('Unoptimized images which require compression to improve preformance and render-blocking javascript which can be solved by loading JavaScript after critical parts of a website load or making your JAvaScript asynchronous')
console.log('')

//2.
console.log('2. 80 20 rule')
console.log('80 percent of your result should come from 20 percent of your effort.  not saying you shouldnt try hard, but optimizing your results by strategically preforming actions is the basis of the concept')
console.log('')

//3.
console.log('3. Components Directory')
console.log('In context of architecture, the component directory is a folder within a software that holds all the module pieces of the program')
console.log('')

//4.
console.log('4. how to centralize design related settings within a CSS file')
console.log('1. CSS variables (custom properties [ex. :root]), 2. Organize CSS using SMACSS, 3. Use reset/Normalize, 4. Comment on your CSS')
console.log('')

//5.
console.log('5. How to make embedded media flexible')
console.log('1. Use percentages within their parent container, to adjust its size based on the size of its parent container. 2. Use the "object-fit" property specifies how media is resized to fit its container. 3. Make images responsive using max-width set to 100% and height set to auto automatically scale to fit the width of its container. 4. Using the sizes attribute specify the display size of an image using srcset attribute')
console.log('')

//6.
console.log('6. What is the trough of sorrow')
console.log('A feeling of despair when learning something new.  It is a theory that its fun to start, hard to learn and rewarding to accomplish')
console.log('')

//7.
console.log('7. SMACSS: Module')
console.log('The self-contained, reusable objects within a document that can be  designed uniformly like buttons, forms, cards, tooltips, tabs, sidebarsand nav bars')
console.log('')

//8.
console.log('8. Adaptive Web Design')
console.log('A flexible way of designing web content that fits on any and all displays by designing individual pages based on screen size')
console.log('')

//9.
console.log('9. golden rule regarding front-end development')
console.log('Keep content seperate. "Seperation of concerns" Content belongs in HTML, design belings in CSS, and funcionality beling in JS')
console.log('')

//10.
console.log('10. Modules directory')
console.log('In terms of architecture, the modules directory refers to a directory containing individual self-contained files/elements')
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. Points per Game')
function NBA(name, team, ppg) {
    this.name = name,
    this.team = team,
    this.ppg = ppg
}

function sumPPG(p1, p2) {
    console.log(p1.ppg + ' + ' + p2.ppg + ' = ' + (p1.ppg + p2.ppg))
}

let player1 = new NBA('Derik', 'Timberwolves', 12)
let player2 = new NBA('Tim', 'Suns', 4)

sumPPG(player1, player2)
console.log('')

//2.
console.log('2. REmove duplicates from the list')
let list = [1, 3, 5, 2, 5, 7, 3, 5, 6, 9, 4, 7, 9, 8, 8, 3, 6]
console.log(new Set([...list]))
console.log('')

//3.
console.log('3. vowel count')
function vowelCount(str) {
    let count = 0;
    let vowels = /[aeiou]/ig

    for(let i = 0; i < str.length; i++) {
        if(str[i].match(vowels)) {
            count++
        }
    }

    console.log(count)
}

vowelCount('hello there')
console.log('')

//4.
console.log('4. rot13')
function rot13(str) {
let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
console.log(str.replace(/[a-z]/ig, i => alpha[alpha.indexOf(i) + 13]))


}
rot13('hello')
console.log('')

//5.
console.log('5. Abreviate a two word name')
function abbreviate(str) {
    let names = str.split(' ')
    let initials = []
    for(let i = 0; i < names.length; i++) {
        let result = names[i][0] + '.' 
        initials.push(result)
    }
    console.log(initials.join(''))
}
abbreviate('Leanne Keenan')
console.log('')
