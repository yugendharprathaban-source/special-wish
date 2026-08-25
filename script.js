/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1500);

});


/* =========================
   START EXPERIENCE
========================= */

function startExperience() {

    document
        .querySelector(".intro-section")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(() => {

        startTyping();

    }, 1500);
}


/* =========================
   TYPING MESSAGE
========================= */

const message = `Hey ❤️

Indha website unakkaga mattum create pannadhu. Namma rendu perum irruntha antha small small moments enakku romba pudikum.
Na therinjo theriyamaloo unnaku neraiya kastatha kuduthuruken but na enna pannalumee enna vitu pogama atha ellathaiyum thangitu enkudavee irruka
ennakunu kedacha oru pokisam na athu nee mattum thaa unna eppothumee life la miss panna matten . 


Na unnakaga enna mathikuren unnaku pudichavana maruren
inimel unnaku entha kastamu varama na unna pathirama pathupen maa

Nee un career la evaloo thooram poonalum seri i always keep supporting to you maa and
i alway be with you lifelong nama happy ahh irruka pora antha moments namaku eppothumee special ahh irrukanum
nama jolly ahh ella edathukum poi nalla oor suthanum

ennaku nee eppothumee santhosama irrukanum dii thangoo 

love youu diii thangamylluuu

Keep smiling always ❤️`;

let letterIndex = 0;
let typingStarted = false;


function startTyping() {

    if (typingStarted) return;

    typingStarted = true;

    typeWriter();

}


function typeWriter() {

    const element =
        document.getElementById("message");

    if (letterIndex < message.length) {

        element.innerHTML +=
            message.charAt(letterIndex)
                .replace(/\n/g, "<br>");

        letterIndex++;

        setTimeout(typeWriter, 35);

    }

}


/* =========================
   FINAL SURPRISE
========================= */

function finalSurprise() {

    document
        .getElementById("finalMessage")
        .innerHTML =
        "You will always have a special place in my memories. ❤️";

    createHearts(70);

}


/* =========================
   HEART CREATOR
========================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.classList.add("heart");

            heart.innerHTML =
                Math.random() > .5
                ? "♥"
                : "♡";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (12 + Math.random() * 30) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            document
                .getElementById("hearts")
                .appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 7000);

        }, i * 80);

    }

}


/* =========================
   RANDOM HEARTS
========================= */

setInterval(() => {

    createHearts(1);

}, 1800);
