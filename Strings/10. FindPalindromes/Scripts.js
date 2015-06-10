function extractPalins(text) {
    var i,
        j,
        currentWord,
        result = '';

    text = text.split(/[\s,\.]+/);

    for (i = 0; i < text.length; i += 1) {
        currentWord = text[i];
        var halfLength = Math.floor(currentWord.length / 2);
        for (j = 0; j < halfLength; j += 1) {
            if (currentWord[j] !== currentWord[currentWord.length - 1 - j]) {
                break;
            }
            if (j === halfLength - 1) {
                result += currentWord + '\n';
                break;
            }
        }
    }

    return result;
}

var text = 'Almost finished. Let\'s find some palindromes now: anna, exe, potop.';

console.log(extractPalins(text));