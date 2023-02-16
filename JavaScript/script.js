let aceu = document.getElementById('ceu');
let afloresta3 = document.getElementById('floresta3');
let afloresta2 = document.getElementById('floresta2');
let afloresta1 = document.getElementById('floresta1');
let atext = document.getElementById('titulo');
let aconfete = document.getElementById('confete');
let agramado2 = document.getElementById('gramado2');
let afolha = document.getElementById('folha');
let agramado1 = document.getElementById('gramado1');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    aceu.style.top  = value * 0.01 + 'px';
    afloresta3.style.top  = value * 1.3 + 'px';
    afloresta2.style.top  = value * 1.1 + 'px';
    afloresta1.style.top  = value * .9 + 'px';
    // atext.style.top  = value * .1 + '12rem';
    aconfete.style.top  = value * 0.7 + 'px';
    aconfete.style.left  = value * 0.3 + 'px';
    agramado2.style.top  = value * .5 + 'px';
    afolha.style.top  = value * 0.4 + 'px';
    agramado1.style.top  = value * .25 + 'px';


})