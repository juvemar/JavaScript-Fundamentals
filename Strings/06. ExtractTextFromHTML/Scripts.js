function extractText(text) {
    text = text.replace(/<[^>]+>/g, '');

    return text;
}

var withTags = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
console.log(extractText(withTags));