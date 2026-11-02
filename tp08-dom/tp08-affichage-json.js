function initialiserDonnees () {
    // données sous forme d'objet JSON//
    let data = {
        "polluant": "CO2",
        "unite": "milliards de tonnes",
        "annee": 2017,
        "pays": [{ "nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn" },
        { "nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us" },
        { "nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in" },
        { "nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru" },
        { "nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp" },
        { "nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de" },
        { "nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr" },
        { "nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir" },
        { "nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca" }]
    }

    // sélections des éléments h1 et h2 pour les modifier//
    let titrePrincipal = document.querySelector("h1");
    let titreSecondaire = document.querySelector("h2");
    
    // change le texte dans les éléments//
    titrePrincipal.textContent = `Emissions de ${data.polluant} en ${data.unite}`;
    titreSecondaire.textContent = `Relevés de l'année ${data.annee}`;

    let span = document.querySelector("span");
    let infosPays = "" ;

    // boucle pour récupérer les infos de chaque pays//
    for (i=0; i < data.pays.length; i++) {
        let infos = data.pays[i];
        infosPays += `${infos.nom} : ${infos.valeur} ${data.unite}, ${infos.pourcentage} % (pourcentage mondial).<br>`;
    }

    // change la span pour afficher les résultats de la boucle//
    span.innerHTML = infosPays;
}