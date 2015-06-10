function substring(text, substr) {
    var counter = 0,
        i,
        j;

    text = text.toLowerCase();

    for (i = 0; i < text.length; i += 1) {
        if (text[i] === substr[0]) {
            for (j = 1; j + i < text.length; j += 1) {
                if (text[i + j] !== substr[j]) {
                    break;
                }
                if (j === substr.length - 1) {
                    counter += 1;
                    break;
                }
            }
        }
    }

    return substr + ' -> ' + counter;
}

var txt = 'We are living in an yellow submarine. We don"t have anything else. inside the submarine is very tight.So we are drinking all the day. We will move out of it in 5 days.',
    toSearch = 'in';
console.log(substring(txt, toSearch));