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

// function objectIterator(object) {
//     return Object.entries(object).forEach(([k,v]) => {
//         console.log(v)
//     })
// }

function stringIterator(string, shift) {
    let cipherText = ''
    for (let i = 0; i < string.length; i++) {
        string[i] == ' ' ? cipherText = cipherText + ' ' : cipherText = cipherText + charConverter(string[i], shift)
    }
    console.log(cipherText);
}

function charConverter(string, shift) {
    let cipheredKey = getKeyByValue(cipher, string) - shift
    cipheredKey <= 0 ? cipheredKey = cipheredKey + 26 : null
    return cipher[cipheredKey]
}

stringIterator('victor is cool because ll', 4)
// console.log(typeof alphabet)