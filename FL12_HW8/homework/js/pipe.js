function addOne(x) {
    return x + 1;
}

function pipe (N, ...funct) {
    for (let k = 0; k < funct.length; k++) {
        N = funct[k](N);
    }
    return N;
}

pipe(7, addOne);
