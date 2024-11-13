

let idElement=document.getElementById('myHead');
console.log(idElement);

let classNameElement=document.getElementsByClassName('container');
console.log(classNameElement);

let tagNameElement=document.getElementsByTagName('div');
console.log(tagNameElement);

let firstEl=document.querySelector('li');
console.log(firstEl);

let lastEl=document.querySelector('li:last-child');
console.log(lastEl);

let thirdEl=document.querySelector('li:nth-child(3)');
console.log(thirdEl);

let allElements=document.querySelectorAll('li');
console.log(allElements);

let arrElements=Array.from(allElements);
console.log(arrElements);

let [...arrayOfElements]=document.querySelectorAll('li');
console.log(arrayOfElements);
