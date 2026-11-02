function moyenneTab(tab) {
    try {
        if (!Array.isArray(tab)) {
            throw 'le paramètre doit être un tableau';
        }
    }
    catch (e) {
        console.log(e);
    }


    if (tab.length === 0) {
        let message = 0;
        return message;
    }

    let somme = 0;
    let moyenne;
    try {
        for (let i = 0; i < tab.length; i++) {
            if (typeof tab[i] !== "number") {
                throw 'votre tableau ne doit contenir que des nombres';
            }
            somme = somme + tab[i];
        }
    }
    catch (e) {
        console.log (e);
    }
    moyenne = somme / tab.length;
    return moyenne;
}


let tab1 = [2, 4, 6, 8];
let moyenneTab1 = moyenneTab(tab1);
console.log(moyenneTab1);

let tab2 = [];
let moyenneTab2 = moyenneTab(tab2);
console.log(moyenneTab2);

let tab3 = ("tableau");
let moyenneTab3 = moyenneTab(tab3);
console.log(moyenneTab3);

let tab4 = ["bonjour", "salut", "hello"];
let moyenneTab4 = moyenneTab(tab4);
console.log(moyenneTab4);


