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

