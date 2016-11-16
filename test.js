var parser = require('./parse-cookie');
var assert = require('assert');

var cookie = 'NHUxNFNucmVBVlkrYnVsYWpybjBFeUE5eGpITFBEMnNBUGJaeTJobHl1QjBmUmtGdys2SHBnendHOWFwTTNrOW5UVDNBMnZCVXpYNXRGRDFuSUtvWXkrbjFTcW0vNDRJWmUrL1pnSVlZNVQzdHFuVUlkSHZsTCtyYkhUZ0RqUk5wTWdka2tDRmt4R1VFK2prU1JvUkNNTTh0WXFQQmV5TkZRcllucFJWZmROWWhrdHltRWlvWGhKdEhGZjJjeE9zdjFnM2FTQVBiUjhaMkpITWh2WW9zMUJsdWJ1TW9HU2h2OHpvdmdkTFhNQT0tLWRwdU9kM3NZaEhESHAvazBzYjNzVlE9PQ==--8fb5972c72c3e759131e2c54d29ba390dc377fc4';
var params = {
    base: '75d9bd8321ea9483ec94a94d9f6405fcb76f495b716955f4454fada841bbb6c78e6ac21898c22a7de5a0e13d03596d46faf45887dd7eaef606bfeb9b096a2e6b',
    salt: 'encrypted cookie',
    signed_salt: 'signed encrypted cookie',
    iterations: 1000,
    keylen: 64
}
var cipher = 'aes-256-cbc';

describe('parser/decryptor', function() {
    it('decrypts the cookie', function() {
        var decryptor = parser(params);
        assert.deepEqual(JSON.parse(decryptor(cookie, cipher)), {
            "_csrf_token": "hSJ3BEqL827ImkcL4rFpNpLDX+ood6oa3aDBhM5P/Ck=",
            "session_id": "f7770770677b93e72409d502e9af7103",
            "warden.user.player.key": [[645], "$2a$10$3AJCpD/.t3AmDmgVsiPq4e"]
        });
    });
});
