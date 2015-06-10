function replaceTags(html) {
    html = html.replace(/a href/g, 'URL');
    html = html.replace(/<[/]a>/g, '</URL>');

    return html;
}

var text = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

console.log(replaceTags(text));