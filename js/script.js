var link = document.querySelector(".contacts-btn"); //������� ������ ��� �������� ����� �������� �����
var popup = document.querySelector(".feedback"); //����� �������� �����
var shadow = document.querySelector(".shadow"); //����
var close = popup.querySelector(".feedback-close"); //������ �������
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]"); //���� ��� ��� �����
var email = popup.querySelector("[name=email"); //���� �����
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    shadow.classList.add("shadow-show");
    popup.classList.add("feedback-show");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-show");
    shadow.classList.remove("shadow-show");
    popup.classList.remove("feedback-error");

});

shadow.addEventListener("click", function(event){
   event.preventDefault();
    popup.classList.remove("feedback-show");
    shadow.classList.remove("shadow-show");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !email.value){
        event.preventDefault();
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            shadow.classList.remove("shadow-show");
            popup.classList.remove("feedback-error");
        }
    }
});