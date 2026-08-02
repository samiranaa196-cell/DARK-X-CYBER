const canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let player = {
  x: 180,
  y: 180,
  size: 40
};

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  requestAnimationFrame(draw);
}

draw();
