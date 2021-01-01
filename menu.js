const hamburgerbutton = document.querySelector('#hamburgerbutton');

console.log("si funciono");
hamburgerbutton.addEventListener('click', function() {
console.log('click hamburguer');
if(hamburgerbutton.classList.contains('open')) {
    hamburgerbutton.classList.remove('open');
    hamburgerbutton.classList.add('closed');
    setTimeout(rmclosed, 1000);
    
        function rmclosed() {
            hamburgerbutton.classList.remove('closed');
    }
}
else {

    hamburgerbutton.classList.remove('closed');
    hamburgerbutton.classList.add('open');
}
});