const przycisk = document.querySelector('#start a');
const wiadomosc = document.querySelector('#wiadomosc');

przycisk.addEventListener('click', function() {
    wiadomosc.textContent = 'Dziękuję za kontakt!';
});

const formularz = document.querySelector('#formularz-kontaktowy');
const komunikat = document.querySelector('#komunikat-formularza');

formularz.addEventListener('submit', function(event) {
    event.preventDefault();

    komunikat.textContent = 'Dziękuję za wiadomość! Skontaktuję się z Tobą.';
    formularz.reset();
});