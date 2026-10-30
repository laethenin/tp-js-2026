let array = [0, 1, 2, 3];

// On sauvegarde le dernier élément
let dernier = array[array.length - 1];

// On décale les éléments vers la droite
for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
}

// On place le dernier élément au début
array[0] = dernier;

console.log(array);