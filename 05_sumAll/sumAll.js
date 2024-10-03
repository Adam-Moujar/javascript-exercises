const sumAll = function(a, b) {
    if(a < 0 || b < 0) return "ERROR";
    if(typeof a != "number" || typeof b != "number") return "ERROR";
    if(a % 1 != 0 || b % 1 != 0) return "ERROR";
    let sum = 0;
    const min = function(a,b){
        if(a < b) return a;
        return b;
    }
    const max = function(a,b){
        if(a > b) return a;
        return b;
    }
    for(let i = min(a,b); i <= max(a,b); i++) sum = sum + i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
