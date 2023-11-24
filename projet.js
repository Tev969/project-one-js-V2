const prompt = require("prompt-sync")();

let myChoice = [];

let choice = prompt(
  "Voulez vous commencer une aventure ? Taper Oui ou Non et penser au majuscule au début de chaque réponses.  "
);
while (choice != "Oui" && choice != "Non") {
  choice = prompt("Voulez vous commencer une aventure ? Taper Oui ou Non   ");
}

switch (choice) {
  case "Oui":
    console.log("C'est parti");
    break;

  default:
    console.log("Dommage..");
    return;
}
myChoice.push(choice);

choice = prompt(
  "Vous arrivez devant une colline traverser le pont sur le droite ?  Ou le tunnel sous la Coline? Répondez Colline ou Pont. "
);
while (choice != "Colline" && choice != "Pont") {
  choice = prompt(
    "T'es con ? vérifie l'ortographe et choisis Colline , Pont  "
  );
}
switch (choice) {
  case "Colline":
    console.log(
      "Hélas pour vous l'aventure s'arrete deja.. Le monstre qui roder en dessous vous dévore.. ( Vous avez choisie colline ! )"
    );
    return;
  case "Pont":
    console.log("Pas si bête.. Continuons alors..");
    break;
  default:
}
myChoice.push(choice);

choice = prompt(
  "Vous avancez et vous retrouver face a un croissement sinistre ? Droite , Gauche"
);
while (choice != "Droite" && choice != "Gauche") {
  choice = prompt("Réesaie..");
}
switch (choice) {
  case "Droite ":
    console.log("Vous prenait a droite le chemin vous ramène a une clairière ");
    break;
  case "Gauche ":
    console.log(
      "Hum.. C'est vraiment pas ton jour de chance tu te prend les pied dans ton super zeub élastique et fait une chute mortel.. "
    );
  default:
    break;
}
myChoice.push(choice);

choice = prompt(
  "Une femme se trouve au millieu de la clairière et vous demande de l'aide ! la Tuer , la Sauver "
);
while (choice != "Tuer" && choice != "Sauver") {
  choice = prompt("Réesaie encore..");
}

switch (choice) {
  case "Tuer ":
    console.log(
      "Vous lui décapiter le crâne , vous aimez ça.. Grand sadique va.. (Tuer)"
    );
    break;
  case "Sauver ":
    console.log(
      "Elle marche avec vous pendant un moment avant de vous planter et vous dépouiller de vos testicules vous vous vider de votre sang. ."
    );
    return;
  default:
    break;
}

myChoice.push(choice);

choice = prompt(
  " Votre reflexe vous sauve la vie à l'heure actuel vous devez fuir vite Gauche ou Droite ?  "
);
while (choice != "Droite" && choice != "Gauche ") {
  choice = prompt("Réesaie encore imbécile.. ");
}

switch (choice) {
  case "Droite":
    console.log(
      "Vous vous réfugier dérrière le cul d'un âne la planque pas idéal  , IL VOUS CHIE DESSUS  !"
    );
    return;
  case "Gauche ":
    console.log(
      "Vous prenez la direction de la foret sombre du bois puant.. YOU WIN"
    );
    return;
  default:
    break;
}

console.log("Bravo à vous , voice un résumé de vos choix !");
myChoice.push(choice);

myChoice.push(choice);
console.log(myChoice);
