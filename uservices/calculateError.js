exports.calculateError = (actual, calculated) => {
    var diff = Math.abs(actual - calculated);
    return ((diff / actual) * 100);
};
