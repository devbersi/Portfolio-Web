var nav = document.getElementById('header');
window.onscroll = function() {
    if (window.pageYOffset >100){
        nav.style.background = 'grey';
    }
    else {
        nav.style.background = 'opacity: 0.5';
    }
}