let {sieveOfEratosthenes} = require('../utils.js');
function Problem51() {

    let primes = sieveOfEratosthenes(10 ** 8);

    return primes;

}

module.exports = {Problem51};