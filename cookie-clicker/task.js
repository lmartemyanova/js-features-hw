const clickerCounter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');

img.onclick = () => {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1
    if (img.width === 200) {
        img.width += 20,
        img.height += 20
    } else {
        img.width -= 20,
        img.height -= 20
    }
};

