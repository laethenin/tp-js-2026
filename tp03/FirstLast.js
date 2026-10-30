let array = [4, 8, 15, 16, 23, 46, 6];

// vérifie que le tableau n'est pas vide et que //
// la première valeur est égale à la dernière valeur //
if ((array.length >= 1) && (array[0] === array[array.length -1])) {
    console.log('True');
}
else {
    console.log('False');
}