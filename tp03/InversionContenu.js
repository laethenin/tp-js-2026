let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Créer un tableau vide
let arrayCopy = [];

// Copier les éléments dans l'ordre inverse
for (let i = 0; i < array.length; i++) {
    arrayCopy[i] = array[array.length - 1 - i];
}

// Afficher les deux tableaux
console.log("Tableau original :", array);
console.log("Tableau inversé :", arrayCopy);