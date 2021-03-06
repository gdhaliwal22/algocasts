// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  a1 = stringA.replace(/[^a-z0-9]/g, "").toLowerCase();
  a2 = stringB.replace(/[^a-z0-9]/g, "").toLowerCase();

  if (a1.length !== a2.length) {
    return false;
  }

  let freqCount1 = {};
  let freqCount2 = {};

  for (let char of a1) {
    freqCount1[char] = (freqCount1[char] || 0) + 1;
  }
  for (let char of a2) {
    freqCount2[char] = (freqCount2[char] || 0) + 1;
  }

  for (let key in freqCount1) {
    if (!(key in freqCount2)) {
      return false;
    }
    if (freqCount2[key] !== freqCount1[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;

// Solution #1
// function anagrams(stringA, stringB) {
//     a1 = stringA.replace(/[^\w]/g, "").toLowerCase();
//     a2 = stringB.replace(/[^\w]/g, "").toLowerCase();

//     if (a1.length !== a2.length) {
//       return false;
//     }

//     let freqCount1 = {};
//     let freqCount2 = {};

//     for (let char of a1) {
//       freqCount1[char] = (freqCount1[char] || 0) + 1;
//     }
//     for (let char of a2) {
//       freqCount2[char] = (freqCount2[char] || 0) + 1;
//     }

//     for (let key in freqCount1) {
//       if (!(key in freqCount2)) {
//         return false;
//       }
//       if (freqCount2[key] !== freqCount1[key]) {
//         return false;
//       }
//     }
//     return true;
//   }

// `Solution #2
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }
// function cleanString(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }
