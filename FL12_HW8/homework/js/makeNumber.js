function makeNumber(array) {
    let Numbs = '';
    for(let i = 0; i < array.length; i++) {
        if (!isNaN(array[i]) ) {
            Numbs += array[i];
        }
    }
    return Numbs;
}

makeNumber('sxi8e9s90wj21');