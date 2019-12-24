var a = prompt ('Please, input "a" for quadratic equation ax^2 + bx + c = 0.','write here');
var b = prompt ('Please, input "b" for quadratic equation ax^2 + bx + c = 0.','write here');
var c = prompt ('Please, input "c" for quadratic equation ax^2 + bx + c = 0.','write here');
if ( a == 0 || isNaN(a) || isNaN(b) ||  isNaN(c) ) {
    alert('Invalid input data');
}
else {
    let D, x, x1, x2;
    D = (Math.pow(b,2) - (4 * a * c));
    if (D < 0) {
        console.log('No solution, D < 0');
    } else if (D == 0) {
        x = ((-1 * b) / (2 * a));
        console.log('x =' + Math.round(x));
    } else {
        x1 = (((-1 * b) + Math.sqrt(D)) / (2 * a));
        x2 = (((-1 * b) - Math.sqrt(D)) / (2 * a));
        console.log('x1 = '+ Math.round(x1), 'x2 = '+ Math.round(x2));
    }
}