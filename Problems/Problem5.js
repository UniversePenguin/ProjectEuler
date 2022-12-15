function primeFactorize(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

function multArray(input) {
    let x = 1;
    input.forEach(y => {
        x *= y;
    })
    return x;
}

function Problem5(max) {
    if (!max) max = 20;
    
    let primes = [2];

    for (let i = 3; i <= max; i++) {
        
        let flag = true;
        primes.forEach(x => {
            if (i % x == 0) {
                flag = false;
            }
        })

        if (flag) {
            primes.push(i);
        }

    }

    let numbersToMult = [];

    for (let i = 2; i <= max; i++) {

        numbersToMult = numbersToMult.concat(primeFactorize(i));

    }

    let uniquePrimes = [...new Set(numbersToMult)];

    let primeCounts = {};
    uniquePrimes.forEach(x => {
        
        let count = 1;
        
        while (Math.pow(x, count) < max) {
            count++;
        }
        primeCounts[x] = count-1;

    })

    let finalPrimes = [];
    Object.keys(primeCounts).forEach(x => {
        for (let i = 0; i < primeCounts[x]; i++) {
            finalPrimes.push(x);
        }
    })

    return multArray(finalPrimes);
}

module.exports = {Problem5};