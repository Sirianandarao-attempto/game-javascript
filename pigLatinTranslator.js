const input = process.argv.slice(2).join(" ");

//check if character has Vowel
function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

// Translate word to Pig Latin
function translateWord(word) {
  if (word.length === 0) return word;

  const lowerWord = word.toLowerCase();
  const firstChar = lowerWord[0];
  const secondChar = lowerWord[1];

  if (isVowel(firstChar)) {
    return word + "way";
  } else if (!isVowel(firstChar) && !isVowel(secondChar)) {
    return word.slice(2) + word.slice(0, 2) + "ay";
  } else {
    return word.slice(1) + word[0] + "ay";
  }
}

// Translate word in the input
const translated = input.split(" ").map(translateWord).join(" ");

console.log(translated);
