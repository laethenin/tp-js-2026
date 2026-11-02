const a = document.querySelector("#nombre1");
const b = document.querySelector("#nombre2");
const operateur = document.querySelector("#operateur");
const resultatElement = document.querySelector("#resultat");
const errorElement = document.querySelector ("#error");


function lancerOperation () {
    const numA = Number(a.value);
    const numB = Number(b.value);

    // vide le contenu entre chaque appel
    resultatElement.innerHTML = "";
    errorElement.innerHTML = "";
    
    // vérifie que les saisies sont des nombres//
    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        errorElement.innerHTML = `Vous devez saisir uniquement des nombres`;
        return;
    }

    // vérifie pour la division qu'elle soit possible//
    if (operateur.value === "/" && numB === 0) {
        errorElement.innerHTML = `Division par zéro impossible`;
        return;
    }

    // condition en fonction du type d'opérateur//
    switch(operateur.value) {
        case "+" :
            resultat = numA + numB;
            resultatElement.innerHTML = `Le résultat de l'addition est : ${resultat}`;
            break ;
        case "-":
            resultat = numA - numB;
            resultatElement.innerHTML = `Le résultat de la soustraction est : ${resultat}`;
            break;
        case "*":
            resultat = numA * numB;
            resultatElement.innerHTML = `Le résultat de la multiplication est : ${resultat}`;
            break;
        case "/":
            resultat = numA / numB;
            resultatElement.innerHTML = `Le résultat de la division est : ${resultat}`;
            break;
    }
}


  
   
  