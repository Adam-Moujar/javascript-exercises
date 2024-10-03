const removeFromArray = function(arr, ...values) {
    let new_arr = [];
    arr.forEach(element => {
        if(values.indexOf(element) == -1) new_arr.push(element);
    });
    // console.log(new_arr);
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
