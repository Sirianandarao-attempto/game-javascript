const input = process.argv.slice(2);

// Get the phrase and shift amount
const phrase = input.slice(0, -1).join(" ");
const shift = parseInt(input[input.length - 1], 10);

// Caesar Cipher function
function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        const base = char === char.toUpperCase() ? 65 : 97;
        const charCode = char.charCodeAt(0);
        const normalized = (charCode - base + shift + 26) % 26;
        return String.fromCharCode(base + normalized);
      } else {
        return char;
      }
    })
    .join("");
}

// Encrypt and output the result
const encrypted = caesarCipher(phrase, shift);
console.log(encrypted);
