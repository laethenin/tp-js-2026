function creerGestionnaire () {
    return {
        tableauTaches: [],

        ajouterTache: function (description, terminee) {
            let nouvelleTache = {
                description: description,
                terminee: false,
            }
            this.tableauTaches.push (nouvelleTache);
        },
        terminerTache: function (i) {
            if (0 <= i < this.tableauTaches.length - 1) {
                this.tableauTaches[i].terminee = true;
            }

        // il y a une erreur je pense car je voudrais que ma dernière tache soit marquée "false"
        // car non terminée, mais je récupère pour toutes "true"           
        },
        afficherTaches: function () {
            for (let i=0; i < this.tableauTaches.length; i++) {
                console.log (`${i}. ${this.tableauTaches[i].description}: ${this.tableauTaches[i].terminee}`);
            }
        }
    }
}

let tableau = creerGestionnaire ();

tableau.ajouterTache ("aspirer la moquette");
tableau.ajouterTache ("laver les vitres");
tableau.ajouterTache ("changer les draps");
tableau.ajouterTache ("faire la vaisselle");
tableau.terminerTache (0);
tableau.terminerTache (1);
tableau.terminerTache (2);
tableau.terminerTache (3);
tableau.afficherTaches();
