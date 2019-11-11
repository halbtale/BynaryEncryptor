export default {
    ' ': '00000',
    A: '00001',
    B: '00010',
    C: '00011',
    D: '00100',
    E: '00101',
    F: '00110',
    G: '00111',
    H: '01000',
    I: '01001',
    L: '01010',
    M: '01011',
    N: '01100',
    O: '01101',
    P: '01110',
    Q: '01111',
    R: '10000',
    S: '10001',
    T: '10010',
    U: '10011',
    V: '10100',
    Z: '10101',
    '0': '10110',
    '1': '10111',
    '2': '11000',
    '3': '11001',
    '4': '11010',
    '5': '11011',
    '6': '11100',
    '7': '11101',
    '8': '11110',
    '9': '11111',
    J: '0011101000',
    K: '0001101000',
    W: '1010010100',
    X: '0001110001',
    Y: '0100101001',

    encrypt(normalMessage) {
        return normalMessage
            .toUpperCase()
            .split('')
            .filter(el => this[el])
            .map(el => this[el])
            .join('');
    },
    decrypt(decimalMessage) {
        return decimalMessage
            .split('')
            .filter(el => el === '0' || el === '1')
            .join('')
            .match(/.{5}/g)
            .map(el => this.getKey(this, el))
            .join('');
    },
    getKey: (obj, val) => Object.keys(obj).find(key => obj[key] === val)
};
