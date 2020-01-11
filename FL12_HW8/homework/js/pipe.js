function addOne(x) {
    return x + 1;
}

function pipe (N, ...funct) {
    for (let k = 0; k < funct.length; k++) {
        N = funct[k](N);
    }
    return N;
}

<<<<<<< HEAD
pipe(7, addOne);
=======
pipe(7, addOne);
>>>>>>> b5736841c6d0c8a3ed13a3b0d598ca2afa121ee5
