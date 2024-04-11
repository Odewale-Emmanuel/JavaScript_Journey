const body = document.body;
const hexCode = document.querySelector('span.hexcode');

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const length = hexValues.length;

function changeBG() {
    const v1 = hexValues[Math.floor(Math.random() * length)];
    const v2 = hexValues[Math.floor(Math.random() * length)];
    const v3 = hexValues[Math.floor(Math.random() * length)];
    const v4 = hexValues[Math.floor(Math.random() * length)];
    const v5 = hexValues[Math.floor(Math.random() * length)];
    const v6 = hexValues[Math.floor(Math.random() * length)];

    body.style.backgroundColor = `#${v1}${v2}${v3}${v4}${v5}${v6}`;
    hexCode.innerHTML = `#${v1}${v2}${v3}${v4}${v5}${v6}`;
}
setTimeout(changeBG, 0);
setInterval(changeBG, 3000);
body.addEventListener('click', changeBG);