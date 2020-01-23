const oddsPercentage = odds => {
  let percentage = 1 / odds;

  return (percentage * 100).toFixed(2);
};

console.log(oddsPercentage(1.22, 4.0));

const bookmakerMargin = (odds1, odds2) => {
  let margin = 1 / odds1 + 1 / odds2;

  return ((margin - 1) * 100).toFixed(2);
};

console.log(bookmakerMargin(1.22, 4.0));
