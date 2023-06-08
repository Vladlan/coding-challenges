/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const regex = /[a-z0-9]/g;
    const str = s.toLowerCase().match(regex);
    if (!str || str.length === 0) return true;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

const s = "A man, a plan, a canal: Panama";
const res = isPalindrome("0P");
console.log('res: ', res);
