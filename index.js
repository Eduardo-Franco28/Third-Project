window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})
window.addEventListener("scroll", () => {
    let h2 = document.querySelector('#h2');
    if (h2) {
        h2.classList.add('traço-baixo', window.scrollY > 2800);
    }
});

document.getElementById("bronze").addEventListener("click", function() {
    setTimeout(() => {
        window.location.href = "https://api.whatsapp.com/send?phone=+5519971316301&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+plano+BRONZE%21";
    }, 400);
});
document.getElementById("prata").addEventListener("click", function() {
    setTimeout(() => {
        window.location.href = "https://api.whatsapp.com/send?phone=+5519971316301&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+plano+PRATA%21";
    }, 400);
});
document.getElementById("ouro").addEventListener("click", function() {
    setTimeout(() => {
        window.location.href = "https://api.whatsapp.com/send?phone=+5519971316301&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+plano+OURO%21";
    }, 400);
});



let btnMenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let over = document.getElementById('overlay')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
over.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})