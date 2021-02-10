$(document).ready(function() {
    $(".header-menu__icon").click(function(event) {
        $(".header-menu__icon,.header-menu").toggleClass("active");
        $("body").toggleClass("lock");
        $(".overlay").fadeToggle(500);
    });

    $(".overlay").click(function(event) {
        $(".header-menu__icon,.header-menu").toggleClass("active");
        $(".overlay").fadeToggle(300);
        
    });

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

