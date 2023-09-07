// console.log(100_001 * 10 ** 18 * 10 ** -17)
// console.log(100_001 * 10 ** 18 * 10 ** -15)
// console.log(100_001 * 10 ** 18 * 10 ** -14)
// L'erreur semble apparaitre au delà de 10 ** -14


// 1ère idée : calculer la somme en commençant par additioner les exposants
// a * 10 ** expA * 10 ** expB = a * 10 ** (expA + expB)

// Fontion de base pour une formule mathématique avec 2 exposants
export function exponentFirst(a, expA, expB) {
    return (a * 10 ** (expA + expB))
}

console.log("Pour 100_001 * 10 ** 18 * 10 ** -17")
console.log("Avec addition des exposants en premier : ", exponentFirst(100_001, 18, -17))
console.log("Sans addition des exposants en premier : ", 100_001 * 10 ** 18 * 10 ** -17)
console.log("Sans addition des exposants mais avec Math.pow()", 100001 * Math.pow(10, 18) * Math.pow(10, -17))
// La fonction exponentFirst nous donne le resultat exact pour cette multiplication

console.log("Pour 100_001 * 10 ** 18 * 10 ** -25")
console.log("Avec addition des exposants en premier : ", exponentFirst(100_001, 18, -25))
console.log("Sans addition des exposants en premier : ", 100_001 * 10 ** 18 * 10 ** -25)

// Ce qu'on peut retenir de ce résultat c'est qu'il est nécéssaire de factoriser les formules pour obtenir un résultat exact
// Cette fonction permet de faire la multiplication de plus de 2 puissance de 10
export function factorizeExponents(a, exponents) {
    let sum = 0;
    for (const exponent of exponents) {
        sum += exponent;
    }
    return (a * 10 ** sum)
}