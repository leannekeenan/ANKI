/*ANKI Review: */
console.log('ANKI Review: Behavioral Interview Questions')
let reviewQuestion1 = document.getElementById('rq1')
let reviewQuestion2 = document.getElementById('rq2')
let reviewQuestion3 = document.getElementById('rq3')
let reviewQuestion4 = document.getElementById('rq4')
let reviewQuestion5 = document.getElementById('rq5')


let reviewAnswer1 = document.getElementById('ra1')
let reviewAnswer2 = document.getElementById('ra2')
let reviewAnswer3 = document.getElementById('ra3')
let reviewAnswer4 = document.getElementById('ra4')
let reviewAnswer5 = document.getElementById('ra5')






//1.
reviewQuestion1.textContent = '1. Give an example of a time you had to take a creative an dunusual approach to solve a coding problem. How did the idea come to mind. Why do you think it was unusual.'
console.log('1. Give an example of a time you had to take a creative an dunusual approach to solve a coding problem. How did the idea come to mind. Why do you think it was unusual.')
console.log(`
Using "The Daily Nebula" as an example - 

S: I encountered a challenge where I needed to dynamically generate a complex layout to display images and descriptions of content provided through NASA's open API to create an "Astronomy Picture of the Day" calendar.  
T: I needed to ensure that the content retrieved from the NASA API, regardless of type would be fetched and displayed in its propepr object, as well as ensure the project was built to be mobile-friendly, allowing users to access the daily image anywhere.
A: To address the multiple media types that could be fetched from the API, I added a media_type property to the objects being fetched from the API, allowing images to be displayed within an image element, videos within iframes, and text descriptions as text-basee elements within the HTML. As for the responsiveness of the site, I included media queries to adjust the size of the content to fit the users device. While unusual because of need to create custom classifications for the fetched data, it seemed less time consuming than dynamically rendering an HTML element based on the type of media in the response.
R: As a result, I successfully incorperated the fetched content from the NASA API into a functioning Picture of the Day style Calendar users can use on any device.
`)

reviewAnswer1.textContent = `
Using "The Daily Nebula" as an example - 

S: I encountered a challenge where I needed to dynamically generate a complex layout to display images and descriptions of content provided through NASA's open API to create an "Astronomy Picture of the Day" calendar.
T: I needed to ensure that the content retrieved from the NASA API, regardless of type would be fetched and displayed in its propepr object, as well as ensure the project was built to be mobile-friendly, allowing users to access the daily image anywhere.
A: To address the multiple media types that could be fetched from the API, I added a media_type property to the objects being fetched from the API, allowing images to be displayed within an image element, videos within iframes, and text descriptions as text-basee elements within the HTML. As for the responsiveness of the site, I included media queries to adjust the size of the content to fit the users device. While unusual because of need to create custom classifications for the fetched data, it seemed less time consuming than dynamically rendering an HTML element based on the type of media in the response.
R: As a result, I successfully incorperated the fetched content from the NASA API into a functioning Picture of the Day style Calendar users can use on any device.
`
console.log('')




//2.
reviewQuestion2.textContent = '2. Talk about a situation when you made a mistake at work.  What happened? What steps did you take to improve the situation?'
console.log('2. Talk about a situation when you made a mistake at work.  What happened? What steps did you take to improve the situation?')
console.log(`

S: I was worling on a project with multiple pages and missed attaching the CSS link on one of the pages, removing the styling from the page and disrupting the flow of the site

T: I was responsible for ensuring all of the pages were fully styled and functioning properly before submission, ensuring a visually appealing experience for the user. 

A: Once I realized the mistake, I contacted my team immediately and notified them that there was an error on one of the pages that needed to be addressed before submission. I took responsibility for the mistake and begain implementing a personal secondary manual account of pages and obejcts I worked with that have been or needed to be modified, ensuring I had a virtual and physical representation of what I have accomplished and what needed to be done.

R: The implementation of this system reduced the number of missed items in my workload, and also provided mw with a physical representation of the work I did, leaving me with a progress tracker I used as a rubric kfor the accomplishments I have made to the project. 
`)

reviewAnswer2.textContent = `

S: I was worling on a project with multiple pages and missed attaching the CSS link on one of the pages, removing the styling from the page and disrupting the flow of the site

T: I was responsible for ensuring all of the pages were fully styled and functioning properly before submission, ensuring a visually appealing experience for the user. 

A: Once I realized the mistake, I contacted my team immediately and notified them that there was an error on one of the pages that needed to be addressed before submission. I took responsibility for the mistake and begain implementing a personal secondary manual account of pages and obejcts I worked with that have been or needed to be modified, ensuring I had a virtual and physical representation of what I have accomplished and what needed to be done.

R: The implementation of this system reduced the number of missed items in my workload, and also provided mw with a physical representation of the work I did, leaving me with a progress tracker I used as a rubric kfor the accomplishments I have made to the project. 
`
console.log('')





//3.
reviewQuestion3.textContent = '3. Describe a situation when you worked effectively under pressure. How did you feel when working under pressure? What was goung on and how did you handle it?'
console.log('3. Describe a situation when you worked effectively under pressure. How did you feel when working under pressure? What was goung on and how did you handle it?')
console.log(`

S: While working at Allied Universal, our security team was tasked with clearing a building for an onsite emergency that was deemed as life threatening.

T: Our team was tasked with evacuating the building as quickly as possible without causing panic or raising concerns with the employees of our client.

A: Our teams went through each building instructing all non-security employees to make their way to the evacuation area outside. As we could not detain persons, anyone wanting to leave the area was instructed to provide a security officer with their employee info to relay to their departments to ensure proper accounting for all persons before giving the facility the all clear to renter.

R: Because of the actions of our security team, we were able to safely clear our facility and ensure the safety of over 1000 people.
`)

reviewAnswer3.textContent = `

S: While working at Allied Universal, our security team was tasked with clearing a building for an onsite emergency that was deemed as life threatening.

T: Our team was tasked with evacuating the building as quickly as possible without causing panic or raising concerns with the employees of our client.

A: Our teams went through each building instructing all non-security employees to make their way to the evacuation area outside. As we could not detain persons, anyone wanting to leave the area was instructed to provide a security officer with their employee info to relay to their departments to ensure proper accounting for all persons before giving the facility the all clear to renter.

R: Because of the actions of our security team, we were able to safely clear our facility and ensure the safety of over 1000 people.
`
console.log('')




//4.
reviewQuestion4.textContent = '4. Tell me a time you failed'
console.log('4. Tell me a time you failed')
console.log(`

S: I recently was in a situation where I failed to secure a contract to build a website for a client.

T: I was responsible for coming up with a pitch for my web development services, and used my skills to presuade them to choose me to build their website according to their requirements and expectations

A: I prepared a compelling proposal and and presentation to showcase what I could deliver to the client. However throughout the presentation, I failed to address unexpected questions and concerns presented by the prosepective client, leading them to believe I may not be the right fit for their needs.

R: As a result I did not get the contract, but I also did not come away empty handed. I found the experience provided valueable insoghts intohow to prepare for future pitch meetings, as well as preparing me for interviews such as this.
`)

reviewAnswer4.textContent = `

S: I recently was in a situation where I failed to secure a contract to build a website for a client.

T: I was responsible for coming up with a pitch for my web development services, and used my skills to presuade them to choose me to build their website according to their requirements and expectations

A: I prepared a compelling proposal and and presentation to showcase what I could deliver to the client. However throughout the presentation, I failed to address unexpected questions and concerns presented by the prosepective client, leading them to believe I may not be the right fit for their needs.

R: As a result I did not get the contract, but I also did not come away empty handed. I found the experience provided valueable insoghts intohow to prepare for future pitch meetings, as well as preparing me for interviews such as this.
`
console.log('')




//5.
reviewQuestion5.textContent = '5. What is some critical feedback you have received recently'
console.log('5. What is some critical feedback you have received recently')
console.log(`

S: I have been told that my expectations for equal resepct, empathy, and fairness can be hard to emulate.

T: The feedback highlighted the gap between my expectations of how I want to be treated and the reality of how others perceive and respond those expectations.

A: I took the this as an opportunity to reflect on my communication style, acknowledging that while I strive to treat others with respect, empathy, and fairness, I may not always effectively communicate or demonstrate these expectations in a way that resonates with everyone.

R: I've becime more mindful of how I express my expectations for mutual respecpt and understanding, focusign on listening to others and finding common ground to foster common ground and promote better understanding of the persepctives of others.
`)


reviewAnswer5.textContent = `

S: I have been told that my expectations for equal resepct, empathy, and fairness can be hard to emulate.

T: The feedback highlighted the gap between my expectations of how I want to be treated and the reality of how others perceive and respond those expectations.

A: I took the this as an opportunity to reflect on my communication style, acknowledging that while I strive to treat others with respect, empathy, and fairness, I may not always effectively communicate or demonstrate these expectations in a way that resonates with everyone.

R: I've becime more mindful of how I express my expectations for mutual respecpt and understanding, focusign on listening to others and finding common ground to foster common ground and promote better understanding of the persepctives of others.
`
console.log('')



let codewarsQuestion1 = document.getElementById('cwq1')
let codewarsQuestion2 = document.getElementById('cwq2')
let codewarsQuestion3 = document.getElementById('cwq3')
let codewarsQuestion4 = document.getElementById('cwq4')
let codewarsQuestion5 = document.getElementById('cwq5')


let codewarsAnswer1 = document.getElementById('cwa1')
let codewarsAnswer2 = document.getElementById('cwa2')
let codewarsAnswer3 = document.getElementById('cwa3')
let codewarsAnswer4 = document.getElementById('cwa4')
let codewarsAnswer5 = document.getElementById('cwa5')


/*Codewars Challenges*/
console.log('Codewars Challenges')


//1.
codewarsQuestion1.textContent = '1. Remove duplicates from a list'
console.log('1. Remove duplicates from a list')
console.log('')

codewarsAnswer1.textContent = `- `

let removeDuplicates = (list) => {
    let result = new Set([...list])
    console.log(result)
}
removeDuplicates([1, 2, 1, 3, 1, 4, 1, 2, 5])

console.log('')




//2.
codewarsQuestion2.textContent = '2. Feast of Beasts'
console.log('2. Feast of Beasts')
console.log('')

codewarsAnswer2.textContent = `- `

let feast = (animal, dish) => {
    if(animal[0] === dish[0]  && 
        animal[animal.length - 1] === dish[dish.length - 1]) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

feast('pie', 'pie')
feast('pie', 'pig')

console.log('')




//3.
codewarsQuestion3.textContent = '3. Trim a string'
console.log('3. Trim a string')
console.log('')

codewarsAnswer3.textContent = `- `

let trim = (string, length) => {
    let result = string.slice(0, length) + ' ...';
    console.log(result)
}
trim('hello world', 5)

console.log('')





//4.
codewarsQuestion4.textContent = '4. Add length to string element'
console.log('4. Add length to string element')
console.log('')

codewarsAnswer4.textContent = `- `

let addLength = (string) => {
    let words = string.split(' ');
    let newString = []
    for(let i = 0; i < words.length; i++) {
        newString.push(`${words[i]} ${words[i].length}` )
    }
    console.log(newString)
}
addLength('hello my world')

console.log('')





//5.
codewarsQuestion5.textContent = '5. ATM'
console.log('5. ATM')
console.log('')

codewarsAnswer5.textContent = `- `

let ATM = (withdrawl) => {
    let total = 0;
    let bills = [100, 50, 20, 10, 5, 1];

    for(let i = 0; i < bills.length; i++) {
        total += Math.floor(withdrawl / bills[i])
        withdrawl %= bills[i]
    }
    console.log(total)
}
ATM(101)

console.log('')











