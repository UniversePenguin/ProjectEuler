function Problem3(start) {
    if (!start) start = 600851475143;

    let primes = [2];

    let startArray =[];

    for (let i = 3; i < start; i++) {

        let flag = true;

        primes.forEach(x => {
            if (i % x == 0) {
                flag = false;
            }
        })

        if (flag) {
            primes.push(i);
            if (start % i == 0) {
                start /= i;
            }
        }

        startArray.push(start);

    }

    return Math.min(...startArray);
}

module.exports = {Problem3};