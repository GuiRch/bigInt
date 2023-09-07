function combineExponents(inputList) {
    const result = {};
  
    inputList.forEach((item) => {
      const factor = item.factor;
      const exponent = parseFloat(item.exponent);
  
      if (!isNaN(exponent)) {
        if (!result[factor]) {
          result[factor] = exponent;
        } else {
          result[factor] += exponent;
        }
      }
    });
  
    const combinedList = [];
  
    for (const factor in result) {
      combinedList.push({ factor, exponent: result[factor] });
    }
  
    return combinedList;
  }

export function factorizeFormula(formula) {
        const regex = /(\d+\.\d+|\d+|\*\*|-?\d+\.\d+|-?\d+)/g;
        const tokens = formula.match(regex);
        const poly = [] // list of polynoms in the formula

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === '**') {
                const factor = tokens[i - 1];
                const exponent = tokens[i + 1];

                poly.push({"factor": factor,
                            "exponent" : exponent})

                if (factor !== undefined && exponent !== undefined) {
                tokens[i - 1] = ''; // Remplace l'élément précédent par un espace
                tokens[i] = '';     // Remplace '**' par un espace
                tokens[i + 1] = ''; // Remplace l'élément suivant par un espace
                }
            }
        }
        const removeSpacesFromTokens = tokens.filter(element => element !== ''); // filtre les espaces
        const produit = removeSpacesFromTokens.map(Number).reduce((acc, curr) => acc * curr, 1); // fais le produits des facteurs (non polynomiaux)
        
        const factorizedPoly = combineExponents(poly); // factorize the polynoms
        const productFactorizedPoly = factorizedPoly.reduce((acc, { factor, exponent }) => acc * (factor ** exponent), 1); // fais le produits des polynomes factorizé
        
        return produit * productFactorizedPoly // retourne le produit final
    }
      
const formula = "100001 * 10 ** 18 * 10 ** -17";
console.log(factorizeFormula(formula));
