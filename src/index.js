import randomAnswer from './function.js';

//grab button from html
const button = document.getElementById('submit-button');

//grab paragraph from html
let htmlParagraph = document.getElementById('html-paragraph');

//add event listener for button
button.addEventListener('click', () => {
    htmlParagraph.textContent = randomAnswer();

});