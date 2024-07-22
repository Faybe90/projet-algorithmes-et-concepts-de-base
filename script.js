function analyserPhrase(phrase) {
  // Initialiser les compteurs
  let compteurLongueur = 0;
  let compteurMots = 0;
  let compteurVoyelles = 0;

  // Définir les voyelles
  const voyelles = "aeiouAEIOU";

  // Initialiser un flag pour vérifier si nous sommes au début d'un mot
  let debutMot = true;

  // Lire chaque caractère de la phrase
  for (let i = 0; i < phrase.length; i++) {
    const caractere = phrase[i];

    // Arrêter si le caractère est un point ('.')
    if (caractere === ".") {
      break;
    }

    // Compter les caractères
    compteurLongueur++;

    // Compter les voyelles
    if (voyelles.includes(caractere)) {
      compteurVoyelles++;
    }

    // Compter les mots
    if (caractere === " ") {
      if (!debutMot) {
        compteurMots++;
        debutMot = true;
      }
    } else {
      debutMot = false;
    }
  }

  // Compter le dernier mot si la phrase ne se termine pas par un espace
  if (!debutMot) {
    compteurMots++;
  }

  // Retourner les résultats
  return {
    longueur: compteurLongueur,
    mots: compteurMots,
    voyelles: compteurVoyelles,
  };
}

// Exemple d'utilisation :
const phrase = "Ceci est une phrase exemple.";
const resultat = analyserPhrase(phrase);
console.log(`Longueur: ${resultat.longueur}`);
console.log(`Nombre de mots: ${resultat.mots}`);
console.log(`Nombre de voyelles: ${resultat.voyelles}`);
