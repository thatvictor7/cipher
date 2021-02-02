// In cryptography, a Caesar cipher, also known as Caesar's cipher, the 
// shift cipher, Caesar's code or Caesar shift, is one of the simplest and 
// most widely known encryption techniques. It is a type of substitution 
// cipher in which each letter in the plaintext is replaced by a letter 
// some fixed number of positions down the alphabet. For example, with a 
// left shift of 3, D would be replaced by A, E would become B, and so on. 
// The method is named after Julius Caesar, who used it in his private 
// correspondence.

const cipher = require('./alphabetObject.json')

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function stringDecipher(string, shift) {
    let decipheredText = ''
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case ' ':
                decipheredText = decipheredText + ' '
                break;
            case ',':
                decipheredText = decipheredText + ','
                break;
            case '.':
                decipheredText = decipheredText + '.'
                break;
            default:
                decipheredText = decipheredText + charConverter(string[i], shift)
                break;
        }
    }
    console.log(decipheredText);
}

function charConverter(string, shift) {
    let cipheredKey = getKeyByValue(cipher, string)
    cipheredKey = parseInt(cipheredKey) + shift
    cipheredKey > 26 ? cipheredKey = (cipheredKey - 26) : null
    return cipher[cipheredKey]
}

stringDecipher('jxfkqxfk, xkxivwb, xka obmxfo exoatxob xka plcqtxob pvpqbjp.', 3)