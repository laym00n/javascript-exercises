const palindromes = function (str) {
    const alphaNumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanString = str
        .toLowerCase()
        .split('')
        .filter((char) => alphaNumerical.includes(char))
        .join('');

    const reversedString = cleanString
        .split('')
        .reverse()
        .join('');
    
    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
