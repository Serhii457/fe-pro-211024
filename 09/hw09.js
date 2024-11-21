// 1. onclick
function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

let helloBtn=document.querySelector('.hello');
let textEl=document.querySelector('p');
helloBtn.onclick=function(){
    textEl.style.color=getRandomColor();
};

helloBtn.addEventListener('click',function(){
    textEl.style.color=getRandomColor();
});

// 2. ondblclick

let divEl=document.querySelector('.div-element');
let currentWidth=divEl.offsetWidth;
let currentHeight=divEl.offsetHeight;
divEl.ondblclick=function(){
    divEl.style.width=currentWidth*2+'px';
    divEl.style.height=currentHeight*2+'px';
};

// якщо хочемо, щоб елемент збільшувався постійно при даблклик, поміщаємо змінні currentWidth і currentHeight в функцію.
    
// 3. addEventListener і removeEventListener

let countBtn=document.querySelector('.counter-button');
let countTxt=document.querySelector('.p-counter');
let quantity=0;
countBtn.addEventListener('click',function(){
    quantity++;
    if(quantity<=10){
        countTxt.innerHTML=(`Кількість кліків: ${quantity}`);
    }
    else{
        countBtn.removeEventListener('click',function(){});
    };
});

// 4. Завдання
let newContainer=document.querySelector('.container');

for(i=0;i<10;i++){
    let newDivEl=document.createElement('div');
    newContainer.appendChild(newDivEl);
    newDivEl.style.width='50px';
    newDivEl.style.height='50px';
    newDivEl.style.backgroundColor='orange';
    newDivEl.style.borderRadius='50%';
    newDivEl.innerHTML=`${i+1}`;
    newDivEl.style.textAlign='center';
    // newDivEl.onclick=function(){
    //     newDivEl.remove();
    // }
}
newContainer.onclick=function(e){
    if(e.target.tagName==='DIV'){
        e.target.remove();
    }
};

// 5. Event target

let blockContainerEl=document.querySelector('.block-container');
blockContainerEl.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        let buttonClassName = e.target.className;
        alert(`Клік по кнопці ${buttonClassName}`);
    }
});


// 6. Завдання 

let toggleBtn = document.getElementById("toggleBtn");
let menu = document.getElementById("menu");
toggleBtn.onclick = function(){
    if (menu.style.display === "none" || menu.style.display === "")
        {
            menu.style.display = "block";
            toggleBtn.textContent = "Закрити меню"; 
        }else{
            menu.style.display = "none";
            toggleBtn.textContent = "Відкрити меню";
        }
    };