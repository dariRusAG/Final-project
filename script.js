function UserTwo()
{
    document.getElementById("user1 users").hidden=false;
    document.getElementById("user2 users hidden").hidden=false;
    document.getElementById("user3 users hidden").hidden=true;
}

function UserThree()
{
    document.getElementById("user1 users").hidden=false;
    document.getElementById("user2 users hidden").hidden=true;
    document.getElementById("user3 users hidden").hidden=false;
}

// Получаем все теги
// куда пишется текст сообщения
let inputUser1=document.querySelector('.user1_form-input');
inputUser2=document.querySelector('.user2_form-input');
inputUser3=document.querySelector('.user3_form-input');
// кнопки отправить
submitUser1=document.querySelector('.user1_form-submit');
submitUser2=document.querySelector('.user2_form-submit');
submitUser3=document.querySelector('.user3_form-submit');
// сами формы
formUser1=document.querySelector('.user1');
formUser2=document.querySelector('.user2');
formUser3=document.querySelector('.user3');
// наши сообщения
messageToShowUser1=document.querySelector('.mainMessage_User1');
messageToShowUser2=document.querySelector('.mainMessage_User2');
messageToShowUser3=document.querySelector('.mainMessage_User3');
// Блок сообщений
messageOutputUser2=document.querySelector('.messageOutputUser2');
messageOutputUser3=document.querySelector('.messageOutputUser3');

// Создаем необходимые переменные
// ID сообщений
idMessagesUser1=0;
idMessagesUser2=0;
idMessagesUser3=0;
// массивы для складывания сообщений
let objectForMessages=[ //Объект для сообщений
    // 1 пользователь
    [],
    // 2 пользователь
    []
];
submitUser1.addEventListener('click',(event)=>{
    // запрет перезагрузки страницы во время отправки сообщений
    event.preventDefault();
    let message=inputUser1.value; //получает значение
    inputUser1.value=''; //очищает ввод

    // объект для времени отправки
    let nowaDate=new Date();
    // вывод сообщений
    let messageObject={
        name:'Jodie',
        date:''+(nowaDate.getHours())+':'+(nowaDate.getMinutes())+'',
        messages:message
    };
    objectForMessages[0].push(messageObject); //отправляем сообщение в массив
    idMessagesUser1++;

    let Object = document.createElement('div');
    Object.className="container-msg";
    Object.append(messageObject.name + ": " + messageObject.date + " " + messageObject.messages);
    // localStorage.setItem(count, message);
    // count++;
    localStorage.setItem(count, JSON.stringify(messageObject));
    count++;

    if (document.getElementById("user2 users hidden").hidden===false)
    {
        messageOutputUser2.append(Object);
        submitUser2.addEventListener('click',(event)=>{
            event.preventDefault();
            let message=inputUser2.value;
            inputUser2.value='';

            let nowaDate=new Date();
            let messageObject={
                name:'Miranda',
                date:''+(nowaDate.getHours())+':'+(nowaDate.getMinutes())+'',
                messages:message
            };

            objectForMessages[1].push(messageObject); //отправляем сообщение в массив
            idMessagesUser2++;

            let Object = document.createElement('div');
            Object.className="container-msg darker";
            Object.append(messageObject.name + ": " + messageObject.date + " " + messageObject.messages);
            messageOutputUser2.append(Object);
            // localStorage.setItem(count, message);
            // count++;
            localStorage.setItem(count, JSON.stringify(messageObject));
            count++;
        });
    }

    if (document.getElementById("user3 users hidden").hidden===false)
    {
        messageOutputUser3.append(Object);
        submitUser3.addEventListener('click',(event)=>{
            event.preventDefault();
            let message=inputUser3.value;
            inputUser3.value='';

            let nowaDate=new Date();
            let messageObject={
                name:'Katherina',
                date:''+(nowaDate.getHours())+':'+(nowaDate.getMinutes())+'',
                messages:message
            };

            objectForMessages[1].push(messageObject); //отправляем сообщение в массив
            idMessagesUser2++;

            let Object = document.createElement('div');
            Object.className="container-msg darker";
            Object.append(messageObject.name + ": " + messageObject.date + " " + messageObject.messages);
            messageOutputUser3.append(Object);
            // localStorage.setItem(count, message);
            // count++;
            localStorage.setItem(count, JSON.stringify(messageObject));
            count++;
        });
    }
});
document.addEventListener("DOMContentLoaded", function(event) {
        count = localStorage.length;
        for (i = 0; i < localStorage.length; i++) {

            //var array = JSON.parse(localStorage.getItem(i));
            let info = document.createTextNode(localStorage.getItem(i))
            let messageOutputUser2 = document.getElementById("messageOutputUser2")
            //let messageOutputUser3 = document.getElementById("messageOutputUser3")
            let Object = document.createElement('div');
            if (i % 2 === 0) {
                Object.className = "container-msg";
            }
            else {
                Object.className = "container-msg darker";
            }

            Object.append(info);
            messageOutputUser2.append(Object);
            //messageOutputUser3.append(Object);
        }
        count = 0
    });

function documentClear() {
    localStorage.clear();
}


