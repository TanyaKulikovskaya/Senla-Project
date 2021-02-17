const burger = document.querySelector('.header-menu__icon');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const menuList = document.querySelectorAll(".header-menu__link a");



burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
    overlay.classList.remove('show');
});


menuList.forEach(i => {
    i.addEventListener('click', function (e) {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
        overlay.classList.remove('show');
    })
});

  
const btnOpen = document.querySelector(".news__btn");
const content = document.querySelector(".hidden");

btnOpen.addEventListener("click", btnOpenClick);

function btnOpenClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btnOpen.textContent = "Скрыть все новости";
    } else {
        btnOpen.textContent = "Показать все новости";
    }

    content.classList.toggle("hidden");
}


var modal = document.getElementById('modal-take-home');
var modalShow = document.getElementsByClassName("show")
var modalClose = document.getElementsByClassName("modal-form__btn--secondary");
var close = document.getElementsByClassName("close-icon");



for (var i = 0; i < modalShow.length; i++) {
	modalShow[i].onclick = function() {
    var id = this.getAttribute('data-modal');
    var modal = document.getElementById(id);
    modal.style.display = 'block';
  }
}

for (var i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function() {
    var id = this.getAttribute('data-modal');
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
}

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var id = this.getAttribute('data-modal');

      
      var modal = document.getElementById(id);
      modal.style.display = 'none';
    }
  }


window.onclick = function(event) {
  var isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
  if (isModal) {
    event.target.style.display = "none";
  }
}





