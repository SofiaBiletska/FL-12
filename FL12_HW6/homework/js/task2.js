let a = +prompt('Input the lenght of 1-st side of triangle');
let b = +prompt('Input the lenght of 2-nd side of triangle');
let c = +prompt('Input the lenght of 3-rd side of triangle');
if ( isNaN(a) || isNaN(b) ||  isNaN(c) ) {
    alert("input values should be ONLY numbers");
}
if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
}
if (a + b > c && a + c >b && b + c > a) {
    if (a === b && b === c) {
        console.log('Equilateral triangle');
    }
    else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    }
    else {
        console.log('Scalene triangle');
    }
}
else {
    console.log('Triangle doesn’t exist');
}