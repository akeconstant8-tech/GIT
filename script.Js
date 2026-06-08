const boutonsPlus = document.querySelectorAll(".plus");
const boutonsMoins = document.querySelectorAll(".moins");
const boutonsSupprimer = document.querySelectorAll(".supprimer");
const boutonsCoeur = document.querySelectorAll(".coeur");

function calculerTotal() {
    let total = 0;

    const articles = document.querySelectorAll(".produit");

    articles.forEach(article => {
        const prix = parseInt(article.querySelector(".prix").textContent);
        const quantite = parseInt(article.querySelector(".quantite").textContent);

        total += prix * quantite;
    });

    document.getElementById("total").textContent = total;
}

// Boutons +
boutonsPlus.forEach(bouton => {
    bouton.addEventListener("click", function () {
        const quantite = this.parentElement.querySelector(".quantite");

        quantite.textContent = parseInt(quantite.textContent) + 1;

        calculerTotal();
    });
});

// Boutons -
boutonsMoins.forEach(bouton => {
    bouton.addEventListener("click", function () {
        const quantite = this.parentElement.querySelector(".quantite");

        if (parseInt(quantite.textContent) > 1) {
            quantite.textContent = parseInt(quantite.textContent) - 1;
        }

        calculerTotal();
    });
});

// Suppression d'un article
boutonsSupprimer.forEach(bouton => {
    bouton.addEventListener("click", function () {
        this.parentElement.remove();

        calculerTotal();
    });
});

// Bouton cœur
boutonsCoeur.forEach(bouton => {
    bouton.addEventListener("click", function () {
        this.classList.toggle("aime");
    });
});

// Calcul initial
calculerTotal();