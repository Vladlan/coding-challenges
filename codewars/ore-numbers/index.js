function isOre(n){
  const numerators = [];
  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      numerators.push(n / i)
    }
  }
  const numersSum = numerators.reduce((accum, curr) => accum + curr, 0);
  const sum = numersSum/n;
  return Number.isInteger(numerators.length / sum);
}
module.exports = {
  isOre,
};
