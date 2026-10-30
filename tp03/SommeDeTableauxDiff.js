let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];  
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];

// création d'un tableau vide//
let array3 = [];

// somme des 2 tableaux avec précision que parfois la valeur d'un des tableaux pour être égale à 0//
for (let i=0; i < array1.length; i++) {
    let valeur1 = (array1 [i]) || 0;
    let valeur2 = (array2 [i]) || 0;
    array3.push (valeur1 + valeur2);
}

console.log(array3);

