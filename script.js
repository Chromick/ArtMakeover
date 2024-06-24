/* mostrar e tirar menu hamburguer */
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu-icon.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }
}


/* efeitos carousel */
const carrossel = document.querySelectorAll('.carrossel');
const btnVoltar = document.getElementById('voltar');
const btnAvancar = document.getElementById('avancar');

let currentSlide = 0;
let timer; // Variável para armazenar o timer

function hideSlider() {
    carrossel.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    carrossel[currentSlide].classList.add('on');
}

function next() {
    hideSlider();
    if (currentSlide === carrossel.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
    resetTimer(); // Reinicia o temporizador após cada clique
}

function back() {
    hideSlider();
    if (currentSlide === 0) {
        currentSlide = carrossel.length - 1;
    } else {
        currentSlide--;
    }
    showSlider();
    resetTimer(); // Reinicia o temporizador após cada clique
}

function startTimer() {
    timer = setTimeout(next, 3000); // Avança para o próximo slide após 3 segundos
}

function resetTimer() {
    clearTimeout(timer); // Limpa o temporizador atual
    startTimer(); // Inicia o temporizador novamente
}

btnAvancar.addEventListener('click', next);
btnVoltar.addEventListener('click', back);

// Inicia o temporizador assim que a página carregar
startTimer();


