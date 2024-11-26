let playField = document.querySelector('.play-field');
let moveObject = document.querySelector('.object-for-move');
let posX=moveObject.style.left;
let posY=moveObject.style.top;
let moveStep=15;

document.addEventListener('keydown', function(event){
    console.log(event.key);
    if (event.key === 'ArrowUp'){
        posY = Math.max(0, posY - moveStep)
     } else if (event.key === 'ArrowDown'){
        posY = Math.min(playField.clientHeight-moveObject.clientHeight, posY + moveStep)
     } else if (event.key === 'ArrowLeft'){
        posX = Math.max(0, posX - moveStep)
     } else if (event.key === 'ArrowRight'){
        posX = Math.min(playField.clientWidth-moveObject.clientWidth, posX + moveStep)
    };
        moveObject.style.top = `${posY}px`;
        moveObject.style.left = `${posX}px`;
    });
