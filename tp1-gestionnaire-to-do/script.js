function ajouterTache() {
    let name = document.getElementById("todoName").value.trim();
    let content = document.getElementById("todoContent").value.trim();

    if (name === "" || content === "") {
        alert("Veuillez remplir les deux champs.");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `<span>${name} : ${content}</span> <i class="fa-solid fa-trash-can" onclick="supprimerTache(this)"></i>`;

    // couleur random pour chaque click
    li.addEventListener("click", () => changerCouleur(li));

    document.getElementById("todoList").appendChild(li);


    document.getElementById("todoName").value = "";
    document.getElementById("todoContent").value = "";
}

function supprimerTache(element) {
    element.parentElement.remove();
}

function changerCouleur(element) {
    const couleurs = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC300", "#DAF7A6"];
    let couleurAleatoire = couleurs[Math.floor(Math.random()* couleurs.length)];
    element.style.backgroundColor = couleurAleatoire;
}
