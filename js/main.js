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
    
    if (content.classList.contains("hidden")) {
        btnOpen.textContent = "Скрыть все новости";
    } else {
        btnOpen.textContent = "Показать все новости";
    }

    content.classList.toggle("hidden");
}


let modal = document.getElementById('modal-take-home');
let modalShow = document.getElementsByClassName("show")
let modalClose = document.getElementsByClassName("modal-form__btn--secondary");
let close = document.getElementsByClassName("close-icon");



for (let i = 0; i < modalShow.length; i++) {
	modalShow[i].onclick = function() {
    let id = this.getAttribute('data-modal');
    let modal = document.getElementById(id);
    modal.style.display = 'block';
  }
}

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function() {
    let id = this.getAttribute('data-modal');
    let modal = document.getElementById(id);
    modal.style.display = "none";
  }
}

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let id = this.getAttribute('data-modal');

      
      let modal = document.getElementById(id);
      modal.style.display = 'none';
    }
  }


window.onclick = function(event) {
  let isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
  if (isModal) {
    event.target.style.display = "none";
  }
}





