// Your code goes here
//Mouse Over / changes anchor colors
const navAnchors = document.querySelector('.nav');

navAnchors.addEventListener('mouseover', (event) => {
    navAnchors.style.backgroundColor = 'yellow';
    console.log('gold nav bar')
    
});

//Key Down / Press any key for a secret message for any plagerizers
const pageBody = document.querySelector('body');
const noPlagerismFont = document.querySelector('.footer p');

pageBody.addEventListener('keydown', (event) => {
    noPlagerismFont.textContent = 'Copyright Fun Bus 2019. https://www.copyright.gov/help/faq/definitions.html';
    console.log('alerted plagerizers')

});

//Wheel / make font size smaller for h1 
const title = document.querySelector('h1');

pageBody.addEventListener('wheel', (event) => {
    title.style.fontSize = '22px';

    console.log('font size changed')

});

//Drag & Drop / drags the second image
const dragImage = document.querySelector('.content-section img')

dragImage.addEventListener('drag', (event) => {
    console.log('draggaing')


}, false);

dragImage.addEventListener("dragstart", (event) => {
    dragged = event.target;
    event.target.style.opacity = .1;

    console.log('drag start')


}, false);

dragImage.addEventListener("dragend", (event) => {
    event.target.style.opacity = '3%';

    console.log('drag end')


}, false);

//Load / 
const loadFontColor = document.querySelector('p')

window.addEventListener('load', (event) => {
    console.log('text is loaded as white')
    loadFontColor.style.color = 'white';

    event.stopPropagation();
});

//Focus / changes input background to grey and text to green
const name = document.querySelector('input')
name.addEventListener('focus', (event) => {
    event.target.style.background = 'lightgrey';
    event.target.style.color = 'green';

    console.log('input changed to corrected colors')

    event.stopPropagation();
});
