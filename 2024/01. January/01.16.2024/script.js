/*ANKI Review: */
console.log('ANKI Review:')
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
reviewQuestion1.textContent = '1. SMACSS: Layout'
console.log('1. SMACSS: Layout')
console.log('The segment of the scaleable modular architecture that is used to group elements associated with the documents major section tags like body, sections, asides, containers, headers and footers')

reviewAnswer1.textContent = ' - The segment of the scaleable modular architecture that is used to group elements associated with the documents major section tags like body, sections, asides, containers, headers and footers'
console.log('')




//2.
reviewQuestion2.textContent = '2. Flexible Media'
console.log('2. Flexible Media')
console.log('Page content like images, video, and text that can be refitted to asthetically fit any viewport')

reviewAnswer2.textContent = ' - Page content like images, video, and text that can be refitted to asthetically fit any viewport'
console.log('')





//3.
reviewQuestion3.textContent = '3.What is gzip compression?'
console.log('3. What is gzip compression?')
console.log('a method that leverages pattern recognition and dictionary-based encoding to reduce the size of files, enhancing data transfer and storage efficiency.')

reviewAnswer3.textContent = ' - a method that leverages pattern recognition and dictionary-based encoding to reduce the size of files, enhancing data transfer and storage efficiency.'
console.log('')




//4.
reviewQuestion4.textContent = '4. name two tools you can use for image compression'
console.log('4. name two tools you can use for image compression')
console.log('imageOptim and PNGgaultlet')

reviewAnswer4.textContent = ' - imageOptim and PNGgaultlet'
console.log('')




//5.
reviewQuestion5.textContent = '5. how do yuo measure image compression?'
console.log('5. how do yuo measure image compression?')
console.log('file size - compressed file size) / file size * 100%')


reviewAnswer5.textContent = ' (file size - compressed file size) / file size * 100%'
console.log('')




//6.
reviewQuestion6.textContent = '6. What is a web browser?'
console.log('6. What is a web browser?')
console.log('A program used to access the internet and used as  a portal to send and receive data between computers on a network')

reviewAnswer6.textContent = ' - A program used to access the internet and used as  a portal to send and receive data between computers on a network'
console.log('')




//7.
reviewQuestion7.textContent = '7. name 4 ways to make embedded madia flexible'
console.log('7. name 4 ways to make embedded madia flexible')
console.log('1. place inside a block element like a div and use percentages to adjust its size; 2. use object-fit property; 3. use max-width property and set height to auto; 4. use srcset attribute')

reviewAnswer7.textContent = ' - '
console.log('')




//8.
reviewQuestion8.textContent = '8. CSS Grid'
console.log('8. CSS Grid')
console.log('A display property in CSS that allows content to be arranged in a two-dimentional format rather than a singular dimentions like flex and inline values')

reviewAnswer8.textContent = ' - A display property in CSS that allows content to be arranged in a two-dimentional format rather than a singular dimentions like flex and inline values'
console.log('')




//9.
reviewQuestion9.textContent = '9. What happens when your computer makes a request for a website'
console.log('9. What happens when your computer makes a request for a website')
console.log('Computer enters a URL, the URL searches server network for IP address of the content being searched for, content is returned to users device with content if available, otherwise an error message may be returned instead')

reviewAnswer9.textContent = ' - Computer enters a URL, the URL searches server network for IP address of the content being searched for, content is returned to users device with content if available, otherwise an error message may be returned instead'
console.log('')




//10.
reviewQuestion10.textContent = '10. SMACSS'
console.log('10. SMACSS')
console.log('An organizational profess of breaking up CSS content into 5 sections to promote organization.  These sections incluse, Layout, theme, state, modules, and base document elements')

reviewAnswer10.textContent = ' - An organizational profess of breaking up CSS content into 5 sections to promote organization.  These sections incluse, Layout, theme, state, modules, and base document elements'
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
codewarsQuestion1.textContent = '1. Keep Hydrated - Write a function where you are given time in hours and return the number of liters a person needs to drink.  Keep in mind, a person needs to drink 0.5 liters per hour'
console.log('1. Keep Hydrated - Write a function where you are given time in hours and return the number of liters a person needs to drink.  Keep in mind, a person needs to drink 0.5 liters per hour')

let hydration = (time) => {
    console.log(Math.floor(Math.abs(time * 0.5)))
}
hydration(4)

codewarsAnswer1.textContent = `let hydration = ${hydration}`
console.log('')




//2.
codewarsQuestion2.textContent = '2. Chuck Norris never says no - Write a fucntion that returns "fales" without using the keyword "false"'
console.log('2. Chuck Norris never says no - Write a fucntion that returns "fales" without using the keyword "false"')

let chuckNorris = (string) => {
    if(string !=='') {
        console.log(!true)
    }
}
chuckNorris('does chuck norris need glasses?')
console.log('')

codewarsAnswer2.textContent = `let chuckNorris = ${chuckNorris}`
console.log('')




//3.
codewarsQuestion3.textContent = '3. BMI'
console.log('3. BMI')

let BMI = (percentage) => {
    if(percentage <= 18.5) {
        console.log("underweight")
    }
    else if(percentage <= 25) {
        console.log("average")        
    }
    else if(percentage <= 30) {
        console.log("overweight")        
    }
    else if(percentage > 30) {
        console.log("obese")        
    }
}

BMI(20)

codewarsAnswer3.textContent = `let BMI = ${BMI}`
console.log('')





//4.
codewarsQuestion4.textContent = '4. Three for two deal'
console.log('4. Three for two deal')

let twoForOne = (quantity, price) => {
    let discount = Math.floor((quantity / 3))
    let total = (quantity - discount) * price;
    console.log(total);
}
twoForOne(3, 1)

codewarsAnswer4.textContent = `let twoForOne = ${twoForOne}`
console.log('')





//5.
codewarsQuestion5.textContent = '5. Remove Zeros'
console.log('5. Remove Zeros')

let removeZeros = (num) => {
    while(num % 10 === 0 && num !== 0) {
        num /= 10
    }
    console.log(num)
}
removeZeros(10000)

codewarsAnswer5.textContent = ' - '
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










