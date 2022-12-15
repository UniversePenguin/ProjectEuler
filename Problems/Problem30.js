function Problem30() {

    let power = 5;
    let possibilities = [];

    for (let i = 2; i < power * 9**power; i++) {

        let digits = i.toString().split('').map(x => parseInt(x));

        if (digits.map(x => x ** power).reduce((x,y) => x+y) == i) {
            possibilities.push(i);
        }

    }

    return possibilities.reduce((x,y) => x+y);
}

module.exports = {Problem30};