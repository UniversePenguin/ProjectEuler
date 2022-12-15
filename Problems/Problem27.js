const { sieveOfEratosthenes } = require("../utils");

function Problem27() {

    let primes = sieveOfEratosthenes(1000);

    let record = [0,0,0];

    for (let a = -999; a < 999; a++) {

        for (let i = 0; i < primes.length; i++) {

            let b = primes[i];

            let n = 0;

            while (primes.includes((n*n) + (a*n) + b)) {

                let result = (n*n) + (a*n) + b;

                if (!primes.includes(result))break;

                n++;
            }

            if (record[2] < n) {
                //console.log(`New Record found at a:${a} b:${b}, with ${n} consecutive primes.`);
                record = [a,b,n];
            }

        }

    }

    return record[0] * record[1];

}

module.exports = {Problem27};