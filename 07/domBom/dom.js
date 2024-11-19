// console.log(window);
console.log(document);
//old
// let idEl = document.getElementById('test');
// console.log(idEl);
// idEl.innerHTML ='Hello js';
// let tagName = document.getElementsByTagName('p');
// console.log(tagName);
// let classEl = document.getElementsByClassName('text-item');
// console.log(classEl);
//new 
let queryId = document.querySelector('#test');
console.log(queryId);
let pEl = document.querySelector('p');
console.log(pEl);
//all
let linksEl = document.querySelectorAll('a');
console.log(linksEl);
let arrLinks = Array.from(linksEl);
console.log(arrLinks);
let [...pElements] = document.querySelectorAll('p');
console.log(pElements);
let [...navLinks] = document.querySelectorAll('nav a');
console.log(navLinks);
navLinks.forEach((item, index)=>{
    item.innerHTML =`New content ${index}`;
})