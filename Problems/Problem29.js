function Problem29() {

    let combs = new Set();

    for (let a = 2; a <= 100; a++) {
        for (let b = 2; b <= 100; b++) {

            combs.add(a ** b);

        }
    }

    return combs.size;

}

module.exports = {Problem29};