const przycisk = document.querySelector('#start a');
const wiadomosc = document.querySelector('#wiadomosc');

przycisk.addEventListener('click', function() {
    wiadomosc.textContent = 'Dziękuję za kontakt! Chętnie podejmę się realizacji Twojego projektu.';
});