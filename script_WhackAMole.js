//получение необходимых переменных
let start = document.querySelector('.start');
let cell = document.querySelectorAll('.cell');
let scoreSection = document.querySelector('.score');
let showSection = document.querySelector('.show');

//создание необходимых переменных
let score = 0;
let cellActivated = null;
let cellStandard = null;
let gameLoop = [];

//регистрирует момент нажатия кнопки и отправляет на выполнение главную функцию
start.addEventListener('click', main);

//проверка: набралось ли необходимое для победы количество очков
function record(score)
{
        if (score === 15)
        {
            showSection.innerText = "ПОБЕДА!";
            stopGame();
        }
}

function main()
{
    score = 0;
    scoreSection.innerText = "СЧЕТ: " + score;
    start.innerText = "ПЕРЕИГРАТЬ";

    //перебирает все ячейки как элементы массива и проверяет, было ли нажатие
    cell.forEach(button => {
        button.addEventListener('click', cellCheck);
    });

    //регистрирует момент нажатия кнопки и отправляет на выполнение функцию остановки игры
    start.addEventListener('click', stopGame);

    //иначе - начать игру
    startGame();
}

//проверяет нажатие на нужную ячейку в поле
function cellCheck(i)
{
    if (cellActivated.toString() === i.currentTarget.id)
    {
        score++;
        scoreSection.innerText = "СЧЕТ: " + score.toString();
        //отправка на проверку набранных очков
        record(score);
    }
}

//процесс игры
function startGame()
{
    gameLoop = setInterval(() =>
    {
        cellStandard = cellActivated;
        //если наша ячейка закрашена
        if (cellStandard != null)
        {
            document.getElementById(cellStandard.toString()).style.background = "mistyrose";
        }
        //просто чтоб менялся цвет
        if (cellActivated === cellStandard)
        {
            cellActivated = getRandomInt(1, 17);
        }
        document.getElementById(cellActivated.toString()).style.background = "#4C4C4C";
    }, 800);
}

//завершение игры
function stopGame() {
    // start.innerText = "Переиграть";

    //удаляет обработчик события для продолжения игры
    start.removeEventListener('click', stopGame);

    //регистрирует момент нажатия кнопки и отправляет на выполнение функцию начала игры
    start.addEventListener('click', main);

    //обходит все ячейки и перекрашивает в изначальный цвет
    cell.forEach(button => {
        button.style.background = "mistyrose";
    })
    clearInterval(gameLoop);
}

//получение рандомного значения для изменения цвета ячейки
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

