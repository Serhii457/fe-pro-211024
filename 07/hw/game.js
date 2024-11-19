function starGame(){
    let options = ['камінь', 'ножиці', 'папір'];
    let computerChoise = options[Math.floor(Math.random()*3)];
    // console.log(computerChoise); Перевірка коду по вибору значення
    let userChoise = prompt('Напишіть ваш вибір Камінь, нОжиці, папІр'
    ).trim().toLowerCase();
    // userChoise = userChoise.trim();
    // userChoise = userChoise.toLowerCase();
    // userChoise = userChoise.trim().toLowerCase();
    // console.log(userChoise); Перевірка коду по вводу значення
    if(!options.includes(userChoise)){
        alert('Такого значення не існує грайте за правилами');
        return;
    }
    if(computerChoise === userChoise){
        alert('Нічия!');
    }
    else if((userChoise === 'камінь' && computerChoise === 'ножиці') || (userChoise === 'ножиці' && computerChoise === 'папір') || (userChoise === 'папір' && computerChoise === 'камінь')){
        alert('Перемога юзера');
        console.log(`${userChoise} and ${computerChoise}`);
    }
    else{
        alert('Перемога машини');
        console.log(`${userChoise} and ${computerChoise}`);
    }
    // else{
    //     alert('Такого значення не існує грайте за правилами');
    // }
}
starGame();