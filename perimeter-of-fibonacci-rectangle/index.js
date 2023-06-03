function perimeter(n) {
  if (n === 0) return BigInt(4);
  const fibSeq = getLastTwoFibSequenceNums(n);
  const h = fibSeq[0] + fibSeq[1];
  const w = fibSeq[1];
  return BigInt(BigInt(2) * (h + w));
}

function getLastTwoFibSequenceNums(n) {
  const sequence = [BigInt(1), BigInt(1)];
  for (let i = 2; i <= n; i++) {
    const prev = sequence[1]
    const newN = sequence[0] + sequence[1];
    sequence[0] = prev;
    sequence[1] = newN;
  }
  return sequence;
}

module.exports = {
  perimeter,
};
