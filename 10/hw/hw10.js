let hoverEl=document.querySelector('.hover');
let originBackgroundColor=hoverEl.style.backgroundColor;
hoverEl.addEventListener('mouseover',function(){
    this.style.background='brown';
    this.innerHTML='Over DIV';
});
hoverEl.addEventListener('mouseout',function(){
    this.style.background=originBackgroundColor;
    this.innerHTML='Out DIV';
});

//  Next task

let imageEl=document.querySelector('.image');
let originBorder=imageEl.style.border;
imageEl.addEventListener('mouseover', function(){
    this.style.transform='scale(1.2)';
    this.style.border='10px solid violet';
});
imageEl.addEventListener('mouseout',function(){
    this.style.transform='scale(1)';
    this.style.border=originBorder;
});