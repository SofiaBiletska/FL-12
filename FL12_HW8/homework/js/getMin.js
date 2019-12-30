function getMin() {
    let MinN = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (MinN > arguments[i]) {
            MinN = arguments[i];
        }
    }
    return MinN;
}

getMin(-3, 0, 7);