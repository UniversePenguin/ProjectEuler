const { sieveOfEratosthenes } = require("../utils");

function Problem10(max) {
    if (!max) max = 2000000;
    
    return sieveOfEratosthenes(max).reduce((x, y) => x+y);

}

module.exports = {Problem10};