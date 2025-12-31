
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
    ctx.translate(canvas.width / 2, canvas.height / 2 + canvas.height * 0.1); // رفع ديناميكي
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

ctx.strokeStyle = "deeppink";
ctx.lineWidth = 1;

let i = 0;

function drawHeart() {
    if (i >= 360) return;

    ctx.beginPath();
    ctx.moveTo(0, 0);

    let scale = Math.min(canvas.width, canvas.height) / 50; // حجم ديناميكي حسب الشاشة

    let x = 16 * Math.pow(Math.sin(i * Math.PI / 180), 3);
    let y = 13 * Math.cos(i * Math.PI / 180) - 5 * Math.cos(2 * i * Math.PI / 180) - 2 * Math.cos(3 * i * Math.PI / 180) - Math.cos(4 * i * Math.PI / 180);

    ctx.lineTo(x * scale, -y * scale);
    ctx.stroke();

    i++;
    requestAnimationFrame(drawHeart);
}

drawHeart();
