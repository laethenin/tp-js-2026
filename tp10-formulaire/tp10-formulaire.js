
let idCreateur = "Laetitia";

// CHARGER LES UTILISATEURS
function chargerUtilisateurs() {

    fetch("https://digicode.cleverapps.io/utilisateurs/" + idCreateur)
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            initialiserDonnees(json);
        })
        .catch(function (erreur) {
            console.log("Erreur lors du chargement :", erreur);
        });
}


// AFFICHER LES UTILISATEURS DANS LE TABLEAU
function initialiserDonnees(data) {

    let corpsTableau = document.querySelector("tbody");
    corpsTableau.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        let infos = data[i];

        let ligne = document.createElement("tr");
        let caseIdentifiant = document.createElement("td");
        let caseNom = document.createElement("td");
        let casePrenom = document.createElement("td");
        let caseDateDeNaissance = document.createElement("td");
        let caseLieuDeNaissance = document.createElement("td");
        let caseAdresse = document.createElement("td");
        let caseSuppression = document.createElement("td");
        let boutonSupprimer = document.createElement("button");

        caseIdentifiant.textContent = infos.id;
        caseNom.textContent = infos.nom;
        casePrenom.textContent = infos.prenom;
        caseDateDeNaissance.textContent = infos.dateNaissance;
        caseLieuDeNaissance.textContent = infos.lieuNaissance;

        caseAdresse.textContent =
            `${infos.numeroRue} ${infos.libelleRue}, ${infos.codePostal}, ${infos.ville}`;

        boutonSupprimer.textContent = "🗑️";

        boutonSupprimer.addEventListener("click", function () {
            supprimerUtilisateur(infos.id);
        });

        caseSuppression.appendChild(boutonSupprimer);

        ligne.appendChild(caseIdentifiant);
        ligne.appendChild(caseNom);
        ligne.appendChild(casePrenom);
        ligne.appendChild(caseDateDeNaissance);
        ligne.appendChild(caseLieuDeNaissance);
        ligne.appendChild(caseAdresse);
        ligne.appendChild(caseSuppression);

        corpsTableau.appendChild(ligne);
    }
}


// CREER UN UTILISATEUR
function creerUtilisateur() {

    let utilisateur = {
        id: null,
        idCreateur: idCreateur,
        dateMaj: null,
        nom: document.querySelector("#nom").value,
        prenom: document.querySelector("#prenom").value,
        genre: document.querySelector("#genre").value,
        dateNaissance: document.querySelector("#dateNaissance").value,
        lieuNaissance: document.querySelector("#lieuNaissance").value,
        departementNaissance: document.querySelector("#departementNaissance").value,
        numeroRue: document.querySelector("#numeroRue").value,
        libelleRue: document.querySelector("#libelleRue").value,
        codePostal: document.querySelector("#codePostal").value,
        ville: document.querySelector("#ville").value
    };

    fetch("https://digicode.cleverapps.io/utilisateurs/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(utilisateur)
    })
        .then(function (res) {
            return res.text().then(function (texte) {

                if (!res.ok) {
                    throw new Error(texte);
                }

                return texte;
            });
        })
        .then(function (texte) {
            alert(texte || "Utilisateur créé avec succès !");
            closeModale("modale1");
            chargerUtilisateurs();
        })
        .catch(function (erreur) {
            alert("Erreur lors de la création : " + erreur.message);
        });
}


// SUPPRIMER UN UTILISATEUR
function supprimerUtilisateur(id) {

    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {

        fetch("https://digicode.cleverapps.io/utilisateurs/" + idCreateur + "/" + id, {
            method: "DELETE"
        })
            .then(function (res) {
                return res.text().then(function (texte) {

                    if (!res.ok) {
                        throw new Error(texte);
                    }

                    return texte;
                });
            })
            .then(function (texte) {
                alert(texte || "Utilisateur supprimé avec succès !");
                chargerUtilisateurs();
            })
            .catch(function (erreur) {
                alert("Erreur lors de la suppression : " + erreur.message);
            });
    }
}


// CHARGEMENT INITIAL
chargerUtilisateurs();
