// jsonPATH
// Выполняем запрос на URL - получаем ответ
fetch('images.json')
    // если успешно - парсим
    .then(
        response => {
            response.json().then(result => {
                // адрес размещения изображения относительно текущего HTML ("клиентский путь" до файла на сервере)
                addPicture(result.image1);
                // url на внешнем ресурсе
                addPicture(result.image2);
                // base64 (data:image/png)
                addPicture(result.image3);
                // абсолютный адрес размещения изображения (полный "клиентский путь" до файла на сервере)
                addPicture(result.image4);
            });
        })

    // в случае ошибки - вывод сообщения
    .catch(
        err => {
            console.log('Fetch Error: -S', err);
        });

// добавление картинок на страницу сайта по данным из JSON-файла
function addPicture(url) {
    let picture = new Image();
    picture.src = url;
    document.querySelector('.image_area').append(picture);
}