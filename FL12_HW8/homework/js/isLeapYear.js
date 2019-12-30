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

isLeapYear('2020-03-23 23:38:22');
