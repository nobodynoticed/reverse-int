module.exports = function reverse(n) {
    const isNum = isFinite(n);
    if (isNum) {
        let reversePosInt = n.toString().split("").reverse().join("");
        if (reversePosInt.includes("-")) {
            reversePosInt = reversePosInt.slice(0, reversePosInt.length - 1);
        }
        return +reversePosInt;
    }
};
