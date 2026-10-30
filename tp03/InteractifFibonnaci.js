let Nmoins2 = 0
let Nmoins1 = 1

for (i=1; i<=10; i++) {
    let N = Nmoins2 + Nmoins1 ;
    Nmoins2 = Nmoins1;
    Nmoins1 = N; 
    console.log (N);
}

