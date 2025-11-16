const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let drawing = false;
let currentColor = "#000000";
let size = 5;
let erasing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = erasing ? "white" : currentColor;
    ctx.beginPath();
    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, size, 0, Math.PI * 2);
    ctx.fill();
}

document.getElementById("clearBtn").onclick = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
};

document.getElementById("eraserBtn").onclick = () => {
    erasing = !erasing;
};

document.getElementById("colorBtn").onclick = () => {
    document.getElementById("colorPopup").style.display = "flex";
};

document.getElementById("closePopup").onclick = () => {
    document.getElementById("colorPopup").style.display = "none";
};

document.getElementById("colorPicker").oninput = (e) => {
    currentColor = e.target.value;
    erasing = false;
};

document.getElementById("sizePicker").oninput = (e) => {
    size = e.target.value;
};
