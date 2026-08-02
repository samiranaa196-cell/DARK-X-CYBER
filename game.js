const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let player = {
    x: 180,
    y: 180,
    size: 40,
    speed: 5
};

let keys = {};

document.addEventListener("keydown", e => {
    keys[e.key] = true;
});

document.addEventListener("keyup", e => {
    keys[e.key] = false;
});

function update() {

    if(keys["ArrowUp"]) player.y -= player.speed;
    if(keys["ArrowDown"]) player.y += player.speed;
    if(keys["ArrowLeft"]) player.x -= player.speed;
    if(keys["ArrowRight"]) player.x += player.speed;

}

function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ff99";
    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );

}

function gameLoop(){
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
