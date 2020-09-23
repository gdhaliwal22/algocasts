// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// `Array.from(str)` is ES6 syntax for creating array of string characters.

function palindrome(str) {
  return Array.from(str).every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// Solution #1
// function palindrome(str) {
//   return str.length > 0 && Array.from(str).reverse().join("") === str;
// }

// Solution #2
// function palindrome(str) {
//   // remove non-alphanumeric characters and
//   // change the string to lowercase
//   //remove line below to pass all tests,
//   str = str.replace(/[^a-z0-9]/i, "").toLowerCase();

//   // and get the length of the string
//   const len = str.length;

//   if (len <= 1) return true;
//   if (str[0] !== str[len - 1]) return false;

//   // proper tail call optimized recursion
//   return palindrome(str.slice(1, -1));
// }
