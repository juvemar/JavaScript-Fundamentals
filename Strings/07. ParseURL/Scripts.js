function urlInfo(url) {
    var protocol,
        endProtocol,
        server,
        endServer,
        resource,
        jsnObject;

    endProtocol = url.indexOf('://');
    protocol = url.substring(0, endProtocol);

    endServer = url.indexOf('/', endProtocol + 3);
    server = url.substring(endProtocol + 3, endServer);

    resource = url.substring(endServer, url.length - 1);

    jsnObject = {
        'protocol': protocol,
        'server': server,
        'resource': resource
    }

    return '{ protocol: ' + jsnObject.protocol + ' ,\n' + 'server: ' + jsnObject.server + ' ,\n' + 'resource: ' + jsnObject.resource + '\n}';
}

var link = 'http://telerikacademy.com/Courses/Courses/Details/239';

console.log(urlInfo(link));