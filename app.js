const openM = document.getElementById('open');
const closeM = document.getElementById('close');
const menuIcon =document.querySelector('#open img');
const menu = document.querySelector('.menu');
const links = document.querySelector('.menu ul');
const hero = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero h2');
const heroPara = document.querySelector('.hero p');
const heroImg = document.querySelector('.hero .img');
const heroLinks = document.querySelectorAll('.txt .links a');
let count = getRandomInt(3);
const projects = document.querySelectorAll('.contain section');
const skills = document.querySelectorAll('.wrap section');

// * observe User Scrolling
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle('show', entry.isIntersecting)
    })},
{
    threshold:.6,
});
projects.forEach(project =>{
    observer.observe(project)
})
skills.forEach(skill =>{
    observer.observe(skill)
})
// * Mobile Menu
openM.addEventListener('click', () => {
    menu.style.width = "70vw";
    menu.style.height = "100%";
    menu.style.opacity = "1";
    menu.style.transition = "width .3s ease-in, opacity .3s ease-in,height .3s ease-in"
    links.style.display = "block"
    links.style.opacity = "1";
    openM.style.display = "none";
    closeM.style.display = "block";
});
closeM.addEventListener('click', () => {
    menu.style.width = "0";
    menu.style.height = "0";
    menu.style.opacity = "0";
    menu.style.transition = "width .3s ease-out, opacity .3s ease-out,height .3s ease-out"
    links.style.display = "none"
    links.style.opacity = "0";
    openM.style.display = "block";
    closeM.style.display = "none";
});
// * Generate number to change Hero section
if(count == 0){
    heroTitle.innerHTML = "USER ARTS";
    heroPara.innerHTML = " A user inputed photo album with three different themes.";
    heroImg.innerHTML = '<img src="images/UA-M.png" alt= "preview-Of-Feature-Site">'
    heroLinks[0].href= 'https://denito37.github.io/UserArts/';
    heroLinks[1].href='https://github.com/Denito37/UserArts'
}
if(count == 1){
    heroTitle.innerHTML = "ADVICE GENERATOR";
    heroPara.innerHTML = " A fun pastime that gets quotes of great advice from an external API";
    heroImg.innerHTML = '<img src="images/AG-MOBILE.png" alt= "preview-Of-Feature-Site">'
    heroLinks[0].href= 'https://denito37.github.io/advice-generator-app-main/';
    heroLinks[1].href='https://github.com/Denito37/advice-generator-app-main'
}
if(count == 2){
    heroTitle.innerHTML = "CSS Collection";
    heroPara.innerHTML = " A collection of components that showcases what can be done with CSS";
    heroImg.innerHTML = '<img src="images/CC-M.png" alt= "preview-Of-Feature-Site">'
    heroLinks[0].href= 'https://denito37.github.io/cssCollection/';
    heroLinks[1].href='https://github.com/Denito37/cssCollection'
}
function getRandomInt(max) {
    let num = Math.floor(Math.random() * max)
    return num;
}