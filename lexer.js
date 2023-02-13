"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = require("./words");
function split(line) {
    const words = [];
    const split = () => {
        words.push(word);
        word = "";
    };
    const push = (c) => (word += c);
    let word = "";
    let inString = false;
    for (let c of line) {
        if (c == " " && !inString) {
            split();
        }
        else if (words_1.punctuation.includes(c)) {
            split();
            push(c);
            split();
        }
        else {
            push(c);
        }
    }
    return words;
}
const target = split("In the Dragon Cave:");
const obj = { pattern: ["In", "[place]", ":"], canCreateObjects: true };
let searchIndex = 0;
let found = true;
console.log("yoholo!");
for (let word of obj.pattern) {
    if (!word.startsWith("[") && !word.startsWith("(")) {
        found = target[searchIndex] == word;
        console.log("yonx", searchIndex, target[searchIndex], word);
        searchIndex++;
    }
    else {
        // later
    }
}
console.log(found);
