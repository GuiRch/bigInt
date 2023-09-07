import {exponentFirst, factorizeExponents} from './exponentFirst.js';
import {factorizeFormula} from "./factorize.js";
import {showExperiments} from "./bigInt.js";
import readline from 'readline';

// Créez une interface de lecture et d'écriture
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fonction principale
function main() {
  console.log("Sélectionnez une option :");
  console.log("1. Exécuter les fonctions de factorisation simple (2 exposants)");
  console.log("2. Exécuter les fonctions de factorisation multiple (n exposants)");
  console.log("3. Exécuter la fonction de factorisation d'une formule (string)");
  console.log("4. Afficher les expérimentations")
  console.log("5. Quitter");

  rl.question("Votre choix : ", (choice) => {
    switch (choice) {
      case '1':
        console.log("\n")
        console.log("Pour 100_001 * 10 ** 18 * 10 ** -17")
        console.log("Avec addition des exposants en premier : ", exponentFirst(100_001, 18, -17))
        console.log("Sans addition des exposants en premier : ", 100_001 * 10 ** 18 * 10 ** -17)
        console.log("Sans addition des exposants mais avec Math.pow()", 100001 * Math.pow(10, 18) * Math.pow(10, -17))
        console.log("La fonction exponent first nous donne bien le résultat exact pour l'opération")
        console.log("\n")

        console.log("Pour 100_001 * 10 ** 18 * 10 ** -25")
        console.log("Avec addition des exposants en premier : ", exponentFirst(100_001, 18, -25))
        console.log("Sans addition des exposants en premier : ", 100_001 * 10 ** 18 * 10 ** -25)
        console.log("\n")
        break;
      case '2':
        console.log("\n")
        console.log("Pour 100_001 * 10 ** 18 * 10 ** -17 * 10 ** 5 * 10 ** -7")
        console.log(factorizeExponents(100_001, [18, -17, 5, -7]))
        console.log(100_001 * 10 ** 18 * 10 ** -17 * 10 ** 5 * 10 ** -7)
        console.log("\n")
        break;
      case '3':
        console.log("\n")
        console.log("100001 * 10 ** 18 * 10 ** -17 = ", factorizeFormula("100001 * 10 ** 18 * 10 ** -17"));
        console.log("100001 * 10 ** 18 * 10 ** -17 * 10 ** -2 = ", factorizeFormula("100001 * 10 ** 18 * 10 ** -17 * 10 ** -2"));
        console.log("\n")
        break;
      case '4': 
        console.log("\n")
        console.log(showExperiments());
        console.log("\n")
      case '5':
        rl.close();
        return;
      default:
        console.log("Option invalide.");
    }

    main();
  });
}

main();








