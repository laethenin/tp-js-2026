let donneesNonFiltrees;
fetch('https://digicode.cleverapps.io/json/pays/pollution')
    .then(function (res) {
        return res.json();
    }
    )
    .then(json => {
        console.log(json);
        // cette méthode stringify je l'ai trouvé sur internet mais je la maitrise peu//
        // je bloquais car dès que j'avais fait un premier filtre//
        // mon tableau restait bloqué sur les données filtré et je ne pouvais//
        // pas faire un nouveau filtre//
        donneesNonFiltrees = JSON.parse(JSON.stringify(json));
        initialiserDonnees(json);
    });

function initialiserDonnees(data) {

    let titrePrincipal = document.querySelector("h1");
    let titreSecondaire = document.querySelector("h2");

    titrePrincipal.textContent = `Emissions de ${data.polluant} en ${data.unite}`;
    titreSecondaire.textContent = `Pays les plus pollueurs pour l'année ${data.annee}`;

    let corpsTableau = document.querySelector("tbody");
    corpsTableau.innerHTML = "";

    for (let i = 0; i < data.pays.length; i++) {
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

function filtrer() {
    let valeurMin = document.querySelector("#min");
    let valeurMax = document.querySelector("#max");
    let errorElement = document.querySelector("#erreur");

    let min = parseFloat(valeurMin.value);
    let max = parseFloat(valeurMax.value);

    if (isNaN(min)) min = 0;
    if (isNaN(max)) max = Number.MAX_VALUE;

    errorElement.textContent = "";

    if (min > max) {
        errorElement.textContent = "Veuillez saisir des nombres cohérents";
        return;
    }
    if (min < 0 || max < 0) {
        errorElement.textContent = "Veuillez saisir des valeurs positives";
        return;
    }

    let paysNonFiltres = donneesNonFiltrees.pays;
    let paysFiltres = paysNonFiltres.filter(p => p.valeur >= min && p.valeur <=max);
    let donneesFiltrees = {...donneesNonFiltrees, pays: paysFiltres};

    initialiserDonnees (donneesFiltrees);
}