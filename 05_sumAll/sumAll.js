const sumAll = function(a, b) {
    let n = 0;
    let total = 0;
    if (typeof(a) != "number" || typeof(b) != "number" || a < 0 || b < 0){
        return "ERROR";
    }
    else{
        if (a <= b){
            n = b - a + 1;
        }
        else {
            n = a - b + 1;
        }
    }

    total = n * (a + b) / 2;
    return total;
};

// Do not edit below this line
module.exports = sumAll;
