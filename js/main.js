const menu = document.querySelector("#menu");
const cardBody = document.querySelector("#card-body");
const body = document.querySelector("body");

menu.addEventListener('click',function(){
    cardBody.classList.toggle('hide');
});

body.addEventListener('click', function(e) {
    if (!e.target.classList.contains('card-body') && !e.target.classList.contains('menu')) {
        cardBody.classList.add('hide');
    }
});

