function afficherPaysInfos() {

    let req = new XMLHttpRequest();

    req.open("GET", "https://countriesnow.space/api/v0.1/countries/capital", true);

    req.send();

    req.onreadystatechange = function() {

        if (req.readyState == 4 && req.status == 200) {

            let data = JSON.parse(req.responseText);

            for (let i = 0; i < data.data.length; i++) {

                let nomPays = data.data[i].name;
                let capitale = data.data[i].capital;

                document.getElementById("resultat").innerHTML +=
                    nomPays + " - " + capitale + "<br>";

            }
        }
    };
}