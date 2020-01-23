// const oddsPercentage = (percentage, margin) => {
//   return odds;
// };

// oddsPercentage();

const bookmakerMargin = (odds1, odds2) => {
  let pickOne = 1 / odds1;
  let pickTwo = 1 / odds2;
  let margin = pickOne + pickTwo;

  return ((margin - 1) * 100).toFixed(2);
};

console.log(bookmakerMargin(1.22, 4.0));
