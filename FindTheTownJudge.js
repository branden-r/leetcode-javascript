/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
  // this function handles almost everything in the for loop
  // however, with an empty trust array, the for loop cannot iterate
  // if the trust array is empty, but we only have one person, that person is the judge!
  // if the trust array is empty, but we have more than one person, then nobody is the judge
  if (n === 1) return 1;
  // we will use this to track how many people a person trusts, and how many people trust that person
  const reputation = Array(n).fill(1);
  // we will use this to track potential judges
  // by the end of the for loop, this will contain zero or one people
  const judges = new Set();
  for (t of trust) {
    // a person's reputation is decremented every time they trust someone
    --reputation[t[0] - 1];
    // a person who trusts someone else cannot be the judge
    judges.delete(t[0]);
    // a person's reputation is incremented every time they are trusted
    // the judge must be trusted by everyone else (n - 1 people)
    // reputation starts at one (1 + n - 1 = n)
    // if a person's reputation reaches n, they might be a judge
    if (++reputation[t[1] - 1] === n) judges.add(t[1]);
  }
  // return the judge if we found one
  return judges.size === 1 ? [...judges][0] : -1;
};
