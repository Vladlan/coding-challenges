/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return i;
        }
    }
    return -1;
};


const s = "leetcode";
const res = firstUniqChar(s);
console.log('res: ', res); // 0