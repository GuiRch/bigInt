export function factorizeFormula(formula) {
        const regex = /(\d+\.\d+|\d+|\*\*|-?\d+\.\d+|-?\d+)/g;
        const tokens = formula.match(regex);
        // console.log(tokens)
    
        if (!tokens) {
            console.error("La formule est invalide.");
            return;
        }
    
        let factors = [];
        let exponents = [];
        let isExponent = false;
    
        for (const token of tokens) {
            if (token === "**") {
                isExponent = true;
            } else if (isExponent) {
                exponents.push(parseFloat(token));
                isExponent = false;
            } else {
                factors.push(parseFloat(token));
            }
        }
        
        console.log(factors, exponents)

        let resultFactors = [];
        let currentFactor = factors[0];
        let currentExponent = 0;
    
        for (let i = 1; i < factors.length; i++) {
            if (exponents[i - 1] !== null) {
                currentExponent += exponents[i - 1];
            }
    
            if (factors[i] !== null) {
                currentFactor *= factors[i];
            }
    
            if (exponents[i] === null) {
                resultFactors.push(currentFactor + (currentExponent !== 0 ? ` * 10 ** ${currentExponent}` : ""));
                currentFactor = null;
                currentExponent = 0;
            }
        }
        
        if (currentFactor !== null) {
            resultFactors.push(currentFactor + (currentExponent !== 0 ? ` * 10 ** ${currentExponent}` : ""));
        }
        // console.log(resultFactors, currentFactor, currentExponent)
        // console.log(resultFactors.join(" * "))
        return resultFactors.join(" * ");
    }
      
    // const formula = "100001 * 10 ** 18 * 10 ** -17";
    // console.log(factorizeFormula(formula));


    