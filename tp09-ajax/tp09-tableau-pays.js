// appel des données via le fetch avec un type de réponse "res.json"//
// pour avoir des données au format JSON (vu dans le cours "les différents//
// types de réponse")//
fetch('https://digicode.cleverapps.io/json/pays/pollution')
        .then(function (res) {
            return res.json();
        }
        )
        .then(function (json) {
            // j'affiche l'objet JSON dans ma console
            console.log(json);

            //j'appelle la fonction en lui donnant le JSON comme argument
            initialiserDonnees (json);
        }
        );

// cette partie là provient du tp08 correspondant//
function initialiserDonnees(data) {

    let titrePrincipal = document.querySelector("h1");
    let titreSecondaire = document.querySelector("h2");

    titrePrincipal.textContent = `Emissions de ${data.polluant} en ${data.unite}`;
    titreSecondaire.textContent = `Pays les plus pollueurs pour l'année ${data.annee}`;

    let corpsTableau = document.querySelector("tbody");
    corpsTableau.innerHTML = "";

    for (i = 0; i < data.pays.length; i++) {
        let infos = data.pays[i];

        let ligne = document.createElement("tr");
        let caseNom = document.createElement("td");
        let caseValeur = document.createElement("td");
        let casePourcentage = document.createElement("td");

        let image = document.createElement("img");
        image.src = `https://flagcdn.com/24x18/${infos.code}.png`;
        caseNom.appendChild(image);
        caseNom.appendChild(document.createTextNode(infos.nom));

        caseValeur.textContent = infos.valeur;
        casePourcentage.textContent = infos.pourcentage;

        ligne.appendChild(caseNom);
        ligne.appendChild(caseValeur);
        ligne.appendChild(casePourcentage);

        corpsTableau.appendChild(ligne);
    }
}
