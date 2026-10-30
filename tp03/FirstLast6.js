let array = [4, 8, 15, 16, 23, 46, 6];

// vérifie que le tableau n'est pas vide et que soit//
// la première valeur est égale à 6 ou//
// la dernière valeur est égale ou 6//
if ((array.length !== 0) && (array[0] === 6) || (array[array.length - 1] === 6)) {
    console.log('True');
}
else {
    console.log('False');
}