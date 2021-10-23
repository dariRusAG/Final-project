//получение необходимых переменных
let dropping = document.querySelector('.dropping');
let cell = document.querySelectorAll('.cell');
let initialize = document.querySelector('.initialize');
let showSection = document.querySelector('.show');

discharge();

//перемешать цвета ячеек
initialize.addEventListener('click', mix);

function mix()
{
    //обход всех ячеек
    cell.forEach(button =>
    {
        let random = Math.floor(Math.random() * 10);
        if (random >= 5) button.style.background = "mistyrose";
        else button.style.background = "#4C4C4C";
    });
    showSection.innerText = "Для победы закрасьте все поле";
}

//сбросить все цвета ячеек
dropping.addEventListener('click', discharge);

function discharge()
{
    //обход всех ячеек
    cell.forEach(button => { button.style.background = "mistyrose";
    });
    showSection.innerText = "Для победы закрасьте все поле";
}

//обход ячеек для обнаружения нажатия
cell.forEach(button => {
    button.addEventListener('click', play);
});

function play(i)
{
    //получает строки и столбцы ячейки
    let line = i.currentTarget.id[0];
    let column = i.currentTarget.id[1];

    //обход массива ячеек
    cell.forEach(button => {
        if (button.id[0] === line || button.id[1] === column)
        {
            if (button.style.background === "mistyrose") button.style.background = "#4C4C4C";
            else button.style.background = "mistyrose";
        }
    })
    stopGame();
}

function stopGame()
{
    let grey = true;
    //проверка - закрашены ли все ячейки
    cell.forEach(button => { if(button.style.background === "mistyrose") grey = false;
    })
    if (grey === true) showSection.innerText = "ПОБЕДА!";
}



