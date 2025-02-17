const niveaux = {
    facile: { max: 10, tentatives: 5 },
    moyen: { max: 50, tentatives: 7 },  // 'intermédiaire' changed to 'moyen'
    difficile: { max: 100, tentatives: 10 }
};

function random(max) {
    return Math.floor(Math.random() * max) + 1;
}

function demanderNombre(max) {
    let nombre;
    do {
        nombre = prompt(`Devinez un nombre entre 1 et ${max} :`);
        if (nombre === null) return null;
        nombre = Number(nombre); // Change parseInt to Number for better validation
    } while (isNaN(nombre) || nombre < 1 || nombre > max);
    return nombre;
}

function jouer(niveau) {
    const { max, tentatives } = niveaux[niveau];
    const nombreSecret = random(max);
    let essaisRestants = tentatives;

    while (essaisRestants > 0) {
        const choix = demanderNombre(max);
        if (choix === null) return; // Annulation

        if (choix === nombreSecret) {
            alert("Bravo, c'est le bon nombre !");
            return;
        }

        alert(choix > nombreSecret ? "Le nombre est inférieur !" : "Le nombre est supérieur !");
        essaisRestants--;
    }

    alert(`ÉCHEC :( Le nombre était ${nombreSecret}.`);
}

function lancerJeu(niveau) {
    jouer(niveau);
    if (confirm("Voulez-vous rejouer ?")) lancerJeu(niveau);
}
