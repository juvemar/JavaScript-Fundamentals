function parse(txt) {
    var i,
        openTag,
        closeTag,
        tag,
        subStr;
    for (i = 0; i < txt.length; i += 1) {
        if (txt[i] === '/') {
            tag = txt[i + 1];
            closeTag = i - 1;
            subStr = txt.substring(0, i - 2);
            openTag = subStr.lastIndexOf('>');
            subStr = subStr.substring(openTag, i - 2);
            switch (tag) {
                case 'u':
                    subStr = subStr.toUpperCase();
                    txt.splice(i - 1, 9);
                    txt.splice(openTag - 8, openTag);
                    break;
                case 'l':
                    subStr = subStr.toLowerCase();
                    txt.splice(i - 1, 10);
                    txt.splice(openTag - 9, openTag);
                    break;
                case 'm':
                    subStr = mixIt(subStr);
                    txt.splice(i - 1, 10);
                    txt.splice(openTag - 9, openTag);
                    break;
            }
        }
    }

    return txt;
}

function mixIt(str) {
    if (!str) {
        return str;
    }

    var i,
        isUpper;

    for (i = 0; i < str.length; i += 1) {
        if (str[i].match(/[A - z]/) !== null) {
            isUpper = randomBoolean();
            if (isUpper === 1) {
                str[i] = str[i].toUpperCase();
            } else {
                str[i] = str[i].toLowerCase();
            }
        }
    }
}

function randomBoolean() {
    return Math.floor((Math.random() * 2) + 1);
}

var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';

console.log(parse(text));