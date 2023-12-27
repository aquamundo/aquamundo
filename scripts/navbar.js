const dropdownContent = document.querySelector('.dropdown-content');
const navBurger = document.querySelector('.burger.burger1');

navBurger.addEventListener('click', ()=> {
    dropdownContent.classList.toggle('visible')
    navBurger.classList.toggle('toggled')
})

//Check scroll to modify navbar
const navbar = document.querySelector('header nav')
window.onscroll = () => {
    if(!(window.scrollY == 0)) {
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')
    }
}
