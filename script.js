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

