let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// valeur max initialisée à la première valeur du tableau à laquelle seront comparées les autres//
let valeurMax = array [0];

// boucle pour comparer les valeurs qui donnera au final la plus grande valeur//
for (let i = 1; i < array.length; i++) {
    if (array[i] > valeurMax) {
        valeurMax = array[i];
    }
}

console.log(valeurMax);