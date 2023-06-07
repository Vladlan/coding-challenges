const sentence = "The quick brown fox jumps over the lazy dog.";
// V1
// function isPangram(str) {
//   str = str.toLowerCase()
//   const charsCounter = {};
//   for (const el of str) {
//     if (el >= "a" && el <= "z") {
//       charsCounter[el] = charsCounter[el] ? charsCounter[el] + 1 : 1;
//     }
//   }
//   return Object.keys(charsCounter).length === 26;
// }

// V2
function isPangram(str) {
  return "abcdefghijklmnopqrstuvwxyz".split("").every((el) => {
    return str.toLowerCase().includes(el);
  });
}

// console.log("a: ", "a".charCodeAt(0));
// console.log("z: ", "z".charCodeAt(0));
// console.log("a".charCodeAt(0) - "z".charCodeAt(0));
// console.log("A: ", "A".charCodeAt(0));
// console.log("Z: ", "Z".charCodeAt(0));
// console.log("A".charCodeAt(0) - "Z".charCodeAt(0));
// console.log(String.fromCharCode(90, 91, 92, 93, 94, 95, 96, 97));

const res = isPangram(sentence);
console.log("res: ", res);
