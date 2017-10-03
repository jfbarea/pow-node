const checkHash = require('./checkHash.js').checkHash;
const generateHash = require('./generateHash.js').generateHash;
var difficulty = 1;
var secret = require('crypto').randomBytes(8).toString('hex');
var main = () => {
	console.time(`TIME FOR DIFFICULTY ${difficulty}`);
	var found = false;
	var nonce = -1;
	var currentHash = '';
	console.log(`SECRET: ${secret}`);
	while (true) {
		while (!found) {
			nonce++;
			currentHash = generateHash(secret, nonce);
			found = checkHash(currentHash, difficulty);
		}
		console.log('DIFFICULTY: ' + difficulty);
		console.log('HASH: ' + currentHash);
		console.log('NONCE: ' + nonce);
		console.timeEnd(`TIME FOR DIFFICULTY ${difficulty}`);
		found = false;
		nonce = 0;
		difficulty++;
		console.time(`TIME FOR DIFFICULTY ${difficulty}`);
	}
};
main();
