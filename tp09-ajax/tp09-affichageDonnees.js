
// via la fonction, appel des données avec une méthode request//
function afficherDonnees() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://countriesnow.space/api/v0.1/countries/capital', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = req.responseText;

            console.log(req.responseText);

            let zoneAffichage = document.querySelector("#zoneAffichage");
            zoneAffichage.innerHTML = data;
        }
    }
    req.send();
}



