// активирование кнопки поиска
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
}

// активирование кнопки корзины
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
}

// активирование кнопки "Купите выкройку уже сейчас"
document.querySelector('#cart-btn-2').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
}

// листание страницы - отклячение из вида корзины и поиска
window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// нажатие кнопки (ссылки) оплатить
let btnPaid = document.querySelector('.btn-paid');

document.querySelector('#btn-paid').onclick = () =>{
    document.getElementById("btn-paid").firstChild.data = 'Оплачено';
    document.getElementById("btn-paid").style.background ="red";
}

// нажатие кнопки связаться сейчас
let contact = document.querySelector('.btn-contact');

document.querySelector('#btn-contact').onclick = () =>{
    document.getElementById('btn-contact').value = 'Ваши данные отправлены';
    document.getElementById("btn-contact").style.background ="red";
}

// куда пишется текст сообщения
let input=document.querySelector('.form-input');
// кнопки отправить
let submit=document.querySelector('.form-submit');

submit.addEventListener('click',(event)=>{
    if (input.value===''){
        input.value='Вы ничего не ввели'
    }
    else {
        let message=input.value
        input.value=''

        let newDate=new Date();
        let messageObject={
            date:''+(newDate.getHours())+':'+(newDate.getMinutes()),
            messages:message
        }
        input.value="В " + messageObject.date + " пытались найти: " + messageObject.messages
    }
})