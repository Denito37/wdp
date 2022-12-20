const submit = document.getElementById('submit');
const openM = document.getElementById('open');
const menuIcon =document.querySelector('#open img')
const menu = document.querySelector('.menu');
const links = document.getElementById('mobileLinks')

openM.addEventListener('click', () => {
    menuIcon.classList.toggle('icon');
    menu.classList.toggle('openMenu');
    links.classList.toggle('showLinks');
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
})