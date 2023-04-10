function firstNonRepeatingChar(str) {
  // Create a map to store the count of each character
  const charCount = new Map();
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first character with a count of 1
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // No non-repeating character found
  return null;
}

// Prompt user for input and display result
const input = prompt("Enter a string:");
const result = firstNonRepeatingChar(input);
alert(result ? `The first non-repeating character is "${result}"` : "No non-repeating character found.");
