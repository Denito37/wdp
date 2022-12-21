const form = document.getElementById('contact');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submit = document.getElementById('submit');
const openM = document.getElementById('open');
const menuIcon =document.querySelector('#open img');
const menu = document.querySelector('.menu');
const links = document.getElementById('mobileLinks');

openM.addEventListener('click', () => {
    menuIcon.classList.toggle('icon');
    menu.classList.toggle('openMenu');
    links.classList.toggle('showLinks');
});

submit.addEventListener('click', (e) => {
    if(email.value == ''){
        e.preventDefault();
    }
})