const fs = require('fs');
function Problem22() {

    let names = fs.readFileSync('./Sources/p022_names.txt','utf8').replaceAll('"','').split(',');
    names.sort();

    let sum = 0;

    for (let i = 0; i < names.length; i++) {
        sum += (i+1) * getAlphabetScore(names[i]);
    }

    return sum;

}

function getAlphabetScore(name) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += alphabet.indexOf(name.charAt(i))+1
    }
    return sum;
}

module.exports = {Problem22};