const reverseString = function(text) {
    let newText = text.split('');
    const reverseArrayString = []
    for (let i = newText.length - 1; i >= 0; i--) {
        reverseArrayString.push(newText[i]);
    }
    return reverseArrayString.join('');
};

// Do not edit below this line
module.exports = reverseString;
