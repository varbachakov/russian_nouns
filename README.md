# Russian Nouns JS

A JavaScript function that declines nouns.

### PROPS

1. ***number*** - the number under which the noun is selected
2. ***words*** - an array of strings, necessarily consisting of 3 elements, which is a declension for numbers
```
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


Example:

const subscriberNoun = getNoun(5, ['подписчик', 'подписчика', 'подписчиков']);

console.log(`5 ${subscriberNoun}`); // 5 подписчиков
```
