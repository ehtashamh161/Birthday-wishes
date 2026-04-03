let startBtn = document.getElementById("startBtn");
let gameArea = document.getElementById("gameArea");
let box = document.getElementById("box");
let msg = document.getElementById("message");
let timerDisplay = document.getElementById("timer");
let finalNote = document.getElementById("finalNote");

let friendName = " EHTASHAM HUSSAIN ";  // ← YAHAN SIRF NAAM CHANGE KARNA HAI ✅

let timeLeft = 10;
let timer;

/* CONFETTI */
function confettiBlast() {
    for (let i = 0; i < 50; i++) {
        let c = document.createElement("div");
        c.classList.add("confetti");
        c.style.left = Math.random() * window.innerWidth + "px";
        c.style.setProperty("--h", Math.random() * 360);
        c.style.animationDuration = (1 + Math.random() * 2) + "s";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}

/* HEARTS */
function floatingHearts() {
    for (let i = 0; i < 20; i++) {
        let h = document.createElement("div");
        h.classList.add("heart");
        h.textContent = "❤️";
        h.style.left = Math.random() * window.innerWidth + "px";
        h.style.top = window.innerHeight - 50 + "px";
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 3000);
    }
}

/* BALLOONS */
function floatingBalloons() {
    for (let i = 0; i < 30; i++) {
        let b = document.createElement("div");
        b.classList.add("balloon");
        b.textContent = "🎈";
        b.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(b);
        setTimeout(() => b.remove(), 6000);
    }
}

/* SPARKLES */
function glitter() {
    for (let i = 0; i < 20; i++) {
        let s = document.createElement("div");
        s.classList.add("sparkle");
        s.style.left = Math.random() * window.innerWidth + "px";
        s.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1500);
    }
}

/* START GAME */
startBtn.onclick = () => {
    document.getElementById("start-screen").classList.add("hidden");
    gameArea.classList.remove("hidden");

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            box.style.display = "none";

            msg.innerHTML = `
                ⏳ Wishing you joy on your special day!<br>
                🎂 Happy Birthday ${friendName}! 🎉
            `;
            msg.classList.remove("hidden");

            setTimeout(() => finalNote.classList.remove("hidden"), 2000);
        }
    }, 1000);
};

/* MOVE BOX */
box.addEventListener("mouseover", () => {
    // center position
    let centerX = (window.innerWidth / 2) - 75;   // 150px box → half = 75
    let centerY = (window.innerHeight / 2) - 75;

    // box ko center per le jao
    box.style.top = centerY + "px";
    box.style.left = centerX + "px";

    // phir thoda delay se random jagah move karo (optional smoothness)
    setTimeout(() => {
        box.style.top = Math.random() * (window.innerHeight - 150) + "px";
        box.style.left = Math.random() * (window.innerWidth - 150) + "px";
    }, 100);
});

/* CLICK WIN */
box.addEventListener("click", () => {
    clearInterval(timer);
    box.style.display = "none";

    confettiBlast();
    floatingHearts();
    floatingBalloons();
    glitter();

    msg.innerHTML = `
        🎉 Happy Birthday ${friendName}! 🎉<br>
        🎈 Wishing You a Wonderful Birthday
        🥳 On Your Special Day…! 💖
    `;
    msg.classList.remove("hidden");

    setTimeout(() => finalNote.classList.remove("hidden"), 2000);
});
