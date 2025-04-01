const yearP = document.querySelector('#year');
const date = new Date();
const year = date.getFullYear()

yearP.textContent = year;
console.log(year);

const menuBar = document.querySelector('#menu_bar');

menuBar.addEventListener('click', () => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('show_nav');
});