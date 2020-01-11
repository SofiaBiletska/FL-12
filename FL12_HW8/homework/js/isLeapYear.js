function isLeapYear(args) {
    let myDate = new Date(args);
    if (isNaN(myDate)) {
        return (`Invalid Date`);
    }
    let Year = myDate.getFullYear();
    if (((Year % 4 === 0) && (Year % 100 !== 0)) || Year % 400 === 0) {
        return (`${Year} is a leap year`);
    } else {
        return (`${Year} is not a leap year`);
    }
}

<<<<<<< HEAD
isLeapYear('2020-03-23 23:38:22');
=======
isLeapYear('2020-03-23 23:38:22');
>>>>>>> b5736841c6d0c8a3ed13a3b0d598ca2afa121ee5
