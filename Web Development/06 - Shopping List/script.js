const input = document.getElementById("input");
const addItem = document.querySelector('button.add-item');
const search = document.getElementById("filter");
let listItems = document.querySelectorAll('ul.list > li');
const list = document.querySelector('ul.list');
const clear = document.querySelector('div.clear');
const searchArea = document.querySelector('div.search-area');

function getList() {
    return listItems = document.querySelectorAll('ul.list > li');
}

function remove(element) {
    element.remove();
    if (getList().length < 3) {
        searchArea.classList.add("d-none");
        clear.classList.add("d-none");
    }
}

function addEvent(element) {
    let cancel = element.querySelector('i');
    element.addEventListener('mouseover', () => cancel.classList.remove('d-none'));
    element.addEventListener('mouseout', () => cancel.classList.add('d-none'));
    cancel.addEventListener('click', () => remove(element));
    element.addEventListener('dblclick', () => remove(element));
    if (getList().length > 2) {
        searchArea.classList.remove("d-none");
        clear.classList.remove("d-none");
        clear.addEventListener('click', () => {
            list.innerHTML = "";
            searchArea.classList.add("d-none");
            clear.classList.add("d-none");
        });
    }
}

function add() {
    if (input.value && input.value.trim() !== "") {
        let child = document.createElement('li');
        child.classList.add('item', 'p-2');
        child.innerHTML = `${input.value} <i class="las la-times text-danger d-none"></i>`
        list.appendChild(child);
        addEvent(child);
        input.value = "";
    }
    else {
        alert("type an item to add");
    }
}

addItem.addEventListener('click', add);

