// Выполняем запрос на URL - получаем ответ
fetch('../json/blogs.json')
    // если успешно - парсим
    .then(
        response => {
            response.json().then(result => {
                // url на внешнем ресурсе
                addPicture_1(result.image_1);
                addPicture_2(result.image_2);
                addPicture_3(result.image_3);
            });
        })

// добавление картинок на страницу сайта по данным из JSON-файла
function addPicture_1(url) {
    let picture = new Image();
    picture.src = url;
    document.querySelector('.img-1').append(picture);
}

function addPicture_2(url) {
    let picture = new Image();
    picture.src = url;
    document.querySelector('.img-2').append(picture);
}

function addPicture_3(url) {
    let picture = new Image();
    picture.src = url;
    document.querySelector('.img-3').append(picture);
}