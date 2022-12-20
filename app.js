const submit = document.getElementById('submit');
const openM = document.getElementById('open');
const menu = document.querySelector('.menu');
const links = document.getElementById('mobileLinks')
const closeM = document.getElementById('close');

openM.addEventListener('click', () => {
    menu.style.height = '100%';
    menu.style.width = '70vw';
    menu.style.padding = "1rem 1rem 100% 1rem";
    closeM.style.opacity = "1";
    links.style.opacity = "1";
    links.style.display = 'block'
});
closeM.addEventListener('click', () =>{
    menu.style.height = '0%';
    menu.style.width = '0vw';
    menu.style.padding = "0 0 0 0";
    closeM.style.opacity = "0";
    links.style.opacity = "0";
    links.style.display = 'none'
});
submit.addEventListener('click', (e) => {
    e.preventDefault();
})