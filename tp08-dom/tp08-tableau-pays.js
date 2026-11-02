
function initialiserDonnees () {
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

    // modifie les contenus de h1 et h2//
    let titrePrincipal = document.querySelector("h1");
    let titreSecondaire = document.querySelector("h2");
    
    titrePrincipal.textContent = `Emissions de ${data.polluant} en ${data.unite}`;
    titreSecondaire.textContent = `Pays les plus pollueurs pour l'année ${data.annee}`;

    let corpsTableau = document.querySelector("tbody");
    // vide le tableau en cas d'ajout de nouvelles données//
    corpsTableau.innerHTML = "";

        for (i=0; i < data.pays.length; i++) {
            let infos = data.pays[i];
        
        // création d'une ligne et trois cases//
            let ligne = document.createElement ("tr");
            let caseNom = document.createElement ("td");
            let caseValeur = document.createElement ("td");
            let casePourcentage = document.createElement ("td");

            let image = document.createElement ("img");
            image.src = `https://flagcdn.com/24x18/${infos.code}.png`;
            caseNom.appendChild (image);
            caseNom.appendChild (document.createTextNode (infos.nom));
        
        // modification du contenu des cases//
            caseValeur.textContent = infos.valeur;
            casePourcentage.textContent = infos.pourcentage;
        
        // ajout des cases dans la ligne//
            ligne.appendChild (caseNom);
            ligne.appendChild (caseValeur);
            ligne.appendChild (casePourcentage);
          
        // ajout de la ligne au tableau//
            corpsTableau.appendChild (ligne);
        }
}


