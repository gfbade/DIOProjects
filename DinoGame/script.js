const dino = document.querySelector(".dino");
const background = document.querySelector("#background");
const gameOver = document.querySelector("#game-over");
let isJumping = false;
let position = 0;
let isGameOver = false;
let cactusTimeout;
let leftIntervalList = [];

dino.style.left = "100px"

begin();

function begin() {
    isJumping = false;
    position = 0;
    isGameOver = false;
    background.style.display = "block";
    gameOver.style.display = "none";
    leftIntervalList = [];
    createCactus();
}

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (isGameOver) {
            begin();
        } else if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            //Falling
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + "px"
                }
            }, 20);
        } else {
            //Jumping
            position += 20;
            dino.style.bottom = position + "px";
        }
    }, 20);
}

function createCactus() {
    if (isGameOver) return;

    const cactus = document.createElement("article");
    let cactusPosition = 1000;
    let randomTime = Math.random() * (6000 - 500) + 500;

    cactus.classList.add("cactus");
    cactus.style.left = cactusPosition + "px";
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            background.removeChild(cactus);
            clearInterval(leftInterval);
            const leftIntervalIndex = leftIntervalList.findIndex(o => o === leftInterval);
            leftIntervalList.splice(leftIntervalIndex, 1); //remove leftInterval
        } else if (cactusPosition > 100 && cactusPosition < 160 && position < 60) {
            //Game Over
            isGameOver = true;

            if (cactusTimeout) {
                clearTimeout(cactusTimeout);
            }

            for (let i = 0; i < leftIntervalList.length; i++) {
                clearInterval(leftIntervalList[i]);
            }
            const cactusList = document.querySelectorAll(".cactus");

            for (let i = 0; i < cactusList.length; i++) {
                background.removeChild(cactusList[i]);
            }

            background.style.display = "none";
            gameOver.style.display = "block";

        } else {
            cactusPosition -= 13;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);
    leftIntervalList.push(leftInterval);
    cactusTimeout = setTimeout(createCactus, randomTime);
}

document.addEventListener("keyup", handleKeyUp);