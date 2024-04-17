const textField = document.getElementById('text-field');
const wordCount = document.querySelector('span.word-count');
const charCount = document.querySelector('span.character-count');
const lowerCase = document.querySelector('button.lower-case');
const upperCase = document.querySelector('button.upper-case');
const copyToClipboard = document.querySelector('i.copy-to-clipboard');
const infoText = document.querySelector('p.info-text');

function countCHar() {
    const length = textField.value.length;

    if (length > 1) {
        charCount.innerHTML = `Characters: ${length}`;
    }
    else {
        charCount.innerHTML = `Character: ${length}`;
    }
}

function countWord() {
    const text = textField.value.split(" ");
    const words = text.filter(element => element !== "" && element !== " ").length;

    if (words > 1) {
        wordCount.innerHTML = `Words: ${words}`;
    }
    else {
        wordCount.innerHTML = `Word: ${words}`;
    }
}

function copy() {
    navigator.clipboard.writeText(textField.value)
        .then(() => {
            infoText.innerHTML = 'Text copied successfully to clipboard';
            infoText.classList.add('rounded', 'py-1', 'px-2', 'my-2', 'w-100', 'text-white', 'bg-success');
            infoText.style.visibility = 'visible';
        })
        .catch(error => {
            infoText.innerHTML = 'An error occurred while trying to copy text to clipboard';
            infoText.classList.add('rounded', 'py-1', 'px-2', 'my-2', 'w-100', 'text-white', 'bg-danger');
            infoText.style.visibility = 'visible';
        });

    setTimeout(() => {
        infoText.style.visibility = 'hidden';
    }, 3500);
}

textField.addEventListener('input', () => {
    countCHar();
    countWord();
});

lowerCase.addEventListener('click', () => {
    textField.value = textField.value.toLowerCase();
})

upperCase.addEventListener('click', () => {
    textField.value = textField.value.toUpperCase();
})

copyToClipboard.addEventListener('click', copy);