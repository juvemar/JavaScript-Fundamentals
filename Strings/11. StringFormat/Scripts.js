function format(){
    var args = arguments,
        str = args[0],
        placeholder;

    for (var ind = 1; ind < args.length; ind++) {
        placeholder ='{' + (ind - 1) + '}';

        while(str.indexOf(placeholder) > -1) {
            str = str.replace(placeholder, args[ind]);
        }
    }

    return str;
}

var text = 'Name:{0}, Age:{1}, Hometown:{2}.';

console.log(format(text,'George', 15, 'Cansas'));