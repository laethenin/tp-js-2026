let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]; 

// affichage des valeurs du tableau supérieures à 3//
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3) {
        console.log (array[i]);
    }
}

console.log();

// affichage des valeurs paires//
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log (array[i]);
    }
}

console.log();

// affichage des valeurs dont l'index est pair//
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log (array[i]);
    }
}

console.log();

// affichage des valeurs impaires//
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log (array[i]);
    }
}