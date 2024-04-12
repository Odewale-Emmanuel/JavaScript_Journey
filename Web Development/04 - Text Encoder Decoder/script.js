const shift = document.getElementById('shift')
const text = document.getElementById('text-field')
const output = document.querySelector('.output')

function encodeDecode() {
    const shiftValue = Number(shift.value)
    const input = text.value
    if (shiftValue >= -25 && shiftValue <= 25) {
        if (input) {
            const result = []

            for (let element of input) {
                const elementCode = element.charCodeAt()
                result.push(String.fromCharCode(elementCode + shiftValue))
            }
            output.innerHTML = result.join('')
        } else {
            output.innerHTML = 'output goes here'
        }
    }
    else {
        output.innerHTML = 'enter a valid shift range between -25 and +25'
    }

}

text.addEventListener('input', encodeDecode)
shift.addEventListener('change', encodeDecode)