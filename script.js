// FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(item => {

    item.addEventListener('click', () => {

        const answer = item.nextElementSibling;

        if(answer.style.display === 'block'){
            answer.style.display = 'none';
        }
        else{
            answer.style.display = 'block';
        }

    });

});

// CONTADOR DE OFERTA
let hours = 23;
let minutes = 59;
let seconds = 59;

const countdownElement = document.getElementById('countdown');

if (countdownElement) {

    setInterval(() => {

        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes < 0) {
            minutes = 59;
            hours--;
        }

        if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
        }

        countdownElement.textContent =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    }, 1000);

}

// ANIMAÇÃO AO ROLAR A PÁGINA
const cards = document.querySelectorAll('.card, .review');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

});

cards.forEach(card => observer.observe(card));
