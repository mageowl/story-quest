import { punctuation } from "./words";

function split(line: string): string[] {
	const words: string[] = [];
	const split = () => {
		words.push(word);
		word = "";
	};
	const push = (c: string) => (word += c);
	let word = "";

	let inString = false;

	for (let c of line) {
		if (c == " " && !inString) {
			split();
		} else if (punctuation.includes(c)) {
			split();
			push(c);
			split();
		} else {
			push(c);
		}
	}

	return words;
}

const target = split("In the Dragon Cave:");
const obj = { pattern: ["In", "[place]", ":"], canCreateObjects: true };
let searchIndex = 0;
let found = true;
for (let word of obj.pattern) {
	if (!word.startsWith("[") && !word.startsWith("(")) {
		found = target[searchIndex] == word;
		searchIndex++;
	} else {
		// later
	}
}

console.log(found);
