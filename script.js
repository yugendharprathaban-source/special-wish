const message =
`You are someone who deserves all the happiness,
all the beautiful moments,
and all the reasons to smile.

May every new day bring something wonderful
into your life.

Keep being the amazing person you are. ❤️`;

let index = 0;

function typeMessage() {

    if (index < message.length) {

        document.getElementById("typing-text").innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(typeMessage, 35);
    }
}


/* Open Surprise */

function openSurprise() {

    document.querySelector(".memories")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(typeMessage, 800);
}


/* Final Surprise */

function celebrate() {

    document.getElementById("final-message").innerHTML =
        "You deserve a beautiful day & beautiful memories. ❤️";

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";
            heart.innerHTML = "♥";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (12 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 7000);

        }, i * 100);

    }

}


/* Random floating hearts */

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 1200);
