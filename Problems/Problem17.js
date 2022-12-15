function numberToWords(n) {
    let str = n.toString();
    let dict = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    }

    let toReturn = undefined;

    if (Object.keys(dict).includes(str)) return dict[str];
    if (n == 1000) return 'one thousand';
    if (n == 100) return 'one hundred';
    if (n == 0) return '';

    if (str.length == 2) toReturn = `${dict[str.charAt(0) + '0']} ${dict[str.charAt(1)]}`;

    if (str.length == 3) toReturn = `${dict[str.charAt(0)]} hundred and ${(str.charAt(1) == '0' ? numberToWords(str.charAt(2)) : numberToWords(str.substr(1)))}`;

    if (str.charAt(1) == '0' && str.charAt(2) == '0') toReturn = toReturn.replace('and', '');

    return toReturn;

}

function Problem17() {
    let numbers = (Array.from({length:1000},(v,k)=>k+1)).map(x => numberToWords(x));
    numbers = numbers.map(x => x.replace(/ /g, '').length).reduce((x, y) => x+y);

    return numbers;

}

module.exports = {Problem17};