const burger = document.querySelector('.header-menu__icon');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const menuList = document.querySelectorAll(".header-menu__link > a");



burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('show');
});


menuList.forEach(i => {
    i.addEventListener('click', function (e) {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
        overlay.classList.remove('show');
    })
});

  
const btn = document.querySelector(".news__btn");
const content = document.querySelector(".hidden");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "Скрыть все новости";
    } else {
        btn.textContent = "Показать все новости";
    }

    content.classList.toggle("hidden");
}
