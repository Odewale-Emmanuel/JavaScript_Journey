let counter = 0;
const body = document.body;
const clickWord = document.querySelector('.click');
const tracker = document.querySelector('.track-count');

function clickIncrement() {
    counter++;
    if (counter > 1) {
        clickWord.innerHTML = "clicks";
        tracker.innerHTML = counter;
    }
    else {
        tracker.innerHTML = counter;
    }
}

body.addEventListener('click', clickIncrement);
