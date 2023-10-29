document.querySelectorALL(".carousel").forEach(carousel => {
const items = carousel.querySelectorALL(".carouselitem");
const buttonsHtml = Array.from(items, () => {
    return '<span class="carouselbutton"><span>';
    })
});

carousel.insertAdjacentHTML("beforeend", '
    <div class="carouselnav">
        ${buttonsHtml.join("")}
    </div>
');

    const buttons = carousel.querySelectorAll(".carouselbutton");

    buttons.forEach(button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carouselitem-selected"));
            buttons.forEach(button => button.classList.remove(carouselbutton-selected));

            items[i].classList.add("carouselitem-selected");
            button.classList.add("carouselbutton-selcted");
        });
    });
});