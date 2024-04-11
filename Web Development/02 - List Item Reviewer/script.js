let next, previous;
next = 0;
const itemNumber = document.querySelector("span.item-number");
const reviewedItem = document.querySelector("p.reviewed-item");
const btnPlus = document.querySelector("button.btn-plus");
const btnMinus = document.querySelector("button.btn-minus");
const list = document.querySelector("ul.list-container").children;

itemNumber.innerHTML = `Item ${next + 1}`;
reviewedItem.innerHTML = list[next].innerHTML;

btnPlus.addEventListener('click', (event) => {
    if (next < (list.length - 2)) {
        next++;
        previous = next - 1;
        itemNumber.innerHTML = `Item ${next + 1}`;
        reviewedItem.innerHTML = list[next].innerHTML;
    }
    else {
        next = list.length - 1;
        itemNumber.innerHTML = `Item ${list.length} is the last item on the list`;
        reviewedItem.innerHTML = list[next].innerHTML;
        previous = next - 1;
    }
});

btnMinus.addEventListener('click', (event) => {
    if (previous >= 0) {
        next = previous + 1;
        itemNumber.innerHTML = `Item ${previous + 1}`;
        reviewedItem.innerHTML = list[previous].innerHTML;
        previous--;
    }

});

