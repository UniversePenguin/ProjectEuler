function Problem7() {
    let primes = [2];

    let counter = 3;

    while (true) {
        let flag = true;

        primes.forEach(x => {
            if (counter % x == 0) {
                flag = false;
            }
        })

        if (flag) {
            primes.push(counter);
        }

        if (primes.length == 10001) {
            break;
        }

        counter++;

    }

    return primes.pop();
}

module.exports = {Problem7};