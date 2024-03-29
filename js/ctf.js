"use strict";

const decodeBase64 = (data) => {
    return atob(data);
};

const decodeRot13 = (str) => {
    var alphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "-",
        "_",
        ".",
        "&",
        "?",
        "!",
        "@",
        "#",
        "/",
        "{",
        "}",
    ];

    var alphabets13 = [
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        " ",
        "-",
        "_",
        ".",
        "&",
        "?",
        "!",
        "@",
        "#",
        "/",
        "{",
        "}",
    ];

    let resultStr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            if (str[i] === alphabets[j]) {
                resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");
};

const hexToString = (hex) => {
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
};
