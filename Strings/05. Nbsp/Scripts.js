function replaceWhite(text, nbsp) {
    text = text.replace(/ /g, '&nbsp;');

    return text;
}

var initialText = 'This is a text containing some whitespaces.';

console.log(replaceWhite(initialText));