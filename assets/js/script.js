const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});


// Set the date we're counting down to
let countDownDate = new Date("Jan 30, 2026 23:59:59").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
    }
}, 1000);

document.querySelector('.cta-button').addEventListener('click', function () {
    alert('Você será notificado quando o lançamento acontecer!');
});


// Escolha sua energia
const flavorCards = document.querySelectorAll('.flavors-card');
const flavorDetails = document.querySelectorAll('.flavor-detail');


function changeFlavor(flavorId) {

    flavorCards.forEach(card => card.classList.remove('active'));

    flavorDetails.forEach(detail => detail.classList.remove('active'));

    const activeCard = document.querySelector(`.flavors-card[data-flavor="${flavorId}"]`);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    const activeDetail = document.getElementById(flavorId);
    if (activeDetail) {
        activeDetail.classList.add('active');
    }
}

flavorCards.forEach(card => {
    card.addEventListener('click', () => {
        const flavorId = card.getAttribute('data-flavor');
        changeFlavor(flavorId);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    changeFlavor('aurora');
});

// Botões "Experimentar"
const ctaButtons = document.querySelectorAll('.details-button');
const productModal = new bootstrap.Modal(document.getElementById('productModal'));

ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        productModal.show();
    });
});

const goToLancamento = document.getElementById('goToLancamento');

goToLancamento.addEventListener('click', (e) => {
    e.preventDefault();
    productModal.hide();      
    const lancamentoSection = document.getElementById('lancamento');
    lancamentoSection.scrollIntoView({ behavior: 'smooth' }); 
});


/* Perguntas Frequentes */

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.accordion-item');
            const collapse = item.querySelector('.accordion-collapse');

            const isOpen = collapse.classList.contains('show');

            // Fecha todos
            document.querySelectorAll('.accordion-collapse').forEach(c => c.classList.remove('show'));
            document.querySelectorAll('.accordion-button').forEach(b => b.classList.add('collapsed'));

            // Abre apenas o clicado se estava fechado
            if (!isOpen) {
                collapse.classList.add('show');
                button.classList.remove('collapsed');
            }
        });
    });
});

/* Newsletter */

document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailField = document.getElementById('emailInput');
    const successMsg = document.getElementById('successMessage');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailField.value)) {
        successMsg.style.display = 'block';
        emailField.value = ''; // Limpa o campo

        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 4000);
    } else {
        alert("Por favor, digite um e-mail válido.");
    }
});





