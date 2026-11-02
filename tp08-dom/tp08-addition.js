// on va chercher les éléments par leur id dans le HTML//
const a = document.querySelector("#nombre1");
const b = document.querySelector("#nombre2");
const resultatElement = document.querySelector("#resultat");
const errorElement = document.querySelector ("#error");

function additionner(){
    const numA = Number (a.value);
    const numB = Number (b.value);
    
    // on affiche un message d'erreur si la saisie ne correspond pas à des nombres//
    if (isNaN(numA) || isNaN(numB)) {
        errorElement.innerHTML = `Vous devez saisir uniquement des nombres`;
        resultatElement.innerHTML = "";
    }
    else {
        const resultat = numA + numB;
        resultatElement.innerHTML = `Le résultat de l'addition est : ${resultat}`;
        errorElement.innerHTML = "";
    }
}



