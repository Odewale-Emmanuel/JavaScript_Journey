const textField = document.getElementById('text-field');
const wordCount = document.querySelector('span.word-count');
const charCount = document.querySelector('span.character-count');

const countCHar = () => {
    const length = textField.value.length;
    if (length > 1) {
        charCount.innerHTML = `Characters: ${length}`;
    }
    else {
        charCount.innerHTML = `Characters: ${length}`;
    }
}

textField.addEventListener('input', countCHar);