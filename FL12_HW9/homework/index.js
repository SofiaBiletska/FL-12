function convert() {
    let args ;
    let nums = [];
    for(let l = 0; l < arguments.length; l++) {
        if (typeof arguments[l] === 'string' ) {
            args = Number(arguments[l]);
            nums.push(args);
        } else if (typeof arguments[l] === 'number' ) {
            args = String(arguments[l]);
            nums.push(args);
        }
    }
    return nums;
}
convert('1', 2, 3, '4');

function executeforEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}
executeforEach([1,2,3],function(el){
    console.log(el * 2);
});

function mapArray(array, callback){
    let arr2 = [];
    executeforEach(array, function (el) {
        arr2.push(callback(Number(el)));
    });
    return arr2;
}
mapArray([2, '5', 8], function(el){
    return el + 3;
});

function filterArray(array, callback){
    let result = [];
    executeforEach(array, function(el) {
        if(el % 2 === 0) {
            result.push(callback(el));
        }
    });
    return result;
}
filterArray([2, 5, 8], function(el){
    return el;
});

function flipOver(str) {
    let result_string = '';
    for (let k = str.length - 1; k >= 0; k--) {
        result_string += str[k];
    }
    return result_string;
}
flipOver('hey world');


function makeListFromRange([first, last]) {
    let Result = [];
    for (let i = first; i <= last; i++) {
        Result.push(i);
    }
    return Result;
}
makeListFromRange([2, 7]);

function getArrayOfKeys(array, kEy){
    let result_arr=[];
    executeforEach(array,function (el) {
        result_arr.push(el[kEy]);
    });
    return result_arr;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
<<<<<<< HEAD
getArrayOfKeys(actors,'name');
=======
 getArrayOfKeys(actors,'name');
>>>>>>> 81c06321f53fbc55a0293302d72d00604528b204

function substitute(array){
    let arr2 = [];
    mapArray(array,function(el) {
        if (el < 30 ) {
            el= "*";
        }
        arr2.push(el);
    });
    return arr2;
}
substitute([58, 14, 48, 2, 31, 29]);

function getPastDay(date, past_days){
    const day_millisecs = 24*60*60*1000;
    return new Date(date - past_days * day_millisecs).getDate();
}
const date = new Date(2019, 0, 2);
getPastDay(date, 1);

function formatDate(date) {
    let Month = date.getMonth() + 1;
    let Day = date.getDate();
    let Year = date.getFullYear();
    let Hour = date.getHours();
    let Minutes = date.getMinutes();
    if(Hour < 10){
        Hour= `0${date.getHours()}`;
    } else {
        Hour = date.getHours();
    }
    if(Minutes < 10){
        Minutes = `0${date.getMinutes()}`;
    } else {
        Minutes = date.getMinutes();
    }
    return `${Year}/${Month}/${Day} ${Hour}:${Minutes}`;
}
formatDate(new Date('6/15/2018 09:15:00'));
