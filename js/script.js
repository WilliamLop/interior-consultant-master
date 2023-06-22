// Variables para el menu mobile
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const headerBtn = document.querySelector('.header__btn');
const linkActive = document.querySelector('.nav__link--actives');
const iconHamburger = document.querySelector('.img-hamburger');
const btnMenu = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav__link');

console.log(navLinks);


// Funciones para filtros al activar el nav

function filters(){
    main.classList.add('filters');
    headerBtn.classList.add('filters');
}
function filtersNot(){
    main.classList.remove('filters');
    headerBtn.classList.remove('filters');
}


// Evento para abrir el nav mobile
btnMenu.addEventListener('click', () => {

    // LLamo a la clase CSS que muestra mi nav
    nav.classList.toggle('nav-active');

    // Condiciono si esta abierto me cambie el icono de hambuger a close, sino viceversa
    if(nav.classList.contains('nav-active')){
        iconHamburger.setAttribute('src', './images/icon-close-menu.svg');
        filters();
    }else{
        iconHamburger.setAttribute('src', './images/icon-hamburger.svg');
        filtersNot();
    }
    
});

// Funcion para hacer hover a los links
function hoverLinks(){  

    /*Recorro los navLinks y cada vez que este en hover le agrege una clase
    traida desde CSS y remuevo la clase actual*/
    navLinks.forEach((links) => {
        links.addEventListener('mouseover', () => {
            links.classList.toggle('nav__link--active');
            linkActive.classList.remove('nav__link--actives');
        });
    });
    
    navLinks.forEach((links) => {
        links.addEventListener('mouseout', () => {
            links.classList.remove('nav__link--active');
            linkActive.classList.add('nav__link--actives');

        });
    });
}
// LLamo la funcion de los hover a los links
hoverLinks();



window.addEventListener('resize', () => {
    const isMenuActive = document.querySelector('.nav-active');

    if(isMenuActive){
        nav.classList.remove('nav-active');
        iconHamburger.setAttribute('src', './images/icon-hamburger.svg');
        filtersNot();
    }
});