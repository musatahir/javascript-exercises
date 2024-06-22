const removeFromArray = function (arr, ...items) {
    const resArr = arr.filter((el) => !items.includes(el));
    return resArr;
};

// Do not edit below this line
module.exports = removeFromArray;
