let start = document.querySelector('.start');
let countdown = document.querySelector('.score');
let minute, seconds, milliseconds;

let audio = new Audio('metal.mp3');

//Регистрация нажатия запуска таймера
start.addEventListener('click', count);

//Обратный отсчет
function count() {
    start.innerText = 'ПЕРЕЗАПУСТИТЬ';
    document.getElementById("img").hidden=true;
    document.getElementById("end").hidden=true;

    minute = 1;
    seconds = 3;
    milliseconds = 0;

    //Вызов Promise (resolve - успешно, reject - ошибка)
    const promise = new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            audio.play();
            updateCountdown();

            //обработка миллисекунд
            milliseconds -= 84;
            if (milliseconds <= 0) {
                milliseconds = 999;
                seconds--;
            }
            //обработка секунд
            if (seconds <= 0) {
                milliseconds = 999;
                seconds = 59;
                minute--;
            }
            //обработка минут
            if (minute < 0) {
                minute = 0;
                seconds = 0;
                milliseconds = 0;
                updateCountdown();
                clearInterval(interval);
                resolve('Ok');
            }
        }, 84);
    });

    promise.then(function () {
        let Object1 = document.createElement('div');
        Object1.className="gallery-top";
        document.getElementById("img").hidden=false;
        let Object2 = document.createElement('div');
        Object2.className="end";
        document.getElementById("end").hidden=false;
    });
}

//Обновление таймера на экране
function updateCountdown() {
    countdown.innerText = `${('00' + minute).slice(-2)}:${('00' + seconds).slice(-2)}:${('000' + milliseconds).slice(-3)}`;
}