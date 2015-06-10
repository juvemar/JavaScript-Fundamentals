function extractEmails(text) {
    var emails,
        regex = /[\w\.]+@+[\w\.]+[\w]/g;

    emails = text.match(regex);

    return emails;
}

var text = 'My email is not sweety99@gmail.com, but his is cool_boy@gmail.com or sk8er.bad@abv.bg.';
console.log(extractEmails(text));