function _getNounNumber(number) {
    const n = Math.abs(number);
    const n100 = n % 100;

    if (n100 >= 5 && n100 <= 20) {
        return n100;
    }

    return n % 10;
}

export function getNoun(number, words) {
    const nounNumber = _getNounNumber(number);

    switch (nounNumber) {
        case 1:
            return words[0];
        case 2:
        case 3:
        case 4:
            return words[1];
        default:
            return words[2];
    }
}
