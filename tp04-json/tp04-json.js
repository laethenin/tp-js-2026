const societe = { "nom": "Google",
		        "siegeSocial": "Googleplex, Mountain View, California, United States",
		        "fondateurs": [
                    {"nom": "Larry Page", "dateDeNaissance": "26/03/197c3", "lieuDeNaissance": "East Lansing, Michigan"},
                    {"nom": "Sergey Brin", "dateDeNaissance": "21/08/1973", "lieuDeNaissance": "Moscou, Union Soviétique"}
                ],
		        "chiffreDaffaires": [
                    {"annee": 2008, "chiffreAffaires": 16.49},
                    {"annee": 2012, "chiffreAffaires": 37.97},
                    {"annee": 2016, "chiffreAffaires": 89.46},
                    {"annee": 2018, "chiffreAffaires": 136.2}
                ]
}

// affichage des fondateurs//
for (let i = 0; i < societe.fondateurs.length; i++) {
    console.log (""+societe.fondateurs[i].nom + " est l'un des deux fondateurs de Google.");
}

// affichage des chiffres d'affaires//
for (let i=0; i < societe.chiffreDaffaires.length; i++) {
    console.log ("Le chiffre d'affaires en " + societe.chiffreDaffaires[i].annee + " est de " + societe.chiffreDaffaires[i].chiffreAffaires + " milliards de dollars.");
}

