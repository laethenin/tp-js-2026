let pays = [];
let sensTri = 0;

function afficherPays() {

    let req = new XMLHttpRequest();

    req.open("GET", "https://countriesnow.space/api/v0.1/countries/capital", true);

    req.send();

    req.onreadystatechange = function() {

        if (req.readyState == 4 && req.status == 200) {

            let data = JSON.parse(req.responseText);

            pays = data.data;

            afficherTableau();
        }
    };
}

function afficherTableau() {

    let affichage = "";

    for (let i = 0; i < pays.length; i++) {

        affichage += "<tr>";
        affichage += "<td>" + pays[i].name + "</td>";
        affichage += "<td>" + pays[i].capital + "</td>";
        affichage += "</tr>";
    }

    document.getElementById("resultat").innerHTML = affichage;
}

// cette partie a été faite avec l'aide d'une IA
function trierPays() {

    sensTri++;

    if (sensTri > 2) {
        sensTri = 1;
    }

    if (sensTri == 1) {

        pays.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

        document.querySelector("th span").innerHTML = "↑";

    } else {

        pays.sort(function(a, b) {
            return b.name.localeCompare(a.name);
        });

        document.querySelector("th span").innerHTML = "↓";
    }

    afficherTableau();
}