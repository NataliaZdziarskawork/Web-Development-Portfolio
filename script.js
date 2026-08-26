const przycisk = document.querySelector('#start a');
const wiadomosc = document.querySelector('#wiadomosc');

przycisk.addEventListener('click', function() {
    wiadomosc.textContent = 'Dziękuję za kontakt!';
});

const formularz = document.querySelector('#formularz-kontaktowy');
const komunikat = document.querySelector('#komunikat-formularza');

formularz.addEventListener('submit', function(event) {
    event.preventDefault();

    const imie = document.querySelector('#imie').value;
    const email = document.querySelector('#email').value;
    const wiadomosc = document.querySelector('#wiadomosc-formularza').value;

    const temat = 'Zapytanie ze strony wizytówki';

    const tresc =
        `Imię: ${imie}\n` +
        `E-mail: ${email}\n\n` +
        `Wiadomość:\n${wiadomosc}`;

    const mailto = `mailto:barbararakowsa34@gmail.com?subject=${encodeURIComponent(temat)}&body=${encodeURIComponent(tresc)}`;

    window.location.href = mailto;

    komunikat.textContent = 'Otwieram program pocztowy...';
});