document.addEventListener("DOMContentLoaded", function() {
    const phrase = document.getElementById('phrase');
    const container = document.getElementById('container');

    let x = 0, y = 0;
    let dx = 1, dy = 0;
    const speed = 2;
    const margin = 10;

    function movePhrase() {
        const containerRect = container.getBoundingClientRect();
        const phraseRect = phrase.getBoundingClientRect();

        // Update direction and position
        if (dx === 1 && x + phraseRect.width + margin >= containerRect.width) {
            dx = 0;
            dy = 1;

            phrase.style.whiteSpace = 'pre';
            phrase.textContent = 't\ni\ng\ne\r\nh\na\nc\nk\ns';
        } else if (dy === 1 && y + phraseRect.height + margin >= containerRect.height) {
            dx = -1;
            dy = 0;
            phrase.style.whiteSpace = 'nowrap';
            phrase.textContent = 'tiger hacks';
        } else if (dx === -1 && x <= margin) {
            dx = 0;
            dy = -1;
            phrase.style.whiteSpace = 'nowrap';
            phrase.textContent = 'tiger hacks';
        } else if (dy === -1 && y <= margin) {
            dx = 1;
            dy = 0;
            phrase.style.whiteSpace = 'pre';
            phrase.textContent = 't\ni\ng\ne\r\nh\na\nc\nk\ns';
        }

        x += dx * speed;
        y += dy * speed;

        phrase.style.left = x + 'px';
        phrase.style.top = y + 'px';

        requestAnimationFrame(movePhrase);
    }

    movePhrase();
});
