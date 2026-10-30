let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Afficher tous les éléments du tableau
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// pour séparer les affichages//
console.log ()

// Afficher les éléments dans l'ordre inverse
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// pour séparer les affichages//
console.log ()

// Copier le tableau array dans arrayCopy
let arrayCopy = [];

for (let i = 0; i < array.length; i++) {
    arrayCopy[i] = array[i];
}

console.log(arrayCopy);