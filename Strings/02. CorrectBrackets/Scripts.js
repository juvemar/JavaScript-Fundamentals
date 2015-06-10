function checkBrackets(exp) {
    var openBr = '',
        closeBr = '',
        i;

    for (i = 0; i < exp.length; i += 1) {
        if (exp[i] === '(') {
            openBr += 1;
        } else if (exp[i] === ')') {
            closeBr += 1;
        }
        if (closeBr > openBr) {
            return 'Brackets are incorrect!';
        }
    }

    if (openBr !== closeBr) {
        return 'Brackets are incorrect!';
    }

    return 'Brackets are correct!';
}

var expression1 = ')(a+b))';
console.log(expression1 + ' -> ' + checkBrackets(expression1));

var expression2 = '((a+b)/5-d)';
console.log(expression2 + ' -> ' + checkBrackets(expression2));

var expression3 = '(((a+b)/5-d)';
console.log(expression3 + ' -> ' + checkBrackets(expression3));