```javascript
// ======================================
// QUIZ — MISSÃO IA
// ======================================

function checkAnswer(correct) {

    const result = document.getElementById("result");

    if (correct) {

        result.innerHTML =
            "🎉 Parabéns! Você concluiu essa etapa da missão!";

        result.style.color = "#5a3023";

    } else {

        result.innerHTML =
            "🤔 Quase! Volte à linha do tempo e tente novamente.";

        result.style.color = "#a85d43";
    }
}


// ======================================
// EFEITO DE APARECIMENTO AO ROLAR
// ======================================

const elementos = document.querySelectorAll(
    ".timeline-card, .card, .method, .step"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition = "all 0.6s ease";

    observer.observe(elemento);

});


// ======================================
// MENU — DESTAQUE DA SEÇÃO
// ======================================

const secoes = document.querySelectorAll("section");
const linksMenu = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach((secao) => {

        const topo = secao.offsetTop - 150;

        if (window.scrollY >= topo) {
            secaoAtual = secao.getAttribute("id");
        }

    });

    linksMenu.forEach((link) => {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.style.color = "#d6a15d";
        }

    });

});
```
