exports.checkHash = (hash, difficulty) => {
	for (var i = 0, b = hash.length; i < b; i ++) {
		if (hash[i] !== '0')  break;
	}
	return i === difficulty;
};
