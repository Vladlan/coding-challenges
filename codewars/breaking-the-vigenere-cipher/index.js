const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Concise Oxford Dictionary (9th edition, 1995)
const OCCUR_WEIGHTS = {
  E: 0.111607,
  A: 0.084966,
  R: 0.075809,
  I: 0.075448,
  O: 0.071635,
  T: 0.069509,
  N: 0.066544,
  S: 0.057351,
  L: 0.054893,
  C: 0.045388,
  U: 0.036308,
  D: 0.033844,
  P: 0.031671,
  M: 0.030129,
  H: 0.030034,
  G: 0.024705,
  B: 0.02072,
  F: 0.018121,
  Y: 0.017779,
  W: 0.012899,
  K: 0.011016,
  V: 0.010074,
  X: 0.002902,
  Z: 0.002722,
  J: 0.001965,
  Q: 0.001962,
};

const generateCypherReplacement = (key, keyLength) => {
  const cypherReplacement = {};
  const eI = ALPHABET.indexOf("E");
  const foundECharIn = ALPHABET.indexOf(key);
  const shift =
    foundECharIn - eI >= 0 ? foundECharIn - eI : 26 + foundECharIn - eI;
  for (let i = 0; i < ALPHABET.length; i++) {
    const newPos = i + shift > 25 ? i + shift - 26 : i + shift;
    cypherReplacement[ALPHABET[newPos]] = ALPHABET[i];
  }
  return cypherReplacement;
};

const decrypt = (ciphertext, cypherReplacementMap) => {
  return ciphertext.split("").map((el) => {
    return cypherReplacementMap[el];
  });
};

const getSortedByOccursChars = (map) => {
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);
};

function divideStringOnGroups(str, keyLength) {
  const groups = [];
  for (let i = 0; i < keyLength; i++) {
    groups.push([]);
  }
  let groupNumber = 0;
  for (let i = 0; i < str.length; i++) {
    groups[groupNumber].push(str[i]);
    groupNumber = groupNumber === keyLength - 1 ? 0 : groupNumber + 1;
  }
  return groups;
}

function getCorrectRationBy9MostOccurentChars(decodedText) {
  const decryptedTextMap = {};
  decodedText.forEach((c) => {
    decryptedTextMap[c] = decryptedTextMap[c] ? decryptedTextMap[c] + 1 : 1;
  });
  const first9Chars = getSortedByOccursChars(decryptedTextMap).slice(0, 9);
  const probabilityOfGoodOccurence = first9Chars.reduce((acc, el) => {
    return acc + OCCUR_WEIGHTS[el];
  }, 0);
  return probabilityOfGoodOccurence;
}

function decryptText(str, keyLength) {
  const answer = [];
  const groups = divideStringOnGroups(str, keyLength);
  const genericMap = {};
  const decryptedGroups = groups.map((chars, index) => {
    const map = {};
    chars.forEach((c) => {
      map[c] = map[c] ? map[c] + 1 : 1;
      genericMap[c] = genericMap[c] ? genericMap[c] + 1 : 1;
    });
    const sortedCharsByOccurence = getSortedByOccursChars(map);
    const probabilitiesMap = {};

    for (const eKey of sortedCharsByOccurence) {
      const replacementMap = generateCypherReplacement(eKey, keyLength);
      const decrypted = decrypt(chars.join(""), replacementMap);
      probabilitiesMap[eKey] = getCorrectRationBy9MostOccurentChars(decrypted);
    }
    const sortedProbabilitiesMap = Object.entries(probabilitiesMap).sort(
      (a, b) => b[1] - a[1]
    );
    const maxOccurKey = sortedProbabilitiesMap[0][0];
    const replacementMap = generateCypherReplacement(maxOccurKey, keyLength);
    return decrypt(chars.join(""), replacementMap);
  });
  while (answer.length !== str.length) {
    for (let i = 0; i < keyLength; i++) {
      if (decryptedGroups[i].length) {
        answer.push(decryptedGroups[i].shift());
      }
    }
  }
  return answer.join("");
}

function getShiftsForKey(encrText, decryptedText, keyLength) {
  const shifts = [];
  for (let i = 0; i < keyLength; i++) {
    const indexDiff =
      encrText[i].charCodeAt() - decryptedText[i].charCodeAt() >= 0
        ? encrText[i].charCodeAt() - decryptedText[i].charCodeAt()
        : encrText[i].charCodeAt() - decryptedText[i].charCodeAt() + 26;
    shifts.push(indexDiff);
  }
  return shifts;
}

function getKeyword(ciphertext, keyLength) {
  const text = decryptText(ciphertext, keyLength);
  const shifts = getShiftsForKey(ciphertext, text, keyLength);
  const keyword = [];
  for (const shift of shifts) {
    keyword.push(String.fromCharCode(shift + 65));
  }
  return keyword.join("");
}

// const keY = key13;
// getKeyword(ciphertext13, keY.length);
// console.log("CORRECT ANSWER: ", keY);
// getKeyword(ciphertext7, key7.length);
// const shifts = getShifts(extendedKey);
// console.log("shifts: ", shifts.join(" "));
// console.log("extendedKey: ", extendedKey);
// // const encryptedText = encryprText(text, extendedKey);
// console.log("encryptedText: ", encryptedText);
// console.log("decryptedText: ", dycryptText(encryptedText, extendedKey));
//         13 4  19
// TEXT     L E  T  T E  R F  R  E Q  UENCIESLIKEWORDFREQUENCIESCYENYSGVVECSRZLGFDRZBPKWPMIYTFFGQDRJOKOTWWIWNVKUOBEXOLLZFDCOWZLJCXXQSZFITUIMUVFVLVEJDKZGSVWWYNANZKERERFKRLSOYEUTOWMYLVLVSUJNEHMGBFCEFKZGSVWWYZKCPRYPTYWHFHUQEELWGHSBXISAGWSPRVSVNHFNAJAPEDXWRUAHTHVANKSWHKSNSYSXSKEXIKKYVLGDCRFDSUIBLVUVSGMJTYWKFXWAOWDGHWINSYWOWQKSAPKYFLXENXKVMOIBOIWZOPTHEZKXWVMXLPVKTIINEELHFRQBALDMBHVOLVLVSUFEGISOHUMCRREYCUHBRVIWSQGEEJOQFGPANXLJOQHOEELGBFIHEEYVVFEJBVUCZFYHAKWFTRVOPVUKTLGWUKZQFVEJDLKGRWSLRFNGCUHESGJQJHEQTYGTGKMLOWLGLWWAVVFHCUEQTYGTGZLKSVKVMOIOAIWPCWWKDZNGFJIJTRUEIUEPERNGFDKALVLVSUJNEHMGBFMASTSPCQPUBVYNSDRADSQCBDPUZZFIOOENGVSOCXRPOWJGDUIOEELCHLZATVPVKLXDTYWCJDMHASANWWCKFDGFSURYODHWHLRCAEVECOPACKAQBVSBLRJISWITTTGTDRVWSLUJQDPYUCSVWRROAIWGOVMHYDSFSHBWMGDGGFEJBVVTOZRBRFECJDVEEKQQTVSQRTWUDUIOSIWRCUXENXJGZLKEOLKVSAXOSTAGBWMBITLGLWWWNUYGBHVWLWAEHLSJAEVVVHVAAIWFWIJARVFESVIOPVUKOOPUFFJISQINACXKQWMKNNAVVWLAPFKKHLSJOWZCBGMSIKZJPHGKMZFIARVACFEOCQLARSWTHVDEMZFJWVGHAJKKQLRPRFVWQWSNYTJADWSCRRHJMWITTTGFSVEJDJWEFHXSRZLKBJKEVVKVVHIJGCAUVOIPTVJHFHUQEEUAGHUQEEUGOVIPAFFTWVLZLWUOIJCLWSNMXAUVTYWOCVXYODEQBOIPTVJROLVOAJLJVHEJRVWTWQSJAKFFGWIOEEGHHHIZOILKVLEOTFSPRWLAMFKVQRQIOEVQIEPADCWVHHVOAJDNSHWOOFLVTIVNNEHRQFXDEKGRHZIHVVDGHWINSTGODUMOERTQIWSBTYWVCWEHUJSISWLATFHGWJLPLVLVSUWYODHTWVIWBFMVCIXDEKGVOOYOAXWNSWXARWJGEXIJCPSUOIYJCKAQBRJNAECEOQFAFZLVSGAALCTAGHZARRDTOQOBUEUVWRROWZLJHKIPWFHCFDQATVJECFLKBVLCFDRGFLFEHLSJBVAPUWLABVKVOQSPHVJTOQOBUEUVWRRSIKZPCDHFUJLCPOIBRVWROUEIEKWTOOWKFZLUHKIHEKLGFIVAQLWPQBHESKJKPXXEOEJGOVSJASDAKHPHTYWUOPIBUEUVWRRDAJTGSQYOEULQTLXPHVSOWQSWCZVHFHUQEEUAWQTNOKWKBVIMUVFESVEOPPMUWQKPHVNKQFMLHVJQFVSIEFLJSUGEPYWTPDWADFFCGWVWDUDKBJGDETCGFESWRULADLGWLCQWGHWWMEWOCQMYSLUJOVEOIELQSUVZRFHRWQKPHVKGQRRZRKGTSPIIBVJVVHXKPVAIVWGDAISEHHVOTYWWGHSBLVLVSUJNEHMGBFMASRFFTUIMUVFEMDRWLPKKGSPWYJSHIQHWMVFVOOVKLVAPQUCLTFYTOPWWNUKGJHVWLNGTRSYVZCWIOPIOIEUNIGMJGYSPUPEJSTJCPEPAAEVVVHXALVNKGLSJGREGGKSSWYWGZRJBOILWBHSJEFXVVHIWRCAGGWHASTJKDWMKNZFEZDWOITSNZLXARRLWFHSBAGHNMLRCTYWMBRAHEUYGCIIJGCAUVOIPTVJHFHUQEEUAHRWKLMAPUDGNYGLQUUEIIJXQIQHENVSRCHWBADGWGVXKRPLJSJSHDSMIKKINEKZGAHXDOUAUGXGYEJKHIOPUAGHNWHHPOUWEWSLARREGGVECEZFUHUYYTZFICQXDENZGFHEXOLLUCIEPRVSUIUIDIUVGBECYAGLCWQOEDUDGHWINFIWSIHRYIVKJOGEOTIGPUHJBETLQBWLADVKKUQSBSFEGYHCXORJFZDCKUKKVVHQKSKXTSTYANKDGHWINSRJGCQXDESGVHRQNONGHHKIXLZUMSQWZEIXGFWCLENJKHHVWNULJSKSIEIGYCIXDEUNQFDOOIDHNWIMADBWAPREND
// KEY =    C O  D  E W  A R  S
// Shift =  2 14 3  4 22 0 17 18 2 14 3 4 22 0 17 18 2 14 3 4 22 0 17 18 2 14
// result = N S  W  X A  R W  J  G E  X I J  C Z  W  U Z  LOAWFJFTUIMUVFEWHWPEEVVCYENYSGVVECSRZLGFDRZBPKWPMIYTFFGQDRJOKOTWWIWNVKUOBEXOLLZFDCOWZLJCXXQSZFITUIMUVFVLVEJDKZGSVWWYNANZKERERFKRLSOYEUTOWMYLVLVSUJNEHMGBFCEFKZGSVWWYZKCPRYPTYWHFHUQEELWGHSBXISAGWSPRVSVNHFNAJAPEDXWRUAHTHVANKSWHKSNSYSXSKEXIKKYVLGDCRFDSUIBLVUVSGMJTYWKFXWAOWDGHWINSYWOWQKSAPKYFLXENXKVMOIBOIWZOPTHEZKXWVMXLPVKTIINEELHFRQBALDMBHVOLVLVSUFEGISOHUMCRREYCUHBRVIWSQGEEJOQFGPANXLJOQHOEELGBFIHEEYVVFEJBVUCZFYHAKWFTRVOPVUKTLGWUKZQFVEJDLKGRWSLRFNGCUHESGJQJHEQTYGTGKMLOWLGLWWAVVFHCUEQTYGTGZLKSVKVMOIOAIWPCWWKDZNGFJIJTRUEIUEPERNGFDKALVLVSUJNEHMGBFMASTSPCQPUBVYNSDRADSQCBDPUZZFIOOENGVSOCXRPOWJGDUIOEELCHLZATVPVKLXDTYWCJDMHASANWWCKFDGFSURYODHWHLRCAEVECOPACKAQBVSBLRJISWITTTGTDRVWSLUJQDPYUCSVWRROAIWGOVMHYDSFSHBWMGDGGFEJBVVTOZRBRFECJDVEEKQQTVSQRTWUDUIOSIWRCUXENXJGZLKEOLKVSAXOSTAGBWMBITLGLWWWNUYGBHVWLWAEHLSJAEVVVHVAAIWFWIJARVFESVIOPVUKOOPUFFJISQINACXKQWMKNNAVVWLAPFKKHLSJOWZCBGMSIKZJPHGKMZFIARVACFEOCQLARSWTHVDEMZFJWVGHAJKKQLRPRFVWQWSNYTJADWSCRRHJMWITTTGFSVEJDJWEFHXSRZLKBJKEVVKVVHIJGCAUVOIPTVJHFHUQEEUAGHUQEEUGOVIPAFFTWVLZLWUOIJCLWSNMXAUVTYWOCVXYODEQBOIPTVJROLVOAJLJVHEJRVWTWQSJAKFFGWIOEEGHHHIZOILKVLEOTFSPRWLAMFKVQRQIOEVQIEPADCWVHHVOAJDNSHWOOFLVTIVNNEHRQFXDEKGRHZIHVVDGHWINSTGODUMOERTQIWSBTYWVCWEHUJSISWLATFHGWJLPLVLVSUWYODHTWVIWBFMVCIXDEKGVOOYOAXWNSWXARWJGEXIJCPSUOIYJCKAQBRJNAECEOQFAFZLVSGAALCTAGHZARRDTOQOBUEUVWRROWZLJHKIPWFHCFDQATVJECFLKBVLCFDRGFLFEHLSJBVAPUWLABVKVOQSPHVJTOQOBUEUVWRRSIKZPCDHFUJLCPOIBRVWROUEIEKWTOOWKFZLUHKIHEKLGFIVAQLWPQBHESKJKPXXEOEJGOVSJASDAKHPHTYWUOPIBUEUVWRRDAJTGSQYOEULQTLXPHVSOWQSWCZVHFHUQEEUAWQTNOKWKBVIMUVFESVEOPPMUWQKPHVNKQFMLHVJQFVSIEFLJSUGEPYWTPDWADFFCGWVWDUDKBJGDETCGFESWRULADLGWLCQWGHWWMEWOCQMYSLUJOVEOIELQSUVZRFHRWQKPHVKGQRRZRKGTSPIIBVJVVHXKPVAIVWGDAISEHHVOTYWWGHSBLVLVSUJNEHMGBFMASRFFTUIMUVFEMDRWLPKKGSPWYJSHIQHWMVFVOOVKLVAPQUCLTFYTOPWWNUKGJHVWLNGTRSYVZCWIOPIOIEUNIGMJGYSPUPEJSTJCPEPAAEVVVHXALVNKGLSJGREGGKSSWYWGZRJBOILWBHSJEFXVVHIWRCAGGWHASTJKDWMKNZFEZDWOITSNZLXARRLWFHSBAGHNMLRCTYWMBRAHEUYGCIIJGCAUVOIPTVJHFHUQEEUAHRWKLMAPUDGNYGLQUUEIIJXQIQHENVSRCHWBADGWGVXKRPLJSJSHDSMIKKINEKZGAHXDOUAUGXGYEJKHIOPUAGHNWHHPOUWEWSLARREGGVECEZFUHUYYTZFICQXDENZGFHEXOLLUCIEPRVSUIUIDIUVGBECYAGLCWQOEDUDGHWINFIWSIHRYIVKJOGEOTIGPUHJBETLQBWLADVKKUQSBSFEGYHCXORJFZDCKUKKVVHQKSKXTSTYANKDGHWINSRJGCQXDESGVHRQNONGHHKIXLZUMSQWZEIXGFWCLENJKHHVWNULJSKSIEIGYCIXDEUNQFDOOIDHNWIMADBWAPREND
//         11 18 22

// console.log(getKeyword(ciphertext2, 3));
// console.log("decryptText: ", decryptText(ciphertext, key.length));
// console.log("divideStringOnGroups: ", decryptText(ciphertext, key.length));

// const text = "HELLOWORLD";
// const key = "ABCXYZ";
// const extendedKey = getExtendedKey(text, key);

// const key = "CODEWARS";
// const encryptedText = 'NSWXARWJGEXIJCZWUZLOAWFJFTUIMUVFEWHWPEEVVCYENYSGVVECSRZLGFDRZBPKWPMIYTFFGQDRJOKOTWWIWNVKUOBEXOLLZFDCOWZLJCXXQSZFITUIMUVFVLVEJDKZGSVWWYNANZKERERFKRLSOYEUTOWMYLVLVSUJNEHMGBFCEFKZGSVWWYZKCPRYPTYWHFHUQEELWGHSBXISAGWSPRVSVNHFNAJAPEDXWRUAHTHVANKSWHKSNSYSXSKEXIKKYVLGDCRFDSUIBLVUVSGMJTYWKFXWAOWDGHWINSYWOWQKSAPKYFLXENXKVMOIBOIWZOPTHEZKXWVMXLPVKTIINEELHFRQBALDMBHVOLVLVSUFEGISOHUMCRREYCUHBRVIWSQGEEJOQFGPANXLJOQHOEELGBFIHEEYVVFEJBVUCZFYHAKWFTRVOPVUKTLGWUKZQFVEJDLKGRWSLRFNGCUHESGJQJHEQTYGTGKMLOWLGLWWAVVFHCUEQTYGTGZLKSVKVMOIOAIWPCWWKDZNGFJIJTRUEIUEPERNGFDKALVLVSUJNEHMGBFMASTSPCQPUBVYNSDRADSQCBDPUZZFIOOENGVSOCXRPOWJGDUIOEELCHLZATVPVKLXDTYWCJDMHASANWWCKFDGFSURYODHWHLRCAEVECOPACKAQBVSBLRJISWITTTGTDRVWSLUJQDPYUCSVWRROAIWGOVMHYDSFSHBWMGDGGFEJBVVTOZRBRFECJDVEEKQQTVSQRTWUDUIOSIWRCUXENXJGZLKEOLKVSAXOSTAGBWMBITLGLWWWNUYGBHVWLWAEHLSJAEVVVHVAAIWFWIJARVFESVIOPVUKOOPUFFJISQINACXKQWMKNNAVVWLAPFKKHLSJOWZCBGMSIKZJPHGKMZFIARVACFEOCQLARSWTHVDEMZFJWVGHAJKKQLRPRFVWQWSNYTJADWSCRRHJMWITTTGFSVEJDJWEFHXSRZLKBJKEVVKVVHIJGCAUVOIPTVJHFHUQEEUAGHUQEEUGOVIPAFFTWVLZLWUOIJCLWSNMXAUVTYWOCVXYODEQBOIPTVJROLVOAJLJVHEJRVWTWQSJAKFFGWIOEEGHHHIZOILKVLEOTFSPRWLAMFKVQRQIOEVQIEPADCWVHHVOAJDNSHWOOFLVTIVNNEHRQFXDEKGRHZIHVVDGHWINSTGODUMOERTQIWSBTYWVCWEHUJSISWLATFHGWJLPLVLVSUWYODHTWVIWBFMVCIXDEKGVOOYOAXWNSWXARWJGEXIJCPSUOIYJCKAQBRJNAECEOQFAFZLVSGAALCTAGHZARRDTOQOBUEUVWRROWZLJHKIPWFHCFDQATVJECFLKBVLCFDRGFLFEHLSJBVAPUWLABVKVOQSPHVJTOQOBUEUVWRRSIKZPCDHFUJLCPOIBRVWROUEIEKWTOOWKFZLUHKIHEKLGFIVAQLWPQBHESKJKPXXEOEJGOVSJASDAKHPHTYWUOPIBUEUVWRRDAJTGSQYOEULQTLXPHVSOWQSWCZVHFHUQEEUAWQTNOKWKBVIMUVFESVEOPPMUWQKPHVNKQFMLHVJQFVSIEFLJSUGEPYWTPDWADFFCGWVWDUDKBJGDETCGFESWRULADLGWLCQWGHWWMEWOCQMYSLUJOVEOIELQSUVZRFHRWQKPHVKGQRRZRKGTSPIIBVJVVHXKPVAIVWGDAISEHHVOTYWWGHSBLVLVSUJNEHMGBFMASRFFTUIMUVFEMDRWLPKKGSPWYJSHIQHWMVFVOOVKLVAPQUCLTFYTOPWWNUKGJHVWLNGTRSYVZCWIOPIOIEUNIGMJGYSPUPEJSTJCPEPAAEVVVHXALVNKGLSJGREGGKSSWYWGZRJBOILWBHSJEFXVVHIWRCAGGWHASTJKDWMKNZFEZDWOITSNZLXARRLWFHSBAGHNMLRCTYWMBRAHEUYGCIIJGCAUVOIPTVJHFHUQEEUAHRWKLMAPUDGNYGLQUUEIIJXQIQHENVSRCHWBADGWGVXKRPLJSJSHDSMIKKINEKZGAHXDOUAUGXGYEJKHIOPUAGHNWHHPOUWEWSLARREGGVECEZFUHUYYTZFICQXDENZGFHEXOLLUCIEPRVSUIUIDIUVGBECYAGLCWQOEDUDGHWINFIWSIHRYIVKJOGEOTIGPUHJBETLQBWLADVKKUQSBSFEGYHCXORJFZDCKUKKVVHQKSKXTSTYANKDGHWINSRJGCQXDESGVHRQNONGHHKIXLZUMSQWZEIXGFWCLENJKHHVWNULJSKSIEIGYCIXDEUNQFDOOIDHNWIMADBWAPREND'
// const extendedKey = getExtendedKey(encryptedText, key);

// //  orig key = "ABCXYZ"
// // text           "H E L L  O  W O R L D ";
// //    full key = "A B C X   Y  Z A B C X ";
// //       shift = "0 1 2 23 24 25 0 1 2 23";
// // result      = "H F N I  M  V  O S N  A";

// function getExtendedKey(text, key) {
//   const extendedKey = [];
//   let keyIndex = 0;
//   for (const el of text) {
//     extendedKey.push(key[keyIndex]);
//     keyIndex++;
//     if (keyIndex === key.length) {
//       keyIndex = 0;
//     }
//   }
//   return extendedKey.join("");
// }

// function getShifts(extKey) {
//   const shifts = [];
//   for (const c of extKey) {
//     shifts.push(c.charCodeAt() - 65);
//   }
//   return shifts;
// }

// function encryptText(text, extKey) {
//   const encryptedText = [];
//   const maxIndex = 90;
//   const shifts = getShifts(extKey);
//   for (let i = 0; i < text.length; i++) {
//     // if (i === 0) {
//     //   encryptedText.push(text[i]);
//     // } else {
//     const newCharI = text[i].charCodeAt() + shifts[i];
//     const newChar = String.fromCharCode(
//       newCharI > maxIndex ? newCharI - 26 : newCharI
//     );
//     encryptedText.push(newChar);
//     // }
//   }
//   return encryptedText.join("");
// }

// function dycryptText(encrText, extKey) {
//   const shifts = getShifts(extKey);
//   const decryptedText = [];
//   for (let i = 0; i < encrText.length; i++) {
//     const newCharI = encrText[i].charCodeAt() - shifts[i];
//     const newChar = String.fromCharCode(
//       newCharI < 65 ? newCharI + 26 : newCharI
//     );
//     decryptedText.push(newChar);
//   }
//   return decryptedText.join("");
// }

module.exports = {
  getKeyword,
};



// Solution V2
// const q = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const freqs = [8167, 1492, 2782, 4253, 12702, 2228, 2015, 6094, 6966, 153, 772, 4025, 2406, 6749, 7507, 1929, 95, 5987, 6327, 9056, 2758, 978, 2360, 150, 974, 74];

// function getKeyword(s, l) {
//   var r = [];
//   for (let i=0; i<l; i++) {
//     let f=[...s].filter((_,j)=>j%l===i).reduce((o,c)=>(o[c]=o[c]+1||1,o),{});
//     let vs = [...Array(26)].map((_,v)=>[v, Object.keys(f).reduce((t,k)=>t+f[k]*freqs[(q.indexOf(k)+26-v)%26],0)]);
//     r.push(q[vs.sort((a,b)=>b[1]-a[1])[0][0]%26]);
//   }
//   return r.join('');
// }