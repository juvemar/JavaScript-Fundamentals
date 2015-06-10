function wordOccurrences(text, word, casing) {
    var occurrences = 0,
        i,
        j;

    if (casing === 'insensitive') {
        text = text.toLowerCase();
        word = word.toLowerCase();
    }

    for (i = 0; i < text.length; i += 1) {
        if (text[i] === word[0]) {
            for (j = 1; j < word.length; j += 1) {
                if (text[i + j] !== word[j]) {
                    break;
                }
                if (j === word.length - 1) {
                    occurrences += 1;
                }
            }
        }
    }

    return "'" + word + "' exists " + occurrences + ' times in the text.';
}

var textSensitive = 'I am an ambitious ape on a summer camp.',
    textInsensitive = 'I am an ambitious ape on a sAmmer camp.',
    word = 'am';

console.log(wordOccurrences(textSensitive, word, 'sensitive'));
console.log(wordOccurrences(textInsensitive, word, 'insensitive'));