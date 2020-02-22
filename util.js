function hexpad(string, length = 2, pad = "0") {
    if (string.length > length) {
        return String(string);
    }
    else {
        length = length - string.length;
        if (length > pad.length) {
            for (let x = 0; x < length / pad.length; x++) {
                pad += pad;
            }
        }
        return pad.slice(0, length) + String(string);
    }
}
function hexify(number) {
    return hexpad(number.toString(16));
}
