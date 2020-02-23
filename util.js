function hexpad(string, length, pad) {
    if (length === void 0) { length = 2; }
    if (pad === void 0) { pad = "0"; }
    if (string.length > length) {
        return String(string);
    }
    else {
        length = length - string.length;
        if (length > pad.length) {
            for (var x = 0; x < length / pad.length; x++) {
                pad += pad;
            }
        }
        return pad.slice(0, length) + String(string);
    }
}
function hexify(number) {
    return hexpad(number.toString(16));
}
