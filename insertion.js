function insertionSort(arr) {
  // Parcourir tous les éléments à partir du deuxième (index 1)
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // L'élément à insérer
    let j = i - 1;

    // Déplacer les éléments plus grands que 'key' vers la droite
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Déplacer arr[j] vers arr[j + 1]
      j--;
    }
    // Insérer 'key' à sa position correcte
    arr[j + 1] = key;
  }
  return arr;
}

// Exemple d'utilisation
const tableau = [12, 11, 13, 5, 6];
console.log("Tableau avant le tri : ", tableau);
const tableauTrie = insertionSort(tableau);
console.log("Tableau après le tri : ", tableauTrie);
