const crypto = require('crypto');
exports.generateHash = (secret, nonce) => {
	return crypto.createHash('sha256')
										.update(secret + nonce)
										.digest('base64');
};
