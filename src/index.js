const humanReadable = [
    ['zero', 'ten', ''],
    ['one', 'eleven', ''],
    ['two', 'twelve', 'twenty'],
    ['three', 'thirteen', 'thirty'],
    ['four', 'fourteen', 'forty'],
    ['five', 'fifteen', 'fifty'],
    ['six', 'sixteen', 'sixty'],
    ['seven', 'seventeen', 'seventy'],
    ['eight', 'eighteen', 'eighty'],
    ['nine', 'nineteen', 'ninety'],
];

module.exports = function toReadable(number) {
    if (number < 10) {
        return humanReadable[number][0];
    }
    let result = '';
    let analizedNumber = number;
    let hundreds = Math.floor(analizedNumber / 100);
    if (hundreds > 0) {
        result += humanReadable[hundreds][0] + ' hundred ';
        analizedNumber = analizedNumber % 100;
    }

    let decades = Math.floor(analizedNumber / 10);
    let simples = analizedNumber % 10;
    if (decades == 1) {
        result += humanReadable[simples][1];
    } else {
        result += humanReadable[decades][2];
        if (simples != 0) {
            result = result.trimEnd() + ' ' + humanReadable[simples][0];
        }
    }
    return result.trimEnd();
}
