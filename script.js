const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// 🎉 Confetti logic
let confetti = [];
for (let i = 0; i < 300; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 10,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of confetti) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    }
    update();
}

function update() {
    for (let p of confetti) {
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(p.d);
        if (p.y > canvas.height) {
            p.x = Math.random() * canvas.width;
            p.y = -10;
        }
    }
}

setInterval(draw, 33);
