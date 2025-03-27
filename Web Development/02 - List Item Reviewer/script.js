let activeIndex = 0, handleButtonGrowth;
const itemNumber = document.querySelector("span.item-number");
const reviewedItem = document.querySelector("p.reviewed-item");
const btnPlus = document.querySelector("button.btn-plus");
const btnMinus = document.querySelector("button.btn-minus");
const list = document.querySelector("ul.list-container").children;

itemNumber.innerHTML = `Item ${activeIndex + 1}`;
reviewedItem.innerHTML = list[activeIndex].innerHTML;
highlight(activeIndex);
btnPlus.style.transition = "all .2s ease-in-out";
btnMinus.style.transition = "all .2s ease-in-out";


function highlight(itemIndex) {
    const listItems = [...list];
    listItems.map((item, index) => {
        if (itemIndex === index) {
            item.classList.toggle("text-danger");
        } else {
            item.classList.remove("text-danger");
        }
    })
}


btnPlus.addEventListener('click', (event) => {
    if (activeIndex < (list.length - 2)) {
        activeIndex++;
        itemNumber.innerHTML = `Item ${activeIndex + 1}`;
        reviewedItem.innerHTML = list[activeIndex].innerHTML;
    }
    else {
        activeIndex = list.length - 1;
        itemNumber.innerHTML = `Item ${list.length} is the last item on the list`;
        reviewedItem.innerHTML = list[activeIndex].innerHTML;
    }

    highlight(activeIndex);
    clearTimeout(handleButtonGrowth);
    event.target.style.transform = "scale(1.2)";
    handleButtonGrowth = setTimeout(() => {
        event.target.style.transform = "scale(1)";
    }, 200)
});

btnMinus.addEventListener('click', (event) => {
    if (activeIndex > 0) {
        activeIndex--;
        itemNumber.innerHTML = `Item ${activeIndex + 1}`;
        reviewedItem.innerHTML = list[activeIndex].innerHTML;
    }
    highlight(activeIndex);
    clearTimeout(handleButtonGrowth);
    event.target.style.transform = "scale(1.2)";
    handleButtonGrowth = setTimeout(() => {
        event.target.style.transform = "scale(1)";
    }, 200)
});

