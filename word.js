var Letter = require("./Letter.js");

function Word(targetWord){
	// generate letter objects based on selected word
	for (var i = 0; i < targetWord.length; i++) {
		this[i] = new Letter(targetWord[i]);
	};
}; // Word(){}

Word.prototype.displayWord = function() {
	// create empty array
	var lettersArray = [];
	// populate array with letters or underscores
	for (letter in this) {
		if (this[letter].showLetter)
			lettersArray.push(this[letter].showLetter());
	};
	// return a string of letters or underscores
	return lettersArray.join(" ");
}; // displayWord(){}

Word.prototype.checkIfWordContains = function(guessedLetter) {
	for(letter in this) {
		if (this[letter].isThisLetter)
			this[letter].isThisLetter(guessedLetter);
	};
}; // checkIfWordContains(){}

module.exports = Word;