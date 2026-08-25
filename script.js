const message =
`Hey ❤️

Indha website unakkaga mattum create pannadhu.

Namma rendu perum irruntha antha small small moments
 enakku romba pudikum.

Na therinjo theriyamaloo unnaku neraiya kastatha kuduthuruken but na enna pannalumee enna vitu pogama 
atha ellathaiyum thangitu enkudavee irruka ennakunu kedacha oru pokisam na athu nee mattum thaa unna eppothumee life la miss panna matten .

Na unnakaga enna mathikuren unnaku pudichavana maruren inimel unnaku entha kastamu varama na unna pathirama pathupen maa 

Nee un career la evaloo thooram poonalum seri i always keep supporting to you maa 
and i alway be with you 

lifelong nama happy ahh irruka pora antha moments namaku eppothumee special ahh irrukanum nama 
jolly ahh ella edathukum poi nalla oor suthanum 

ennaku nee eppothumee santhosama irrukanum dii thangoo 

love youu diii thangamylluuu 

Keep smiling always ❤️`;

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
