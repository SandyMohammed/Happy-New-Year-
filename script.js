const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight + 200;

ctx.translate(canvas.width / 2 , canvas.height / 2+13);
ctx.strokeStyle = "deeppink";
ctx.lineWidth = 1;

let i = 0;
  

function drawHeart() {
  if (i >= 360) return;

  ctx.beginPath();
  ctx.moveTo(0, 0);

  let x = 16 * Math.pow(Math.sin(i * Math.PI / 180), 3);
  let y =
    13 * Math.cos(i * Math.PI / 180) -
    5 * Math.cos(2 * i * Math.PI / 180) -
    2 * Math.cos(3 * i * Math.PI / 180) -
    Math.cos(4 * i * Math.PI / 180);

  ctx.lineTo(x * 8, -y * 8);
  ctx.stroke();

  i++;
  requestAnimationFrame(drawHeart);
}

drawHeart();
