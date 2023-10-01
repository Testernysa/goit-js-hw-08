
document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.querySelector("#controls input");
    const createButton = document.querySelector("[data-create]");
    const destroyButton = document.querySelector("[data-destroy]");
    const boxesContainer = document.querySelector("#boxes");

    function createBoxes(amount) {
        const boxes = [];
        let size = 30;

        for (let i = 0; i < amount; i++) {
            const box = document.createElement("div");
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            boxes.push(box);

            size += 10;
        }

        boxesContainer.append(...boxes);
    }

    function destroyBoxes() {
        boxesContainer.innerHTML = '';
    }

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
    }

    createButton.addEventListener("click", () => {
        const amount = parseInt(inputElement.value, 10);
        createBoxes(amount);
    });

    destroyButton.addEventListener("click", destroyBoxes);
});
