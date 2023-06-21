/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  const primes = [];

  for (let i = 2; i < n; i++) {
    primes[i] = true;
  }

  for (let i = 2; i * i <= n; i++) {
    if (!primes[i]) continue;
    for (let j = i * i; j <= n; j += i) {
      primes[j] = false;
    }
  }

  return primes.filter((prime) => prime === true).length;
};

const num = 10;
console.log(countPrimes(num));
