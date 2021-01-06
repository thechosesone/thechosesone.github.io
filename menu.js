const hamburgerbutton = document.querySelector('#hamburgerbutton');
const mobilemenu = document.querySelector('#mobilemenu');

console.log("si funciono");
hamburgerbutton.addEventListener('click', menutoggle);
mobilemenu.addEventListener('click', menutoggle);

function menutoggle() {

console.log('click hamburguer');
if(hamburgerbutton.classList.contains('open')) {
    hamburgerbutton.classList.remove('open');
    hamburgerbutton.classList.add('closed');
    mobilemenu.classList.remove('menuopen');
    mobilemenu.classList.add('menuclosed');
    setTimeout(rmclosed, 1000);
    
        function rmclosed() {
            hamburgerbutton.classList.remove('closed');
            mobilemenu.classList.remove('menuclosed');
    }
}
else {

    hamburgerbutton.classList.remove('closed');
    hamburgerbutton.classList.add('open');
    mobilemenu.classList.remove('menuclosed');
    mobilemenu.classList.add('menuopen');
}
}