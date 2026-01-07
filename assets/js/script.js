//MENU HAMBURGER
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});


// CONTADOR
let countDownDate = new Date("Jan 30, 2026 23:59:59").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
    }
}, 1000);

//BOTÃO PRÉ VENDA - POPUP
function showPopup(message) {
    const dialog = document.createElement('dialog');

    // Aplicando backdrop escuro
    dialog.style.padding = '0';
    dialog.style.border = 'none';

    dialog.innerHTML = `
        <div class="modal-content text-center p-4">
            <div class="modal-header border-0">
                <h5 class="modal-title w-100">Aviso</h5>
                <button type="button" class="btn-close" 
                    onclick="this.closest('dialog').close(); this.closest('dialog').remove()" 
                    aria-label="Fechar">
                </button>
            </div>
            <div class="modal-body">
                <p>${message}</p>
                <button class="bnt-modal mt-3" 
                    onclick="this.closest('dialog').close(); this.closest('dialog').remove()">
                    OK
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(dialog);
    dialog.showModal();
}

document.getElementById('btn-prevenda').addEventListener('click', function (e) {
    e.preventDefault();
    showPopup('A pré-venda ainda não está disponível. Explore nossa página e fique por dentro das novidades!');
});



//ESCOLHA SUA ENERGIA
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

//BOTÕES EXPERIMENTAR
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


//FAQ
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.accordion-item');
            const collapse = item.querySelector('.accordion-collapse');

            const isOpen = collapse.classList.contains('show');

            document.querySelectorAll('.accordion-collapse').forEach(c => c.classList.remove('show'));
            document.querySelectorAll('.accordion-button').forEach(b => b.classList.add('collapsed'));

            if (!isOpen) {
                collapse.classList.add('show');
                button.classList.remove('collapsed');
            }
        });
    });
});

//NEWSLETTER
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





