const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

class Hero {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
   
    xDelta = 0;
    yDelta = 0;

    update () {
        this.x += this.xDelta;
        this.y += this.yDelta;
    }

    render () {
       const heroImg = document.createElement("img");
       heroImg.src = "https://e7.pngegg.com/pngimages/880/221/png-clipart-superhero-female-woman-people-cartoon.png";
       context.drawImage(heroImg, this.x, this.y,this.width,this.height)
    }

    goRight () {
        this.xDelta = 1;
    }

    goLeft () {
        this.xDelta = -1;
    }

    stop () {
        this.xDelta = 0;
    }
};

const data = {
    hero1: new Hero(10, 10, 70, 50)
}

function update () {
    (data.hero1.update());
}

function render () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    data.hero1.render();
}

function loop () {
    requestAnimationFrame(loop);
    update();
    render();
}

loop();

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight") {
        data.hero1.goRight();
    } else if (e.code === "ArrowLeft") {
        data.hero1.goLeft();
    }
}) 

document.addEventListener("keyup", (e) => {
    data.hero1.stop();
})