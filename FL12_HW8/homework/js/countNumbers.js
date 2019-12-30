function makeNumber(array) {
    let Numbs = '';
    for(let i = 0; i < array.length; i++) {
        if (!isNaN(array[i]) ) {
            Numbs += array[i];
        }
    }
    return Numbs;
}

function countNumbers (array){
    let numbs_string = makeNumber(array);
    let N, i, k;
    let final_object = {};
    let Count = 0;
    for (i = 0; i < numbs_string.length; i++){
        N = numbs_string[i];
        if (final_object[N] === undefined ){
            for (k = 0; k < numbs_string.length; k++){
                if (N === numbs_string[k]){
                    Count++;
                }
            }
            final_object[N] = Count;
        }
        Count = 0;
    }
    return final_object;
}

countNumbers('wush7289s20skzsa');