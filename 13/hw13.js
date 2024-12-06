// Session Storage
let saveBtnEl=document.querySelector('#save-btn');
let showBtnEl=document.querySelector('#show-btn');
saveBtnEl.onclick=function(){
    let inputText=document.querySelector('input').value;
    window.sessionStorage.setItem('userText', inputText)
}

showBtnEl.onclick=function(){
    let savedText=sessionStorage.getItem('userText');
    let outputText=document.querySelector('#output');
    outputText.innerHTML=`Текст, збережений у Session Storage: ${savedText}`;
};

// Local Storage

let selectBgEl=document.querySelector('#bgColor');
//let saveBtn=document.querySelector('#saveBtn');
let bodyEl=document.querySelector('body');
let savedColor=localStorage.getItem('bgColor');
bodyEl.style.backgroundColor=savedColor;
selectBgEl.value=savedColor;

// saveBtn.addEventListener('click', function(){
//     let selectedColor=selectBgEl.value; 
//     localStorage.setItem('bgColor', selectedColor); 
//     bodyEl.style.backgroundColor=selectedColor;
// });

selectBgEl.onchange=function(){
    let selectedColor=selectBgEl.value; 
    localStorage.setItem('bgColor', selectedColor); 
    bodyEl.style.backgroundColor=selectedColor;
}

// Зробив два варіанти, з кнопкою підтвердження зберігання кольору сторінки і без кнопки, колір змінюється при виборі користувачем миттєво і зберігається у localStorage.


// Додаткова робота.
//window.localStorage.clear();
let toDoInput=document.querySelector('#toDoInput');
let addToDoBtn=document.querySelector('#addToDoBtn');
let toDoList=document.querySelector('#toDoList');

let savedTasks=localStorage.getItem('tasks');
toDoList.innerHTML=savedTasks;

let taskBtns = toDoList.querySelectorAll('button'); 
taskBtns.forEach((button) => {
    button.addEventListener('click', function(){
        let taskItem=button.parentElement;
        taskItem.remove();
        localStorage.setItem('tasks', toDoList.innerHTML);
    });
});

addToDoBtn.addEventListener('click', function(){
    let task=toDoInput.value;
    if (task){
        let li=document.createElement('li');
        li.innerHTML=task;

        let deleteToDoBtn=document.createElement('button');
        deleteToDoBtn.textContent='Видалити';
        deleteToDoBtn.addEventListener('click', function(){
            li.remove();
            localStorage.setItem('tasks', toDoList.innerHTML);
        });

        li.appendChild(deleteToDoBtn);
        toDoList.appendChild(li);

        toDoInput.value='';
        localStorage.setItem('tasks', toDoList.innerHTML);
    }
});





