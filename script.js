const boxes = document.querySelectorAll(".box");

addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
};