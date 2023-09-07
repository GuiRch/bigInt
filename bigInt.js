export function showExperiments() {
    console.log("BigInt(100001 * 10 ** 18)", BigInt(100001 * 10 ** 18))
    console.log("100001 * 10 **18", 100001 * 10 **18)
    console.log("BigInt(100001 * 10 ** 18) == 100001 * 10 ** 18 :  ", BigInt(100001 * 10 ** 18) == 100001 * 10 ** 18)
    console.log("Des erreurs sont présentes dans le calcul de BigInt et l'égalité reste vraie")
    console.log("\n")
    
    console.log("1.00001e+23 == 100_001_000_000_000_000_000_000", 1.00001e+23 == 100_001_000_000_000_000_000_000)
    console.log("1.00001e+23 == 100_001_000_000_000_000_000_123", 1.00001e+23 == 100_001_000_000_000_000_000_123)
    console.log("Number.MAX_SAFE_INTEGER < 1.00001e+23", Number.MAX_SAFE_INTEGER < 1.00001e+23)
    console.log("Au delà de la limite MAX_SAFE_INTEGER les égalités sont toutes vraies")
    console.log("\n")
    
    console.log("parseInt(100_001_000_000_000_000_000) : ", parseInt(100_001_000_000_000_000_000))
    console.log("parseInt(100_001_000_000_000_000_0000) : ", parseInt(100_001_000_000_000_000_0000))
    console.log("parseFloat(100_001_000_000_000_000_0000) : ", parseFloat(100_001_000_000_000_000_0000))
    console.log("Il faut utiliser parseFloat pour les entier au delà de e+20 sinon ils sont égaux à 1")
    console.log("\n")
    
    
    console.log("10 ** -17 = ", 10 ** -17)
    console.log("0.000_000_000_000_000_01 == 10 ** -17", 0.000_000_000_000_000_01 == 10 ** -17)
    console.log("10 ** -19 = ", 10 ** -19)
    console.log("0.000_000_000_000_000_000_1 == 10 ** -19", 0.000_000_000_000_000_000_1 == 10 ** -19)
    console.log("10 ** -17 semble être une exception et 10 ** -18 et au delà sont calculés correctement")
    console.log("\n")
    
    console.log("pour 10 ** -19 parseFloat(\"0.000_000_000_000_000_000_1\") : ", parseFloat("0.000_000_000_000_000_000_1"))
    console.log("pour 10 ** -19 parseFloat(\"0.0000000000000000001\") : ", parseFloat("0.0000000000000000001"))
    console.log("pour 10 ** -17 parseFloat(\"0.00000000000000001\") :" , parseFloat("0.00000000000000001"))
    console.log("Passer par une string peut permettre de résoudre le problème de calcul des flotants")
}