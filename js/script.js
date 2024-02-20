const navlinks = document.querySelector('.navlinks');
const menu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');

menu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    navlinks.style.display = 'flex';
    navlinks.style.right = '0';
}
function close(){
    navlinks.style.right = '-100%';
}
