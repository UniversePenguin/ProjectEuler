let possibleCoins = [1,2,5,10,20,50,100,200];

function Problem312() {
    let max = 200;

    let coins = possibleCoins;

    let decomposeMap = {};

    decomposeMap[coins[0]] = decompose(coins[0], [coins[0]]);

    for (let i = 1; i < coins.length; i++) {
        decomposeMap[coins[i]] = decompose(coins[i], coins.slice(0, i));
    }

    let answers = generateStarters(max, coins);

    let searching = [...answers];

    while (searching.length > 0) {

        let temp = [];

        console.log(searching.length);

        for (let i = 0; i < searching.length; i++) {

            let relevantCoins = Object.keys(searching[i]).filter(x => searching[i][x] && x > coins[0]);

            for (let c of relevantCoins) {

                let possibility = combineMaps(searching[i], decomposeMap[c]);

                if (!inAnswers(possibility, answers)) {
                    answers.push(possibility);
                    temp.push(possibility);
                }

            }

        }

        searching = [...temp];

        

    }

    return answers.length;
}

function arrayToMap(arr) {
    let toReturn = {};

    for (i in possibleCoins) {
        toReturn[possibleCoins[i]] = arr[i];
    }

    return toReturn;
}

function coinListToMap(arr) {

    (toReturn = []).length = possibleCoins.length; toReturn.fill(0);

    toReturn = arrayToMap(toReturn, possibleCoins);

    for (c of arr) {

        toReturn[c]++;

    }

    return toReturn;

}

function decompose(max, coins) {

    coins = coins.sort((b,a) => a-b);

    let toReturn = [];
    let sum = 0;

    while (sum < max) {
        let biggestFit = coins.find(x => x <= max-sum);
        toReturn.push(biggestFit);
        sum += biggestFit;
    }

    let map = coinListToMap(toReturn, possibleCoins);

    map[max] -= 1;

    return map;

}

function removeNegatives(m) {

    let toReturn = {};

    for (let key of Object.keys(m)) {

        toReturn[key] = (m[key] < 0 ? 0 : m[key]);

    }

    return toReturn;

}

function generateStarters(max, coins) {

    let answers = [];
    for (let coin of coins.filter(x => x <= max)) {
        answers.push(removeNegatives(decompose(max, coins.slice(0, coins.indexOf(coin)+1))));
    }

    answers[answers.length-1][max] = 1;

    return answers;

}

function combineMaps(m1, m2) {

    let toReturn = {};

    for (let key of Object.keys(m1)) {
        toReturn[key] = m1[key] + m2[key];
    }

    return toReturn;

}

function checkMatching(m1, m2) {

    for (let key of Object.keys(m1)) {

        if (m1[key] != m2[key]) return false;

    }

    return true;

}

function inAnswers(entry, answers) {

    for (let answer of answers) {

        if (checkMatching(entry, answer)) return true;

    }

    return false;

}

module.exports = {Problem312};