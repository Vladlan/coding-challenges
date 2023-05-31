// function solution(P, Q) {
//   const pArr = P.split('');
//   const qArr = Q.split('');
//   const res = new Set();

//   res.add(pArr.join(''));
//   for (let i = 0; i < pArr.length; i++) {
//     const newArr = [...pArr];
//     for (let j = 0; j < qArr.length; j++) {
//       if (pArr[j] !== qArr[j]) {
//         newArr[j] = qArr[j];
//         res.add(newArr.join(''));
//       }
//     }
//   }
//   const newArr = [...pArr];
//   for (let j = 0; j < qArr.length; j++) {
//     if (pArr[j] !== qArr[j]) {
//       newArr[j] = qArr[j];
//       res.add(newArr.join(''));
//     }
//   }
//   const newArr2 = [...qArr];
//   for (let j = 0; j < pArr.length; j++) {
//     if (pArr[j] !== pArr[j]) {
//       newArr2[j] = pArr[j];
//       res.add(newArr2.join(''));
//     }
//   }
//   const newArr3 = [...qArr];
//   for (let j = 0; j < pArr.length; j++) {
//     newArr3[j] = pArr[j];
//     res.add(newArr3.join(''));
//   }

//   const newArr4 = [...pArr];
//   for (let j = 0; j < qArr.length; j++) {
//     newArr4[j] = qArr[j];
//     res.add(newArr4.join(''));
//   }

//   const dupSet = new Set();
//   console.log('res: ', res);
//   for (let el of res) {
//     const cl = countLetters(el);
//     console.log('cl: ', cl);
//     Object.entries(cl)
//       .filter(([k, v]) => v > 1)
//       .map((el) => {
//         dupSet.add(el.join(''));
//       });
//   }
//   //   return getMaxDuplications(res);
//   console.log('dupSet: ', dupSet);
//   return dupSet.size;
// }

// function solution(P, Q) {
//   let distinct_letters = 0;
//   let S = '';

//   for (let i = 0; i < P.length; i++) {
//     if (P[i] === Q[i]) {
//       S += P[i];
//     } else {
//       let remaining_P = P.slice(i + 1);
//       let remaining_Q = Q.slice(i + 1);
//       let count_P = remaining_P.split(P[i]).length - 1;
//       let count_Q = remaining_Q.split(Q[i]).length - 1;

//       if (count_P >= count_Q) {
//         S += P[i];
//       } else {
//         S += Q[i];
//       }
//     }
//   }

//   // Count distinct letters in S
//   let unique_letters = new Set(S);
//   distinct_letters = unique_letters.size;

//   return distinct_letters;
// }

// const res1 = solution('abc', 'bcd'); //2
// const res2 = solution('axxz', 'yzwy'); //2
// const res3 = solution('bacad', 'abada'); //1
// const res4 = solution('amz', 'amz'); //3
// console.log('res1: ', res1);
// console.log('res2: ', res2);
// console.log('res3: ', res3);
// console.log('res4: ', res4);

// function countLetters(str) {
//   const arr = str.split('');
//   const map = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (map[arr[i]]) {
//       map[arr[i]]++;
//     } else {
//       map[arr[i]] = 1;
//     }
//   }
//   return map;
// }

// function getAllPossibleStringMerges(a, b) {
//   const aArr = a.split('');
//   const bArr = b.split('');
//   const res = new Set();

//   res.add(aArr.join(''));
//   res.add(bArr.join(''));
//   const newArr = [...aArr];
//   for (let j = 0; j < bArr.length; j++) {
//     if (aArr[j] !== bArr[j]) {
//       newArr[j] = bArr[j];
//       res.add(newArr.join(''));
//     }
//   }

//   for (let j = 0; j < bArr.length; j++) {
//     if (aArr[j] !== bArr[j]) {
//       const newArr = [...aArr];
//       newArr[j] = bArr[j];
//       res.add(newArr.join(''));
//     }
//   }

//   for (let j = 0; j < bArr.length; j++) {
//     const newArr3 = [...aArr];
//     if (aArr[j] !== bArr[j]) {
//       newArr3[j] = bArr[j];
//       res.add(newArr3.join(''));
//     }
//     if (aArr[bArr.length - 1 - j] !== bArr[bArr.length - 1 - j]) {
//       newArr3[bArr.length - 1 - j] = bArr[bArr.length - 1 - j];
//       res.add(newArr3.join(''));
//     }
//   }

//   const newArr4 = [...aArr];
//   for (let j = 0; j < bArr.length; j++) {
//     if (aArr[j] !== bArr[j]) {
//       newArr4[j] = bArr[j];
//       res.add(newArr4.join(''));
//     }
//     if (aArr[bArr.length - 1 - j] !== bArr[bArr.length - 1 - j]) {
//       newArr4[bArr.length - 1 - j] = bArr[bArr.length - 1 - j];
//       res.add(newArr4.join(''));
//     }
//   }


//   for (let j = 0; j < bArr.length; j++) {
//     const newArr5 = [...aArr];
//     if (aArr[j] !== bArr[j]) {
//       newArr5[j] = bArr[j];
//     }
//     if (aArr[bArr.length - 1 - j] !== bArr[bArr.length - 1 - j]) {
//       newArr5[bArr.length - 1 - j] = bArr[bArr.length - 1 - j];
//     }
//     res.add(newArr5.join(''));
//   }

//   return res;
// }

// const r1 = getAllPossibleStringMerges('abc', 'bcd');
// console.log('r1: ', r1);


// V1
// function countLetters(letter, P, Q) {
//     if (P.length === 0) {
//         return [new Set([letter])];
//     }
//     console.log('P: ', P);
//     console.log('Q: ', Q);

//     const letterP = P[0];
//     const letterQ = Q[0];

//     const groupsP = countLetters(letterP, P.slice(1), Q.slice(1));
//     const groupsQ = countLetters(letterQ, P.slice(1), Q.slice(1));

//     console.log('groupsP: ', groupsP);
//     console.log('groupsQ: ', groupsQ);

//     groupsP.push(...groupsQ);

//     for (const group of groupsP) {
//         if (!group.has(letter)) {
//             group.add(letter);
//         }
//     }

//     return groupsP;
// }

// function solution(P, Q) {
//     const groupsP = countLetters(P[0], P.slice(1), Q.slice(1));
//     const groupsQ = countLetters(Q[0], P.slice(1), Q.slice(1));

//     console.log('solution groupsP: ', groupsP);
//     console.log('solution groupsQ: ', groupsQ);
//     const minP = Math.min(...groupsP.map(group => group.size));
//     const minQ = Math.min(...groupsQ.map(group => group.size));

//     return Math.min(minP, minQ);
// }

// V2
// function countLetters(letter, P, Q) {
//     console.log('P: ', P);
//     console.log('Q: ', Q);
//     if (P.length === 0) {
//         return [letter];
//     }

//     const letterP = P[0];
//     const letterQ = Q[0];

//     let groupsP = countLetters(letterP, P.slice(1), Q.slice(1));
//     let groupsQ = countLetters(letterQ, P.slice(1), Q.slice(1));

//     groupsP.push(...groupsQ);
//     groupsP = groupsP.map(el => {
//         if (!el.includes(letter)) {
//             return `${el}${letter}`;
//         }
//         return el;
//     })
    
//     return groupsP;
// }

// function solution(P, Q) {
//     const groupsP = countLetters(P[0], P.slice(1), Q.slice(1));
//     const groupsQ = countLetters(Q[0], P.slice(1), Q.slice(1));

//     const minP = Math.min(...groupsP.map(group => group.length));
//     const minQ = Math.min(...groupsQ.map(group => group.length));
//     return Math.min(minP, minQ);
// }

// V3
const min = "a".charCodeAt(0);
const max = "z".charCodeAt(0); 
function solution(P, Q) {
	const N = P.length;
	
	const iP = [];
	const iQ = [];
	
	let counts = 0;
	const useds = [];
	
	for(let i=0; i<N; i++) {
		const p = P[i].charCodeAt(0) - min;
		const q = Q[i].charCodeAt(0) - min;
		if(p === q) {
			if(!useds[p]) {
				counts++;
				useds[p] = 1;
			}
			continue;
		}
		
		iP.push(p);
		iQ.push(q);
	}
	
	const nP = [];
	const nQ = [];
	
	for(let k=0; k<iP.length; k++) {
		const p = iP[k];
		const q = iQ[k];
		
		if(useds[p] || useds[q]) {
			continue;
		}
		
		nP.push(p);
		nQ.push(q);
	}
	
	return counts + dSolution(nP, nQ, 0);	
}


function nextI(P, Q, i) {
	let j = i;
	
	while(j <= max && (!P.some(p => p==j) && !Q.some(q => q==j))) {
		j++;
	}
	
	return j;
}

function dSolution(P, Q, i) {
	if(P.length == 0) { return 0; }
	
	let j = nextI(P, Q, i);
		
	let nP = [];
	let nQ = [];
	for(let k=0; k<P.length; k++) {
		const p = P[k];
		const q = Q[k];
		
		if(p == j || q == j) {
			continue;
		}
		
		nP.push(p);
		nQ.push(q);
	}
	
	const m1 = 1 + dSolution(nP, nQ, j+1);
	
	const useds = [];
	let counts = 0;
	
	for(let k=0; k<P.length; k++) {
		const p = P[k];
		const q = Q[k];
		
		if(p == j) {
			if(!useds[q]) {
				counts++;
				useds[q] = 1;
			}
			
			continue;
		}
		
		if(q == j) {
			if(!useds[p]) {
				counts++;
				useds[p] = 1;
			}
			
			continue;
		}
	}
	
	nP = [];
	nQ = [];
	for(let k=0; k<P.length; k++) {
		const p = P[k];
		const q = Q[k];
		
		if(useds[p] || useds[q]) {
			continue;
		}
		
		nP.push(p);
		nQ.push(q);
	}
	
	const m2 = counts + dSolution(nP, nQ, j+1);
	
	return Math.min(m1, m2);
}

const TestCases = [
    // ['adabca', 'cbdcdb', 3],
    //  [ "axxz", "yzwy", 2 ],
     [ "ad", "bc", 2 ],
    //  [ "abc", "bcd", 2 ],
    //  [ "bacad", "abada", 1 ],
    //  [ "amz", "amz", 3 ],
    //  [ "aaadb", "bbbce", 2 ],
    //  ['dddabc', 'abcefg', 3], 
    //  ['bsqafgiulewghfiaaplskfhjkldsafjhlkafgsdjhluhefdiuahfulidhg', 
    //   'bsdafgiulewghficahlskfhjklzfafjhlkafgsdjwluhefdiurhfueidhg', 14] 
];

for (const test of TestCases) {
    const result = solution(test[0], test[1]);
    const expected = test[2];

    if (result === expected) {
        console.log("OK!");
    } else {
        console.log("ERROR! (expected: " + expected + ")" + " (result: " + result + ")");
    }
}