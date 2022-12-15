function Problem9() {
    let sets = [];

    for (let i = 1; i < 1000; i++) {
        for (let j = 1; j < 1000; j++) {
            sets.push([i, j]);
        }
    }

    sets = sets.filter(x => x[0] < x[1]);

    sets.forEach(x => {
        x[2] = Math.sqrt(x[0] * x[0] + x[1] * x[1]);
    })

    set = sets.find(x => x[0] + x[1] + x[2] == 1000);

    return set.reduce((x, y) => x*y);
}

module.exports = {Problem9};