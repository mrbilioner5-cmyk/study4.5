
// 1. Счётчик

let count = 0;

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener("click", function() {
    count++;
    counter.innerText = count;
    counter.style.color = "green";
});

decrement.addEventListener("click", function() {
    if (count > 0) {
        count--;
    }

    counter.innerText = count;
    counter.style.color = "red";
});


// 2. Координаты мыши

const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mousemove", function(event) {
    let rect = mouseBox.getBoundingClientRect();

    let x = Math.floor(event.clientX - rect.left);
    let y = Math.floor(event.clientY - rect.top);

    mouseBox.innerText = "x: " + x + ", y: " + y;
});


// 3. Изменение цвета фона

const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("input", function() {
    document.body.style.backgroundColor = colorInput.value;
});
