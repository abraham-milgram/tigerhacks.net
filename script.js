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
        if (dx === 1 && x + phraseRect.width + margin >= containerRect.width) {
            dx = 0;
            dy = 1;
        } else if (dy === 1 && y + phraseRect.height + margin >= containerRect.height) {
            dx = -1;
            dy = 0;
        } else if (dx === -1 && x <= margin) {
            dx = 0;
            dy = -1;
        } else if (dy === -1 && y <= margin) {
            dx = 1;
            dy = 0;
        }
        x += dx * speed;
        y += dy * speed;
        phrase.style.left = x + 'px';
        phrase.style.top = y + 'px';
        requestAnimationFrame(movePhrase);
    }

    movePhrase();
});
