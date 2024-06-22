const repeatString = function (word, freq) {
    if (freq < 0) {
        return "ERROR"
    }
    let res = ""
    for (let i = 0; i < freq; i++) {
        res += word
    }
    return res

};

// Do not edit below this line
module.exports = repeatString;
