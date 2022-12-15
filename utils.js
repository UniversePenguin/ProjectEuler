var sieveOfEratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

function mySieve(n) {
    let object = {}, upperLimit = Math.sqrt(n), output = [];

    for (let i = 0; i < n; i++) {
        object[i] = true;
    }

    for (let i = 2; i <= upperLimit; i++) {
        if (object[i]) {
            for (let j = i * i; j < n; j += i) {
                object[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (object[i]) {
            output.push(i);
        }
    }

    return output;
}

module.exports = {
    sieveOfEratosthenes,
    mySieve
}