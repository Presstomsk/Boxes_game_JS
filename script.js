function Random(min, max) { //Рандом
    return Math.floor(Math.random() * (max - min) + min);
}

let timeMinut;
let speed;
let min,max;

let numBoxes = parseInt(prompt("Введите количество коробочек(min = 30, max = 200) ")); //Ввод количества коробок с клавиатуры
if (numBoxes > 200) {numBoxes = 200;} 
if (numBoxes < 30){numBoxes = 30;}  

let difficult_level = parseInt(prompt("Введите уровень сложности \n 1 - легкий \n 2 - средний \n 3 - сложный ")); //Ввод сложности
if (difficult_level > 3){difficult_level = 3;}
if (difficult_level < 1){difficult_level = 1;}
if (difficult_level == 1){
    min = 1;
    max = 4;    
    timeMinut = 300;
    speed = 1500;
}
if (difficult_level == 2){
    min = 3;
    max = 6; 
    timeMinut = 210;
    speed = 1000;
}
if (difficult_level == 3){
    min = 5;
    max = 8; 
    timeMinut = 120;
    speed = 800;
}


let container = document.getElementById('container'); // Получаем контейнер

for (let i = 0; i < numBoxes; i++) { //Заполняем контейнер коробками
    let element = document.createElement("div");
    element.className = "box";
    element.style.backgroundColor = `rgb(${Random(0,255)},${Random(0,255)},${Random(0,255)})`;
    element.innerText = `${Random(min,max)}`;
    element.style.left = `${Random(0,window.innerWidth-100)}px`;
    element.style.top = `${Random(0,window.innerHeight-100)}px`;
    container.appendChild(element);
}

container.addEventListener("click", function() {  // уменьшение чисел в коробках при нажатии, когда число равно 0, удаление коробки
    if (event.target.className == 'box') {
        let num = parseInt(event.target.innerText);
        num--;
        if (num==0){event.target.remove();}
        event.target.innerText = `${num}`; 
    }
});

let boxes = document.querySelectorAll('.box'); // Получаем коробки

let game = setInterval (()=>{  // движение коробок
    for(const box of boxes)
    {         
        switch(Random(0,8)){
            case 0:
                box.style.left = `${Random(0,window.innerWidth-100)}px`;
                break;
            case 1:
                box.style.top = `${Random(0,window.innerHeight-100)}px`;
                break;  
            case 3:
                box.style.right = `${Random(0,window.innerWidth-100)}px`;
                break;
            case 4:
                box.style.bottom = `${Random(0,window.innerHeight-100)}px`;
                break;  
            case 5:
                box.style.left = `${Random(0,window.innerWidth-100)}px`;
                box.style.top = `${Random(0,window.innerHeight-100)}px`;
                break;
            case 6:
                box.style.right = `${Random(0,window.innerWidth-100)}px`;
                box.style.top = `${Random(0,window.innerHeight-100)}px`;
                break;  
            case 7:
                box.style.right = `${Random(0,window.innerWidth-100)}px`;
                box.style.bottom = `${Random(0,window.innerHeight-100)}px`;
                break;
            case 8:
                box.style.left = `${Random(0,window.innerWidth-100)}px`;
                box.style.bottom = `${Random(0,window.innerHeight-100)}px`;
                break;    
        }

    }

},speed);

let timerShow = document.getElementById("timer"); // Получаем таймер

let timer = setInterval(function () {
    let seconds = timeMinut%60 // Получаем секунды
    let minuts = timeMinut/60%60 // Получаем минуты 
    let count = document.querySelectorAll('.box').length; //Количество коробок
    // Условие если время закончилось то...
    if (timeMinut <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        clearInterval(game);
        // Выводит сообщение что время закончилось
        alert("Время закончилось! Вы проиграли!");
    } else if (count == 0) { //Если коробки уничтожены, то...
        // Таймер удаляется
        clearInterval(timer);
        clearInterval(game);
        // Выводит сообщение что время закончилось
        alert("Вы выйграли!");
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(minuts)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
}, 1000)




