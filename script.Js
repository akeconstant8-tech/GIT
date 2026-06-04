const boutonsPlus = document.querySelectorAll(".plus");
const boutonsMoins = document.querySelectorAll(".moins");
const boutonsSupprimer = document.querySelectorAll(".supprimer");
const boutonsCoeur = document.querySelectorAll(".coeur");

function calculerTotal() {
    let total = 0;

    const articles = document.querySelectorAll(".article");

    articles.forEach(article => {
        let prix = parseInt(article.querySelector(".prix").textContent);
        let quantite = parseInt(article.querySelector(".quantite").textContent);

        total += prix * quantite;
    });

    document.getElementById("total").textContent = total;
}

boutonsPlus.forEach(bouton => {
    bouton.addEventListener("click", function() {
        let quantite = this.parentElement.querySelector(".quantite");
        quantite.textContent = parseInt(quantite.textContent) + 1;
        calculerTotal();
    });
});

boutonsMoins.forEach(bouton => {
    bouton.addEventListener("click", function() {
        let quantite = this.parentElement.querySelector(".quantite");

        if (parseInt(quantite.textContent) > 0) {
            quantite.textContent = parseInt(quantite.textContent) - 1;
        }

        calculerTotal();
    });
});

boutonsSupprimer.forEach(bouton => {
    bouton.addEventListener("click", function() {
        this.parentElement.remove();
        calculerTotal();
    });
});

boutonsCoeur.forEach(bouton => {
    bouton.addEventListener("click", function() {
        this.classList.toggle("aime");
    });
});

calculerTotal();