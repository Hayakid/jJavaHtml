//  // Seminar 6 
// // num1
// const linkel = document.querySelector('.link');
// linkel.textContent= 'link text js';
// linkel.href = 'https://vk.com/';
// console.log (linkel);
// const imgEl =document.querySelector('.photo')
// imgEl.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG'  
// //num 2
// const content = document.querySelector('content');
// const newContent = document.querySelector('p');
// newContent.textContent='new text element';
// content.appendChild(newContent);
// content.removeChild(newContent);
//// num 3
const button= document.createElement('button');
button.textContent = 'Touch me';
const counterText =document.createElement('p')
const content = document.querySelector('.content');
content.appendChild(button);
content.appendChild(counterText)
let counter =0
counterText.textContent =(`cовершенно  ${counter} нажатий  `);
button.onclick= function()
{
counter++;
counterText.textContent =(`cовершенно  ${counter} нажатий  `);
}

