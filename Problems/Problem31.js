function Problem31() {

    let coins = [
        1,2,5,10,20,50,100,200
    ]

    let max = 200;

    let coinMax = []

    for (let key of Object.keys(coins)) {
        coinMax.push(Math.floor(max/coins[key]));
    }

    let answers = 0;

    let counters = [...coinMax].map(x => 0);

    while (counters[counters.length-1] < coinMax[coinMax.length-1]) {

        let string = counters.map(x => x.toString().padStart(3, '0')).join('-');

        console.log(string);

        let sum = 0;

        for (let i in counters) {

            sum += coins[i] * counters[i];

        }

        if (sum == max) answers++;

        for (let i in counters) {
            if (counters[i] < coinMax[i]) {
                counters[i]++;
                break;
            } else {
                counters[i] = 0;
            }
        }

    }

    return counters;

}

module.exports = {Problem31};