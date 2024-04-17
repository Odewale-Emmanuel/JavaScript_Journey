const shift = document.getElementById('shift');
const text = document.getElementById('text-field');
const output = document.querySelector('.output');
const copyToClipboard = document.querySelector('i.copy-to-clipboard');
const infoText = document.querySelector('p.info-text');


function encodeDecode() {
    const shiftValue = Number(shift.value)
    const input = text.value;
    if (shiftValue >= -25 && shiftValue <= 25) {
        if (input) {
            const result = [];

            for (let element of input) {
                const elementCode = element.charCodeAt();
                result.push(String.fromCharCode(elementCode + shiftValue));
            }
            output.innerHTML = result.join('');
        } else {
            output.innerHTML = 'output goes here';
        }
    }
    else {
        output.innerHTML = 'enter a valid shift range between -25 and +25';
    }

}

function copy() {
    navigator.clipboard.writeText(output.innerHTML)
        .then(() => {
            infoText.innerHTML = 'Text copied successfully to clipboard';
            infoText.classList.add('rounded', 'py-1', 'px-2', 'my-2', 'w-100', 'text-white', 'bg-success');
            infoText.style.display = 'block';
        })
        .catch(error => {
            infoText.innerHTML = 'An error occurred while trying to copy text to clipboard';
            infoText.classList.add('rounded', 'py-1', 'px-2', 'my-2', 'w-100', 'text-white', 'bg-danger');
            infoText.style.display = 'block';
        });

    setTimeout(() => {
        infoText.style.display = 'none';
    }, 3500);
}


text.addEventListener('input', encodeDecode);
shift.addEventListener('change', encodeDecode);
copyToClipboard.addEventListener('click', copy);