document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.jumping-text');
    const letters = text.textContent.split('');
    text.textContent = '';

    letters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('jumping-letter');
        text.appendChild(span);
    });
});
