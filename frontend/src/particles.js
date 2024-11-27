let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray;
//mouse
let mouse = {
    x: null,
    y: null,
    radius: 40,
};
window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

//particle
class Particle {
    constructor(x, y, size, directionX, directionY, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.directionX = directionX;
        this.directionY = directionY;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle =this.color;
        ctx.fill();
    }

    update() {
        //check if the particle is still in the canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        //check collision detection with the mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.width - this.size * 10) {
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
            this.directionX = -this.directionX;
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }

}

function init() {
    particlesArray=[]
    let count = 2.5 * (canvas.width * canvas.height )/ 9000;
    for (let i = 0; i < count; i++) {
        let size = Math.random() * 1 + 2;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let directionX = Math.random() * 1 - 0.5;
        let directionY = Math.random() * 1 - 0.5;
        let color = "rgb(166, 148, 255)";
        particlesArray.push(new Particle(x, y, size, directionX, directionY, color));
    }
}

function connect() {
    let opacityValue = 1;
    let color = "166, 148, 255";
    let particlesArrayCount = particlesArray.length;
    for (let a = 0; a < particlesArrayCount; a++) {
        for (let b = 0; b < particlesArrayCount; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt((dx * dx) + (dy * dy));
            if (distance < canvas.width / 7) {
                opacityValue = 1 - (distance / 100);
                ctx.strokeStyle = `rgba(${color}, ${opacityValue})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();

}
window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = 50;
    init();
});
window.addEventListener("mouseleave", function () {
    mouse.x = null;
    mouse.y = null;
});


init();
animate();

