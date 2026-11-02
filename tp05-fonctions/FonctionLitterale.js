function fonctionLitterale(a, b) {
    return {
        "Somme": a + b,
        "Soustraction": a - b,
        "Multiplication": a * b,
        "Division": a / b
    };
}

let resultat = fonctionLitterale(10, 5);

console.log(resultat);

console.log(resultat.Somme);
console.log(resultat.Soustraction);
console.log(resultat.Multiplication);
console.log(resultat.Division); 