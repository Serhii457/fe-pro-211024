let containerEl = document.querySelector('.container');
console.log(containerEl);
let titelEl = document.createElement('h3');
titelEl.innerHTML = 'Hello js element';
containerEl.appendChild(titelEl);
let linkArr = [
    'Home',
    'About',
    'Sale'
];
for(let link of linkArr){
    let linkEl = document.createElement('a');
    linkEl.innerHTML  = link;
    // containerEl.appendChild(linkEl);
    // containerEl.prepend(linkEl);
    // containerEl.before(linkEl);
    containerEl.after(linkEl);
}
let listEl =  document.querySelector('ul');
let activeEl = document.querySelector('.active');
let newLiEl = document.createElement('li');
newLiEl.innerHTML = 'Replaced tag';
listEl.replaceChild(newLiEl, activeEl);
// let lastLiEl = document.querySelector('ul li:last-child');
// console.log(lastLiEl);
let lastLiEl = listEl.lastElementChild;
console.log(lastLiEl);
listEl.removeChild(lastLiEl);
let firstEl = listEl.firstElementChild;
listEl.removeChild(firstEl);
let mainTitleEl = document.querySelector('h3');
console.log(mainTitleEl);
mainTitleEl.remove();
// search element
let ulClildren = listEl.children;
console.log(ulClildren);
let proEl = document.querySelector('.pro');
console.log(proEl);
console.log(proEl.previousElementSibling);
console.log(proEl.nextElementSibling);
proEl.innerHTML ='Pro Element';
proEl.previousElementSibling.innerHTML = 'Previous pre element';
proEl.nextElementSibling.innerHTML = 'Next pre element';